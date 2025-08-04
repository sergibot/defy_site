function Hero() {
  return (
    <div>
      <p>hero</p>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1
          className="h-full"
          style={{
            fontFamily: 'AnotherTypewriter',
            // flex: '1,1,25px',
            // paddingRight: '1em',
            // alignContent: 'center',
            // alignSelf: 'center',
            // alignItems: 'center',
            // paddingTop: '0.5rem',
          }}
        >
            DefyAbuse
        </h1>
        <h2
          className="h-full"
          style={{
            fontFamily: 'AnotherTypewriter',
            // flex: '1,1,25px',
            // alignContent: 'center',
            // alignSelf: 'center',
            // alignItems: 'center',
            // paddingTop: '0.5rem',
          }}
        >
            Consent is the line.
        </h2>
    </div>
    </div>
  );
}

export default Hero;
