const GenreFilter = ({ allGenres, genres, setGenres }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 font-mont">
    {allGenres &&
      allGenres.map((genre, i) => (
        <div key={i}>
          <div className="flex ml-5 mb-1">
            <input
            className="mt-1  h-6 w-5"
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setGenres([...genres, genre]);
                } else {
                  let arr = [];
                  for (let m of genres) {
                    if (m !== genre) {
                      arr.push(m);
                    }
                  }
                  setGenres(arr);
                }
              }}
            />
            <p className=" text-xl md:text-2xl">{genre}</p>
          </div>
        </div>
      ))}
  </div>
  );
};

export default GenreFilter;
