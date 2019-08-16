import styled, { css } from 'styled-components';
import * as colors from '../../../styles/colors';

export const LoginFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LoginFormContainer = styled.form`
  background-color: #fff;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.12);
  padding: 20px 100px;
  width: 100%;
  max-width: 670px;
`;

export const LoginFormTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  margin: 0;
`;

export const LoginFormFields = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 11px 10px;
  border-radius: 5px;
  border: 1px solid #cac6c6;
  outline: none;
  font-size: 22px;
  font-weight: 300;
  transition: 0.3s;

  &:focus {
    border-color: ${colors.secondary};
  }

  ${props =>
    props.error &&
    css`
      border-color: ${colors.error};
    `}
`;

export const InputWrapper = styled.div`
  padding-bottom: 30px;
  position: relative;
`;

export const InputError = styled.span`
  left: 6px;
  bottom: 12px;
  position: absolute;
  color: red;
  font-size: 13px;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.secondary};
  color: #fff;
  display: inline-block;
  appearance: none;
  border: 0;
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-size: 23px;
  font-weight: 300;
  padding: 15px 20px;
  width: 100%;
  max-width: 170px;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
