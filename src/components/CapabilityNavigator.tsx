import React, { useState } from "react";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function CapabilityNavigator({
  capabilities,
  onResult
}: {
  capabilities: string[];
  onResult?: (result: Record<string, number>) => void;
}) {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(capabilities.map((c) => [c, 2]))
  );

  const handleChange = (cap: string, v: number) => {
    const next = { ...values, [cap]: v };
    setValues(next);
    onResult?.(next);
  };

  const labels = capabilities;
  const data = {
    labels,
    datasets: [
      {
        label: "Current",
        data: labels.map((l) => values[l]),
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)"
      },
      {
        label: "Target",
        data: labels.map(() => 5),
        backgroundColor: "rgba(255,99,132,0.1)",
        borderColor: "rgba(255,99,132,0.4)"
      }
    ]
  };

  return (
    <div>
      <h3>Capability navigator (maturity scan)</h3>
      <div style={{ maxWidth: 520 }}>
        <Radar data={data} />
      </div>
      <div className="capability-sliders">
        {labels.map((l) => (
          <label key={l}>
            <div>{l}</div>
            <input
              type="range"
              min={0}
              max={5}
              value={values[l]}
              onChange={(e) => handleChange(l, Number(e.target.value))}
            />
            <span>{values[l]}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
