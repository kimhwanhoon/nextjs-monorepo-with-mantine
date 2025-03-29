import * as React from 'react';
import { ButtonProps } from '@mantine/core';

export { ColorSchemeScript } from '@mantine/core';

export function Button(props: ButtonProps): React.JSX.Element;

export interface MantineUIProviderProps {
  children: React.ReactNode;
}

export function MantineUIProvider(
  props: MantineUIProviderProps
): React.JSX.Element;
