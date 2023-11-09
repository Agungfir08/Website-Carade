import ScheduledComponent from "./ScheduledComponent";
import SwitchComponent from "./SwitchComponent";

export default function SwitchAndScheduledComponents() {
  return (
    <div className=" flex items-center w-full px-5 py-4 rounded-2xl justify-between bg-white">
      <ScheduledComponent />
      <div className=" border-l-[3px] border-black h-28  rounded-full "></div>
      <SwitchComponent />
    </div>
  );
}
