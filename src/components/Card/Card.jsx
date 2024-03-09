import "./Card.css";
import aloeProductImage from "../../assets/images/aloe-product.png";
import Button from "../Button/Button";
const Card = () => {
    return (
        <div className="aloe-card">
            <img src={aloeProductImage} alt="aloe image" />
            <h2>ALOE</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h2 className="aloe-price">$60</h2>
            <Button />
        </div>
    );
};

export default Card;
