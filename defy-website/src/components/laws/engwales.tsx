import { useState } from "react";
function EngLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        Sexual Offences Act 2003 Amended by Online Safety Act 2023 IBSAM/DFIAM
        Distribution (Incl. threats) - summary conv.n: max. 1 year and/or a
        fine; conviction on indictment: max. 2 years.
      </div>
      <div className="lawBody">
        66B Sharing or threatening to share intimate photograph or film (1)A
        person (A) commits an offence if—
        <br />
        (a)A intentionally shares a photograph or film which shows, or appears
        to show, another person (B) in an intimate state,
        <br />
        (b)B does not consent to the sharing of the photograph or film, and
        <br />
        (c)A does not reasonably believe that B consents.
        <br />
        (2)A person (A) commits an offence if—
        <br />
        (a)A intentionally shares a photograph or film which shows, or appears
        to show, another person (B) in an intimate state,
        <br />
        (b)A does so with the intention of causing B alarm, distress or
        humiliation, and
        <br />
        (c)B does not consent to the sharing of the photograph or film.
        <br />
        (3)A person (A) commits an offence if—
        <br />
        (a)A intentionally shares a photograph or film which shows, or appears
        to show, another person (B) in an intimate state,
        <br />
        (b)A does so for the purpose of A or another person obtaining sexual
        gratification,
        <br />
        (c)B does not consent to the sharing of the photograph or film, and
        <br />
        (d)A does not reasonably believe that B consents.
        <br />
        (4)A person (A) commits an offence if—
        <br />
        (a)A threatens to share a photograph or film which shows, or appears to
        show, another person (B) in an intimate state, and
        <br />
        (b)A does so—
        <br />
        (i)with the intention that B or another person who knows B will fear
        that the threat will be carried out, or
        <br />
        (ii)being reckless as to whether B or another person who knows B will
        fear that the threat will be carried out.
        <br />
        (5)Subsections (1) to (4) are subject to section 66C (exemptions).
        <br />
        (6)For the purposes of subsections (1) to (3) and section 66C(3)(b)—
        <br />
        (a)“consent” to the sharing of a photograph or film includes general
        consent covering the particular act of sharing as well as specific
        consent to the particular act of sharing, and
        <br />
        (b)whether a belief is reasonable is to be determined having regard to
        all the circumstances including any steps A has taken to ascertain
        whether B consents.
        <br />
        (7)Where a person is charged with an offence under subsection (4), it is
        not necessary for the prosecution to prove—
        <br />
        (a)that the photograph or film mentioned in the threat exists, or
        <br />
        (b)if it does exist, that it is in fact a photograph or film which shows
        or appears to show a person in an intimate state.
        <br />
        (8)It is a defence for a person charged with an offence under subsection
        (1) to prove that the person had a reasonable excuse for sharing the
        photograph or film.
        <br />
        (9)A person who commits an offence under subsection (1) is liable on
        summary conviction to imprisonment for a term not exceeding the maximum
        term for summary offences or a fine (or both).
        <br />
        (10)A person who commits an offence under subsection (2), (3) or (4) is
        liable—
        <br />
        (a)on summary conviction, to imprisonment for a term not exceeding the
        general limit in a magistrates' court or a fine (or both);
        <br />
        (b)on conviction on indictment, to imprisonment for a term not exceeding
        2 years.
        <br />
        (11)In subsection (9) “the maximum term for summary offences” means—
        <br />
        (a)if the offence is committed before the time when section 281(5) of
        the Criminal Justice Act 2003 comes into force, six months;
        <br />
        (b)if the offence is committed after that time, 51 weeks.
        <br />
        (12)If on the trial of a person charged with an offence under subsection
        (2) or (3) a magistrates' court or jury finds the person not guilty of
        the offence charged, the magistrates' court or jury may find the person
        guilty of an offence under subsection (1).
        <br />
        (13)The Crown Court has the same powers and duties in relation to a
        person who is by virtue of subsection (12) convicted before it of an
        offence under subsection (1) as a magistrates' court would have on
        convicting the person of the offence.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        66C Sharing or threatening to share intimate photograph or film:
        exemptions
        <br />
        (1)A person (A) who shares a photograph or film which shows, or appears
        to show, another person (B) in an intimate state does not commit an
        offence under section 66B(1), (2) or (3) if—
        <br />
        (a)the photograph or film was taken in a place to which the public or a
        section of the public had or were permitted to have access (whether on
        payment or otherwise),
        <br />
        (b)B had no reasonable expectation of privacy from the photograph or
        film being taken, and
        <br />
        (c)B was, or A reasonably believes that B was, in the intimate state
        voluntarily.
        <br />
        (2)For the purposes of subsection (1)(b), whether a person had a
        reasonable expectation of privacy from a photograph or film being taken
        is to be determined by reference to the circumstances that the person
        sharing the photograph or film reasonably believes to have existed at
        the time the photograph or film was taken.
        <br />
        (3)A person (A) who shares a photograph or film which shows, or appears
        to show, another person (B) in an intimate state does not commit an
        offence under section 66B(1), (2) or (3) if—
        <br />
        (a)the photograph or film had, or A reasonably believes that the
        photograph or film had, been previously publicly shared, and
        <br />
        (b)B had, or A reasonably believes that B had, consented to the previous
        sharing.
        <br />
        (4)A person (A) who shares a photograph or film which shows, or appears
        to show, another person (B) in an intimate state does not commit an
        offence under section 66B(1) if—
        <br />
        (a)B is a person under 16,
        <br />
        (b)B lacks, or A reasonably believes that B lacks, capacity to consent
        to the sharing of the photograph or film, and
        <br />
        (c)the photograph or film is shared—
        <br />
        (i)with a healthcare professional acting in that capacity, or
        <br />
        (ii)otherwise in connection with the care or treatment of B by a
        healthcare professional.
        <br />
        (5)A person who shares a photograph or film which shows, or appears to
        show, a child in an intimate state does not commit an offence under
        section 66B(1) if the photograph or film is of a kind ordinarily shared
        between family and friends.
        <br />
        (6)A person who threatens to share a photograph or film which shows, or
        appears to show, another person in an intimate state does not commit an
        offence under section 66B(4) if, by reason of this section, the person
        would not commit an offence under section 66B(1), (2) or (3) by sharing
        the photograph or film in the circumstances conveyed by the threat.
      </div>
    </p>
  );

  const opt3 = (
    <p>
      <div className="lawBody">
        66D Sharing or threatening to share intimate photograph or film:
        interpretation (1)This section applies for the purposes of sections 66B
        and 66C.
        <br />
        (2)A person “shares” something if the person, by any means, gives or
        shows it to another person or makes it available to another person.
        <br />
        (3)But a provider of an internet service by means of which a photograph
        or film is shared is not to be regarded as a person who shares it.
        <br />
        (4)“Photograph” and “film” have the same meaning as in section 66A (see
        subsections (3) to (5) of that section).
        <br />
        (5)Except where a photograph or film falls within subsection (8), a
        photograph or film shows, or appears to show, another person in an
        intimate state if it shows or appears to show—
        <br />
        (a)the person participating or engaging in an act which a reasonable
        person would consider to be a sexual act,
        <br />
        (b)the person doing a thing which a reasonable person would consider to
        be sexual,
        <br />
        (c)all or part of the person's exposed genitals, buttocks or breasts,
        <br />
        (d)the person in an act of urination or defecation, or
        <br />
        (e)the person carrying out an act of personal care associated with the
        person's urination, defecation or genital or anal discharge.
        <br />
        (6)For the purposes of subsection (5)(c) the reference to all or part of
        a person's “exposed” genitals, buttocks or breasts includes—
        <br />
        (a)a reference to all or part of the person's genitals, buttocks or
        breasts visible through wet or otherwise transparent clothing,
        <br />
        (b)the case where all or part of the person's genitals, buttocks or
        breasts would be exposed but for the fact that they are covered only
        with underwear, and
        <br />
        (c)the case where all or part of the person's genitals, buttocks or
        breasts would be exposed but for the fact that they are obscured,
        provided that the area obscured is similar to or smaller than an area
        that would typically be covered by underwear worn to cover a person'
        genitals, buttocks or breasts (as the case may be).
        <br />
        (7)In subsection (6)(c) “obscured” means obscured by any means, other
        than by clothing that a person is wearing, including, in particular, by
        an object, by part of a person's body or by digital alteration.
        <br />
        (8)A photograph or film falls within this subsection if (so far as it
        shows or appears to show a person in an intimate state) it shows or
        appears to show something, other than breastfeeding, that is of a kind
        ordinarily seen in public.
        <br />
        (9)For the purposes of subsection (8) “breastfeeding” includes the
        rearranging of clothing in the course of preparing to breastfeed or
        having just finished breastfeeding.
      </div>
    </p>
  );
  const opt4 = (
    <p>
      <div className="lawBody">
        74 “Consent”
        <br />
        For the purposes of this Part, a person consents if he agrees by choice,
        and has the freedom and capacity to make that choice.
        <br />
        75Evidential presumptions about consent
        <br />
        (1)If in proceedings for an offence to which this section applies it is
        proved—
        <br />
        (a)that the defendant did the relevant act,
        <br />
        (b)that any of the circumstances specified in subsection (2) existed,
        and
        <br />
        (c)that the defendant knew that those circumstances existed,
        <br />
        the complainant is to be taken not to have consented to the relevant act
        unless sufficient evidence is adduced to raise an issue as to whether he
        consented, and the defendant is to be taken not to have reasonably
        believed that the complainant consented unless sufficient evidence is
        adduced to raise an issue as to whether he reasonably believed it.
        <br />
        (2)The circumstances are that—
        <br />
        (a)any person was, at the time of the relevant act or immediately before
        it began, using violence against the complainant or causing the
        complainant to fear that immediate violence would be used against him;
        <br />
        (b)any person was, at the time of the relevant act or immediately before
        it began, causing the complainant to fear that violence was being used,
        or that immediate violence would be used, against another person;
        <br />
        (c)the complainant was, and the defendant was not, unlawfully detained
        at the time of the relevant act;
        <br />
        (d)the complainant was asleep or otherwise unconscious at the time of
        the relevant act;
        <br />
        (e)because of the complainant's physical disability, the complainant
        would not have been able at the time of the relevant act to communicate
        to the defendant whether the complainant consented;
        <br />
        (f)any person had administered to or caused to be taken by the
        complainant, without the complainant's consent, a substance which,
        having regard to when it was administered or taken, was capable of
        causing or enabling the complainant to be stupefied or overpowered at
        the time of the relevant act.
        <br />
        (3)In subsection (2)(a) and (b), the reference to the time immediately
        before the relevant act began is, in the case of an act which is one of
        a continuous series of sexual activities, a reference to the time
        immediately before the first sexual activity began.
        <br />
        76Conclusive presumptions about consent
        <br />
        (1)If in proceedings for an offence to which this section applies it is
        proved that the defendant did the relevant act and that any of the
        circumstances specified in subsection (2) existed, it is to be
        conclusively presumed—
        <br />
        (a)that the complainant did not consent to the relevant act, and
        <br />
        (b)that the defendant did not believe that the complainant consented to
        the relevant act.
        <br />
        (2)The circumstances are that—
        <br />
        (a)the defendant intentionally deceived the complainant as to the nature
        or purpose of the relevant act;
        <br />
        (b)the defendant intentionally induced the complainant to consent to the
        relevant act by impersonating a person known personally to the
        complainant.
        <br />
        <br />
        79 Part 1: general interpretation
        <br />
        (1)The following apply for the purposes of this Part.
        <br />
        (2)Penetration is a continuing act from entry to withdrawal.
        <br />
        (3)References to a part of the body include references to a part
        surgically constructed (in particular, through gender reassignment
        surgery).
        <br />
        (4)“Image” means a moving or still image and includes an image produced
        by any means and, where the context permits, a three-dimensional image.
        <br />
        (5)References to an image of a person include references to an image of
        an imaginary person.
        <br />
        (6)“Mental disorder” has the meaning given by section 1 of the Mental
        Health Act 1983 (c. 20).
        <br />
        (7)References to observation (however expressed) are to observation
        whether direct or by looking at an image.
        <br />
        (8)Touching includes touching—
        <br />
        (a)with any part of the body,
        <br />
        (b)with anything else,
        <br />
        (c)through anything,
        <br />
        and in particular includes touching amounting to penetration.
        <br />
        (9)“Vagina” includes vulva.
        <br />
        (10)In relation to an animal, references to the vagina or anus include
        references to any similar part.
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
          66B
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
          66C
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
          66D
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
          74, 75, 76, 79
        </div>
      </div>
      <div className="lawSelected">
        {law == "opt1" ? opt1 : null}
        {law == "opt2" ? opt2 : null}
        {law == "opt3" ? opt3 : null}
        {law == "opt4" ? opt4 : null}
      </div>
    </>
  );
}

export default EngLaw;
