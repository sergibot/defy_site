import { useState } from "react";
function ScotlandLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        Abusive Behaviour and Sexual Harm (Scotland) Act 2016
        <br />
        Passed & Effective 2016
        <br />
        IBSAM/DFIAM Distribution: (Incl. threats) - summary conv.n: max. 1 year
        + a fine; conviction on indictment: max. 5 years + a fine
        <br />
        Criminal Code
      </div>
      <div className="lawBody">
        2
        <br />
        Disclosing, or threatening to disclose, an intimate photograph or film
        <br />
        (1) A person (“A”) commits an offence if—
        <br />
        (a) A discloses, or threatens to disclose, a photograph or film which
        shows, or appears to show, another person (“B”) in an intimate
        situation,
        <br />
        (b) by doing so, A intends to cause B fear, alarm or distress or A is
        reckless as to whether B will be caused fear, alarm or distress, and
        <br />
        (c) the photograph or film has not previously been disclosed to the
        public at large, or any section of the public, by B or with B's consent.
        <br />
        (2) For the purposes of this section, a photograph or film is disclosed
        if it, or any data or other thing which is capable of being converted
        into it, is given, shown or made available to a person other than B.
        <br />
        (3) In proceedings for an offence under subsection (1), A has a defence
        if any of the following facts is established—
        <br />
        (a) B consented to the photograph or film being disclosed,
        <br />
        (b) A reasonably believed that B consented to the photograph or film
        being disclosed,
        <br />
        (c) A reasonably believed that disclosure of the photograph or film was
        necessary for the purposes of the prevention, detection, investigation
        or prosecution of crime, or
        <br />
        (d) A reasonably believed that disclosure of the photograph or film was
        in the public interest.
        <br />
        (4) For the purposes of subsection (3), consent to the photograph or
        film being disclosed may be—
        <br />
        (a) consent which is specific to the particular disclosure or (as the
        case may be) the particular threatened disclosure, or
        <br />
        (b) consent to disclosure generally where that consent covers the
        particular disclosure or (as the case may be) the particular threatened
        disclosure.
        <br />
        (5) In proceedings for an offence under subsection (1), A has a defence
        if the following matter is established—
        <br />
        (a) B was in the intimate situation shown in the photograph or film,
        <br />
        (b) B was not in the intimate situation as a result of a deliberate act
        of another person to which B did not agree, and
        <br />
        (c) when B was in the intimate situation—
        <br />
        (i) B was in a place to which members of the public had access (whether
        or not on payment of a fee), and
        <br />
        (ii) members of the public were present.
        <br />
        (6) For the purposes of subsection (3), a fact is established, and for
        the purposes of subsection (5), the matter is established, if—
        <br />
        (a) sufficient evidence is adduced to raise an issue as to whether that
        is the case, and
        <br />
        (b) the prosecution does not prove beyond reasonable doubt that it is
        not the case.
        <br />
        (7) A person who commits an offence under subsection (1) is liable—
        <br />
        (a) on summary conviction, to imprisonment for a term not exceeding 12
        months or a fine not exceeding the statutory maximum (or both),
        <br />
        (b) on conviction on indictment, to imprisonment for a term not
        exceeding 5 years or a fine (or both).
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
          ABSH Act 2016 §2
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

export default ScotlandLaw;
