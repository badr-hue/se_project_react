import "./ModalWithForm.css";
import closeBtn from "../../assets/close-btn.svg";

function ModalWithForm({ isOpen, title, children, buttonText, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeBtn} alt="Close" />
        </button>

        <form className="modal__form">
         
          {children}

          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;