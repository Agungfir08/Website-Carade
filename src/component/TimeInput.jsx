import { useState } from "react";

export default function TimeInput() {
  const [time, setTime] = useState({ hour: null, minute: null });

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "hour" && value > 23) return;
    if (name === "minute" && value > 59) return;
    setTime((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="bg-[--maincolor] p-1 rounded-md text-white font-bold text-xl font-epilogue w-fit">
      <input
        type="number"
        name="hour"
        inputMode="numeric"
        value={time.hour}
        onChange={handleTimeChange}
        min="0"
        max="23"
        placeholder="--"
        className=" bg-transparent text-center focus:outline-none"
      />
      <span>|</span>
      <input
        type="number"
        name="minute"
        inputMode="numeric"
        value={time.minute}
        onChange={handleTimeChange}
        min="0"
        max="59"
        placeholder="--"
        className=" bg-transparent text-center focus:outline-none"
      />
    </div>
  );
}
