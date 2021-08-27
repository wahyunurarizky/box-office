import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li>
            <Link key="item.to" to={item.to}>
              Go to{item.text} page
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
