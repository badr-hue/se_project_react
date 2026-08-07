import "./ModalWithForm.css";

function ModalWithForm({ activeModal, title, children, buttonText, onClose }) {
  if (!activeModal) {
    return null;
  }

  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onClose}>
          CLOSE
        </button>
        <form action="" className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name {""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image URL {""}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="hot"
                type="radio"
                name="hot"
                value="hot"
                className="modal__radio-input"
              />{" "}
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="warm"
                type="radio"
                name="warm"
                value="warm"
                className="modal__radio-input"
              />{" "}
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="cold"
                type="radio"
                name="cold"
                value="cold"
                className="modal__radio-input"
              />{" "}
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit">
            Add Garment
          </button>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
