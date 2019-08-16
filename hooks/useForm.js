import { useState } from 'react';
import useFormValidation from './useFormValidation';

const useForm = (submitAction, initialForm = {}, validationRules) => {
  // Set default values for form

  const initialFormValues = {};
  Object.keys(initialForm).forEach(field => {
    if (initialForm[field]) {
      initialFormValues[field] = initialForm[field].value || '';
    }
  });

  // Init form and validation hook

  const [form, setForm] = useState(initialFormValues);
  const { errors, setErrors, validateForm } = useFormValidation(
    form,
    validationRules,
  );

  // Input events

  const onChange = event => {
    event.persist();
    setForm(form => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  };

  const onFocus = event => {
    event.persist();
    const { name } = event.target;
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const onBlur = event => {
    event.persist();
  };

  // Clear form

  const onClearForm = () => {
    const formValues = {};
    Object.keys(initialForm).forEach(field => {
      if (initialForm[field]) {
        formValues[field] = '';
      }
    });
    setForm(formValues);
  };

  // Submitting form

  const onSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    if (submitAction && validateForm()) {
      submitAction(form, onClearForm);
    }
  };

  return {
    bindedInputFunctions: {
      onChange,
      onFocus,
      onBlur,
    },
    onSubmit,
    errors,
    form,
  };
};

export default useForm;
