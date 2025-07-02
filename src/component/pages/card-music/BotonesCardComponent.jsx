import React, { useState } from "react";

export const BotonesCardComponent = () => {
  const [like, setLike] = useState(false);
  const [text, setText] = useState("Like");
  const handleLike = () => {
    if (like === false) {
      setLike(true);
      setText("Dislike");
    } else {
      setLike(false);
      setText("Like");
    }
  };
  return (
    <div>
      <button>dance</button>
      <button onClick={handleLike}>{text}</button>
    </div>
  );
};
