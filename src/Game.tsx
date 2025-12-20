import React, { useState } from "react";

import {OutlineButton, Button} from "./components/Button";
import Stack from "./components/Stack";
import GameController from "./prefabs/GameController";
import Textbox from "./components/Textbox";

export function Game() {
  return (
    <GameController headerText="Gift Exchange Game">
      <Stack>
          <Textbox
            name="testInput" label="What is your name?"
            />
          
          <Button onClick={() => console.log('test')}>Main Test</Button>
          <OutlineButton onClick={() => console.log('test outline')}>Outline Test</OutlineButton>
      </Stack>
    </GameController>
  );
}

export default Game;