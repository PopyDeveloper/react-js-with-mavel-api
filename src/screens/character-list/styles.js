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

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    &:before,
    &:after {
        content:" ";
        display:table;
    }
    &:after {
        clear: both;
    }
`;

export const Column = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: ${props => (props.grid ? props.grid /12 * 100 : `8:33`)}%;
    }
`;

export const Grid = styled.div`

`;

export const SubTitle = styled.h3`
    font-family: inherit;
    text-align: center;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
`;
