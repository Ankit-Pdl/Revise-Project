// ...existing code...
import React from "react";
import Navbar from "./Components/Navbar";
import GameCard from "./Components/GameCard";
import Footer from "./Components/Footer";

import space from "./assets/images/space.jpg";
import cyberpunk from "./assets/images/cyberpunk.jpg";
import ghost from "./assets/images/ghost.png";
import Ring from "./assets/images/Ring.png";
import Halo from "./assets/images/Halo.jpg";
import GTA from "./assets/images/GTA.jpg";

const games = [
  { id: 1, title: "Space Shooter", image: space },
  { id: 2, title: "Ghost of Tsushima", image: ghost },
  { id: 3, title: "Elden Ring", image: Ring },
  { id: 4, title: "Cyber Punk", image: cyberpunk },
  { id: 5, title: "Halo Infinite", image: Halo },
  { id: 6, title: "Gta 6", image: GTA },
];

const App = () => {
  return (
    <div className="app-root">
      <Navbar />

      <main className="app-content" role="main">
        <header style={{ marginBottom: 20 }}>
          <h1 style={{ margin: 0 }}>Discover Games</h1>
          <p style={{ marginTop: 6, color: "var(--text)", opacity: 0.85 }}>
            Curated selection — click a card for details
          </p>
        </header>

        <section
          className="games-grid"
          aria-label="Games grid"
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
        >
          {games.map((g) => (
            <GameCard key={g.id} title={g.title} image={g.image} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
// ...existing code...
