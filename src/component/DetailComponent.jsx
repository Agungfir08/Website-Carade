export default function DetailComponent({ title, detail }) {
  return (
    <div className=" w-[150px] h-[150px] rounded-2xl bg-white border flex flex-col items-center justify-center gap-2 font-extrabold">
      <h4 className=" text-2xl ">{title}</h4>
      <h1 className=" text-7xl text-[--maincolor]">{detail}</h1>
    </div>
  );
}
