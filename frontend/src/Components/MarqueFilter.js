const MarqueFilter = ({ marques, setMarques, allMarques }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 font-mont">
      {allMarques &&
        allMarques.map((marque, i) => (
          <div key={i}>
            <div className="flex ml-5 mb-1">
              <input
              className="mt-1  h-6 w-5"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setMarques([...marques, marque]);
                  } else {
                    let arr = [];
                    for (let m of marques) {
                      if (m !== marque) {
                        arr.push(m);
                      }
                    }
                    setMarques(arr);
                  }
                }}
              />
              <p className=" text-xl md:text-2xl">{marque}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MarqueFilter;
