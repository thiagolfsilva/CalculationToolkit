import React, { useState } from "react";

function RateConverter() {
  const [rate, setRate] = useState(0);
  const [interval, setInterval] = useState("hourly");

  const intervals = {
    hourly: { label: "Hourly", hours: 1 },
    every8hours: { label: "Every 8 hours", hours: 8 },
    daily: { label: "Daily", hours: 24 },
    weekly: { label: "Weekly", hours: 24 * 7 },
    monthly: { label: "Monthly", hours: 24 * 30 },
    yearly: { label: "Yearly", hours: 24 * 365 }
  };

  function handleRateChange(e) {
    setRate(parseFloat(e.target.value));
  }

  function handleIntervalChange(e) {
    setInterval(e.target.value);
  }

  function calculateRate(newInterval, precision) {
    const hourlyRate = rate / 100 / intervals[interval].hours;
    const newHourlyRate = hourlyRate * intervals[newInterval].hours;
    const newRate = newHourlyRate * 100;
    return newRate.toFixed(precision);
  }

  return (
    <div>
      <div>
        <label>
          Rate (%):
          <input
            type="number"
            step="0.01"
            value={rate}
            onChange={handleRateChange}
          />
        </label>
      </div>
      <div>
        <label>
          Interval:
          <select value={interval} onChange={handleIntervalChange}>
            {Object.keys(intervals).map((key) => (
              <option key={key} value={key}>
                {intervals[key].label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <p>Hourly: {calculateRate("hourly", 5)}%</p>
        <p>Every 8 hours: {calculateRate("every8hours", 4)}%</p>
        <p>Daily: {calculateRate("daily", 3)}%</p>
        <p>Weekly: {calculateRate("weekly", 2)}%</p>
        <p>Monthly: {calculateRate("monthly", 2)}%</p>
        <p>Yearly: {calculateRate("yearly", 2)}%</p>
      </div>
    </div>
  );
}

export default RateConverter;
