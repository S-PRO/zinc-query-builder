import React from 'react'; // eslint-disable-line
import useForm from '../../../hooks/useForm';
import {
  LoginFormWrapper,
  LoginFormContainer,
  LoginFormTitle,
  Input,
  InputWrapper,
  InputError,
  LoginFormFields,
  SubmitButton,
} from './styles';

const LoginForm = props => {
  const inputs = {
    firstName: {
      type: 'text',
      placeholder: 'Username',
    },
    password: {
      type: 'password',
      placeholder: 'Password',
    },
  };

  const validationRules = {
    commonRules: {
      required: true,
    },
  };

  const { form, bindedInputFunctions, onSubmit, errors } = useForm(
    props.onSubmit,
    inputs,
    validationRules,
  );
  return (
    <LoginFormWrapper>
      <LoginFormContainer noValidate onSubmit={onSubmit} style={props.style}>
        <LoginFormTitle>Welcome to ZINK!</LoginFormTitle>
        <LoginFormTitle>Please, log in</LoginFormTitle>
        <LoginFormFields>
          {Object.entries(inputs).map(input => {
            const { label, value, ...inputProps } = input[1];
            const name = input[0];
            const error = errors[name];

            return (
              <InputWrapper key={name}>
                {label && <label>{label}</label>}
                <Input
                  {...bindedInputFunctions}
                  {...inputProps}
                  value={form[name]}
                  error={error}
                  name={name}
                />
                {error && <InputError>{error}</InputError>}
              </InputWrapper>
            );
          })}
          <SubmitButton>Login</SubmitButton>
        </LoginFormFields>
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};
export default LoginForm;
