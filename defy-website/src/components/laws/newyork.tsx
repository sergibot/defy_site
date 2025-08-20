import { useState } from "react";
function NYLaw() {
  const opt1 = (
    <p>
      <div className="lawHeader">
      Passed [2023]; Effective Nov 2023
      <br/>
      IBSAM/DFIAM Distribution: Max 1 yr jail and/or max $1k fine
      </div>
      <div className="lawBody">
      UNLAWFUL DISSEMINATION OR PUBLICATION OF AN INTIMATE IMAGE Penal Law § 245.15 (1) (Committed on or after Nov. 28, 2023) 1

      <br/>
The (specify) count is Publication of an Intimate Image.

      <br/>
Unlawful

Dissemination

or

      <br/>
Under our law, a person is guilty of Unlawful Dissemination or Publication of an Intimate Image when,

      <br/>
with intent to cause harm to the emotional, financial or physical welfare of another person, they intentionally disseminate or publish a still or video image depicting such other person
      <br/>

Select appropriate alternative(s):
      <br/>

with one or more intimate parts exposed [or] engaging in sexual conduct with another person,
      <br/>

[including an image created or altered by digitization, where such person may reasonably be identified from the still or video image itself or from information displayed in connection with the still or video image]; and
      <br/>

the actor knew or reasonably should have known that the person depicted did not consent to such dissemination or publication, [including the dissemination or publication of an image taken with the consent of the person depicted when such person had a reasonable expectation that the image would remain private regardless of whether the actor was present when such image was taken].
      <br/>

The following terms used in that definition have a special meaning:
      <br/>
INTIMATE PART means the naked genitals, pubic area, anus or female nipple of the person. 2

      <br/>
SEXUAL CONDUCT means sexual intercourse, oral sexual conduct, anal sexual conduct, aggravated sexual contact, or sexual contact.3 

      <br/>
DIGITIZATION means to alter an image in a realistic manner utilizing an image or images of a person, other than the person depicted, or computer generated images.4 

      <br/>
DISSEMINATE means to give, provide, lend, deliver, mail, send, forward, transfer or transmit, electronically or otherwise to another person.5 

      <br/>
[PUBLISH means to:

      <br/>
Select appropriate alternative(s):

      <br/>
disseminate . . . 6 with the intent that such image or images be disseminated to ten or more persons; or

      <br/>
disseminate with the intent that such images be sold by another person; or

      <br/>
post, present, display, exhibit, circulate, advertise or allows

      <br/>
access, electronically or otherwise, so as to make an image or images available to the public; or
      <br/>
disseminate with the intent that an image or images be posted, presented, displayed, exhibited, circulated, advertised or made accessible, electronically or otherwise and to make such image or images available to the public.7 ]
      <br/>

INTENT means conscious objective or purpose. 8 Thus, a person acts with intent to cause harm to the emotional, financial or physical welfare of another person when that person's conscious objective or purpose is to do so.
      <br/>

And a person intentionally disseminates or publishes a still or video image of such other person when that person’s conscious objective or purpose is to do so.
      <br/>

Note: The statute states that this Penal Law section shall not apply to the four circumstances listed below. If the defendant places one or more of those circumstances in issue the People must disprove the applicable circumstance(s) beyond a reasonable doubt; and the court must therefore set forth an additional element with respect to the circumstance(s) in issue.

      <br/>
This law 9 shall not apply to the following:

      <br/>
Select appropriate alternative(s):

      <br/>
the reporting of unlawful conduct;

      <br/>
dissemination or publication of an intimate image made during lawful and common practices of law enforcement, legal proceedings or medical treatment;

      <br/>
images involving voluntary exposure in a public or commercial setting; or

      <br/>
dissemination or publication of an intimate image made for a legitimate public purpose. 10

      <br/>
In order for you to find the defendant guilty of this crime, the People are required to prove, from all the evidence in the case, beyond a reasonable doubt, each of the following (specify number) elements:

      <br/>
1. That on or about (date) , in the County of (County) , the defendant, (defendant's name) 11 intentionally disseminated

      <br/>
or published a [still or video] image depicting a person

      <br/>
Select appropriate alternative(s):

      <br/>
with one or more intimate parts exposed [or] engaging in sexual conduct with another person,

      <br/>
[including an image created or altered by digitization, where the person depicted may reasonably be identified from the still or video image itself or from information displayed in connection with the still or video image]; and

      <br/>
2. That the defendant did so with intent to cause harm to the emotional, financial or physical welfare of another person; and

      <br/>
3. That the defendant knew or reasonably should have known that the person depicted did not consent to such dissemination or publication,

      <br/>
[including the dissemination or publication of an image taken with the consent of the person depicted when such person had a reasonable expectation that the

      <br/>
    image would remain private regardless of whether the actor was present when such image was taken] [and]
      <br/>

4. [Note: If appropriate, here add a lawful circumstance the defendant placed in issue that the People must accordingly negate: e.g.: That the defendant was not reporting unlawful conduct].
      <br/>

If you find the People have proven beyond a reasonable doubt each of those elements, you must find the defendant guilty of this crime.
      <br/>

If you find the People have not proven beyond a reasonable doubt any one or more of those elements, you must find the defendant not guilty of this crime.
      </div>
    </p>
  );

  const opt2 = (
    <p>
      <div className="lawBody">
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
          Penal Law § 245.15 (1)
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

export default NYLaw;
