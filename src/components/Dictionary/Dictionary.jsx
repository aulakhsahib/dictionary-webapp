/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Dictionary.css";
import Word from "../Word/Word";
import Meaning from "../Meaning/Meaning";
import SourceUrl from "../SourceUrl/SourceUrl";
export default function Dictionary({ wordToSearch }) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setData([]);

    fetch(apiUrl)
      .then((res) => {
        if (res.ok) return res.json();

        return res.json().then((err) => {
          throw new Error(`${err.title} : ${err.message || res.statusText}`);
        });
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [wordToSearch, apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div className="not-found-container">
        <p className="emoji-container">&#x1F615;</p>
        <p className="not-found-message">{error}</p>
      </div>
    );

  return (
    <>
      <section className="dictionary-container">
        <Word
          word={data[0].word}
          phonetic={data[0].phonetic}
          phonetics={data[0].phonetics}
        />
        {data[0].meanings.map((m, index) => {
          return (
            <Meaning
              key={index}
              wordToSearch={wordToSearch}
              partOfSpeech={m.partOfSpeech}
              definitions={m.definitions}
              synonyms={m.synonyms}
              antonyms={m.antonyms}
            />
          );
        })}
      </section>
      <SourceUrl sourceUrl={data[0].sourceUrls[0]} />
    </>
  );
}

/* 
Data Object Properties

1. word (string)
2. phonetic (string)
3.phonetics (Array of objects look for text and audio property)
4. meanings (Array of objects having properties partOfSpeech and definitions)
*/

// {
//     word: "",
//     phonetic: "",
//     phonetics: [
//         {
//             text: "",
//             audio: ""
//         }
//     ],
//     meanings: [
//         {
//             partOfSpeech: "",
//             antonyms: [],
//             synonyms: [],
//             definitions: [
//                 {
//                     definition: "",
//                     example: "" || [],
//                 }
//             ]
//         }
//     ]
// }

/* 
Exceptions
1. Word Not Available
2. phonetic not available
3. phonetics not available or not available for us. phonetic text available audio not available
4. antonyms not available or more than one available
5. same for synonyms
6. definitions example not available or more than one
*/
