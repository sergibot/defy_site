import { useState } from "react";
function UtahLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        76-5b-205
        <br />
        Passed & Effective 5/4/2022
        <br />
        Criminal Code
        <br />
        Contingent on: 76-3-301, 76-3-204, 76-3-203
        <br />
        DFIAM Distribution: Max. 1 yr & $2,500; max. 5 yrs & $5,000 for DF-CSAEM
      </div>
      <div className="lawBody">
        Effective 5/4/2022 76-5b-205 Unlawful distribution of a counterfeit
        intimate image -- Penalty.
        <br />
        (1)
        <br />
        (a) As used in this section:
        <br />
        (i) "Child" means an individual under 18 years old.
        <br />
        (ii) "Counterfeit intimate image" means any visual depiction,
        photograph, film, video, recording, picture, or computer or
        computer-generated image or picture, whether made or produced by
        electronic, mechanical, or other means, that has been edited,
        manipulated, or altered to depict the likeness of an identifiable
        individual and purports to, or is made to appear to, depict that
        individual's:
        <br />
        (A) exposed human male or female genitals or pubic area, with less than
        an opaque covering;
        <br />
        (B) a female breast with less than an opaque covering, or any portion of
        the female breast below the top of the areola; or
        <br />
        (C) the individual engaged in any sexually explicit conduct or simulated
        sexually explicit conduct.
        <br />
        (iii) "Distribute" means the same as that term is defined in Section
        76-5b-203.
        <br />
        (iv) "Sexually explicit conduct" means the same as that term is defined
        in Section 76-5b-203.
        <br />
        (v) "Simulated sexually explicit conduct" means the same as that term is
        defined in Section 76-5b-203.
        <br />
        (vi) "Single criminal episode" means the same as that term is defined in
        Section 76-1-401.
        <br />
        (b) Terms defined in Section 76-1-101.5 apply to this section.
        <br />
        (2)
        <br />
        (a) An actor commits the offense of unlawful distribution of a
        counterfeit intimate image if the actor knowingly or intentionally
        distributes a counterfeit intimate image that the actor knows or should
        reasonably know would cause a reasonable person to suffer emotional or
        physical distress or harm, if:
        <br />
        (i) the actor has not received consent from the depicted individual to
        distribute the counterfeit intimate image; and
        <br />
        (ii) the counterfeit intimate image was created or provided by the actor
        without the knowledge and consent of the depicted individual.
        <br />
        (b) An actor who is 18 years old or older commits aggravated unlawful
        distribution of a counterfeit intimate image if, in committing the
        offense described in Subsection (2)(a), the individual depicted in the
        counterfeit intimate image is a child.
        <br />
        (3)
        <br />
        (a)
        <br />
        (i) A violation of Subsection (2)(a) that is knowing or intentional is a
        class A misdemeanor.
        <br />
        (ii) Notwithstanding Subsection (3)(a)(i), a violation of Subsection
        (2)(a) that is knowing or intentional is a third degree felony on a
        second or subsequent conviction for an offense under this section that
        does not arise from a single criminal episode.
        <br />
        (b)
        <br />
        (i) A violation of Subsection (2)(b) that is knowing or intentional is a
        third degree felony.
        <br />
        (ii) Notwithstanding Subsection (3)(b)(i), a violation of Subsection
        (2)(b) that is knowing or intentional is a second degree felony on a
        second or subsequent conviction for an offense under this section that
        does not arise from a single criminal episode.
        <br />
        (c) This section does not apply to an actor who engages in conduct that
        constitutes a violation of this section to the extent that the actor is
        chargeable, for the same conduct, under Section 76-5b-201, sexual
        exploitation of a minor, or Section 76-5b-201.1, aggravated sexual
        exploitation of a minor.
        <br />
        (4) This section does not apply to:
        <br />
        (a)
        <br />
        (i) lawful practices of law enforcement agencies;
        <br />
        (ii) prosecutorial agency functions;
        <br />
        (iii) the reporting of a criminal offense;
        <br />
        (iv) court proceedings or any other judicial proceeding; or
        <br />
        (v) lawful and generally accepted medical practices and procedures;
        <br />
        (b) a counterfeit intimate image if the individual depicted in the image
        voluntarily allows public exposure of the image;
        <br />
        (c) a counterfeit intimate image that is portrayed in a lawful
        commercial setting; or
        <br />
        (d) a counterfeit intimate image that is related to a matter of public
        concern or interest or protected by the First Amendment to the United
        States Constitution or Article I, Sections 1 and 15 of the Utah
        Constitution.
        <br />
        (5)
        <br />
        (a) This section does not apply to an Internet service provider or
        interactive computer service, as defined in 47 U.S.C. Sec. 230(f)(2), a
        provider of an electronic communications service as defined in 18 U.S.C.
        Sec. 2510, a telecommunications service, information service, or mobile
        service as defined in 47 U.S.C. Sec. 153, including a commercial mobile
        service as defined in 47 U.S.C. Sec. 332(d), or a cable operator as
        defined in 47 U.S.C. Sec. 522, if:
        <br />
        (i) the distribution of a counterfeit intimate image by the Internet
        service provider occurs only incidentally through the provider's
        function of:
        <br />
        (A) transmitting or routing data from one person to another person; or
        <br />
        (B) providing a connection between one person and another person;
        <br />
        (ii) the provider does not intentionally aid or abet in the distribution
        of the counterfeit intimate image; and
        <br />
        (iii) the provider does not knowingly receive from or through a person
        who distributes the counterfeit intimate image a fee greater than the
        fee generally charged by the provider, as a specific condition for
        permitting the person to distribute the counterfeit intimate image.
        <br />
        (b) This section does not apply to a hosting company, as defined in
        Section 76-10-1230, if:
        <br />
        (i) the distribution of a counterfeit intimate image by the hosting
        company occurs only incidentally through the hosting company's function
        of providing data storage space or data caching to a person;
        <br />
        (ii) the hosting company does not intentionally engage, aid, or abet in
        the distribution of the counterfeit intimate image;
        <br />
        (iii) the hosting company does not knowingly receive from or through a
        person who distributes the counterfeit intimate image a fee greater than
        the fee generally charged by the provider, as a specific condition for
        permitting the person to distribute, store, or cache the counterfeit
        intimate image; and
        <br />
        (iv) the hosting company immediately removes the counterfeit intimate
        image upon notice from a law enforcement agency, prosecutorial agency,
        or the individual purportedly depicted in the counterfeit intimate
        image.
        <br />
        (c) A service provider, as defined in Section 76-10-1230, is not
        negligent under this section if it complies with Section 76-10-1231.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawHeader">
        76-5b-203
        <br />
        Passed & Effective 2022
        <br />
        Contingent on: 76-3-301, 76-3-204, 76-3-203
        <br />
        Criminal Code
        <br />
        IBSAM Distribution: Max. 1 yr & $2,500; max. 5 yrs & $5,000 if multiple
      </div>
      <div className="lawBody">
        Effective 5/4/2022 76-5b-203 Distribution of an intimate image --
        Penalty.
        <br />
        (1)
        <br />
        (a) As used in this section:
        <br />
        (i) "Distribute" means selling, exhibiting, displaying, wholesaling,
        retailing, providing, giving, granting admission to, providing access
        to, or otherwise transferring or presenting an image to another
        individual, with or without consideration.
        <br />
        (ii) "Intimate image" means any visual depiction, photograph, film,
        video, recording, picture, or computer or computer-generated image or
        picture, whether made or produced by electronic, mechanical, or other
        means, that depicts:
        <br />
        (A) exposed human male or female genitals or pubic area, with less than
        an opaque covering;
        <br />
        (B) a female breast with less than an opaque covering, or any portion of
        the female breast below the top of the areola; or
        <br />
        (C) the individual engaged in any sexually explicit conduct.
        <br />
        (iii) "Sexually explicit conduct" means actual or simulated:
        <br />
        (A) sexual intercourse, including genital-genital, oral-genital,
        anal-genital, or oral-anal, whether between persons of the same or
        opposite sex;
        <br />
        (B) masturbation;
        <br />
        (C) bestiality;
        <br />
        (D) sadistic or masochistic activities;
        <br />
        (E) exhibition of the genitals, pubic region, buttocks, or female breast
        of any individual;
        <br />
        (F) visual depiction of nudity or partial nudity;
        <br />
        (G) fondling or touching of the genitals, pubic region, buttocks, or
        female breast; or
        <br />
        (H) explicit representation of the defecation or urination functions.
        <br />
        (iv) "Simulated sexually explicit conduct" means a feigned or pretended
        act of sexually explicit conduct that duplicates, within the perception
        of an average person, the appearance of an actual act of sexually
        explicit conduct.
        <br />
        (v) "Single criminal episode" means the same as that term is defined in
        Section 76-1-401.
        <br />
        (b) Terms defined in Section 76-1-101.5 apply to this section.
        <br />
        (2)
        <br />
        (a) An actor commits the offense of distribution of an intimate image
        if:
        <br />
        (i) the actor knowingly or intentionally distributes to a third party,
        or knowingly duplicates or copies an intimate image of an individual who
        is 18 years old or older and knows or should know that the distribution,
        duplication or copying would cause a reasonable person to suffer
        emotional distress or harm;
        <br />
        (ii) the actor has not received consent from the individual depicted in
        the image to distribute the intimate image;
        <br />
        (iii) the intimate image was created by or provided to the actor under
        circumstances in which the individual depicted in the image has a
        reasonable expectation of privacy; and
        <br />
        (iv) except as provided in Subsection (2)(b), actual emotional distress
        or harm is caused to the individual depicted in the image as a result of
        the distribution.
        <br />
        (b) Subsection (2)(a)(iv) is not an element of the offense described in
        Subsection (2)(a) if:
        <br />
        (i) the individual depicted in the intimate image was the victim of a
        crime;
        <br />
        (ii) the intimate image was provided to law enforcement as part of an
        investigation or prosecution of a crime committed against the victim;
        <br />
        (iii) the intimate image was distributed without a legitimate law
        enforcement or investigative purpose by an individual who had access to
        the intimate image due to the individual's association with the
        investigation or prosecution described in Subsection (2)(b)(ii); and
        (iv) the victim is incapacitated or deceased.
        <br />
        (3)
        <br />
        (a) A violation of Subsection (2) is a class A misdemeanor.
        <br />
        (b) Notwithstanding Subsection (3)(a), a violation of Subsection (2) is
        a third degree felony on a second or subsequent conviction for an
        offense under this section that does not arise from a single criminal
        episode.
        <br />
        (4) This section does not apply to:
        <br />
        (a) except as provided in Section 76-5b-203.5:
        <br />
        (i) lawful practices of law enforcement agencies;
        <br />
        (ii) prosecutorial agency functions;
        <br />
        (iii) the reporting of a criminal offense;
        <br />
        (iv) court proceedings or any other judicial proceeding; or
        <br />
        (v) lawful and generally accepted medical practices and procedures;
        <br />
        (b) an intimate image if the individual portrayed in the image
        voluntarily allows public exposure of the image;
        <br />
        (c) an intimate image that is portrayed in a lawful commercial setting;
        or
        <br />
        (d) an intimate image that is related to a matter of public concern or
        interest.
        <br />
        (5)
        <br />
        (a) This section does not apply to an Internet service provider or
        interactive computer service, as defined in 47 U.S.C. Sec. 230(f)(2), a
        provider of an electronic communications service as defined in 18 U.S.C.
        Sec. 2510, a telecommunications service, information service, or mobile
        service as defined in 47 U.S.C. Sec. 153, including a commercial mobile
        service as defined in 47 U.S.C. Sec. 332(d), or a cable operator as
        defined in 47 U.S.C. Sec. 522, if:
        <br />
        (i) the distribution of an intimate image by the Internet service
        provider occurs only incidentally through the provider's function of:
        <br />
        (A) transmitting or routing data from one person to another person; or
        <br />
        (B) providing a connection between one person and another person;
        <br />
        (ii) the provider does not intentionally aid or abet in the distribution
        of the intimate image; and
        <br />
        (iii) the provider does not knowingly receive from or through a person
        who distributes the intimate image a fee greater than the fee generally
        charged by the provider, as a specific condition for permitting the
        person to distribute the intimate image.
        <br />
        (b) This section does not apply to a hosting company, as defined in
        Section 76-10-1230, if:
        <br />
        (i) the distribution of an intimate image by the hosting company occurs
        only incidentally through the hosting company's function of providing
        data storage space or data caching to a person;
        <br />
        (ii) the hosting company does not intentionally engage, aid, or abet in
        the distribution of the intimate image; and
        <br />
        (iii) the hosting company does not knowingly receive from or through a
        person who distributes the intimate image a fee greater than the fee
        generally charged by the provider, as a specific condition for
        permitting the person to distribute, store, or cache the intimate image.
        <br />
        (c) A service provider, as defined in Section 76-10-1230, is not
        negligent under this section if it complies with Section 76-10-1231.
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
          76-5b-205
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
          76-5b-205
        </div>
      </div>
      <div className="lawSelected">
        {law == "opt1" ? opt1 : null}
        {law == "opt2" ? opt2 : null}
      </div>
    </>
  );
}

export default UtahLaw;
