import ChartComponent from "./component/ChartComponent";
import DetailComponent from "./component/DetailComponent";
import Header from "./component/Header";
import SwitchAndScheduledComponents from "./component/activate/SwitchAndScheduledComponents";

function App() {
  return (
    <>
      <Header />
      <h1 className="uppercase text-7xl font-bold text-[--maincolor] flex justify-center my-7">
        welcome
      </h1>
      <div className="flex gap-20 justify-center items-center">
        <ChartComponent />
        <div className=" grid grid-cols-2 gap-6">
          <DetailComponent title={"Detail"} detail={"100"} />
          <DetailComponent title={"Detail"} detail={"100"} />
          <DetailComponent title={"Detail"} detail={"100"} />
          <DetailComponent title={"Detail"} detail={"100"} />
          <div className=" col-span-2">
            <SwitchAndScheduledComponents />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
