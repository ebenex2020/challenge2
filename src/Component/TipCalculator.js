/** @format */

import { useState } from "react";

import Bill from "./Bill";
import Output from "./Output";
import Reset from "./Reset";
import Service from "./Service";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function reset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Service percentage={percentage1} onSelectPerce={setPercentage1}>
        How did you like the service?
      </Service>
      <Service percentage={percentage2} onSelectPerce={setPercentage2}>
        How did your friend like the service
      </Service>
      <Output bill={bill} tip={tip} />
      <Reset reset={reset} />
    </div>
  );
};

export default TipCalculator;
