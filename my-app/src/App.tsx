import { useState, useEffect } from "react";
import "./App.css";
import { fetchMonkeys } from "./api";

interface Monkey {
  name: string;
  image_link?: string;
  characteristics?: { [key: string]: string };
}

function App() {
  const [monkeys, setMonkeys] = useState<Monkey[] | null>(null);

  useEffect(() => {
    const loadMonkeys = async () => {
      const data = await fetchMonkeys();
      setMonkeys(data);
    };

    loadMonkeys();
  }, []);

  return (
    <div>
      <h1>🐵 Monkeypedia</h1>
      {monkeys ? (
        <ul>
          {monkeys.map((monkey, index) => (
            <li key={index}>
              <h2>{monkey.name}</h2>
              {monkey.image_link && (
                <img src={monkey.image_link} alt={monkey.name} width="200" />
              )}
              <p>{monkey.characteristics?.habitat}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Chargement des singes...</p>
      )}
    </div>
  );
}

export default App;
