import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 2px solid #CDCDCD;
    border-radius: 5px;
    background-color: #27272a;
    color: #00FF41;
    opacity: 1; /* Opacidade inicial */
    transition: opacity 0.3s ease; /* Transição gradual de 0.3 segundos */
    font-size: 24px;
    font-weight: 700;
    flex:1;

    &:hover {
       opacity: 0.6;

    }

`