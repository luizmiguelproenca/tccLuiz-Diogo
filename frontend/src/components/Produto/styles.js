import styled from "styled-components";

export const Container = styled.div`
    background: #ffffffff;
    padding: 10px;
    height: 200px;
    width: 250px;

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        color: #1e1e1e;
    }

    p{
        border-left: 3px solid #bbbbbb;
        padding-left: 10px;
        max-width: 230px;
        color: #999;
        font-style: italic;
        align-self: flex-start;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    svg {
        height: 20px;
        width: 20px;
        color: #1e1e1e;
    }

    &:hover {
        opacity: 0.5;
    }
`;