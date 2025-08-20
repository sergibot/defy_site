import { useState } from "react";
function SDakotaLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader"></div>
      <div className="lawBody">
        22-21-4. Record--Privacy--Manipulated image--Violation. No person may:
        <br />
        (1) Use any device to photograph or visually record:
        <br />
        (a) Any other person without clothing or under or through the clothing,
        or with another person depicted in a sexual act, for the purpose of
        viewing the body of, or the undergarments worn by, that other person;
        <br />
        (b) Without the consent or knowledge of that other person; and
        <br />
        (c) With the intent to self-gratify, to harass, or embarrass and invade
        the privacy of that other person, under circumstances in which the other
        person has a reasonable expectation of privacy;
        <br />
        (2) Use, disclose, or disseminate, by any means, any recording or
        photograph in violation of subdivision (1), in order to self-gratify, to
        harass, or to embarrass and invade the privacy of that other person; or
        <br />
        (3) Knowingly and intentionally disseminate or sell any image or
        recording of another person:
        <br />
        (a) That has been intentionally manipulated to create a realistic but
        false image or recording that would cause a reasonable person to
        mistakenly believe that the image or recording is authentic;
        <br />
        (b) That depicts the person as totally nude; in a state of undress to
        expose the genitals, pubic area, buttocks, or female breast; or with
        another person in a sexual act;
        <br />
        (c) Without the consent or knowledge of the person whose image is
        depicted; and
        <br />
        (d) With the intent to self-gratify, to harass, or embarrass and invade
        the privacy of the person whose image is depicted.
        <br />A violation of this section is a Class 1 misdemeanor. However, a
        violation of this section is a Class 6 felony if the victim is seventeen
        years of age or younger and the perpetrator is at least twenty-one years
        of age at the time the photograph or recording is made.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        22-6-1. Felony classes and penalties--Restitution--Habitual criminal
        sentences.
        <br />
        Except as otherwise provided by law, felonies are divided into the
        following nine classes which are distinguished from each other by the
        following maximum penalties which are authorized upon conviction:
        <br />
        (1) Class A felony: death or life imprisonment in a state correctional
        facility. A lesser sentence than death or life imprisonment may not be
        given for a Class A felony. In addition, a fine of fifty thousand
        dollars may be imposed;
        <br />
        (2) Class B felony: life imprisonment in a state correctional facility.
        A lesser sentence may not be given for a Class B felony. In addition, a
        fine of fifty thousand dollars may be imposed;
        <br />
        (3) Class C felony: life imprisonment in a state correctional facility.
        In addition, a fine of fifty thousand dollars may be imposed;
        <br />
        (4) Class 1 felony: fifty years imprisonment in a state correctional
        facility. In addition, a fine of fifty thousand dollars may be imposed;
        <br />
        (5) Class 2 felony: twenty-five years imprisonment in a state
        correctional facility. In addition, a fine of fifty thousand dollars may
        be imposed;
        <br />
        (6) Class 3 felony: fifteen years imprisonment in a state correctional
        facility. In addition, a fine of thirty thousand dollars may be imposed;
        <br />
        (7) Class 4 felony: ten years imprisonment in a state correctional
        facility. In addition, a fine of twenty thousand dollars may be imposed;
        <br />
        (8) Class 5 felony: five years imprisonment in a state correctional
        facility. In addition, a fine of ten thousand dollars may be imposed;
        and
        <br />
        (9) Class 6 felony: two years imprisonment in a state correctional
        facility or a fine of four thousand dollars, or both.
        <br />
        If the defendant is under the age of eighteen years at the time of the
        offense and found guilty of a Class A, B, or C felony, the maximum
        sentence may be a term of years in a state correctional facility, and a
        fine of fifty thousand dollars may be imposed.
        <br />
        The court, in imposing sentence on a defendant who has been found guilty
        of a felony, shall order in addition to the sentence that is imposed
        pursuant to the provisions of this section, that the defendant make
        restitution to any victim in accordance with the provisions of chapter
        23A-28.
        <br />
        Nothing in this section limits increased sentences for habitual
        criminals under §§ 22-7-7, 22-7-8, and 22-7-8.1.
      </div>
    </p>
  );
  const opt3 = (
    <p>
      <div className="lawBody">
        22-6-2. Misdemeanor classes and penalties--Restitution--Misdemeanor when
        no penalty imposed.
        <br />
        Misdemeanors are divided into two classes which are distinguished from
        each other by the following maximum penalties which are authorized upon
        conviction:
        <br />
        (1) Class 1 misdemeanor: one year imprisonment in a county jail or two
        thousand dollars fine, or both;
        <br />
        (2) Class 2 misdemeanor: thirty days imprisonment in a county jail or
        five hundred dollars fine, or both.
        <br />
        The court, in imposing sentence on a defendant who has been found guilty
        of a misdemeanor, shall order, in addition to the sentence that is
        imposed pursuant to the provisions of this section, that the defendant
        make restitution to any victim in accordance with the provisions of
        chapter 23A-28.
        <br />
        Except in Titles 1 to 20, inclusive, 22, 25 to 28, inclusive, 32 to 36,
        inclusive, 40 to 42, inclusive, 47 to 54, inclusive, and 58 to 62,
        inclusive, if the performance of an act is prohibited by a statute, and
        no penalty for the violation of such statute is imposed by a statute,
        the doing of such act is a Class 2 misdemeanor.
      </div>
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
          22-21-4
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
          22-6-1
        </div>
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt3" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt3" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt3" ? 1 : 2,
          }}
          onClick={() => setLaw("opt3")}
        >
          22-6-2
        </div>
      </div>
      <div className="lawSelected">
        {law == "opt1" ? opt1 : null}
        {law == "opt2" ? opt2 : null}
        {law == "opt3" ? opt3 : null}
      </div>
    </>
  );
}

export default SDakotaLaw;
