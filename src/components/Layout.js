import React, { useState } from 'react';
import GlobalStyles from './styledComponents/StyledNormalise';
import Colours from '../constants/colours';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <h1>This is the layout component</h1>
      {children}
    </>
  );
}
