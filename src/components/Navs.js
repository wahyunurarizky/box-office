import React, { memo } from 'react';

import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              className={item.to === location.pathname ? 'active' : ''}
              to={item.to}
            >
              Go to{item.text} page
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Navs);
