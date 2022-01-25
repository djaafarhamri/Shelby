import { useState, useEffect } from "react";

const GenreFilter = ({ genres, setGenres }) => {
  const [checkCount, setCheckCount] = useState(0);
  useEffect(() => {
    if (checkCount === 0) {
      setGenres(["Classic", "Sport", "Semi-classic"]);
    }
  }, [checkCount, setGenres]);
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      <div className="flex mb-1">
        <input
        className="mt-2"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              if (checkCount === 0) {
                setGenres(["Classic"]);
              } else {
                  setGenres([...genres, "Classic"]);
              }
              setCheckCount((o) => o + 1);
            } else {
              let arr = [];
              for (let genre of genres) {
                if (genre !== "Classic") {
                  arr.push(genre);
                }
              }
              setGenres(arr);
              setCheckCount((o) => o - 1);
            }
          }}
        />
        <p>Classic</p>
      </div>
      <div className="flex mb-1">
        <input
         className="mt-2"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              if (checkCount === 0) {
                setGenres(['Sport']);
              } else {
                  setGenres([...genres, "Sport"]);
              }
            } else {
              let arr = [];
              for (let genre of genres) {
                if (genre !== "Sport") {
                  arr.push(genre);
                }
              }
              setGenres(arr);
            }
          }}
        />
        <p>Sport</p>
      </div>
      <div className="flex mb-1">
        <input
         className="mt-2"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setGenres([...genres, "Semi-classic"]);
            } else {
              let arr = [];
              for (let genre of genres) {
                if (genre !== "Semi-classic") {
                  arr.push(genre);
                }
              }
              setGenres(arr);
            }
          }}
        />
        <p>Semi-classic</p>
      </div>
    </div>
  );
};

export default GenreFilter;
