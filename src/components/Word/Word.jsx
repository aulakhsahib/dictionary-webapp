/* eslint-disable react/prop-types */
import "./Word.css";
export default function Word({ word, phonetic, phonetics }) {
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

  return (
    <section>
      <h1>
        <strong>Word</strong> : {word}
      </h1>
      <p>
        <strong>Phonetic</strong> : {ph}
      </p>
      <p>
        <strong>Audio</strong> : {audio}
      </p>
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
