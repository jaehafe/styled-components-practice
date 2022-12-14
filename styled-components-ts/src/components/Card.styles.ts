import styled from 'styled-components';
// Components
import Gender from './Gender';

type Props = {
  color: string;
};

export const StyledGender = styled(Gender)<Props>`
  background: ${({ color }) => color};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 340px;
  height: 420px;
  padding-bottom: 20px;
  background: lightblue;
  border-radius: 1rem;
  box-sizing: border-box;

  img {
    border-radius: 1rem;
    border: 1px solid lightCoral;
    width: 300px;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
`;
