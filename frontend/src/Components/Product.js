import image from '../assets/pro.jfif'
import './Product.css'

const Product = () => {
    return ( 
        <div className="product">
            <img src={image} alt="" />
            <h2>NIKE</h2>
            <h3>AIR FORCE1</h3>
        </div>
     );
}
 
export default Product;