import { useState } from "react";
function LouisianaLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">

        DF-CSAEM Creation/Possession: 5-20 years and/or max $10,000 fine
        DFIAM Distribution: 10-30 years and/or max $50,000 fine

        Passed & Effective [2023]
      </div>
      <div className="lawBody">
        §73.13. Unlawful deepfakes
        <br />
        A. Any person who, with knowledge that the material is a deepfake
        depicting a minor, knowingly creates or possesses material that depicts
        a minor engaging in sexual conduct shall be punished by imprisonment at
        hard labor for not less than five nor more than twenty years, or a fine
        of not more than ten thousand dollars, or both. At least five years of
        the sentence of imprisonment imposed shall be served without benefit of
        parole, probation, or suspension of sentence.
        <br />
        B.(1) Except as provided in Paragraph (2) of this Subsection, any person
        who, with knowledge that the material is a deepfake that depicts another
        person, without consent of the person depicted, engaging in sexual
        conduct, knowingly advertises, distributes, exhibits, exchanges with,
        promotes, or sells any sexual material shall be punished by imprisonment
        at hard labor for not less than ten nor more than thirty years, a fine
        of not more than fifty thousand dollars, or both.
        <br />
        (2) Any person who, with knowledge that the material is a deepfake
        depicting a minor, knowingly advertises, distributes, exhibits,
        exchanges with, promotes, or sells any sexual material that depicts a
        minor engaging in sexual conduct shall be punished by imprisonment at
        hard labor for not less than ten nor more than thirty years, a fine of
        not more than fifty thousand dollars, or both. At least ten years of the
        sentence of imprisonment imposed shall be served without benefit of
        probation, parole, or suspension of sentence.
        <br />
        C. For the purposes of this Section:
        <br />
        (1) "Deepfake" means any audio or visual media in an electronic format,
        including any motion picture film or video recording, that is created,
        altered, or digitally manipulated in a manner that would falsely appear
        to a reasonable observer to be an authentic record of the actual speech
        or conduct of the individual or replace an individual's likeness with
        another individual and depicted in the recording. "Deepfake" does not
        include any material that constitutes a work of political, public
        interest, or newsworthy value, including commentary, criticism, satire,
        or parody, or that includes content, context, or a clear disclosure
        visible throughout the duration of the recording that would cause a
        reasonable person to understand that the audio or visual media is not a
        record of a real event.
        <br />
        (2) "Distribute" means to publish or make available to another person
        but does not include any alteration of a recording, including altering
        the length of the recording, so long as such alteration does not
        knowingly remove any content, context, or clear disclosure visible
        throughout the duration of the recording that would cause a reasonable
        person to believe that the audio or visual media is not a record of a
        real event.
        <br />
        (3) "Minor" means a person under the age of eighteen years.
        <br />
        (4) "Sexual conduct" means any of the following, whether actual or
        simulated: sexual intercourse, oral copulation, anal intercourse, anal
        oral copulation, masturbation, bestiality, sexual sadism, sexual
        masochism, penetration of the vagina or rectum by any object in a lewd
        or lascivious manner, exhibition of the genitals or pubic or rectal area
        for the purpose of sexual stimulation of the viewer, or excretory
        functions performed in a lewd or lascivious manner, whether or not any
        of the conduct is performed alone or between members of the same or
        opposite sex or between humans and animals. An act is simulated when it
        gives the appearance of being actual sexual conduct.
        <br />
        Acts 2023, No. 457, §1.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody"></div>
    </p>
  );
  const [law, setLaw] = useState("opt1");
  return (
    <>
      <div className="lawChoice">
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt1" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt1" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt1" ? 1 : 2,
          }}
          onClick={() => setLaw("opt1")}
        >
          RS 14:73.13
        </div>
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt2" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt2" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt2" ? 1 : 2,
          }}
          onClick={() => setLaw("opt2")}
        >
          ...
        </div>
      </div>
      <div className="lawSelected">
        {law == "opt1" ? opt1 : null}
        {law == "opt2" ? opt2 : null}
      </div>
    </>
  );
}

export default LouisianaLaw;
