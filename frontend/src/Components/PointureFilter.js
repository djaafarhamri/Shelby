const PointureFilter = ({ pointures, setPointures, allPointure }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      {allPointure &&
        allPointure.map((pointure, i) => (
          <div key={i}>
            <div className="flex mb-2 ml-5">
              <input
              className="mt-1  h-6 w-5"
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
              <p className=" text-xl md:text-2xl">{pointure}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PointureFilter;
