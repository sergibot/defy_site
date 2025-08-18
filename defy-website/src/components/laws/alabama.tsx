import { useState } from "react";
function AlabamaLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
        Criminal Code
        <br />
        Distribution of DFIAM OR IBSAM: Max. 1 year / $6,000 (10 years if
        repeated)
        <br />
        Contingent Statute(s): 13A-12-190
      </div>
      <div className="lawBody">
        <div style={{ fontWeight: "bold" }}>
          Section 13A-6-240
          <br />
          Distributing a private image with intent to harass, threaten, coerce,
          or intimidate the person depicted.
        </div>
        {/* <br /> */}
        (a) A person commits the crime of distributing a private image if he or
        she knowingly posts, emails, texts, transmits, or otherwise distributes
        a private image with the intent to harass, threaten, coerce, or
        intimidate the person depicted when the depicted person has not
        consented to the transmission and the depicted person had a reasonable
        expectation of privacy against transmission of the private image.
        <br />
        (b) For purposes of this section, private image means a photograph,
        digital image, video, film, or other recording of a person who is
        identifiable from the recording itself or from the circumstances of its
        transmission and who is engaged in any act of sadomasochistic abuse,
        sexual intercourse, sexual excitement, masturbation, breast nudity, as
        defined in Section 13A-12-190, genital nudity, or other sexual conduct.
        The term includes a recording that has been edited, altered, or
        otherwise manipulated from its original form.
        <br />
        (c)(1) For purposes of this section, a reasonable expectation of privacy
        includes, but is not limited to, either of the following circumstances:
        <br />
        <div style={{ paddingLeft: "1em" }}>
          a. The person depicted in the private image created it or consented to
          its creation believing that it would remain confidential.
          <br />
          b. The sexual conduct depicted in the image was involuntary.
        </div>
        (2) There is no reasonable expectation of privacy against the
        transmission of a private image made voluntarily in a public or
        commercial setting.
        <br />
        (d) It is a defense to distributing a private image if the distribution
        of the private image was made in the public interest, including, but not
        limited to, the reporting of unlawful conduct; the lawful and common
        practices of law enforcement, legal proceedings, or medical treatment;
        or a bona fide attempt to prevent further distribution of the private
        image.
        <br />
        (e) A violation of this section is a Class A misdemeanor. A subsequent
        adjudication or conviction under this section is a Class C felony.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
        <div style={{ fontWeight: "bold" }}>
          Section 13A-12-190
          <br />
          Definitions.
        </div>
        For the purposes of this division, the following terms have the
        following meanings:
        <br />
        (1) BREAST NUDITY. The lewd showing of the post-pubertal human female
        breasts below a point immediately above the top of the areola.
        <br />
        (2) CHILD SEXUAL ABUSE MATERIAL. Any visual depiction of an individual
        under 18 years of age engaged in any act of sexually explicit conduct,
        including a virtually indistinguishable depiction.
        <br />
        (3) DISPLAY PUBLICLY. The exposing, placing, posting, exhibiting, or in
        any fashion displaying in any location, whether public or private, an
        item in a manner that it may be readily seen and its content or
        character distinguished by normal unaided vision viewing it from a
        public thoroughfare, depot, or vehicle.
        <br />
        (4) DISSEMINATE. To transmit, distribute, sell, lend, provide, transfer,
        or show, including through electronic means.
        <br />
        (5) GENITAL NUDITY. The lewd showing of the genitals or pubic area.
        <br />
        (6) KNOWINGLY. A person knowingly acts when the person knows the nature
        of the child sexual abuse material. A person knows the nature of the
        material when either of the following circumstances exist:
        <br />
        a. The person is aware of the character and content of the material.
        <br />
        b. The person recklessly disregards circumstances suggesting the
        character and content of the material.
        <br />
        (7) MASTURBATION. Manipulation, by hand or instrument, of the human
        genitals, whether one’s own or another’s for the purpose of sexual
        stimulation.
        <br />
        (8) OTHER SEXUAL CONDUCT. Any touching of the genitals, pubic areas, or
        buttocks of the human male or female, or the breasts of the female,
        whether alone or between members of the same or opposite sex or between
        humans and animals in an act of apparent sexual stimulation or
        gratification.
        <br />
        (9) PUBLIC THOROUGHFARE, DEPOT, OR VEHICLE. Any street, highway, park,
        depot, or transportation platform or other place, whether indoors or
        outdoors, or any vehicle for public transportation, owned or operated by
        government, either directly or through a public corporation or
        authority, or owned or operated by any agency of public transportation
        that is designed for the use, enjoyment, or transportation of the
        general public.
        <br />
        (10) SADOMASOCHISTIC ABUSE. Either of the following:
        <br />
        a. Flagellation or torture, for the purpose of sexual stimulation, by or
        upon an individual who is nude or clad in undergarments or in a
        revealing or bizarre costume.
        <br />
        b. The condition of an individual who is nude or clad in undergarments
        or in a revealing or bizarre costume being fettered, bound, or otherwise
        physically restrained for the purpose of sexual stimulation.
        <br />
        (11) SEPARATE OFFENSE. The depiction of an individual less than 18 years
        of age that violates this division shall constitute a separate offense
        for each single visual depiction.
        <br />
        (12) SEXUAL EXCITEMENT. The condition of human male or female genitals
        when in a state of sexual stimulation.
        <br />
        (13) SEXUAL INTERCOURSE. Intercourse, real or simulated, whether
        genital-genital, oral-genital, anal-genital, or oral-anal, whether
        between individuals of the same or opposite sex or between a human and
        an animal.
        <br />
        (14) SEXUALLY EXPLICIT CONDUCT. Actual or simulated conduct that
        includes sadomasochistic abuse, sexual excitement, sexual intercourse,
        masturbation, breast nudity, genital nudity, or other sexual conduct.
        <br />
        (15) VIRTUALLY INDISTINGUISHABLE DEPICTION. A visual depiction created,
        altered, or produced by digital, computer generated, or other means that
        a reasonable person would conclude is of an actual individual under 18
        years of age engaged in sexually explicit conduct.
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

export default AlabamaLaw;
