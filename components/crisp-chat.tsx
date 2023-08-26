"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("415da4d5-70ae-4b91-bf51-6e49266d2447");
  }, []);
  return null;
};

export default CrispChat;
