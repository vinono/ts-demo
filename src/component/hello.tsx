import React from "react";
import "./hello.css";

export interface props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: props) {
  if (enthusiasmLevel < 1) {
    throw new Error("You could be a little more enthusiastic. :D");
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
