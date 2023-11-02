import TimeInput from "../TimeInput";

export default function ScheduledComponent() {
  const labels = ["ON", "OFF"];

  return (
    <div className="flex flex-col items-center gap-y-2">
      <h1 className=" font-bold text-2xl uppercase">scheduled</h1>
      {labels.map((label) => (
        <div className="flex items-center w-36 justify-between" key={label}>
          <h1 className=" font-bold text-lg ">{label}</h1>
          <TimeInput />
        </div>
      ))}
    </div>
  );
}
