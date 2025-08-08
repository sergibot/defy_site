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

function Mission(importedFunc) {
  function TableFromStudy() {
    return (
      <>
        <table style={{ width: "100%", marginTop: "1em", textAlign: "center" }}>
          <tr>
            <th>Country</th>
            <th colSpan={2} style={{ textAlign: "left" }}>
              Victims
            </th>
            <th colSpan={2} style={{ textAlign: "left" }}>
              Perpetrators
            </th>
            <th>Population</th>
          </tr>
          <tr>
            <th>(age 18+)</th>
            <th>%</th>
            <th>N</th>
            <th>%</th>
            <th>N</th>
            <th></th>
          </tr>
          <tr>
            <td>Australia</td>
            <td>3.7</td>
            <td>790,213</td>
            <td>2.4</td>
            <td>512,571</td>
            <td>21,357,108</td>
          </tr>
          <tr>
            <td>South Korea</td>
            <td>3.1</td>
            <td>1,909,439</td>
            <td>1.2</td>
            <td>739,138</td>
            <td>61,594,800</td>
          </tr>
          <tr>
            <td>Mexico</td>
            <td>2.9</td>
            <td>2,545,216</td>
            <td>1.2</td>
            <td>1,053,193</td>
            <td>87,766,066</td>
          </tr>
          <tr>
            <td>USA</td>
            <td>2.3</td>
            <td>6,027,910</td>
            <td>2.6</td>
            <td>6,814,159</td>
            <td>262,083,034</td>
          </tr>
          <tr>
            <td>France</td>
            <td>1.6</td>
            <td>829,985</td>
            <td>1.1</td>
            <td>570,615</td>
            <td>51,874,048</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>1.4</td>
            <td>560,100</td>
            <td>0.8</td>
            <td>320,057</td>
            <td>40,007,177</td>
          </tr>
          <tr>
            <td>Netherlands</td>
            <td>1.0</td>
            <td>141,642</td>
            <td>0.4</td>
            <td>56,657</td>
            <td>14,164,193</td>
          </tr>
          <tr>
            <td>Denmark</td>
            <td>1.0</td>
            <td>48,518</td>
            <td>0.7</td>
            <td>33,963</td>
            <td>4,851,818</td>
          </tr>
          <tr>
            <td>Poland</td>
            <td>0.9</td>
            <td>277,420</td>
            <td>0.5</td>
            <td>154,122</td>
            <td>30,824,437</td>
          </tr>
          <tr>
            <td>Belgium</td>
            <td>0.7</td>
            <td>64,464</td>
            <td>0.3</td>
            <td>27,627</td>
            <td>9,209,116</td>
          </tr>
          <tr>
            <td>Above Totalled</td>
            <td>2.2</td>
            <td>13,194,907</td>
            <td>1.8</td>
            <td>10,282,101</td>
            <td>583,731,797</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: "#eeeeee" }}>Globe (age 15+)</td>
            <td>2.2</td>
            <td style={{ backgroundColor: "#eeeeee" }}>136,310,574</td>
            <td>1.8</td>
            <td style={{ backgroundColor: "#eeeeee" }}>111,526,833</td>
            <td>6,195,935,158</td>
          </tr>
        </table>
      </>
    );
  }
  return (
    <div style={{ marginTop: "2em", marginBottom: "2em" }}>
      <div className="banner">
        <h2>DFIAM is a serious yet unmonitored harm.</h2>
      </div>
      <div className="copy">
        <p>
          In mid-2023,{" "}
          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3613904.3642382"
            target="_blank"
            rel="noopener noreferrer"
          >
            an academic survey
          </a>{" "}
          of over 16,000 participants across 10 countries found that:
        </p>{" "}
        <br />
        <p>
          2.2% of participants were victim-survivors of deepfake image-based
          sexual abuse;{" "}
        </p>{" "}
        <br />
        <p>
          1.8% of participants openly admitted to perpetrating this sort of
          abuse.{" "}
        </p>{" "}
        <br />
        <p>
          Extrapolating from this survey's findings indicates that over a
          hundred million adults worldwide would have been victim-survivors of
          DFIA in mid-2023. This study is the only one of its kind; research in
          this area is sparse to non-existent.
        </p>
        <br />
        <p>
          The above survey was also unfortunately conducted before the
          'Generative AI' bubble, and similar studies have not since emerged
          despite the supercharging effect that this bubble has had on DFIA
          production and distribution.
          {/* However, much has unfortunately changed for the worse since */}
          {/* that survey. */}
        </p>
        <div>
          <TableFromStudy />
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
      <div id="graph_container" style={{ display: "flex" }}>
        <div
          style={{
            // marginRight:'1em',
            height: "70vh",
            width: "auto",
            marginBottom: "1em",
          }}
        >
          <DfiaSites />
        </div>
        <div
          style={{
            marginLeft: "1em",
            height: "70vh",
            width: "auto",
          }}
        >
          <GgTrends />
        </div>
      </div>
      <div className="banner">
        <h2>Wait, isn't DFIA illegal? Aren't the cops taking care of it?</h2>
      </div>
      <div className="copy">
        <p>Effectively, DFIA remains in many ways beyond the law.</p>
        <p>
          Some direct laws exist, but only two of these (
          <a
            href="https://law.justia.com/codes/georgia/title-16/chapter-11/article-3/part-3/section-16-11-90/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Georgia, USA
          </a>
          ;{" "}
          <a
            href="https://www.legislation.gov.au/C2021A00076/latest/text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Australia's Online Safety Act
          </a>
          ) have extraterritoriality, meaning that for all other laws, offenders
          across borders aren't reachable by local law enforcement - a
          case-stopping loophole for any sort of cybercrime. Also, there are
          many ways of prospering from this harm which the law hasn't come close
          to criminalizing: chiefly, referral codes.
        </p>
        <br />
        <p>
          Indeed, although DFIAM creation may sometimes be criminalised by laws,
          the creation of DFIAM is almost always hidden by the DFIA websites
          (which purposefully do not keep activity logs) and so offenders
          acquire the DFIAM without anybody knowing, leaving no evidence with
          which to enforce the law.
        </p>
        <br />
        <p>
          Additionally, and crucially, the hidden nature of this online process
          makes it impossible to know, without running the DFIAM creation
          websites, how much DFIAM is being created. All we can know for certain
          is how many DFIA websites are online, and unless somebody conducts
          research as we have been doing that information will also be lost to
          time.
        </p>
      </div>

      <div className="banner">
        <h2>...Why haven't I heard of you?</h2>
      </div>
      <div className="copy">
        <p>
          We don't spend money on publicity. All our efforts and resources are
          put toward research and implementation of solutions. Until very
          recently we were fully immersed in producing our first systematic
          report, compiled as part of our founder's doctoral research at
          University College London.{" "}
        </p>
        <br />
        <p>
          We hope to open a reporting system and to fund individual as well as
          class action court cases, cooperating with national and international
          law enforcement, to aid victim-survivors and prevent further DFIA.
        </p>
        <br />
        <p>
          However, we cannot do this without your help. Please consider donating
          to support our work!
        </p>
      </div>
    </div>
  );
}

export default Mission;
