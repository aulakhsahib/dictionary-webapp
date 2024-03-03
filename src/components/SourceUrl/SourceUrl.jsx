/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import "./SourceUrl.css";
export default function SourceUrl({ sourceUrl }) {
  return ReactDOM.createPortal(
    <>
      <hr />
      <p className="source-para">
        <span className="source-text">Source</span> <a href={sourceUrl} target="_blank">{sourceUrl}</a>
      </p>
    </>,
    document.querySelector(".source-container")
  );
}
