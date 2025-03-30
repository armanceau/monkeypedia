import { useState, useEffect } from "react";
import "./App.css";
import { fetchMonkeys } from "./api";
import Card from "./components/Card";

interface Monkey {
  id: Number;
  name: string;
  image_link?: string;
  characteristics?: { [key: string]: string };
  taxonomy: { [key: string]: string };
  family: String;
}

const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return `/assets/monkeys/${randomNumber}.png`;
};

function App() {
  const [monkeys, setMonkeys] = useState<Monkey[] | null>(() => {
    const storedMonkeys = localStorage.getItem("monkeys");
    return storedMonkeys ? JSON.parse(storedMonkeys) : null;
  });

  useEffect(() => {
    const storedMonkeys = localStorage.getItem("monkeys");
    if (storedMonkeys == null) {
      const loadMonkeys = async () => {
        const data = await fetchMonkeys();
        setMonkeys(data);
        localStorage.setItem("monkeys", JSON.stringify(data));
      };
      loadMonkeys();
    }
  }, []);

  return (
    <div className="app-container">
      <h1>🐵 Monkeypedia</h1>
      <div className="card-container">
        {monkeys ? (
          monkeys.map((monkey, index) => (
            <Card
              key={index} // ✅ Utilisation de "key" au lieu de "id" pour React
              id={index}
              name={monkey.name!}
              image={getRandomImage()}
              family={monkey.taxonomy.family}
            />
          ))
        ) : (
          <p>Chargement des singes...</p>
        )}
      </div>
    </div>
  );
}

export default App;
