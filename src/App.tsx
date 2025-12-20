import React, { useState } from "react";

import {OutlineButton, Button} from "./components/Button";
import Stack from "./components/Stack";
import GameController from "./prefabs/GameController";
import Textbox from "./components/Textbox";

export function App() {
  return (
    <GameController headerText="Gift Exchange Game">
      <Stack>
          <Textbox
            name="Name" label="Name"
            placeholder="John Doe"
            />
          <Textbox
            name="Room" label="Room Code"
            placeholder="GIFT"
            />
          
          <Button onClick={() => console.log('test')}>Join</Button>
      </Stack>
    </GameController>
  );
}

export default App;
