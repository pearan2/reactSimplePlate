import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 30px;
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

const Test: React.FC = () => {
  const [display, setDisplay] = useState("none");

  const onMouseOver = () => {
    setDisplay("display");
  };

  const onBlur = () => {
    setDisplay("none");
  };

  return (
    <div>
      <Container onMouseOver={onMouseOver} onMouseOut={onBlur}>
        Hover Menu Container
        <Child display={display}>child1</Child>
      </Container>
      <div>1111111111111111111</div>
      <div>2222222222222222222</div>
      <div>asdniofansdiofnasio</div>
      <div>asdniofansdiofnasio</div>
      <div>asdniofansdiofnasio</div>
    </div>
  );
};

export default Test;
