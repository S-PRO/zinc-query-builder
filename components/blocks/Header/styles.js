import styled from 'styled-components';
import * as colors from '../../../styles/colors';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  padding: 0 10px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.4);
`;

export const Logo = styled.img``;

export const Logout = styled.div`
  font-size: 16px;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
