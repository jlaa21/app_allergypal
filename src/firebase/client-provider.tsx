'use client';

import React from 'react';
import { initializeFirebase, FirebaseProvider } from './';

export const FirebaseClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const firebase = initializeFirebase();

  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
};
