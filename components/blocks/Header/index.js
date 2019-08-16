import React from 'react'; // eslint-disable-line
import Link from 'next/link';
import { HeaderWrapper, Logo, Logout } from './styles';

export default function Header(props) {
  const { user, onLogout } = props;
  return (
    <HeaderWrapper>
      <Link href="/">
        <a>
          <Logo src="/static/images/logo.png"></Logo>
        </a>
      </Link>
      {user && <Logout onClick={onLogout}>Logout</Logout>}
    </HeaderWrapper>
  );
}
