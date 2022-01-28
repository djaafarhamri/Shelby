import { useEffect } from "react";

const CategorieFilter = ({ categories, setCategories }) => {

    return (
      <div className="categories border-b-2 border-black opacity-100 z-40 font-mont ">
        <div className="flex mb-1 ml-5">
          <input
          className="mt-1 h-6 w-5"
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
          <p className=" text-xl md:text-2xl">Shoes</p>
        </div>
        <div className="flex mb-1 ml-5">
          <input
          className="mt-1  h-6 w-5"
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
          <p className=" text-xl md:text-2xl">Clothes</p>
        </div>
        <div className="flex mb-1 ml-5">
          <input
          className="mt-1  h-6 w-5"
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
          <p className=" text-xl md:text-2xl">Accessoires</p>
        </div>
      </div>
    );
  };
  
  export default CategorieFilter;
  