import styled from 'styled-components';

const styleBtn = {
  good: {
    default: {
      background: 'white',
      color: 'black',
      border: '1px solid green',
    },
    hover: {
      background: 'green',
      color: 'white',
      border: '1px solid lightgreen',
    },
  },
  neutral: {
    default: {
      background: 'white',
      color: 'black',
      border: '1px solid yellow',
    },
    hover: {
      background: 'yellow',
      color: 'black',
      border: '1px solid lightyellow',
    },
  },
  bad: {
    default: {
      background: 'white',
      color: 'black',
      border: '1px solid red',
    },
    hover: {
      background: 'red',
      color: 'white',
      border: '1px solid lightcoral',
    },
  },
};

export const OptionBtn = styled.button`
  background-color: ${props =>
    styleBtn[props.option]?.default.background };

  color: ${props => styleBtn[props.option]?.default.color };
  border: ${props =>
    styleBtn[props.option]?.default.border };

  &:hover {
    background-color: ${props =>
      styleBtn[props.option]?.hover.background};
    color: ${props => styleBtn[props.option]?.hover.color };
    border: ${props =>
      styleBtn[props.option]?.hover.border};
  }

  margin-right: 20px;
  width: 75px;
  height: 30px;
`;