import { useState } from "react";
function IllinoisLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        DFIAM/IBSAM Distribution: Damages incl. max $10,000 statutory damages
      </div>
      <div className="lawBody">
        2022 Illinois Compiled Statutes Chapter 740 - CIVIL LIABILITIES 740 ILCS
        190/ - Civil Remedies for Nonconsensual Dissemination of Private Sexual
        Images Act.
        <br />
        (740 ILCS 190/1) Sec. 1. Short title. This Act may be cited as the Civil
        Remedies for Nonconsensual Dissemination of Private Sexual Images Act.
        <br />
        (740 ILCS 190/5) Sec. 5. Definitions. As used in this Act:
        <br />
        (1) "Child" means an unemancipated individual who is less than 18 years
        of age.
        <br />
        (2) "Consent" means affirmative, conscious, and voluntary authorization
        by an individual with legal capacity to give authorization.
        <br />
        (3) "Depicted individual" means an individual whose body is shown, in
        whole or in part, in a private sexual image.
        <br />
        (4) "Dissemination" or "disseminate" means publication or distribution
        to another person with intent to disclose.
        <br />
        (5) "Harm" means physical harm, economic harm, or emotional distress
        whether or not accompanied by physical or economic harm.
        <br />
        (6) "Identifiable" means recognizable by a person other than the
        depicted individual:
        <br />
        (A) from a private sexual image itself; or
        <br />
        (B) from a private sexual image and identifying characteristic displayed
        in connection with the image.
        <br />
        (7) "Identifying characteristic" means information that may be used to
        identify a depicted individual.
        <br />
        (8) "Individual" means a human being.
        <br />
        (9) "Parent" means an individual recognized as a parent under laws of
        this State.
        <br />
        (10) "Private" means:
        <br />
        (A) created or obtained under circumstances in which a depicted
        individual had a reasonable expectation of privacy; or
        <br />
        (B) made accessible through theft, bribery, extortion, fraud, voyeurism,
        or
        <br />
        exceeding authorized access to an account, message, file, device,
        resource, or property.
        <br />
        (11) "Person" means an individual, business or nonprofit entity, public
        corporation, government or governmental subdivision, agency, or other
        legal entity.
        <br />
        (12) "Sexual conduct" includes:
        <br />
        (A) masturbation;
        <br />
        (B) genital sex, anal sex, oral sex, or sexual activity; or
        <br />
        (C) sexual penetration of or with an object.
        <br />
        (13) "Sexual activity" means any:
        <br />
        (A) knowing touching or fondling by the depicted individual or another
        person, either directly or through clothing, of the sex organs, anus, or
        breast of the depicted individual or another person for the purpose of
        sexual gratification or arousal;
        <br />
        (B) transfer or transmission of semen upon any part of the clothed or
        unclothed body of the depicted individual, for the purpose of sexual
        gratification or arousal of the depicted individual or another person;
        <br />
        (C) act of urination within a sexual context;
        <br />
        (D) bondage, fetish, sadism, or masochism;
        <br />
        (E) sadomasochistic abuse in any sexual context; or
        <br />
        (F) animal-related sexual activity.
        <br />
        (14) "Sexual image" means a photograph, film, videotape, digital
        recording, or other similar medium that shows:
        <br />
        (A) the fully unclothed, partially unclothed, or transparently clothed
        genitals, pubic area, anus, or female post-pubescent nipple, partially
        or fully exposed, of a depicted individual; or
        <br />
        (B) a depicted individual engaging in or being subjected to sexual
        conduct or activity.
        <br />
        (740 ILCS 190/10)
        <br />
        Sec. 10. Civil action.
        <br />
        (a) Except as otherwise provided in Section 15, if a depicted individual
        is identifiable to a reasonable person and suffers harm from the
        intentional dissemination or threatened dissemination by a person over
        the age of 18 of a private sexual image without the depicted
        individual's consent, the depicted individual has a cause of action
        against the person if the person knew:
        <br />
        (1) the depicted individual did not consent to the dissemination;
        <br />
        (2) the image was a private sexual image; and
        <br />
        (3) the depicted individual was identifiable.
        <br />
        (b) The following conduct by a depicted individual does not establish by
        itself that the individual consented to the nonconsensual dissemination
        of a private sexual image that is the subject of an action under this
        Act or that the individual lacked a reasonable expectation of privacy:
        <br />
        (1) consent to creation of the image; or
        <br />
        (2) previous consensual disclosure of the image.
        <br />
        (c) Nothing in this Act shall be construed to impose liability on an
        interactive computer service, as defined in 47 U.S.C. 230(f)(2), for
        content provided by another person.
        <br />
        (740 ILCS 190/15)
        <br />
        Sec. 15. Exceptions to liability.
        <br />
        (a) A person is not liable under this Act if the person proves that the
        dissemination of or a threat to disseminate a private sexual image was:
        <br />
        (1) made in good faith:
        <br />
        (A) by law enforcement;
        <br />
        (B) in a legal proceeding; or
        <br />
        (C) for medical education or treatment;
        <br />
        (2) made in good faith in the reporting or investigation of:
        <br />
        (A) unlawful conduct; or
        <br />
        (B) unsolicited and unwelcome conduct; or
        <br />
        (3) related to a matter of public concern.
        <br />
        (b) Subject to subsection (c), a defendant who is a parent, legal
        guardian, or individual with legal custody of a child is not liable
        under this Act for a dissemination or threatened dissemination of an
        intimate private sexual image of the child.
        <br />
        (c) If a defendant asserts an exception to liability under subsection
        (b), the exception does not apply if the plaintiff proves the disclosure
        was:
        <br />
        (1) prohibited by a law other than this Act; or
        <br />
        (2) made for the purpose of sexual arousal, sexual gratification,
        humiliation, degradation, or monetary or commercial gain.
        <br />
        (d) The dissemination of or a threat to disseminate a private sexual
        image is not a matter of public concern solely because the depicted
        individual is a public figure.
        <br />
        (740 ILCS 190/20)
        <br />
        Sec. 20. Privacy of parties.
        <br />
        (a) In an action under this Act:
        <br />
        (1) a plaintiff may proceed by using a pseudonym in place of the true
        name of the plaintiff under Section 2-401 of the Code of Civil
        Procedure; and
        <br />
        (2) the court may exclude or redact from all pleadings and documents
        filed in the action other identifying characteristics of the plaintiff.
        <br />
        (b) A plaintiff to whom paragraph (2) of subsection (a) applies shall
        file with the court and serve on the defendant a confidential
        information form that includes the excluded or redacted plaintiff's name
        and other identifying characteristics.
        <br />
        (c) The court may make further orders as necessary to protect the
        identity and privacy of a plaintiff.
        <br />
        (d) If a plaintiff is granted privacy protections under this Section, a
        defendant may file a motion with the court to receive the same privacy
        protections. The court may deny or grant the motion at its discretion.
        <br />
        (740 ILCS 190/25)
        <br />
        Sec. 25. Remedies.
        <br />
        (a) In an action under this Act, a prevailing plaintiff may recover:
        <br />
        (1) the greater of:
        <br />
        (A) economic and noneconomic damages proximately caused by the
        defendant's dissemination or threatened dissemination, including damages
        for emotional distress whether or not accompanied by other damages; or
        <br />
        (B) statutory damages, not to exceed $10,000, against each defendant
        found liable under this Act for all disseminations and threatened
        disseminations by the defendant of which the plaintiff knew or
        reasonably should have known when filing the action or that became known
        during the pendency of the action. In determining the amount of
        statutory damages under this subsection, consideration shall be given to
        the age of the parties at the time of the disseminations or threatened
        disseminations, the number of disseminations or threatened
        disseminations made by the defendant, the breadth of distribution of the
        image by the defendant, and other exacerbating or mitigating factors;
        <br />
        (2) an amount equal to any monetary gain made by the defendant from
        dissemination of the private sexual image; and
        <br />
        (3) punitive damages.
        <br />
        (b) In an action under this Act, the court may award a prevailing
        plaintiff:
        <br />
        (1) reasonable attorney's fees and costs; and
        <br />
        (2) additional relief, including injunctive relief.
        <br />
        (c) This Act does not affect a right or remedy available under any other
        law of this State.
        <br />
        (740 ILCS 190/30) Sec. 30. Statute of limitations.
        <br />
        (a) An action under subsection (b) of Section 10 for:
        <br />
        (1) a nonconsensual dissemination may not be brought later than 2 years
        from the date the dissemination was discovered or should have been
        discovered with the exercise of reasonable diligence; and
        <br />
        (2) a threat to disseminate may not be brought later than 2 years from
        the date of the threat to disseminate.
        <br />
        (b) Except as otherwise provided in subsection (c), this Section is
        subject to the tolling statutes of this State.
        <br />
        (c) In an action under subsection (a) of Section 10 by a depicted
        individual who was a minor on the date of the dissemination or threat to
        disseminate, the time specified in subsection (a) of this Section does
        not begin to run until the depicted individual attains the age of
        majority.
        <br />
        (740 ILCS 190/35) Sec. 35. Severability. If any provision of this Act or
        its application to any person or circumstance is held invalid, the
        invalidity does not affect other provisions or applications of this Act
        that can be given effect without the invalid provision or application,
        and to this end, the provisions of this Act are severable.
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
          740 ILCS 190
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

export default IllinoisLaw;
