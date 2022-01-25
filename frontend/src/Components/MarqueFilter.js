const MarqueFilter = ({ marques, setMarques, allMarques }) => {
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      {allMarques &&
        allMarques.map((marque, i) => (
          <div key={i}>
            <div className="flex">
              <input
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
              <p>{marque}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MarqueFilter;
