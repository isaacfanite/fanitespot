import React, { useState } from "react";

import styles from "./pay.module.scss";
import Receipt from "./voucher-form";
export default function LoginPage() {



  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <img src="https://www.fanitepay.com/images/fanite-logo.png" width="45%" style={{ textAlign: "center" }} />
        
        <Receipt />
      </div>
    </div>
  );
}
