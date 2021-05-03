import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(entryData) {
  return (
    <Entry
      key={entryData.id}
      emoji={entryData.emoji}
      name={entryData.name}
      meaning={entryData.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
