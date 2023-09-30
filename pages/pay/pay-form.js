import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "axios"; // Import Axios

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);

    // Convert it to a JSON object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // Make an HTTP POST request to the webhook URL using Axios
      const response = await axios.post(
        "https://webhook.site/8161e561-46c6-4a54-a9a3-668325d05843",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Payment was successful, handle the response
        console.log("Payment successful");
        // You can redirect or perform any other actions here
      } else {
        // Handle errors if the request was not successful
        console.error("Payment failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <Input
        name="amount"
        placeholder="Amount"
        value="1000"
      />
      <Input
        name="phone"
        placeholder="Mobile Money Number 2567"
        type="phone"
      />

      <Button type="submit" style={{ backgroundColor: "#03C165" }}>
        Pay
      </Button>

      <span
        style={{
          textAlign: "center",
          marginTop: -35,
          padding: 15,
          backgroundColor: "white",
          display: "flex",
          alignSelf: "center",
          width: "max-content",
          fontWeight: "500",
        }}
      >
        Your Wifi Voucher shall be <br />generated after payment is successful
      </span>

      <span style={{ fontWeight: "bold", marginBottom: 60, color: "#03C165" }}>
        <Link href="https://wa.me/+256700150806">For Support</Link>
      </span>
    </form>
  );
}
