import styling from "../styles/header.css";
import logo from "../resources/docs-icon.svg";

function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" alt="blue notebook, google docs logo" src={logo} />
        <div className="left">
          <div className="topRow">
            <span id="title">Untitled document</span>
          </div>

          <div className="bottomRow">
            <ul>
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Insert</li>
              <li>Format</li>
              <li>Tools</li>
              <li>Add-ons</li>
              <li>Help</li>
            </ul>
            <span>Last edit was made 21 hours ago</span>
          </div>
        </div>

        <div className="right">
          <button>Share</button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Header;
