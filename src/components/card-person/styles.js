import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;

  p {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;

  -webkit-box-shadow: 4px 3px 5px 0px rgba(217,204,217,1);
  -moz-box-shadow: 4px 3px 5px 0px rgba(217,204,217,1);
  box-shadow: 4px 3px 5px 0px rgba(217,204,217,1);
  -moz-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.5);
    -webkit-transition: 0.2s ease-in;
    -moz-transition: 0.2s ease-in;
    -o-transition: 0.2s ease-in;
    transition: 0.2s ease-in;
    border-radius: 3%;
    -webkit-box-shadow: 4px 4px 5px 0px rgba(245,117,117,0.75);
    -moz-box-shadow: 4px 4px 5px 0px rgba(245,117,117,0.75);
    box-shadow: 4px 4px 5px 0px rgba(245,117,117,0.75);
  }
`;

export const Name = styled.h3`

`;