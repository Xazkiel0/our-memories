"use client"
import React, { useEffect } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";


const DigitPassword = ({ setPinCorrect }) => {
  const [otp, setOtp] = React.useState("");

  useEffect(() => {
    if (otp.length === 8 && otp === "17072511") {
      setPinCorrect(true);
    }
  }, [otp]);

  return (
    <div className="space-y-4">
      <InputOTP
        maxLength={8}
        onComplete={(value) => {}}
        value={otp}
        onChange={setOtp}
        className=""
        pattern={REGEXP_ONLY_DIGITS}
      >
        <InputOTPGroup className="text-white">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
      {otp}
    </div>
  );
};

export default DigitPassword;
