import styling from "../styles/countDialog.css";

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
            <p>Words</p>
            <p>Characters</p>
            <p>Sentences</p>
            <p>Paragraphs</p>
            <p>Bigrams</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDialog;
