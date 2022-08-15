import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterDisplay = styled.p`
  font-size: 2rem;
`;

const CounterButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #006cfa;
  border-radius: 1.25rem;
`;

export const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <CounterDisplay>You clicked {count} times</CounterDisplay>
      <CounterButton
        className="counter-btn"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Click me
      </CounterButton>
    </Container>
  );
};
