import "./ItemModal.css";
import closeBtnWht from "../../assets/close-btn-wht.svg";

function ItemModal({
  isOpen,
  card,
  onClose,
  onDelete,
}) {
  if (!isOpen || !card) {
    return null;
  }

  function handleDeleteClick() {
    
    onDelete(card._id || card.id);
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeBtnWht} alt="Close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <button
            type="button"
            className="modal__delete-button"
            onClick={handleDeleteClick}
          >
            Delete item
          </button>
          <p className="modal__weather">Weather: {card.weather}</p>
          
        </div>
      </div>
    </div>
  );
}

export default ItemModal;