import { useEffect } from "react";

// Enlaces principales del hub
const linkCards = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/12177912824?si=oWQLzTrSRkqdx0sD_lIGwA",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.36 14.45a.77.77 0 0 1-1.06.24 8.58 8.58 0 0 0-6.95-.92.77.77 0 1 1-.43-1.48 10.13 10.13 0 0 1 8.2 1.09.77.77 0 0 1 .24 1.07Zm1.08-2.4a.95.95 0 0 1-1.31.31 10.56 10.56 0 0 0-8.49-1.08.95.95 0 1 1-.53-1.82 12.44 12.44 0 0 1 10.03 1.28.95.95 0 0 1 .3 1.31Zm.1-2.5A12.61 12.61 0 0 0 7.29 10.3a1.13 1.13 0 1 1-.63-2.18 14.87 14.87 0 0 1 11.99 1.53 1.13 1.13 0 1 1-1.11 1.9Z" />
      </svg>
    ),
  },
  {
    name: "Last.fm",
    href: "https://last.fm/es/user/JorgeMountain",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.15 16.69c1.02 0 1.63-.48 1.63-1.35 0-.63-.23-1.06-1.18-1.8l-1.22-.97c-1.15-.92-1.77-1.95-1.77-3.46 0-2.04 1.54-3.42 3.96-3.42 2.6 0 4.2 1.2 4.82 3.66l-2.13.52c-.33-1.37-1.02-2.03-2.3-2.03-.95 0-1.56.42-1.56 1.13 0 .54.25.92 1.07 1.58l1.28 1.02c1.26 1 1.77 2.05 1.77 3.48 0 2.24-1.64 3.62-4.27 3.62-2.73 0-4.45-1.31-4.93-3.99l2.2-.5c.36 1.58 1.28 2.51 2.63 2.51Zm8.98 1.69c-2.65 0-4.55-1.3-5.11-3.74l2.19-.5c.43 1.55 1.4 2.21 2.92 2.21 1.19 0 1.9-.51 1.9-1.38 0-.74-.41-1.16-1.77-1.56l-1.13-.34c-2.26-.69-3.2-1.8-3.2-3.63 0-2.07 1.59-3.37 4.1-3.37 2.3 0 3.95 1.03 4.65 2.95l-2.05.72c-.46-1.08-1.2-1.62-2.37-1.62-1.03 0-1.67.45-1.67 1.14 0 .62.36 1.01 1.48 1.34l1.15.33c2.64.76 3.59 2.01 3.59 3.96 0 2.26-1.72 3.49-4.68 3.49Z" />
      </svg>
    ),
  },
  {
    name: "Letterboxd",
    href: "https://boxd.it/62HTR",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 12a3.2 3.2 0 1 1-3.2-3.2A3.2 3.2 0 0 1 7.2 12Zm6.8 0a3.2 3.2 0 1 1-3.2-3.2A3.2 3.2 0 0 1 14 12Zm6.8 0a3.2 3.2 0 1 1-3.2-3.2A3.2 3.2 0 0 1 20.8 12Z" />
      </svg>
    ),
  },
];

export default function App() {
  useEffect(() => {
    // Reveal suave al cargar
    const frame = requestAnimationFrame(() => {
      document.body.classList.add("is-visible");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="page-shell">
      {/* Capa atmosferica de fondo */}
      <div className="bg-layer" aria-hidden="true" />

      {/* Contenedor principal */}
      <section className="hub-card">
        <header className="hero">
          <p className="eyebrow">Archivo personal</p>
          <h1>Jorge Mountain</h1>
        </header>

        {/* Tarjetas de enlaces */}
        <div className="links-grid" role="list" aria-label="Enlaces principales">
          {linkCards.map((card) => (
            <a
              key={card.name}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              role="listitem"
              aria-label={`Abrir ${card.name} en una nueva pestana`}
            >
              <span className="icon-wrap">{card.icon}</span>
              <span className="card-text">
                <strong>{card.name}</strong>
                <small>Visitar perfil</small>
              </span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
