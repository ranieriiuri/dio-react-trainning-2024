import styled, { keyframes } from 'styled-components';

// Animação para o efeito de "cair"
const fallAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: px;
  background-color: #27272a;
  border: 3px solid #27272a;
  border-radius: 2px;
  overflow: hidden; /* Para garantir que o conteúdo não ultrapasse os limites */

  h1 {
    font-size: 1rem;
    color: #00FF41;
    text-align: center;
    margin: 0;
    animation: ${fallAnimation} 1s ease-out; /* Aplica a animação ao título */
  }
`;
