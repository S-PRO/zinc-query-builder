import React from 'react';
import styled from 'styled-components';
import withData from '../utils/withData';
import requireAuth from '../utils/requireAuth';
import { getUser } from '../store/actions/userActions';

const Title = styled.h4`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin: 0;
`;
@requireAuth()
@withData(state => ({ user: state.user.profile }), { getUser })
class IndexPage extends React.Component {
  render() {
    return <Title></Title>;
  }
}
export default IndexPage;
