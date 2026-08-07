import "./ItemModal.css";

function ItemModal({
  activeModal,
  card,
  title,
  children,
  buttonText,
  onClose: onClose,
}) {
  if (!activeModal) {
    return null;
  }
  return (
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      onClick={onClose}
    >
      <div className="modal__content modal__content_type_image">
        <button type="button" className="modal__close" onClick={onClose}>
          CLOSE
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
