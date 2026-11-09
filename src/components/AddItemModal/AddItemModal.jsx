import {useForm} from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, onAddItem, onClose }) {

  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "hot"
  };
  const { values, handleChange } = useForm(defaultValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }
  // ...
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name: {" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required />
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image URL: {" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required />
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weather"
            value="hot"
            className="modal__radio-input"
            checked={values.weather === "hot"}
            onChange={handleChange}
             />{" "}
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            value="warm"
            className="modal__radio-input"
            checked={values.weather === "warm"}
            onChange={handleChange}
             />{" "}
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            value="cold"
            className="modal__radio-input"
            checked={values.weather === "cold"}
            onChange={handleChange}
             />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;