import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl">Hello world</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
}

export default App;
