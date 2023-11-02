import DetailComponent from "./component/DetailComponent";
import Header from "./component/Header";
import SwitchAndScheduledComponents from "./component/activate/SwitchAndScheduledComponents";

function App() {
  return (
    <>
      <Header />
      <DetailComponent title={"Detail"} detail={"100"} />
      <SwitchAndScheduledComponents />
    </>
  );
}

export default App;
