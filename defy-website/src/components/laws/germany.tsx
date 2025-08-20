import { useState } from "react";
function GermanyLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        StGB 184k, 201a
        <br />
        Passed & Effective: 2021
        <br />
        Criminal Code
        <br />
        Creation/Distribution of IBSAM: Max 2 yrs jail or a fine
        <br />
        https://www.gesetze-im-internet.de/englisch_stgb/englisch_stgb.html#p1870
      </div>
      <div className="lawBody">
        Section 184k
        <br />
        Violation of intimate parts of body by taking photographs or other
        images
        <br />
        (1) Whoever
        <br />
        1. intentionally or knowingly, without being authorised to do so,
        creates or transmits a photograph or other image of the genitals,
        buttocks, female breast of another person, or of underwear which is
        covering those parts of the body, insofar as those parts are protected
        from view,
        <br />
        2. uses or makes available to a third party a photograph or other image
        created through an act of the type set out in no. 1 or
        <br />
        3. makes available to a third party, in the awareness of lacking the
        authorisation to do so, a photograph or other image of the type set out
        in no. 1 which was produced with authorisation
        <br />
        incurs a penalty of imprisonment not exceeding two years or a fine.
        <br />
        (2) The offence is only prosecuted upon request, unless the prosecuting
        authority deems there to be a special public interest in prosecution
        which calls for ex officio intervention.
        <br />
        (3) Subsection (1) does not apply to activities done by way of
        exercising overriding legitimate interests, namely those serving the
        arts or science, research or teaching, to report about current or
        historical events, or for similar purposes.
        <br />
        (4) The image media and image recording devices or other technical means
        used by the offender or participant may be confiscated.
        <br />
        Section 74a applies.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        Section 201a
        <br />
        Violation of intimate privacy and of rights of personality by taking
        photographs or other images
        <br />
        (1) Whoever
        <br />
        1. without being authorised to do so creates or transmits photographs or
        other images of another person in private premises or in a room which is
        specially protected from view, and thereby violates the intimate privacy
        of the person depicted,
        <br />
        2. without being authorised to do so produces a photograph or other
        image exhibiting the helplessness of another person or transmits such
        image, and thereby violates the intimate privacy of the person depicted,
        <br />
        3. without being authorised to do so creates or transmits a photograph
        or other image which in a grossly offensive manner exhibits a deceased
        person,
        <br />
        4. uses a photograph or other image produced by an offence under no. 1
        to no. 3 or makes it available to a third party or
        <br />
        5. makes available to a third party, in the awareness of lacking
        authorisation to do so, a photograph or other image of the type set out
        in no. 1 to no. 3 which was produced with authorisation, and, in the
        cases under no. 1 and no. 2, thereby violates the intimate privacy of
        the person depicted,
        <br />
        incurs a penalty of imprisonment for a term not exceeding two years or a
        fine.
        <br />
        (2) Whoever, without being authorised to do so, makes available to a
        third party a photograph or other image of another person which is of
        such a nature as to significantly damage the reputation of the person
        depicted incurs the same penalty. This also applies, under the same
        conditions, to a photograph or other image of a deceased person.
        <br />
        (3) Whoever
        <br />
        1. produces or offers to procure for a third party for a consideration
        or
        <br />
        2. procures for themselves or for a third party for a consideration
        <br />
        an image showing the nakedness of another person under 18 years of age
        incurs a penalty of imprisonment for a term not exceeding two years or a
        fine.
        <br />
        (4) Subsection (1) no. 2 and no. 3, also in conjunction with subsection
        (1) no. 4 or no. 5, and subsections (2) and (3) do not apply to
        activities done by way of exercising overriding legitimate interests,
        namely those serving the arts or science, research or teaching, to
        report about current or historical events, or for similar purposes.
        <br />
        (5) The image media and image recording devices or other technical means
        used by the offender or participant may be confiscated.
        <br />
        Section 74a applies.
      </div>
    </p>
  );

  const opt3 = (
    <p>
      <div className="lawBody">
        Section 74
        <br />
        Confiscation of products of crime, means of crime or objects of crime
        from offenders and participants
        <br />
        (1) Objects arising from the commission of an intentional offence
        (products of crime) or used in its commission or preparation or
        designated for such commission or preparation (means of crime) may be
        confiscated.
        <br />
        (2) Objects relating to an offence (objects of crime) are subject to
        confiscation pursuant to specific provisions.
        <br />
        (3) The confiscation is admissible only if, at the time of the decision,
        the offender or participant owns the object or is entitled to it. This
        also applies to confiscation which is prescribed or available under a
        specific provision beyond subsection (1).
        <br />
        Section 74a
        <br />
        Confiscation of products of crime, means of crime or objects of crime
        from other persons
        <br />
        Where a statute refers to this provision, objects may also be
        confiscated in derogation from section 74 (3) if, at the time of the
        decision, the person who owns them or has a right to them
        <br />
        1. contributed at least recklessly to the objects being used as the
        means of crime or if they were the object of crime or
        <br />
        2. acquired the objects in a reprehensible manner in the full knowledge
        of the circumstances which would have allowed for their confiscation
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
          184k
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
        201a
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
          74a
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

export default GermanyLaw;
