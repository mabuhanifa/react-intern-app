import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    (async () => {
      const res = await fetch("./src/data/data.json");
      setData(await res.json());
    })();
  }, []);
  return <div>App</div>;
}
