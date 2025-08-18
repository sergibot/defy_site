import { useState } from "react";
import UkLaw from "./laws/uk";
import AlabamaLaw from "./laws/alabama";
import CaliLaw from "./laws/california";
import FloridaLaw from "./laws/florida";
import GeorgiaLaw from "./laws/georgia";

function Laws() {
  const [nation, setNation] = useState("USA_Alabama");

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        // backgroundColor: "lightcoral",
      }}
    >
      <div
        style={{
          height: "6%",
          width: "100%",
          // height: "60px",
          // backgroundColor: "lightcoral",
          display: "flex",
          placeContent: "center",
          marginTop: "0.7em",
          placeItems: "center",
        }}
      >
        <label htmlFor="laws" style={{ marginRight: "1em" }}>
          Country/State:
        </label>
        <select
          name="laws"
          id="laws"
          value={nation}
          onChange={(e) => setNation(e.target.value)}
          className="browser-default custom-select"
        >
          <option value="UK">United Kingdom</option>
          <option value="USA_Alabama">USA - Alabama</option>
          <option value="USA_Cali">USA - California</option>
          <option value="USA_Flo">USA - Florida</option>
          <option value="USA_Geo">USA - Georgia</option>
        </select>
      </div>
      <div
        style={{
          // height: `calc(100%-60px)`,
          // height: "100%",
          height: "94%",
          width: "100%",
          // backgroundColor: "blue",
          display: "flex",
          flexDirection:'column',
          // placeContent: "center",
          // placeItems: "center",
          // overflowY: "scroll",
        }}
      >
        {nation == "UK" ? <UkLaw /> : null}
        {nation == "USA_Alabama" ? <AlabamaLaw /> : null}
        {nation == "USA_Cali" ? <CaliLaw /> : null}
        {nation == "USA_Flo" ? <FloridaLaw /> : null}
        {nation == "USA_Geo" ? <GeorgiaLaw /> : null}
      </div>
    </div>
  );
}

export default Laws;
