import { ButtonProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';

export function Button({ children, ...props }: ButtonProps) {
  return <MantineButton {...props}>{children}</MantineButton>;
}
