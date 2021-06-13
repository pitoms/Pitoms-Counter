import styling from "../styles/countDialog.css";
import count from "../counter";

const closeDialog = () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("bigramsCount").innerHTML = "";
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
            <hr></hr>
            <p>
              Characters <span id="charsCount"></span>
            </p>
            <hr></hr>
            <p>
              Sentences <span id="sentencesCount"></span>
            </p>
            <hr></hr>
            <p>
              Paragraphs <span id="paragraphsCount"></span>
            </p>
            <hr></hr>
            <p>Bigrams</p>
            <div id="bigramsCount"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDialog;
