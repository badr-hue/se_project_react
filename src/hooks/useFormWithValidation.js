import { useCallback, useState } from "react";

export function useFormWithValidation(defaultValues, validateValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    const updatedValues = { ...values, [name]: value };
    const nextErrors = validateValues(updatedValues);

    setValues(updatedValues);
    setIsValid(Object.keys(nextErrors).length === 0);
    if (hasSubmitted) {
      setErrors(nextErrors);
    }
  }

  function validateForm() {
    const validationErrors = validateValues(values);
    const formIsValid = Object.keys(validationErrors).length === 0;

    setErrors(validationErrors);
    setIsValid(formIsValid);
    setHasSubmitted(true);

    return formIsValid;
  }

  const resetForm = useCallback(() => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
    setHasSubmitted(false);
  }, [defaultValues]);

  return { values, errors, isValid, handleChange, validateForm, resetForm };
}
