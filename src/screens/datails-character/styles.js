import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1360px;
    margin-right: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
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