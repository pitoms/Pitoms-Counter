import TextField from "./components/TextField";
import Header from "./components/Header";
import CountDialog from "./components/CountDialog";
import count from "./counter";
import styling from "./App.css";

function App() {
  // On ctrl+shift+c display overlay with word count.
  document.onkeydown = function (e) {
    if ((!e.shiftKey && !e.ctrlKey && e.key !== "c") || e.key === "Shift" || e.key === "Control" || e.key === "c") {
      return;
    }

    e.preventDefault();

    if (e.key === "C" || e.key === "c") {
      let counts = count(document.getElementsByClassName("text")[0].value);

      // key 'c' becomes 'C' when holding shift
      document.getElementById("overlay").style.display = "block";
      document.getElementById("wordsCount").innerText = counts.words;
      document.getElementById("charsCount").innerText = counts.chars;
      document.getElementById("sentencesCount").innerText = counts.sentences;
      document.getElementById("paragraphsCount").innerText = counts.paragraphs;
      document.getElementById("bigramsCount").innerText = counts.bigrams;
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
