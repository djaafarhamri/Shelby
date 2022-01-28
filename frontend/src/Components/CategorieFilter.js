const CategorieFilter = ({ allCategories, categories, setCategories }) => {

    return (
      <div className="genres border-b-2 border-black opacity-100 z-40 font-mont">
      {allCategories &&
        allCategories.map((category, i) => (
          <div key={i}>
            <div className="flex ml-5 mb-1">
              <input
              className="mt-1  h-6 w-5"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategories([...categories, category]);
                  } else {
                    let arr = [];
                    for (let m of categories) {
                      if (m !== category) {
                        arr.push(m);
                      }
                    }
                    setCategories(arr);
                  }
                }}
              />
              <p className=" text-xl md:text-2xl">{category}</p>
            </div>
          </div>
        ))}
    </div>  );
  };
  
  export default CategorieFilter;
  