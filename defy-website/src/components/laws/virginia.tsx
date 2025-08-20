import { useState } from "react";
function VirginiaLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        18.2-386.1, 18.2-386.2
        <br />
        Passed & Effective 2014, 2019
        <br />
        Contingent on 18.2-10, 18.2-11
        <br />
        Criminal Code
        <br />
        Creation of IBSAM: Max 1 yr jail and/or $2.5k fine
        <br />
        Distribution of IBSAM/DFIAM: Max 1 yr jail and/or $2.5k fine
      </div>
      <div className="lawBody">
        Title 18.2. Crimes and Offenses Generally Chapter 8. Crimes Involving
        Morals and Decency Article 5. Obscenity and Related Offenses
        <br />
        § 18.2-386.1. Unlawful creation of image of another; penalty
        <br />
        A. It shall be unlawful for any person to knowingly and intentionally
        create any videographic or still image by any means whatsoever of any
        nonconsenting person if (i) that person is totally nude, clad in
        undergarments, or in a state of undress so as to expose the genitals,
        pubic area, buttocks or female breast in a restroom, dressing room,
        locker room, hotel room, motel room, tanning bed, tanning booth, bedroom
        or other location; or (ii) the videographic or still image is created by
        placing the lens or image-gathering component of the recording device in
        a position directly beneath or between a person's legs for the purpose
        of capturing an image of the person's intimate parts or undergarments
        covering those intimate parts when the intimate parts or undergarments
        would not otherwise be visible to the general public; and when the
        circumstances set forth in clause (i) or (ii) are otherwise such that
        the person being recorded would have a reasonable expectation of
        privacy.
        <br />
        B. The provisions of this section shall not apply to any videographic or
        still image created by any means whatsoever by (i) law-enforcement
        officers pursuant to a criminal investigation which is otherwise lawful
        or (ii) correctional officials and local or regional jail officials for
        security purposes or for investigations of alleged misconduct involving
        a person committed to the Department of Corrections or to a local or
        regional jail, or to any sound recording of an oral conversation made as
        a result of any videotaping or filming pursuant to Chapter 6 (§ 19.2-61
        et seq.) of Title 19.2.
        <br />
        C. A violation of subsection A shall be punishable as a Class 1
        misdemeanor.
        <br />
        D. A violation of subsection A involving a nonconsenting person under
        the age of 18 shall be punishable as a Class 6 felony.
        <br />
        E. Where it is alleged in the warrant, information, or indictment on
        which the person is convicted and found by the court or jury trying the
        case that the person has previously been convicted within the 10-year
        period immediately preceding the offense charged of two or more of the
        offenses specified in this section, each such offense occurring on a
        different date, and when such offenses were not part of a common act,
        transaction, or scheme, and such person has been at liberty as defined
        in § 53.1-151 between each conviction, he shall be guilty of a Class 6
        felony.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        Code of Virginia Title 18.2. Crimes and Offenses Generally Chapter 8.
        Crimes Involving Morals and Decency Article 5. Obscenity and Related
        Offenses
        <br />
        § 18.2-386.2. Unlawful dissemination or sale of images of another;
        penalty
        <br />
        A. Any person who, with the intent to coerce, harass, or intimidate,
        maliciously disseminates or sells any videographic or still image
        created by any means whatsoever that depicts another person who is
        totally nude, or in a state of undress so as to expose the genitals,
        pubic area, buttocks, or female breast, where such person knows or has
        reason to know that he is not licensed or authorized to disseminate or
        sell such videographic or still image is guilty of a Class 1
        misdemeanor. For purposes of this subsection, "another person" includes
        a person whose image was used in creating, adapting, or modifying a
        videographic or still image with the intent to depict an actual person
        and who is recognizable as an actual person by the person's face,
        likeness, or other distinguishing characteristic.
        <br />
        B. If a person uses services of an Internet service provider, an
        electronic mail service provider, or any other information service,
        system, or access software provider that provides or enables computer
        access by multiple users to a computer server in committing acts
        prohibited under this section, such provider shall not be held
        responsible for violating this section for content provided by another
        person.
        <br />
        C. Venue for a prosecution under this section may lie in the
        jurisdiction where the unlawful act occurs or where any videographic or
        still image created by any means whatsoever is produced, reproduced,
        found, stored, received, or possessed in violation of this section.
        <br />
        D. The provisions of this section shall not preclude prosecution under
        any other statute.
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
          13A-6-240
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
          13A-12-190
        </div>
      </div>
      <div className="lawSelected">
        {law == "opt1" ? opt1 : null}
        {law == "opt2" ? opt2 : null}
      </div>
    </>
  );
}

export default VirginiaLaw;
