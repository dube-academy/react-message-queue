import React, { useEffect } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import MessageQueue, { useMessageQueue } from "./MessageQueue";

const Application = () => {
  const { addMessage, removeMessage, messages } = useMessageQueue();

  return (
    <>
      <GlobalStyles />
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <div>
        <h1>React.js Message Queue (with Hooks) - Dubé Academy</h1>
        <button
          onClick={() => {
            if (messages.length % 3 === 0) {
              addMessage("Hello, this is an info message");
            } else if (messages.length % 3 === 1) {
              addMessage("Oh no :/", "error");
            } else {
              addMessage("Yayyy", "success");
            }
          }}
        >
          Add new Message
        </button>
      </div>
    </>
  );
};

export default Application;
