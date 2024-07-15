import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [responses, setResponses] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const handleClick = async () => {
    console.log("...sending text", text);
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: text }),
    });
    const result = await response.json();
    setResponses((old) => [...old, result.response]);
    setText("");
  };

  return (
    <div className="font-sans p-4">
      <div className="chat chat-start">
        <div className="chat-bubble">Welcome to George AI</div>
      </div>
      {responses.map((response, index) => (
        <div key={index} className="chat chat-start">
          <div className="chat-bubble">{response}</div>
        </div>
      ))}
      <div className="chat chat-end">
        <div className="chat-bubble">
          <textarea
            placeholder="Enter your message"
            value={text}
            onChange={(text) => setText(text.target.value)}
          ></textarea>
          <button
            onClick={() => {
              handleClick();
            }}
            className="btn"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
