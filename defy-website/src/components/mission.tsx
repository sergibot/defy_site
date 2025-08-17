import GgTrends from "../assets/jsx_of_svg/gg_trends";
import DfiaSites from "../assets/jsx_of_svg/dfia_sites";

// https://dl.acm.org/doi/pdf/10.1145/3613904.3642382
// ^ may-june 2023

// // Aggregated across countries,
// 2.2% (95% CI = 1.8% − 2.6%) of respondents reported some form of victimization. This included:
// 1.2% (95% CI = 0.9% − 1.5%) of respondents who reported that someone had created deepfake pornography content of them;
// 1.3% (95% CI = 1.0% − 1.6%) who reported that someone had posted or sent deepfake pornography content of them; and
// 1.2% (95% CI = 0.9% − 1.5%) who reported that someone had threatened to post or send deepfake pornography content of them.

// Aggregating across behavior types (creating, posting, threatening to post), self-reported deepfake pornography perpetration was rare (
// 1.8%, 95% CI = 1.4% − 2.2%)
// Aggregating across countries,
// 1.0% (95% CI = 0.8%−1.4%) of respondents indicated creating deepfake pornography,
// 1.0% (95% CI = 0.8% − 1.3%) reported threatening to post, send, or share deepfake pornography, and
// 0.7% (95% CI = 0.5% − 0.9%) reported actually posting, sending, or sharing deepfake pornography content.

function Mission() {
  return (
    <div>
      <div id="graph_container" style={{ display: "flex" }}>
        <div
          style={{
            // marginRight:'1em',
            height: "75vh",
            width: "auto",
            // marginBottom: "1em",
          }}
        >
          <DfiaSites />
        </div>
        <div
          style={{
            marginBottom: "1em",
            marginLeft: "1em",
            height: "70vh",
            width: "auto",
          }}
        >
          <GgTrends />
        </div>
      </div>

      <div className="banner">
        <h2>...Unmonitored, except by DefyAbuse.org</h2>
      </div>
      <div className="copy">
        <p>
          Our research shows across time that the quantity of websites enabling
          DFIAM creation and distribution has ballooned since the above survey
          was conducted. Our graph for this data, below, echoes the Google
          Trends data for each DFIA 'Harm Sphere': 'deepfake' faceswap DFIA,
          'nudify' bodyswap DFIA, and 'Generative AI' DFIA.{" "}
        </p>

        <br />
        <p>
          {" "}
          As is clearly visible in either graph, the 'Generative AI' type of
          Deepfake Image-based sexual Abuse has dwarved both the original
          'deepfake' kind of DFIA in which victims' faces were 'faceswapped'
          onto pornographic imagery, and the 'nudify' or 'deepnude' kind of DFIA
          in which victims' clothed bodies in photographs were replaced with
          nude versions.
        </p>

        <br />

        <p>
          In our graph, the dashed line shows the number of website still online
          at any given time: this number seems to have stabilized around 1,300 -
          1,400 websites, though growth is still apparent and will likely reveal
          itself in our next annual analysis.
        </p>
      </div>
    </div>
  );
}

export default Mission;
