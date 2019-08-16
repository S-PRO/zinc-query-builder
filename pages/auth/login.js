import React from 'react';
import { LoginForm } from '../../components';
import FadeAndSlideTransition from '../../components/transitions/FadeAndSlideTransition';
import { loginUser } from '../../store/actions/userActions';
import withData from '../../utils/withData';
import unauthRoute from '../../utils/unauthRoute';

@unauthRoute()
@withData(null, { loginUser })
class LoginPage extends React.Component {
  render() {
    return (
      <FadeAndSlideTransition in>
        <LoginForm onSubmit={this.props.loginUser}></LoginForm>
      </FadeAndSlideTransition>
    );
  }
}
export default LoginPage;
