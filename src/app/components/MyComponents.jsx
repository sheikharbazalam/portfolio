"use client";

import React, { useState } from "react";

const MemoizedComponent = React.memo(function MemoizedComponent({ count }) {
  console.log("Rendered!");
  return <div>{count}</div>;
});

function MyComponents() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div className=" flex justify-center items-center h-screen ">
      <button
        data-testid="cypress-title"
        className="px-6 py-3 p-4 border-dashed bg-lime-800"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <MemoizedComponent count={count} />
      <input onChange={(e) => setText(e.target.value)} value={text} />
    </div>
  );
}
// {"conversationId":"2e54d5bb-c835-48fe-bf9c-0fe9ec79fecf","source":"instruct"}

export default MyComponents;
