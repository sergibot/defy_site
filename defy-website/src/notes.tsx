

function ProductOptions({option}: {option: VariantOption}) {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}} key={option.name}>
        <h5
          className="h-full"
          style={{
            fontFamily: 'WorkSansLight',
            flex: '1,1,25px',
            paddingRight: '1em',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            paddingTop: '0.5rem',
          }}
        >
          {option.name}
        </h5>
        <div