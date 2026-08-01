import './ItemCard.css';
import {defaultClothingItems} from "../../utils/constants.js";

function ItemCard({ item }) {
  return (
    <li className="card" key={item._id}>
      <h2 className="card__name">{item.name}</h2>
      <img src={item.link} alt={item.name} className="card__image" />
    </li>
  );
}

export default ItemCard;