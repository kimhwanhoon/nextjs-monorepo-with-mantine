import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from './theme';
import './styles.css';

interface MantineUIProviderProps {
  children: React.ReactNode;
}

export function MantineUIProvider({ children }: MantineUIProviderProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}

export { ColorSchemeScript };
