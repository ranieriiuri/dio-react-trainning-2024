import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: black;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto Mono', monospace;
        color: #00FF41;
    }
`