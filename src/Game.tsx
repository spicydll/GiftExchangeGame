import React, { useState } from "react";

import {OutlineButton, Button} from "./components/Button";
import Stack, { FixedStack } from "./components/Stack";
import GameController from "./prefabs/GameController";
import Textbox from "./components/Textbox";
import Search, {type SearchData} from "./components/Search";

export function Game() {
  let search_data: Array<SearchData> = [{
    displayValue: "First Item",
    submitData: "hello",
  },{
    displayValue: "Second Thing",
    submitData: "bye",
  }];
  for (let i = 0; i < 10; i++) {
    search_data.push({
      displayValue: "Extra " + i.toString(),
      submitData: "Item " + i.toString(),
    });
  }
  return (
    <GameController headerText="Gift Exchange Game">
      <FixedStack>
        <Search data={search_data} placeholder="John Doe" prompt="Select Player"></Search>
        <Button onClick={() => {}}>Submit</Button>
      </FixedStack>
    </GameController>
  );
}

export default Game;