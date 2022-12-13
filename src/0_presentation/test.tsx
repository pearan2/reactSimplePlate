import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 5px;
`;

interface ChildProps {
  display: string;
}

const Child = styled.div<ChildProps>`
  padding: 5px;
  border: 1px solid red;
  display: ${(props) => props.display};
  position: fixed;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Test: React.FC = () => {
  const [display1, setDisplay1] = useState("none");

  const [display2, setDisplay2] = useState("none");

  const onMouseOver1 = () => {
    setDisplay1("display");
  };

  const onBlur1 = () => {
    setDisplay1("none");
  };

  const onMouseOver2 = () => {
    setDisplay2("display");
  };

  const onBlur2 = () => {
    setDisplay2("none");
  };

  return (
    <div>
      <Row>
        <Container onMouseOver={onMouseOver1} onMouseOut={onBlur1}>
          Hover Menu Container
          <Child display={display1}>child1</Child>
        </Container>
        <Container onMouseOver={onMouseOver2} onMouseOut={onBlur2}>
          Hover Menu Container
          <Child display={display2}>child2</Child>
        </Container>
      </Row>
      <div>111111111111111111111111111111111111111111111111111111111</div>
      <div>222222222222222222222222222222222222222222222222222222222</div>
      <div>asdniofansdiofnasio</div>
      <div>asdniofansdiofnasio</div>
      <div>asdniofansdiofnasio</div>
    </div>
  );
};

export default Test;
