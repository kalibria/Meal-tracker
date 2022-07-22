import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const FirstRouteEl = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/secondEl');
  });

  return <div></div>;
};
