import React, { useEffect, useState } from "react";

export default function LoginForm() {
  // Declare voucherCode state
  const [voucherCode, setVoucherCode] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      setVoucherCode(code); // Update the voucherCode state
    }
  }, []);

  return (
    <div>
      <br/><br/>
      <span style={{ fontWeight: "bold", marginBottom: 60, color: "#03C165" }}>
        Congratulations, your payment was successful.
      </span>
      <br /><br/><br/>
      <span style={{ marginBottom: 60}}>
        Voucher Code: {voucherCode} <br/>
        Duration: 24hrs
      </span>
    </div>
  );
}
