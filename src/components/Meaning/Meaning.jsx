/* eslint-disable react/prop-types */
import "./Meaning.css";
export default function Meaning({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}) {
  return (
    <div>
      <strong>partOfSpeech</strong> : {partOfSpeech}
      {definitions?.map((df, index) => {
        return (
          <div key={index}>
            <p>{index + 1}</p>
            <p>
              <strong>Definition</strong>: {df?.definition}
            </p>
            {df.example &&
              (Array.isArray(df.example)
                ? df.example.length &&
                  df.example.map((e, index) => <p key={index}>Example : {e}</p>)
                : df.example && <p>Example : {df.example}</p>)}

            {/* {df.example && (
              <p>
                <strong>Example</strong>: {df.example}
              </p>
            )} */}
          </div>
        );
      })}
      {synonyms.length !== 0 && (
        <p>
          <strong>Synonyms</strong>: {synonyms.join(", ")}
        </p>
      )}
      {antonyms.length !== 0 && (
        <p>
          <strong>Antonyms</strong>: {antonyms.join(", ")}
        </p>
      )}
      <br />
      <br />
      <br />
    </div>
  );
}
