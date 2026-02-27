import { useState } from "react";

type PercentIncreaseEntry = {
  value: number;
  percentIncrease: number;
};

function getPercentIncrease({ value, percentIncrease }: PercentIncreaseEntry) {
  return value * (1 + percentIncrease / 100);
}

export function PercentChange() {
  const [startingValue, setStartingValue] = useState<number>(0);
  const [percentIncrease, setPercentIncrease] = useState<number>(0);
  return (
    <div>
      <h2>Percent Change</h2>
      <fieldset>
        <legend>Inputs</legend>
        <div>
          <label>{`Starting Value: `}</label>
          <input
            type="number"
            value={startingValue}
            onChange={(e) => setStartingValue(Number(e.target.value))}
          />
        </div>
        <div>
          <label>{`Percent Increase ($): `}</label>
          <input
            type="number"
            min="0"
            max="100"
            step={0.01}
            value={percentIncrease}
            onChange={(e) => setPercentIncrease(Number(e.target.value))}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Result</legend>
        {getPercentIncrease({ value: startingValue, percentIncrease })}
      </fieldset>
    </div>
  );
}
