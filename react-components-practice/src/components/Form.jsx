import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "10px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}

export default Form;