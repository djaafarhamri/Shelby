const GenreFilter = ({ genres, setGenres }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 font-mont">
      <div className="flex mb-1 ml-5">
        <input
          className="mt-1  h-6 w-5"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setGenres([...genres, "Classic"]);
            } else {
              let arr = [];
              for (let genre of genres) {
                if (genre !== "Classic") {
                  arr.push(genre);
                }
              }
              setGenres(arr);
            }
          }}
        />
        <p className=" text-xl md:text-2xl">Classic</p>
      </div>
      <div className="flex mb-1 ml-5">
        <input
          className="mt-1  h-6 w-5"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setGenres([...genres, "Sport"]);
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
        <p className=" text-xl md:text-2xl">Sport</p>
      </div>
      <div className="flex mb-1 ml-5">
        <input
          className="mt-1  h-6 w-5"
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
        <p className=" text-xl md:text-2xl">Semi-classic</p>
      </div>
    </div>
  );
};

export default GenreFilter;
