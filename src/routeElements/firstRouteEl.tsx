import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KnownRoutes } from '../enumsForApp';

export const FirstRouteEl = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(KnownRoutes.WELCOME);
  });

  return <div></div>;
};
