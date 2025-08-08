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
      <h2>DFIAM is a serious yet unmonitored harm.</h2>
      <div>
        In mid-2023, an academic survey of over 16,000 participants across 10
        countries found that 2.2% of participants were victim-survivors of
        deepfake image-based sexual abuse. 1.8% of participants admitted to
        perpetrating this sort of abuse. However, these numbers were taken
        before the AI bubble had begun to hit. The numbers today are not
        available - yet another product of the AI overwhelm, but a critical one
        for understanding the amount of harm that this type of sexual abuse is
        wreaking globally.
      </div>
      <div>
        <button>link to study</button>
      </div>
      <div>
        <button>click here for graph</button>
      </div>
      <div>
        <table>
          <tr>
            <th>Country</th>
            <th colSpan={2}>Victims</th>
            <th colSpan={2}>Perpetrators</th>
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
            <td>Totalled</td>
            <td>2.2</td>
            <td>13,194,907</td>
            <td>1.8</td>
            <td>10,282,101</td>
            <td>583,731,797</td>
          </tr>
          <tr>
            <td>Globe (age 15+)</td>
            <td>2.2</td>
            <td>136,310,574</td>
            <td>1.8</td>
            <td>111,526,833</td>
            <td>6,195,935,158</td>
          </tr>
        </table>
      </div>
      {/* <GgTrends/> */}
      {/* <div
        id="site_graph_container"
        style={{
          objectFit: "contain",
          height: "60vh",
          width: "auto",
          backgroundColor: "blue",
        }}
      >
        <DfiaSites />
      </div> */}
    </div>
  );
}

export default Mission;

{
  /* <div> */
}
{
  /* <div>
          <p>Headlines</p>
        </div>
        <div>
          <h2>
            Despite the lack of headlines, 'deepfake porn' has not gone away.
          </h2>
          <h3>
            We have been monitoring it using a systematic and rigorous academic
            methodology since 2021. Once created, the content is endlessly
            redistributed across the internet, appearing eventually on 'regular'
            websites...
          </h3>
          victim harms...
          scale: */
}

{
  /* <div style={{ maxHeight: "30vh", width: "30vw" }}>
            <Gg_trends />
          </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* <div>
        DeepfAIke "porn" (DFIAM) is a type of image-based sexual abuse material
        (DFIAM), separated from child sexual abuse material (CSAM) only by the
        (apparent) age of the victim-survivor depicted. Distribution of DFIAM is
        illegal in ___ countries, including ___. Creation of DFIAM is illegal in
        ____. Despite this, there were 1,000 websites distributing DFIAM as of
        June 2025, and 1,000 websites where visitors can create DFIAM. 500 of
        these websites allow the visitor to create DFIAM of a real individual by
        uploading a single photo of the person they want to "nudify". As of
        2025, these websites were receiving ___ visits per month. at
        DefyAbuse.org we are the only entity monitoring the proliferation of
        DFIAM. We are doing our best to tackle it: outside of annually
        collecting and combing through thousands of websites (at minimum 18,000
        urls per year), we have advised the home office vawg team and the dist
        etc
      </div> */
}
