import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.svg";

function ItemModal({
  isOpen,
  card,
  title,
  children,
  buttonText,
  onClose: onClose,
}) {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeBtn} alt="Close" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
