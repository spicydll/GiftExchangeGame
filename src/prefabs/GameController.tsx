import Button from "../components/Button";
import Stack from "../components/Stack";
import Container from "../components/Container";
import Header from "../components/Header";

import React from "react";

interface Props {
    headerText: string;
    children?: React.ReactNode;
}

const GameController: React.FC<Props> = ({headerText, children}) => {
  return (
    <Container>
      <Header>{headerText}</Header>
      <div className="flex flex-col p-4 flex-1">{children}</div>
    </Container>
  );
}

export default GameController;