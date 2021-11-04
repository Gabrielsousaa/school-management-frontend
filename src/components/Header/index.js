import React from 'react';
import { FaHome, FaSign, FaUser } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <FaHome size={36} />
      <FaSign size={36} />
      <FaUser size={36} />
    </Nav>
  );
}
