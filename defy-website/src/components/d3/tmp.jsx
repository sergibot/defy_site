// https://reactviz.com/scatterplots/responsive-resize-observer
// https://www.youtube.com/watch?v=2LhoCfjm8R4
// https://2019.wattenberger.com/blog/react-and-d3

import * as React from 'react' // v17.0.2
import { extent } from 'd3-array' // v^2.12.1
import { csvParse } from 'd3-dsv' // v^2.0.0
import { format } from 'd3-format' // v^2.0.0
import { lab } from 'd3-color' // v^2.0.0
import { scaleLinear, scaleSequential, scaleSqrt } from 'd3-scale' // v^3.2.4
import { interpolateCividis } from 'd3-scale-chromatic' // v^2.0.0
import { pointer } from 'd3-selection' // v^2.0.0
import { groupBy, mean, n, summarize, tidy } from '@tidyjs/tidy' // v^2.1.0

const ContainerResizeObserver = ({}) => {
  // we call a custom hook to measure our container and pass
  // the measured width and height in as props.
  const ref = React.useRef(null)
  const { width, height } = useResizeObserver(ref)

  return (
    <div
      className="border border-dashed border-cyan-500"
      ref={ref}
      style={{ height: 400 }}
    >
      <Scatterplot width={width} height={height} />
    </div>
  )
}

/**
 * Custom hook that uses a ResizeObserver to detect when the container
 * changes size. This may require a polyfill to work correctly.
 */
const useResizeObserver = (ref) => {
  const [{ width, height }, setWidthHeight] = React.useState({
    width: 0,
    height: 0,
  })

  React.useLayoutEffect(() => {
    const divNode = ref.current
    if (divNode == null) return

    // create a resize observer
    const observer = new ResizeObserver((entries) => {
      if (!entries.length) return

      // on resize, update our internal state with the latest values
      const { width, height } = entries[0].contentRect
      setWidthHeight({ width, height })
    })

    // observe our container node
    observer.observe(divNode)

    // cleanup
    return () => {
      observer.unobserve(divNode)
    }
  }, [ref])

  return { width, height }
}

export default ContainerResizeObserver

