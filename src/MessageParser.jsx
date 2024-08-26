import React from "react";
import { city } from "./cityname";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    let found = false;
    let greetings = ["hello", "HELLO", "Hello", "hi", "Hi", "HI"];
    if (greetings.some((el) => message.includes(el))) {
      actions.handleHello();
      found = true;
    }

    city.forEach((cityItem) => {
      if (
        message.includes(cityItem) ||
        message.includes(cityItem.toLowerCase())
      ) {
        actions.handleRecommendation(cityItem);
        found = true;
      }
    });
    if (!found) {
      actions.handleError();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
