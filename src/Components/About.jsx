import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import space from "../assets/images/space.jpg";
import cyberpunk from "../assets/images/cyberpunk.jpg";
import ghost from "../assets/images/ghost.png";
import Ring from "../assets/images/Ring.png";
import Halo from "../assets/images/Halo.jpg";
import GTA from "../assets/images/GTA.jpg";

const features = [
  {
    id: "curation",
    title: "Expert Curation",
    desc: "Hand-picked titles from critics and players — quality over quantity.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2l2.9 5.9L21 9.2l-4.5 4.1L17.2 21 12 17.8 6.8 21l.7-7.7L3 9.2l6.1-1.3L12 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "variety",
    title: "Wide Variety",
    desc: "Indies, AAA, retro gems — explored across genres and platforms.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 6h16v2H4zM4 11h10v2H4zM4 16h7v2H4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "discover",
    title: "Easy Discovery",
    desc: "Smart filters and curated lists help you find the right game fast.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1014 15.5l.3.3v.8L20 21l1-1-5.5-5zM10.5 15A4.5 4.5 0 1115 10.5 4.5 4.5 0 0110.5 15z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const gallery = [space, cyberpunk, ghost, Ring, Halo, GTA];

const Counter = ({ label, to }) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef();
  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.floor(t * to));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [to]);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 20, fontWeight: 700 }}>
        {value.toLocaleString()}
      </div>
      <div style={{ fontSize: 12, opacity: 0.85 }}>{label}</div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    document.title = "About — Discover Games";
  }, []);

  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: "" });

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox({ open: false, src: null, alt: "" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  return (
    <div className="about-page" aria-labelledby="about-title">
      <div className="about-hero">
        <h1 id="about-title">About Discover Games</h1>
        <p className="lead" style={{ opacity: 0.95 }}>
          We curate the best video games across genres and platforms so you can
          find your next favorite faster. Friendly picks, useful filters, and a
          focus on quality.
        </p>
      </div>

      <div className="about-grid">
        <main>
          <section className="about-section">
            <h2 style={{ marginBottom: 12 }}>What we do</h2>

            <div
              className="feature-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
              }}
            >
              {features.map((f) => (
                <div
                  key={f.id}
                  className="card"
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 14, opacity: 0.95 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: 18 }}>Gallery</h2>
            <div
              className="gallery"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gap: 10,
                marginTop: 10,
              }}
            >
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setLightbox({ open: true, src, alt: `game-${i}` })
                  }
                  className="card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "transparent",
                    border: "1px solid transparent",
                  }}
                  aria-label={`Open image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`game ${i + 1}`}
                    style={{
                      display: "block",
                      width: "100%",
                      height: 120,
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </div>
          </section>

          <section className="about-section" style={{ marginTop: 16 }}>
            <h2 style={{ marginBottom: 12 }}>Why Discover Games?</h2>
            <p>
              We focus on trustworthy picks and clear categorization so you
              spend less time scrolling and more time playing. Whether you love
              indie narratives or sprawling multiplayer worlds, we help you find
              games that match your tastes.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 14,
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Counter label="Games curated" to={1284} />
              <Counter label="Genres covered" to={32} />
              <Counter label="Top recommendations" to={86} />
            </div>
          </section>
        </main>

        <aside className="about-aside" aria-label="About sidebar">
          <div className="card mission">
            <div className="card-title">Our Mission</div>
            <p>
              Make discovery joyful: highlight quality, diversity, and
              creativity in gaming while helping players of all tastes.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Meet the Team</div>
            <div className="team-list">
              <div className="team-member">
                <div className="avatar">AP</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Ankit Poudel</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>
                    Founder & CEO
                  </div>
                </div>
              </div>

              <div className="team-member">
                <div className="avatar">YT</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Yunisha Timila</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Design & UX</div>
                </div>
              </div>

              <div className="team-member">
                <div className="avatar">AA</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Anamika Poudel</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Engineering</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Get Involved</div>
            <p>Suggest a game or follow us for fresh lists and updates.</p>
            <div className="cta">
              <a href="/contact" className="btn" role="button">
                Contact
              </a>
              <a href="/about" className="btn secondary">
                Learn more
              </a>
            </div>
          </div>
        </aside>
      </div>

      {lightbox.open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox({ open: false, src: null, alt: "" })}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.6)",
            zIndex: 2000,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: 12,
              }}
            />
            <div style={{ marginTop: 8, textAlign: "right" }}>
              <button
                className="btn secondary"
                onClick={() => setLightbox({ open: false, src: null, alt: "" })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
