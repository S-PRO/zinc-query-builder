import styled, { css } from 'styled-components';
import * as colors from '../../../styles/colors';

export const SidebarWrapper = styled.div`
  background-color: #ebebeb;
  width: 400px;
  width: 280px;
  box-shadow: 2px 5px 6px 1px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const SidebarItemWrapper = styled.div``;

export const SidebarItemHeader = styled.div`
  background-color: ${colors.primary};
  color: #fff;
  font-size: 24px;
  transition: 0.3s;
  font-weight: 300;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 13px 10px;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

export const SidebarItemIcon = styled.img`
  width: 25px;
  height: 25px;
  transform: rotate(0.25turn);
  transition: 0.2s;
  transform-origin: 50% 50%;

  ${props =>
    props.expanded &&
    css`
      transform: rotate(0.75turn);
    `};
`;

export const SidebarItemContent = styled.div`
  overflow: hidden;
  transition: 0.3s;
  height: auto;
  max-height: 0;

  ${props =>
    props.expanded &&
    css`
      max-height: 200px;
    `};
`;

export const SidebarItemContentWrapper = styled.div`
  background-color: #fff;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
