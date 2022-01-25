const PointureFilter = ({ pointures, setPointures, allPointure }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      {allPointure &&
        allPointure.map((pointure, i) => (
          <div key={i}>
            <div className="flex">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPointures([...pointures, pointure]);
                  } else {
                    let arr = [];
                    for (let p of pointures) {
                      if (p !== pointure) {
                        arr.push(p);
                      }
                    }
                    setPointures(arr);
                  }
                }}
              />
              <p>{pointure}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PointureFilter;
