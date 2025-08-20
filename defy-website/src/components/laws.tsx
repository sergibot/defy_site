import { useState } from "react";
import SKLaw from "./laws/southkorea";
import AlabamaLaw from "./laws/alabama";
import CaliLaw from "./laws/california";
import FloridaLaw from "./laws/florida";
import GeorgiaLaw from "./laws/georgia";
import HawaiiLaw from "./laws/hawaii";
import IllinoisLaw from "./laws/illinois";
import LouisianaLaw from "./laws/louisiana";
import MinnesotaLaw from "./laws/minnesota";
import NYLaw from "./laws/newyork";
import SDakotaLaw from "./laws/southdakota";
import TexasLaw from "./laws/texas";
import UtahLaw from "./laws/utah";
import VirginiaLaw from "./laws/virginia";
import EngLaw from "./laws/engwales";
import ScotlandLaw from "./laws/scotland";
import RoILaw from "./laws/roi";
import AULaw from "./laws/australia";
import AUNSWLaw from "./laws/au_nsw";
import AUQULaw from "./laws/au_queensland";
import AUWALaw from "./laws/au_westernau";
import GermanyLaw from "./laws/germany";

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
          <option value="AU">Australia</option>
          <option value="AU_NSW">Australia - New South Wales</option>
          <option value="AU_Qu">Australia - Queensland</option>
          <option value="AU_WA">Australia - Western Australia</option>
          <option value="UK_EngWal">UK - England and Wales</option>
          <option value="UK_Scot">UK - Scotland</option>
          <option value="RoI">Republic of Ireland</option>
          <option value="Germany">Germany</option>
          <option value="USA_Alabama">USA - Alabama</option>
          <option value="USA_Cali">USA - California</option>
          <option value="USA_Flo">USA - Florida</option>
          <option value="USA_Geo">USA - Georgia</option>
          <option value="USA_Haw">USA - Hawaii</option>
          <option value="USA_Ill">USA - Illinois</option>
          <option value="USA_Lou">USA - Louisiana</option>
          <option value="USA_Minn">USA - Minnesota</option>
          <option value="USA_NY">USA - New York</option>
          <option value="USA_SD">USA - South Dakota</option>
          <option value="USA_Tex">USA - Texas</option>
          <option value="USA_Utah">USA - Utah</option>
          <option value="USA_Virg">USA - Virginia</option>
          <option value="SKorea">South Korea</option>
        </select>
      </div>
      <div
        style={{
          height: "94%",
          width: "100%",
          display: "flex",
          flexDirection:'column',
        }}
      >
        {nation == "USA_Alabama" ? <AlabamaLaw /> : null}
        {nation == "USA_Cali" ? <CaliLaw /> : null}
        {nation == "USA_Flo" ? <FloridaLaw /> : null}
        {nation == "USA_Geo" ? <GeorgiaLaw /> : null}
        {nation == "USA_Haw" ? <HawaiiLaw /> : null}
        {nation == "USA_Ill" ? <IllinoisLaw /> : null}
        {nation == "USA_Lou" ? <LouisianaLaw /> : null}
        {nation == "USA_Minn" ? <MinnesotaLaw /> : null}
        {nation == "USA_NY" ? <NYLaw /> : null}
        {nation == "USA_SD" ? <SDakotaLaw /> : null}
        {nation == "USA_Tex" ? <TexasLaw /> : null}
        {nation == "USA_Utah" ? <UtahLaw /> : null}
        {nation == "USA_Virg" ? <VirginiaLaw /> : null}
        {nation == "AU" ? <AULaw /> : null}
        {nation == "AU_NSW" ? <AUNSWLaw /> : null}
        {nation == "AU_Qu" ? <AUQULaw /> : null}
        {nation == "AU_WA" ? <AUWALaw /> : null}
        {nation == "UK_EngWal" ? <EngLaw /> : null}
        {nation == "UK_Scot" ? <ScotlandLaw /> : null}
        {nation == "RoI" ? <RoILaw /> : null}
        {nation == "Germany" ? <GermanyLaw /> : null}
        {nation == "SKorea" ? <SKLaw /> : null}
      </div>
    </div>
  );
}

export default Laws;
