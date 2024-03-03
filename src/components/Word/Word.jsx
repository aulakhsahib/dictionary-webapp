/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./Word.css";
import playIcon from "../../assets/images/icon-play.svg";

export default function Word({ word, phonetic, phonetics }) {
  const audioTag = useRef(null);

  let ph, audio;
  const phoneticsObjectUS = phonetics.find((p) => {
    return p.audio.includes(`us.mp3`);
  });
  if (phoneticsObjectUS) {
    ({ text: ph, audio } = phoneticsObjectUS);
  }

  if (!ph) {
    if (phonetic) {
      ph = phonetic;
    } else {
      //phonetics can be empty
      ph = phonetics[phonetics.length - 1]?.text;
    }
  }

  const playButtonClickHandler = () => {
    audioTag.current.play();
  };

  return (
    <section className="word-section">
      <h1 className="word-heading">{word}</h1>
      <p className="word-phonetic">{ph}</p>
      <div className="play-button-container">
        {audio && (
          <button onClick={playButtonClickHandler} className="play-button">
            <img src={playIcon} alt="" />
            <audio src={audio} ref={audioTag}></audio>
          </button>
        )}
      </div>
    </section>
  );
}

/* 
1. word
2. phonetic
3. phonetics
*/

/* 
Show Three Things
1. word
2. phonetic
3. audio-link
*/
