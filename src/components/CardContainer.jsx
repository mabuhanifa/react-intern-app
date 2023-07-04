import { useEffect, useState } from "react";
import Card from "./Card";

export default function CardContainer() {
  const [data, setData] = useState([]);
  const [single, setSingle] = useState({});
  useEffect(() => {
    (async () => {
      const res = await fetch("./src/data/data.json");
      const datas = await res.json();
      setData(datas);
      setSingle(datas[2]);
    })();
  }, []);
  return (
    <div>
      <div>
        <div>
          {data &&
            data.map((item, index) => (
              <ul key={index} onClick={() => setSingle(item)}>
                <li className="py-3 border px-5">{item.Name}</li>
              </ul>
            ))}
        </div>
        <div>
          <Card item={single} />
        </div>
      </div>
    </div>
  );
}