const Scatterplot = ({ width = 650, height = 400 }) => {
  const data = useMovieData()

  const margin = { top: 10, right: 10, bottom: 30, left: 50 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  // read from pre-defined metric/dimension ("fields") bundles
  const xField = fields.revenue
  const yField = fields.vote_average
  const rField = fields.count
  const colorField = fields.count
  const labelField = fields.primary_genre

  // optionally pull out values into local variables
  const { accessor: xAccessor, title: xTitle, formatter: xFormatter } = xField
  const { accessor: yAccessor, title: yTitle, formatter: yFormatter } = yField
  const { accessor: rAccessor } = rField
  const { accessor: colorAccessor } = colorField

  // memoize creating our scales so we can optimize re-renders with React.memo
  // (e.g. <Points> only re-renders when its props change)
  const { xScale, yScale, rScale, colorScale } = React.useMemo(() => {
    if (!data) return {}
    const xExtent = extent(data, xAccessor)
    const xDomain = padExtent(xExtent, 0.125)
    const yExtent = extent(data, yAccessor)
    const yDomain = padExtent(yExtent, 0.125)
    const rExtent = extent(data, rAccessor)
    const colorExtent = extent(data, colorAccessor)

    const xScale = scaleLinear().domain(xDomain).range([0, innerWidth])
    const yScale = scaleLinear().domain(yDomain).range([innerHeight, 0])
    const rScale = scaleSqrt().domain(rExtent).range([2, 16])
    const colorScale = scaleSequential(interpolateCividis).domain(colorExtent)

    return {
      xScale,
      yScale,
      rScale,
      colorScale,
    }
  }, [
    colorAccessor,
    data,
    innerHeight,
    innerWidth,
    rAccessor,
    xAccessor,
    yAccessor,
  ])

  // interaction setup
  const interactionRef = React.useRef(null)
  const hoverPoint = useClosestHoverPoint({
    interactionRef,
    data,
    xScale,
    xAccessor,
    yScale,
    yAccessor,
    radius: 60,
  })

  if (!data) return <div style={{ width, height }} />

  return (
    <div style={{ width }} className="relative">
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          <XAxis
            xScale={xScale}
            formatter={xFormatter}
            title={xTitle}
            innerHeight={innerHeight}
            gridLineHeight={innerHeight}
          />

          <YAxis
            gridLineWidth={innerWidth}
            yScale={yScale}
            formatter={yFormatter}
            title={yTitle}
          />
          <XAxisTitle
            title={xTitle}
            xScale={xScale}
            innerHeight={innerHeight}
          />
          <YAxisTitle title={yTitle} />
          <Points
            data={data}
            xScale={xScale}
            xAccessor={xAccessor}
            yScale={yScale}
            yAccessor={yAccessor}
            rScale={rScale}
            rAccessor={rAccessor}
            colorScale={colorScale}
            colorAccessor={colorAccessor}
          />
          <HoverPoint
            labelField={labelField}
            xScale={xScale}
            xField={xField}
            yScale={yScale}
            yField={yField}
            rScale={rScale}
            rField={rField}
            colorScale={colorScale}
            colorField={colorField}
            hoverPoint={hoverPoint}
          />

          <rect
            /* this node absorbs all mouse events */
            ref={interactionRef}
            width={innerWidth}
            height={innerHeight}
            x={0}
            y={0}
            fill="tomato"
            fillOpacity={0}
          />
        </g>
      </svg>
    </div>
  )
}

function padExtent([min, max], paddingFactor) {
  const delta = Math.abs(max - min)
  const padding = delta * paddingFactor

  return [min - padding, max + padding]
  // option to treat [0, 1] as a special case
  // return [min === 0 ? 0 : min - padding, max === 1 ? 1 : max + padding]
}

/**
 * Custom hook to get the closest point to the mouse based on
 * iterating through all points. Supports a max distance from
 * the mouse via the radius prop. You must provide an ref to a
 * DOM node that can be used to capture the mouse, typically a
 * <rect> or <g> that covers the entire visualization.
 */
function useClosestHoverPoint({
  interactionRef,
  data,
  xScale,
  xAccessor,
  yScale,
  yAccessor,
  radius,
}) {
  // capture our hover point or undefined if none
  const [hoverPoint, setHoverPoint] = React.useState(undefined)

  // we can throttle our updates by using requestAnimationFrame (raf)
  const rafRef = React.useRef(null)

  React.useEffect(() => {
    const interactionRect = interactionRef.current
    if (interactionRect == null) return

    const handleMouseMove = (evt) => {
      // here we use d3-selection's pointer. You could also try react-use useMouse.
      const [mouseX, mouseY] = pointer(evt)

      // if we already had a pending update, cancel it in favour of this one
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        // naive iterate over all points method
        const newHoverPoint = findClosestPoint({
          data,
          xScale,
          xAccessor,
          yScale,
          yAccessor,
          radius,
          pixelX: mouseX,
          pixelY: mouseY,
        })

        setHoverPoint(newHoverPoint)
      })
    }
    interactionRect.addEventListener('mousemove', handleMouseMove)

    // make sure we handle when the mouse leaves the interaction area to remove
    // our active hover point
    const handleMouseLeave = () => setHoverPoint(undefined)
    interactionRect.addEventListener('mouseleave', handleMouseLeave)

    // cleanup our listeners
    return () => {
      interactionRect.removeEventListener('mousemove', handleMouseMove)
      interactionRect.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [interactionRef, data, xScale, yScale, radius, xAccessor, yAccessor])

  return hoverPoint
}

// simple algorithm for finding the nearest point. uses fancy Math.hypot
// to compute distance between a target (pixelX, pixelY) and each point.
// supports a max distance via the radius prop.
function findClosestPoint({
  data,
  xScale,
  yScale,
  xAccessor,
  yAccessor,
  pixelX,
  pixelY,
  radius,
}) {
  let closestPoint
  let minDistance = Infinity
  for (const d of data) {
    const pointPixelX = xScale(xAccessor(d))
    const pointPixelY = yScale(yAccessor(d))
    const distance = Math.hypot(pointPixelX - pixelX, pointPixelY - pixelY)
    if (distance < minDistance && radius != null && distance < radius) {
      closestPoint = d
      minDistance = distance
    }
  }

  return closestPoint
}

/** draws our hover marks: a crosshair + point + basic tooltip */
const HoverPoint = ({
  hoverPoint,
  xScale,
  xField,
  yField,
  yScale,
  rScale,
  rField,
  labelField,
  color = 'cyan',
}) => {
  if (!hoverPoint) return null

  const d = hoverPoint
  const x = xScale(xField.accessor(d))
  const y = yScale(yField.accessor(d))
  const r = rScale?.(rField.accessor(d))
  const darkerColor = darker(color)

  const [xPixelMin, xPixelMax] = xScale.range()
  const [yPixelMin, yPixelMax] = yScale.range()

  return (
    <g className="pointer-events-none">
      <g data-testid="xCrosshair">
        <line
          x1={xPixelMin}
          x2={xPixelMax}
          y1={y}
          y2={y}
          stroke="#fff"
          strokeWidth={4}
        />
        <line
          x1={xPixelMin}
          x2={xPixelMax}
          y1={y}
          y2={y}
          stroke={darkerColor}
          strokeWidth={1}
        />
      </g>
      <g data-testid="yCrosshair">
        <line
          y1={yPixelMin}
          y2={yPixelMax}
          x1={x}
          x2={x}
          stroke="#fff"
          strokeWidth={4}
        />
        <line
          y1={yPixelMin}
          y2={yPixelMax}
          x1={x}
          x2={x}
          stroke={darkerColor}
          strokeWidth={1}
        />
      </g>
      <circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth={4} />
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={color}
        stroke={darkerColor}
        strokeWidth={2}
      />
      <g transform={`translate(${x + 8} ${y + 4})`}>
        <OutlinedSvgText
          stroke="#fff"
          strokeWidth={5}
          className="text-sm font-bold"
          dy="0.8em"
        >
          {labelField.accessor(d)}
        </OutlinedSvgText>
        <OutlinedSvgText
          stroke="#fff"
          strokeWidth={5}
          className="text-xs"
          dy="0.8em"
          y={16}
        >
          {`${xField.title}: ${xField.formatter(xField.accessor(d))}`}
        </OutlinedSvgText>
        <OutlinedSvgText
          stroke="#fff"
          strokeWidth={5}
          className="text-xs"
          dy="0.8em"
          y={30}
        >
          {`${yField.title}: ${yField.formatter(yField.accessor(d))}`}
        </OutlinedSvgText>
      </g>
    </g>
  )
}

/**
 * A memoized component that renders all our points, but only re-renders
 * when its props change.
 */
const Points = React.memo(
  ({
    data,
    xScale,
    xAccessor,
    yAccessor,
    yScale,
    rScale,
    rAccessor,
    radius = 8,
    colorScale,
    colorAccessor,
    defaultColor = 'tomato',
    onHover,
  }) => {
    return (
      <g data-testid="Points">
        {data.map((d, i) => {
          // const x = (width * (d.revenue - minRevenue)) / (maxRevenue - minRevenue)
          const x = xScale(xAccessor(d))
          const y = yScale(yAccessor(d))
          const r = rScale?.(rAccessor(d)) ?? radius
          const color = colorScale?.(colorAccessor(d)) ?? defaultColor

          return (
            <circle
              key={d.id ?? i}
              r={r}
              cx={x}
              cy={y}
              fill={color}
              stroke={darker(color)}
              strokeWidth={1}
              strokeOpacity={1}
              fillOpacity={0.5}
              onClick={() => console.log(d)}
              onMouseEnter={onHover ? () => onHover(d) : null}
              onMouseLeave={onHover ? () => onHover(undefined) : null}
            />
          )
        })}
      </g>
    )
  }
)

function isDarkColor(color) {
  const labColor = lab(color)
  return labColor.l < 75
}

/** dynamically create a darker color */
function darker(color, factor = 0.85) {
  const labColor = lab(color)
  labColor.l *= factor

  // rgb doesn't correspond to visual perception, but is
  // easy for computers
  // const rgbColor = rgb(color)
  // rgbColor.r *= 0.8
  // rgbColor.g *= 0.8
  // rgbColor.b *= 0.8

  // rgb(100, 50, 50);
  // rgb(75, 25, 25); // is this half has light perceptually?
  return labColor.toString()
}

/** fancier way of getting a nice svg text stroke */
const OutlinedSvgText = ({ stroke, strokeWidth, children, ...other }) => {
  return (
    <>
      <text stroke={stroke} strokeWidth={strokeWidth} {...other}>
        {children}
      </text>
      <text {...other}>{children}</text>
    </>
  )
}

/** determine number of ticks based on space available  */
function numTicksForPixels(pixelsAvailable, pixelsPerTick = 70) {
  return Math.floor(Math.abs(pixelsAvailable) / pixelsPerTick)
}

const YAxisTitle = ({ title }) => {
  return (
    <OutlinedSvgText
      stroke="#fff"
      strokeWidth={2.5}
      dx={4}
      dy="0.8em"
      fill="var(--gray-600)"
      className="font-semibold text-2xs"
    >
      {title}
    </OutlinedSvgText>
  )
}

/** Y-axis with title and grid lines */
const YAxis = ({ yScale, formatter, gridLineWidth }) => {
  const [yMin, yMax] = yScale.range()
  const ticks = yScale.ticks(numTicksForPixels(yMax - yMin, 50))

  return (
    <g data-testid="YAxis">
      <line x1={0} x2={0} y1={yMin} y2={yMax} stroke="var(--gray-400)" />
      {ticks.map((tick) => {
        const y = yScale(tick)
        return (
          <g key={tick} transform={`translate(0 ${y})`}>
            <text
              dy="0.34em"
              textAnchor="end"
              dx={-12}
              fill="currentColor"
              className="text-gray-400 text-2xs"
            >
              {formatter(tick)}
            </text>
            <line
              x1={0}
              x2={-8}
              stroke="var(--gray-300)"
              data-testid="tickmark"
            />
            {gridLineWidth ? (
              <line
                x1={0}
                x2={gridLineWidth}
                stroke="var(--gray-200)"
                strokeOpacity={0.8}
                data-testid="gridline"
              />
            ) : null}
          </g>
        )
      })}
    </g>
  )
}

const XAxisTitle = ({ xScale, title, innerHeight }) => {
  const [, xMax] = xScale.range()
  return (
    <text
      x={xMax}
      y={innerHeight}
      textAnchor="end"
      dy={-4}
      fill="var(--gray-600)"
      className="font-semibold text-2xs text-shadow-white-stroke"
    >
      {title}
    </text>
  )
}

/** X-axis with title and grid lines */
const XAxis = ({ xScale, title, formatter, innerHeight, gridLineHeight }) => {
  const [xMin, xMax] = xScale.range()
  const ticks = xScale.ticks(numTicksForPixels(xMax - xMin))

  return (
    <g data-testid="XAxis" transform={`translate(0 ${innerHeight})`}>
      <line x1={xMin} x2={xMax} y1={0} y2={0} stroke="var(--gray-400)" />
      {ticks.map((tick) => {
        const x = xScale(tick)
        return (
          <g key={tick} transform={`translate(${x} 0)`}>
            <text
              y={10}
              dy="0.8em"
              textAnchor="middle"
              fill="currentColor"
              className="text-gray-400 text-2xs"
            >
              {formatter(tick)}
            </text>
            <line
              y1={0}
              y2={8}
              stroke="var(--gray-300)"
              data-testid="tickmark"
            />
            {gridLineHeight ? (
              <line
                y1={0}
                y2={-gridLineHeight}
                stroke="var(--gray-200)"
                strokeOpacity={0.8}
                data-testid="gridline"
              />
            ) : null}
          </g>
        )
      })}
    </g>
  )
}

// fetch our data from CSV and translate to JSON
const useMovieData = () => {
  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    fetch('/datasets/tmp.csv')
      .then((response) => response.text())
      .then((csvString) => {
        const data = csvParse(csvString, (row) => {
          return {
            budget: +row.budget,
            vote_average: +row.vote_average,
            vote_count: +row.vote_count,
            genres: JSON.parse(row.genres),
            primary_genre: JSON.parse(row.genres)[0]?.name,
            revenue: +row.revenue,
            original_title: row.original_title,
          }
        }).filter((d) => d.revenue > 0)
        console.log('[data]', data)

        // group by genre and summarize
        const groupedData = tidy(
          data,
          groupBy(
            ['primary_genre'],
            [
              summarize({
                revenue: mean('revenue'),
                vote_average: mean('vote_average'),
                count: n(),
              }),
            ]
          )
        )

        console.log('groupedData', groupedData)

        setData(groupedData)
      })
  }, [])

  return data
}

// very lazy large number money formatter ($1.5M, $1.65B etc)
const bigMoneyFormat = (value) => {
  if (value == null) return value
  const formatted = format('$~s')(value)
  return formatted.replace(/G$/, 'B')
}

// metrics (numeric) + dimensions (non-numeric) = fields
const fields = {
  revenue: {
    accessor: (d) => d.revenue,
    title: 'Revenue',
    formatter: bigMoneyFormat,
  },
  budget: {
    accessor: (d) => d.budget,
    title: 'Budget',
    formatter: bigMoneyFormat,
  },
  vote_average: {
    accessor: (d) => d.vote_average,
    title: 'Vote Average out of 10',
    formatter: format('.1f'),
  },
  vote_count: {
    accessor: (d) => d.vote_count,
    title: 'Vote Count',
    formatter: format('.1f'),
  },
  primary_genre: {
    accessor: (d) => d.primary_genre,
    title: 'Primary Genre',
    formatter: (d) => d,
  },
  original_title: {
    accessor: (d) => d.original_title,
    title: 'Original Title',
    formatter: (d) => d,
  },

  count: {
    accessor: (d) => d.count,
    title: 'Num Movies in Group',
    formatter: (d) => d,
  },
}
