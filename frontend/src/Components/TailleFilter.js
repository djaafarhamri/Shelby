const TailleFilter = ({ tailles, setTailles, allTailles }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 font-mont text-2xl font-semibold">
      {allTailles &&
        allTailles.map((taille, i) => (
          <div key={i}>
            <div className="flex ml-5">
              <input
              className="mt-1  h-6 w-5"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTailles([...tailles, taille]);
                  } else {
                    let arr = [];
                    for (let t of tailles) {
                      if (t !== tailles) {
                        arr.push(t);
                      }
                    }
                    setTailles(arr);
                  }
                }}
              />
              <p>{taille}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TailleFilter;
