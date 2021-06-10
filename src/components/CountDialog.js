import styling from "../styles/countDialog.css";
import count from "../counter";

const closeDialog = () => {
  document.getElementById("overlay").style.display = "none";
};

function CountDialog() {
  return (
    <>
      <div id="overlay">
        <div className="countBox">
          <div className="boxHeader">
            <p className="boxTitle">Word count</p>
            <span className="close" onClick={closeDialog}>
              x
            </span>
          </div>
          <div id="countsList">
            <p>
              Words <span id="wordsCount"></span>
            </p>
            <p>
              Characters <span id="charsCount"></span>
            </p>
            <p>
              Sentences <span id="sentencesCount"></span>
            </p>
            <p>
              Paragraphs <span id="paragraphsCount"></span>
            </p>
            <p>
              Bigrams <span id="bigramsCount"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDialog;
