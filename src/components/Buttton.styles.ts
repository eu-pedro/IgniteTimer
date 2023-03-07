import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant?: ButtonVariant;
}

const buttonVariants = {
  primary: 'blue',
  secondary: 'gray',
  success: 'green',
  danger: 'red',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 50px;
    margin-left: 10px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
`
