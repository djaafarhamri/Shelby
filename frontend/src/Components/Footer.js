import "./Footer.css";
import tiktok from'../assets/tiktok.svg'
import facebook from'../assets/facebook.svg'
import instagram from'../assets/instagram.svg'
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="about">
             <h2>ABOUT US</h2>
             <p>WE ARE THE SHELBY Boutique</p>            
            </div>
            <div className="logo">
             <h2>CONTACT US</h2>
              <div className="image">
               <img src={instagram}/>
               <img src={facebook}/>
               <img src={tiktok}/>
              </div>
            </div>
            <div className="devs">
             <p >© Devloped BY  <span>Vitorio</span></p>
            </div>
        </div>
     );
}
 
export default Footer;