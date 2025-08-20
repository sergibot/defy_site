import { useState } from "react";
function HawaiiLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        Criminal code <br />
        Passed [2021] ; Effective [2021] <br />
        Contingent on: 712-1210, 706-660 <br />
        DFIAM Creation = Max 5 yrs jail;
        <br />
        Distribution /threat to distribute, of IBSAM/DFIAM = max 5 yrs jail
      </div>
      <div className="lawBody">
        §711-1110.9 Violation of privacy in the first degree. (1) A person
        commits the offense of violation of privacy in the first degree if,
        except in the execution of a public duty or as authorized by law:
        <br />
        (a) The person intentionally or knowingly installs or uses, or both, in
        any private place, without consent of the person or persons entitled to
        privacy therein, any device for observing, recording, amplifying, or
        broadcasting another person in a stage of undress or sexual activity in
        that place;
        <br />
        (b) The person knowingly discloses or threatens to disclose an image or
        video of another identifiable person either in the nude, as defined in
        section 712-1210, or engaging in sexual conduct, as defined in section
        712-1210, without the consent of the depicted person, with intent to
        harm substantially the depicted person with respect to that person's
        health, safety, business, calling, career, education, financial
        condition, reputation, or personal relationships or as an act of revenge
        or retribution; or
        <br />
        (c) The person intentionally creates or discloses or threatens to
        disclose an image or video of a composite fictitious person depicted in
        the nude as defined in section 712-1210, or engaged in sexual conduct as
        defined in section 712-1210, that includes the recognizable physical
        characteristics of a known person so that the image or video appears to
        depict the known person and not a composite fictitious person, with
        intent to substantially harm the depicted person with respect to that
        person's health, safety, business, calling, career, education, financial
        condition, reputation, or personal relationships, or as an act of
        revenge or retribution.
        <br />
        (2) Other than as prohibited in paragraph (1)(c), this section shall not
        apply to images or videos of the depicted person made:
        <br />
        (a) When the person was voluntarily nude in public or voluntarily
        engaging in sexual conduct in public; or
        <br />
        (b) Pursuant to a voluntary commercial transaction.
        <br />
        (3) Nothing in this section shall be construed to impose liability on a
        provider of "electronic communication service" or "remote computing
        service" as those terms are defined in section 803-41, for an image or
        video disclosed through the electronic communication service or remote
        computing service by another person.
        <br />
        (4) Violation of privacy in the first degree is a class C felony. In
        addition to any penalties the court may impose, the court may order the
        destruction of any recording made in violation of this section.
        <br />
        (5) Any recording or image made or disclosed in violation of this
        section and not destroyed pursuant to subsection (4) shall be sealed and
        remain confidential. [L 1999, c 278, §1; am L 2003, c 48, §3; am L 2004,
        c 83, §2; am L 2014, c 116, §1; am L 2018, c 114, §1; am L 2021, c 59,
        §2]
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        PART II. OFFENSES RELATED TO OBSCENITY §712-1210 Definitions of terms in
        this part. In this part, unless a different meaning is required:
        <br />
        "Age verification records of sexually exploited individuals" means
        individually identifiable records pertaining to every sexually exploited
        individual provided to patrons or customers of a public establishment or
        in a private club or event. Such records shall include:
        <br />
        (1) Each sexually exploited individual's name and date of birth, as
        ascertained by an examination of the individual's valid driver's
        license, official state identification card, or passport;
        <br />
        (2) A certified copy of each sexually exploited individual's driver's
        license, official state identification card, or passport; and
        <br />
        (3) Any name ever used by each sexually exploited individual including
        but not limited to maiden name, aliases, nicknames, stage names, or
        professional names.
        <br />
        "Age verification records of sexual performers" means individually
        identifiable records pertaining to every sexual performer portrayed in a
        visual depiction of sexual conduct, which include:
        <br />
        (1) Each performer's name and date of birth, as ascertained by the
        producer's personal examination of a performer's valid driver's license,
        official state identification card, or passport;
        <br />
        (2) A certified copy of each performer's valid driver's license,
        official state identification card, or passport; and
        <br />
        (3) Any name ever used by each performer including, but not limited to,
        maiden name, alias, nickname, stage name, or professional name.
        <br />
        "Community standards" means the standards of the State. "Disseminate"
        means to manufacture, issue, publish, sell, lend, distribute, transmit,
        exhibit, or present material or to offer or agree to do the same.
        <br />
        "Erotic or nude massager" means a nude person providing massage services
        with or without a license.
        <br />
        "Exotic or nude dancer" means a person performing, dancing, or
        entertaining in the nude, and includes patrons participating in a
        contest or receiving instruction in nude dancing.
        <br />
        "Intent to profit" means the intent to obtain monetary gain. "Material"
        means any printed matter, visual representation, or sound recording, and
        includes but is not limited to books, magazines, motion picture films,
        pamphlets, newspapers, pictures, photographs, drawings, sculptures, and
        tape or wire recordings.
        <br />
        "Minor" means any person less than sixteen years old.
        <br />
        "Nude" means unclothed or in attire, including but not limited to sheer
        or see-through attire, so as to expose to view any portion of the pubic
        hair, anus, cleft of the buttocks, genitals or any portion of the female
        breast below the top of the areola.
        <br />
        "Performance" means any play, motion picture film, dance, or other
        exhibition performed before an audience.
        <br />
        "Pornographic". Any material or performance is "pornographic" if all of
        the following coalesce:
        <br />
        (a) The average person, applying contemporary community standards would
        find that, taken as a whole, it appeals to the prurient interest.
        <br />
        (b) It depicts or describes sexual conduct in a patently offensive way.
        <br />
        (c) Taken as a whole, it lacks serious literary, artistic, political, or
        scientific merit.
        <br />
        "Pornographic for minors". Any material or performance is "pornographic
        for minors" if:
        <br />
        (1) It is primarily devoted to explicit and detailed narrative accounts
        of sexual excitement, sexual conduct, or sadomasochistic abuse; and:
        <br />
        (a) It is presented in such a manner that the average person applying
        contemporary community standards, would find that, taken as a whole, it
        appeals to the prurient interest; and
        <br />
        (b) Taken as a whole, it lacks serious literary, artistic, political, or
        scientific value; or
        <br />
        (2) It contains any photograph, drawing, or similar visual
        representation of any person of the age of puberty or older revealing
        such person with less than a fully opaque covering of his or her
        genitals and pubic area, or depicting such person in a state of sexual
        excitement or engaged in acts of sexual conduct or sadomasochistic
        abuse; and:
        <br />
        (a) It is presented in such a manner that the average person, applying
        contemporary community standards, would find that, taken as a whole, it
        appeals to the prurient interest; and
        <br />
        (b) Taken as a whole, it lacks serious literary, artistic, political, or
        scientific value.
        <br />
        "Produces" means to manufacture or publish any pornographic performance,
        book, magazine, periodical, film, videotape, computer image, or other
        similar matter and includes the duplication, reproduction, or reissuing
        of any such matter, but does not include mere distribution or any other
        activity that does not involve hiring, contracting for, managing, or
        otherwise arranging for the participation of the performers depicted.
        <br />
        "Sadomasochistic abuse" means flagellation or torture by or upon a
        person as an act of sexual stimulation or gratification.
        <br />
        "Sexual conduct" means acts of masturbation, bestiality, sexual
        intercourse or physical contact with a person's clothed or unclothed
        genitals, pubic area, buttocks, or the breast or breasts of a female for
        the purpose of sexual stimulation, gratification, or perversion.
        <br />
        "Sexual excitement" means the condition of the human male or female
        genitals when in a state of sexual stimulation or arousal.
        <br />
        "Sexually exploited individuals" means erotic or nude massagers and
        exotic or nude dancers.
        <br />
        "Sexual performer" includes any person portrayed in a pornographic
        visual depiction engaging in, or assisting another person to engage in,
        sexual conduct. [L 1972, c 9, pt of §1; am L 1981, c 106, §1; am L 2002,
        c 240, §4; am L 2005 c 10, §; am L 2016, c 16, §4; am L 2018, c 95, §1]
      </div>
    </p>
  );
  const opt3 = (
    <p>
      <div className="lawBody">
        §706-660 Sentence of imprisonment for class B and C felonies; ordinary
        terms; discretionary terms. (1) Except as provided in subsection (2), a
        person who has been convicted of a class B or class C felony may be
        sentenced to an indeterminate term of imprisonment except as provided
        for in section 706-660.1 relating to the use of firearms in certain
        felony offenses and section 706-606.5 relating to repeat offenders. When
        ordering such a sentence, the court shall impose the maximum length of
        imprisonment which shall be as follows:
        <br />
        (a) For a class B felony--ten years; and
        <br />
        (b) For a class C felony--five years.
        <br />
        The minimum length of imprisonment shall be determined by the Hawaii
        paroling authority in accordance with section 706-669.
        <br />
        (2) A person who has been convicted of a class B or class C felony for
        any offense under part IV of chapter 712 may be sentenced to an
        indeterminate term of imprisonment; provided that this subsection shall
        not apply to sentences imposed under sections 706-606.5, 706-660.1,
        712-1240.5, 712-1240.8 as that section was in effect prior to July 1,
        2016, 712-1242, 712-1245, 712-1249.5, 712-1249.6, 712-1249.7, and
        712-1257.
        <br />
        When ordering a sentence under this subsection, the court shall impose a
        term of imprisonment, which shall be as follows:
        <br />
        (a) For a class B felony--ten years or less, but not less than five
        years; and
        <br />
        (b) For a class C felony--five years or less, but not less than one
        year.
        <br />
        The minimum length of imprisonment shall be determined by the Hawaii
        paroling authority in accordance with section 706-669. [L 1972, c 9, pt
        of §1; am L 1976, c 92, §8 and c 204, §2; am L 1980, c 294, §2; am L
        1986, c 314, §38; am L 2013, c 280, §2; am L 2016, c 231, §29]
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
          §711-1110.9
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
          §712-1210
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
          §706-660
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

export default HawaiiLaw;
