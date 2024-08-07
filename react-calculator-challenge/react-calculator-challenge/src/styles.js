import styled from "styled-components"; 

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) { /* Tablet */
        height: auto; 
        padding: 20px;
    }

    @media (max-width: 480px) { /* Celulares */
        height: auto; 
        padding: 20px;
    }
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 15%;

    @media (max-width: 768px) {
        width: 40%; 
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 480px) {
        flex-direction: row; 
        flex-wrap: wrap;
        justify-content: center;
    }
`
