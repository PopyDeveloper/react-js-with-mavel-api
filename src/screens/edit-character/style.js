import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    min-height: 100vh;

    &:before,
    &:after {
        content:" ";
        display:table;
    }
    &:after {
        clear: both;
    }
`;

export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.form`
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 30%;
    border-radius: 10%;
    margin: 50px 0;
`;

export const TextField = styled.input`
    width: 90%;
    border: 2px solid #f1f1f1;
    padding: 20px;
    font-size: 1.2em;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const TextAreaField = styled.textarea`
    width: 90%;
    border: 2px solid #f1f1f1;
    padding: 10px;
    font-size: 1.2em;
    border-radius: 10px;
`;

export const Button = styled.button`
    margin: 20px 0;
    width: 50%;
    background: #F55252;
    color: white;
    letter-spacing: 2px;
    border: none;
    height: 30px;
    border-radius: 4px;
`;