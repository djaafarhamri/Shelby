import { useEffect } from "react";

const CategorieFilter = ({ categories, setCategories }) => {

    return (
      <div className="categories border-b-2 border-black opacity-100 z-40 ">
        <div className="flex">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories([...categories, "Shoes"]);
              } else {
                var index = categories.indexOf("Shoes");
                if (index !== -1) {
                  let arr;
                  arr = categories.splice(index, 1);
                  setCategories(arr);
                }
              }
            }}
          />
          <p>Shoes</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories([...categories, "Clothes"]);
              } else {
                var index = categories.indexOf("Clothes");
                if (index !== -1) {
                  let arr;
                  arr = categories.splice(index, 1);
                  setCategories(arr);
                }
              }
            }}
          />
          <p>Clothes</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories([...categories, "Accessoires"]);
              } else {
                var index = categories.indexOf("Accessoires");
                if (index !== -1) {
                  let arr;
                  arr = categories.splice(index, 1);
                  setCategories(arr);
                }
              }
            }}
          />
          <p>Accessoires</p>
        </div>
      </div>
    );
  };
  
  export default CategorieFilter;
  