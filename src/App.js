import TimesDisplay from "./components/TimesDisplay";
import TimeSelectForm from "./components/TimeSelectForm";
import "../src/css/App.css"

function App() {
  return (
    <div className="App">
      <TimeSelectForm/>
      <TimesDisplay/>
    </div>
  );
}

export default App;
