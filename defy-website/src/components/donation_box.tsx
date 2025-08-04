function DonationBox() {
  return (
    <div>
      <script
        src="https://donorbox.org/widget.js"
        paypalExpress="true"
      ></script>{" "}
      <iframe
        src="https://donorbox.org/embed/defyabuse-launch-fund-current-ops-for-another-year?"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameborder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{maxWidth:'500px', minWidth: '250px', maxHeight:'none'}}
        allow="payment"
      ></iframe>
    </div>
  );
}

export default DonationBox;

// https://github.com/jwallet/donorbox-clone