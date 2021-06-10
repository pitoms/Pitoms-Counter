import TextField from "./components/TextField";
import Header from "./components/Header";
import CountDialog from "./components/CountDialog";
import styling from "./App.css";

function App() {
  // On ctrl+shift+c display overlay with word count.
  document.onkeydown = function (e) {
    if ((!e.shiftKey && !e.ctrlKey && e.key !== "c") || e.key === "Shift" || e.key === "Control" || e.key === "c") {
      return;
    }

    e.preventDefault();

    if (e.key === "C") {
      document.getElementById("overlay").style.display = "block";
    }
  };

  return (
    <>
      <Header></Header>
      <TextField />
      <CountDialog />
    </>
  );
}

export default App;
