import "./App.css";
import Memo from "./LesserUsedHooks/useMemo/Memo";
// import Ref from "./LesserUsedHooks/useRef/Ref";
// import Context from "./MustKnowHooks/useContext/Context";
// import Effect from "./MustKnowHooks/useEffect/Effect";
// import State from "./MustKnowHooks/useState/State";

function App() {
  return (
    <div className="App">
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Context /> */}
      {/* <Ref /> */}
      <Memo />
    </div>
  );
}

export default App;
