import { useState } from "react";

function Button() {
  const [clicked, setClicked] = useState(false);

  return (
    <button onClick={() => setClicked(!clicked)} style={{ padding: "10px 20px" }}>
      {clicked ? "Clicked!" : "Click Me"}
    </button>
  );
}

export default Button;