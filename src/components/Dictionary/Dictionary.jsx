/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Dictionary.css";
import Word from "../Word/Word";
import Meaning from "../Meaning/Meaning";
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
          throw new Error(
            `Error ${res.status} : ${err.message || res.statusText}`
          );
        });
      })
      .then((data) => {
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
  if (error) return <p>{error}</p>;

  return (
    <section>
      <Word
        word={data[0].word}
        phonetic={data[0].phonetic}
        phonetics={data[0].phonetics}
      />
      <br />
      <br />
      <br />
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
  );
}
