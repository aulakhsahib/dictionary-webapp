/* eslint-disable react/prop-types */
import "./Meaning.css";
export default function Meaning({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}) {
  return (
    <section className="meaning-section">
      <div className="partOfSpeech-container">
        <p>{partOfSpeech}</p>
        <hr />
      </div>
      <p className="grey-300-text">Meaning</p>
      <ul className="definition-list">
        {definitions?.map((df, index) => {
          return (
            <li key={index}>
              {df?.definition}
              <ul className="example-list">
                {df.example &&
                  (Array.isArray(df.example)
                    ? df.example.length &&
                      df.example.map((e, index) => (
                        <li key={index}>&quot;{e}&quot;</li>
                      ))
                    : df.example && <li>&quot;{df.example}&quot;</li>)}
              </ul>
            </li>
          );
        })}
      </ul>
      {synonyms.length !== 0 && (
        <p className="synonyms-antonyms-container">
          <strong className="grey-300-text">Synonyms</strong>:{" "}
          {synonyms.join(", ")}
        </p>
      )}
      {antonyms.length !== 0 && (
        <p className="synonyms-antonyms-container">
          <strong className="grey-300-text">Antonyms</strong>:{" "}
          {antonyms.join(", ")}
        </p>
      )}
    </section>
  );
}
