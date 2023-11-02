import { Switch } from "@material-tailwind/react";
import { useState } from "react";

export default function SwitchComponent() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className=" font-bold text-2xl uppercase">
        {checked ? "active" : "inactive"}
      </h1>
      <Switch
        className="w-full h-full left checked:bg-[--maincolor]"
        ripple={false}
        containerProps={{
          className: "w-15 h-8",
        }}
        circleProps={{
          className: "before:hidden left-[2.27px] border-none w-7 h-7",
        }}
        onChange={handleChange}
      />
    </div>
  );
}
