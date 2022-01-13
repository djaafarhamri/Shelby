import { useEffect, useState } from "react";
import axios from "axios";
import image from "../assets/pro.jfif";
import "./Product.css";
const ENDPOINT = "http://localhost:4000";

const Product = ({ title, marque }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <h2>{marque}</h2>
      <h3>{title}</h3>
    </div>
  );
};

export default Product;
