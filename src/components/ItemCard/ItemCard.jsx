import './ItemCard.css';
import {defaultClothingItems} from "../../utils/constants.js";

function ItemCard({ item }) {
  return (
    <div className="item-card" key={item._id}>
      <h2 className="item-card__title">{item.name}</h2>
      <img src={item.link} alt={item.name} className="item-card__image" />
    </div>
  );
}

export default ItemCard;