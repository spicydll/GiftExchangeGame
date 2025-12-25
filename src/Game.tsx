import React, { useState } from "react";

import {OutlineButton, Button} from "./components/Button";
import Stack from "./components/Stack";
import GameController from "./prefabs/GameController";
import Textbox from "./components/Textbox";
import Search, {type SearchData} from "./components/Search";

export function Game() {
  const search_data: Array<SearchData> = [{
    displayValue: "First Item",
    sumbitData: "hello",
  },{
    displayValue: "Second Thing",
    sumbitData: "bye",
  }];
  return (
    <GameController headerText="Gift Exchange Game">
      <Search data={search_data} placeholder="John Doe" prompt="Select Player"></Search>
    </GameController>
  );
}

export default Game;