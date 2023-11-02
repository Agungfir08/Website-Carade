import ScheduledComponent from "./ScheduledComponent";
import SwitchComponent from "./SwitchComponent";

export default function SwitchAndScheduledComponents() {
  return (
    <div className=" flex items-center border w-[315px] px-3 py-4 rounded-2xl justify-between">
      <ScheduledComponent />
      <div className=" border-l-[3px] border-black h-28  rounded-full "></div>
      <SwitchComponent />
    </div>
  );
}
