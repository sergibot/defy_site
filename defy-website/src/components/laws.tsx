function Laws() {





  return (
    <div>
      <div
        style={{
          height: "60px",
          backgroundColor: "lightcoral",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        <label htmlFor="laws">Country/State:</label>
        <select name="laws" id="laws">
          <option value="UK">United Kingdom</option>
        </select>
      </div>
      <div
        style={{
          // height: `calc(100vh-60px)`,
          height: '100%',
          backgroundColor: "blue",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        <p>sdfsd</p>
      </div>
    </div>
  );
}

export default Laws;
