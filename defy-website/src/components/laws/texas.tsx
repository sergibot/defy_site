import { useState } from "react";
function TexasLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        Penal Code § 21.16, 21.165
        <br />
        Passed & Effective 2023
        <br />
        Contingent on §21.01
        <br />
        Criminal Code
        <br />
        Distribution of DFIAM: max 1 yr jail and/or max $4k fine
        <br />
        Distribution of IBSAM: 180 days to 2 years jail and/or max $10k fine
      </div>
      <div className="lawBody">
        PENAL CODE
        <br />
        TITLE 5. OFFENSES AGAINST THE PERSON
        <br />
        CHAPTER 21. SEXUAL OFFENSES
        <br />
        Sec. 21.01. DEFINITIONS. In this chapter:
        <br />
        (1) "Deviate sexual intercourse" means:
        <br />
        (A) any contact between any part of the genitals of one person and the
        mouth or anus of another person; or
        <br />
        (B) the penetration of the genitals or the anus of another person with
        an object.
        <br />
        (2) "Sexual contact" means, except as provided by Section 21.11 or
        21.12, any touching of the anus, breast, or any part of the genitals of
        another person with intent to arouse or gratify the sexual desire of any
        person.
        <br />
        (3) "Sexual intercourse" means any penetration of the female sex organ
        by the male sex organ.
        <br />
        (4) "Spouse" means a person to whom a person is legally married under
        Subtitle A, Title 1, Family Code, or a comparable law of another
        jurisdiction.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        Sec. 21.15. INVASIVE VISUAL RECORDING. (a) In this section:
        <br />
        (1) "Female breast" means any portion of the female breast below the top
        of the areola.
        <br />
        (2) "Intimate area" means the naked or clothed genitals, pubic area,
        anus, buttocks, or female breast of a person.
        <br />
        (3) "Changing room" means a room or portioned area provided for or
        primarily used for the changing of clothing and includes dressing rooms,
        locker rooms, and swimwear changing areas.
        <br />
        (4) "Promote" has the meaning assigned by Section 43.21.
        <br />
        (b) A person commits an offense if, without the other person's consent
        and with intent to invade the privacy of the other person, the person:
        <br />
        (1) photographs or by videotape or other electronic means records,
        broadcasts, or transmits a visual image of an intimate area of another
        person if the other person has a reasonable expectation that the
        intimate area is not subject to public view;
        <br />
        (2) photographs or by videotape or other electronic means records,
        broadcasts, or transmits a visual image of another in a bathroom or
        changing room; or
        <br />
        (3) knowing the character and content of the photograph, recording,
        broadcast, or transmission, promotes a photograph, recording, broadcast,
        or transmission described by Subdivision (1) or (2).
        <br />
        (c) An offense under this section is a state jail felony.
        <br />
        (d) If conduct that constitutes an offense under this section also
        constitutes an offense under any other law, the actor may be prosecuted
        under this section or the other law.
        <br />
        (e) For purposes of Subsection (b)(2), a sign or signs posted indicating
        that the person is being photographed or that a visual image of the
        person is being recorded, broadcast, or transmitted is not sufficient to
        establish the person's consent under that subdivision.
      </div>
    </p>
  );
  const opt3 = (
    <p>
      <div className="lawBody">
        Sec. 21.16. UNLAWFUL DISCLOSURE OR PROMOTION OF INTIMATE VISUAL
        MATERIAL. (a) In this section:
        <br />
        (1) "Intimate parts" means the naked genitals, pubic area, anus,
        buttocks, or female nipple of a person.
        <br />
        (2) "Promote" means to procure, manufacture, issue, sell, give, provide,
        lend, mail, deliver, transfer, transmit, publish, distribute, circulate,
        disseminate, present, exhibit, or advertise or to offer or agree to do
        any of the above.
        <br />
        (3) "Sexual conduct" means sexual contact, actual or simulated sexual
        intercourse, deviate sexual intercourse, sexual bestiality,
        masturbation, or sadomasochistic abuse.
        <br />
        (4) "Simulated" means the explicit depiction of sexual conduct that
        creates the appearance of actual sexual conduct and during which a
        person engaging in the conduct exhibits any uncovered portion of the
        breasts, genitals, or buttocks.
        <br />
        (5) "Visual material" means:
        <br />
        (A) any film, photograph, videotape, negative, or slide or any
        photographic reproduction that contains or incorporates in any manner
        any film, photograph, videotape, negative, or slide; or
        <br />
        (B) any disk, diskette, or other physical medium that allows an image to
        be displayed on a computer or other video screen and any image
        transmitted to a computer or other video screen by telephone line,
        cable, satellite transmission, or other method.
        <br />
        (b) A person commits an offense if:
        <br />
        (1) without the effective consent of the depicted person and with the
        intent to harm that person, the person discloses visual material
        depicting another person with the person's intimate parts exposed or
        engaged in sexual conduct;
        <br />
        (2) at the time of the disclosure, the person knows or has reason to
        believe that the visual material was obtained by the person or created
        under circumstances in which the depicted person had a reasonable
        expectation that the visual material would remain private;
        <br />
        (3) the disclosure of the visual material causes harm to the depicted
        person; and
        <br />
        (4) the disclosure of the visual material reveals the identity of the
        depicted person in any manner, including through:
        <br />
        (A) any accompanying or subsequent information or material related to
        the visual material; or
        <br />
        (B) information or material provided by a third party in response to the
        disclosure of the visual material.
        <br />
        (c) A person commits an offense if the person intentionally
        <br />
        threatens to disclose, without the consent of the depicted person,
        visual material depicting another person with the person's intimate
        parts exposed or engaged in sexual conduct and the actor makes the
        threat to obtain a benefit:
        <br />
        (1) in return for not making the disclosure; or
        <br />
        (2) in connection with the threatened disclosure.
        <br />
        (d) A person commits an offense if, knowing the character and content of
        the visual material, the person promotes visual material described by
        Subsection (b) on an Internet website or other forum for publication
        that is owned or operated by the person.
        <br />
        (e) It is not a defense to prosecution under this section that the
        depicted person:
        <br />
        (1) created or consented to the creation of the visual material; or
        <br />
        (2) voluntarily transmitted the visual material to the actor.
        <br />
        (f) It is an affirmative defense to prosecution under Subsection
        <br />
        (b) or (d) that:
        <br />
        (1) the disclosure or promotion is made in the course of:
        <br />
        (A) lawful and common practices of law enforcement or medical treatment;
        <br />
        (B) reporting unlawful activity; or
        <br />
        (C) a legal proceeding, if the disclosure or promotion is permitted or
        required by law;
        <br />
        (2) the disclosure or promotion consists of visual material depicting in
        a public or commercial setting only a person's voluntary exposure of:
        <br />
        (A) the person's intimate parts; or
        <br />
        (B) the person engaging in sexual conduct; or
        <br />
        (3) the actor is an interactive computer service, as defined by 47
        U.S.C. Section 230, and the disclosure or promotion consists of visual
        material provided by another person.
        <br />
        (g) An offense under this section is a state jail felony.
        <br />
        (h) If conduct that constitutes an offense under this section also
        constitutes an offense under another law, the actor may be prosecuted
        under this section, the other law, or both.
      </div>
    </p>
  );

  const opt4 = (
    <p>
      <div className="lawBody">
        Sec. 21.165. UNLAWFUL PRODUCTION OR DISTRIBUTION OF CERTAIN SEXUALLY
        EXPLICIT VIDEOS. (a) In this section:
        <br />
        (1) "Deep fake video" means a video, created with the intent to deceive,
        that appears to depict a real person performing an action that did not
        occur in reality.
        <br />
        (2) "Intimate parts" and "sexual conduct" have the meanings assigned by
        Section 21.16.
        <br />
        (b) A person commits an offense if, without the effective consent of the
        person appearing to be depicted, the person knowingly produces or
        distributes by electronic means a deep fake video that appears to depict
        the person with the person's intimate parts exposed or engaged in sexual
        conduct.
        <br />
        (c) An offense under this section is a Class A misdemeanor.
        <br />
        (d) If conduct that constitutes an offense under this section also
        constitutes an offense under another law, the actor may be prosecuted
        under this section or the other law.
      </div>
    </p>
  );

  const opt5 = (
    <p>
      <div className="lawBody">
        Sec. 21.17. VOYEURISM. (a) A person commits an offense if the person,
        with the intent to arouse or gratify the sexual desire of the actor,
        observes, including remotely through the use of electronic means,
        another person without the other person's consent while the other person
        is in a dwelling or structure in which the other person has a reasonable
        expectation of privacy.
        <br />
        (b) Except as provided by Subsection (c) or (d), an offense under this
        section is a Class C misdemeanor.
        <br />
        (c) An offense under this section is a Class B misdemeanor if it is
        shown on the trial of the offense that the actor has previously been
        convicted two or more times of an offense under this section.
        <br />
        (d) An offense under this section is a state jail felony if the victim
        was a child younger than 14 years of age at the time of the offense.
        <br />
        (e) If conduct that constitutes an offense under this section also
        constitutes an offense under any other law, the actor may be prosecuted
        under this section, the other law, or both.
      </div>
    </p>
  );

  const opt6 = (
    <p>
      <div className="lawBody">
        Sec. 21.18. SEXUAL COERCION. (a) In this section:
        <br />
        (1) "Intimate visual material" means the visual material described by
        Section 21.16(b)(1) or (c).
        <br />
        (2) "Sexual conduct" has the meaning assigned by Section 43.25.
        <br />
        (b) A person commits an offense if the person intentionally threatens,
        including by coercion or extortion, to commit an offense under Chapter
        43 or Section 20A.02(a)(3), (4), (7), or (8), 21.02, 21.08, 21.11,
        21.12, 21.15, 21.16, 21.17, 22.011, or 22.021 to obtain, in return for
        not committing the threatened offense or in connection with the
        threatened offense, any of the following benefits:
        <br />
        (1) intimate visual material;
        <br />
        (2) an act involving sexual conduct causing arousal or gratification; or
        <br />
        (3) a monetary benefit or other benefit of value.
        <br />
        (c) A person commits an offense if the person intentionally threatens,
        including by coercion or extortion, to commit an offense under Chapter
        19 or 20 or Section 20A.02(a)(1), (2), (5), or (6) to obtain, in return
        for not committing the threatened offense or in connection with the
        threatened offense, either of the following benefits:
        <br />
        (1) intimate visual material; or
        <br />
        (2) an act involving sexual conduct causing arousal or gratification.
        <br />
        (d) This section applies to a threat regardless of how that threat is
        communicated, including a threat transmitted through e-mail or an
        Internet website, social media account, or chat room and a threat made
        by other electronic or technological means.
        <br />
        (e) An offense under this section is a state jail felony, except that
        the offense is a felony of the third degree if it is shown on the trial
        of the offense that the defendant has previously been convicted of an
        offense under this section.
      </div>
    </p>
  );

  const opt7 = (
    <p>
      <div className="lawBody">
        Sec. 21.19. UNLAWFUL ELECTRONIC TRANSMISSION OF SEXUALLY EXPLICIT VISUAL
        MATERIAL. (a) In this section, "intimate parts," "sexual conduct," and
        "visual material" have the meanings assigned by Section 21.16.
        <br />
        (b) A person commits an offense if the person knowingly transmits by
        electronic means visual material that:
        <br />
        (1) depicts:
        <br />
        (A) any person engaging in sexual conduct or with the person's intimate
        parts exposed; or
        <br />
        (B) covered genitals of a male person that are in a discernibly turgid
        state; and
        <br />
        (2) is not sent at the request of or with the express consent of the
        recipient.
        <br />
        (c) An offense under this section is a Class C misdemeanor.
        <br />
        (d) If conduct that constitutes an offense under this section also
        constitutes an offense under any other law, the actor may be prosecuted
        under this section or the other law.
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
          21.16
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
          21.16
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
          21.16
        </div>
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt4" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt4" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt4" ? 1 : 2,
          }}
          onClick={() => setLaw("opt4")}
        >
          21.16
        </div>
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt5" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt5" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt5" ? 1 : 2,
          }}
          onClick={() => setLaw("opt5")}
        >
          21.16
        </div>
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt6" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt6" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt6" ? 1 : 2,
          }}
          onClick={() => setLaw("opt6")}
        >
          21.16
        </div>
        <div
          className="lawOption"
          style={{
            backgroundColor: law == "opt7" ? "white" : "rgb(200,200,200)",
            boxShadow:
              law == "opt7" ? "0px 0px 30px 20px rgb(0 0 0 / 20%)" : "",
            zIndex: law == "opt7" ? 1 : 2,
          }}
          onClick={() => setLaw("opt7")}
        >
          21.16
        </div>
      </div>
      <div className="lawSelected">
        {law == "opt1" ? opt1 : null}
        {law == "opt2" ? opt2 : null}
        {law == "opt3" ? opt3 : null}
        {law == "opt4" ? opt4 : null}
        {law == "opt5" ? opt5 : null}
        {law == "opt6" ? opt6 : null}
        {law == "opt7" ? opt7 : null}
      </div>
    </>
  );
}

export default TexasLaw;
