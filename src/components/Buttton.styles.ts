import styled from "styled-components";
import { defaultTheme } from "./styles/theme/default";

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

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary}
    /* ${props => {
        return `background-color: ${buttonVariants[props.variant]}`
    }} */
`
