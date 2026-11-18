import { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const defaultValues = {
  name: "",
  imageUrl: "",
  weather: "hot"
};

function validateAddItemForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.imageUrl.trim()) {
    errors.imageUrl = "Image URL is required.";
  } else {
    try {
      const imageUrl = new URL(values.imageUrl);
      if (imageUrl.protocol !== "http:" && imageUrl.protocol !== "https:") {
        errors.imageUrl = "Enter a valid HTTP or HTTPS URL.";
      }
    } catch {
      errors.imageUrl = "Enter a valid HTTP or HTTPS URL.";
    }
  }

  return errors;
}

function AddItemModal({ isOpen, onAddItem, onClose }) {
  const {
    values,
    errors,
    handleChange,
    validateForm,
    resetForm,
  } = useFormWithValidation(defaultValues, validateAddItemForm);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!validateForm()) {
      return;
    }

    onAddItem(values);
    resetForm();
  }

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
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`modal__input${errors.name ? " modal__input_invalid" : ""}`}
        />
        {errors.name && (
          <span id="name-error" className="modal__input-error" aria-live="polite">
            {errors.name}
          </span>
        )}
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image URL: {" "}
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          aria-invalid={Boolean(errors.imageUrl)}
          aria-describedby={errors.imageUrl ? "imageUrl-error" : undefined}
          className={`modal__input${errors.imageUrl ? " modal__input_invalid" : ""}`}
        />
        {errors.imageUrl && (
          <span
            id="imageUrl-error"
            className="modal__input-error"
            aria-live="polite"
          >
            {errors.imageUrl}
          </span>
        )}
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