import { useState } from 'react';

const useFormValidation = (form, validationRules) => {
  const [errors, setErrors] = useState({});

  const validateField = (rules, fieldName) => {
    const value = form[fieldName];
    const { required, regExp, customValidation } = rules;

    if (required) {
      if (!form[fieldName]) {
        return {
          isValid: false,
          message: 'Required field',
        };
      }
    }

    if (value) {
      if (regExp && !rules.regExp.test(value)) {
        return {
          isValid: false,
          message: 'Wrong format',
        };
      }
      if (customValidation) {
        return customValidation(value, form);
      }
    }

    return {
      isValid: true,
    };
  };

  const validateForm = () => {
    const errors = {};
    if (validationRules) {
      const { commonRules = {}, ...rules } = validationRules;

      Object.entries(form).forEach(fieldArray => {
        const fieldName = fieldArray[0];
        const result = validateField(
          { ...commonRules, ...rules[fieldName] },
          fieldName,
        );
        if (!result.isValid) {
          errors[fieldName] = result.message;
        }
      });
    }
    setErrors(errors);
    return !Object.keys(errors).length;
  };

  return {
    validateForm,
    setErrors,
    errors,
  };
};

export default useFormValidation;
