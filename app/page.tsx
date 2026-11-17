
"use client";

import { useEffect, useState } from "react";

const registration = "https://forms.gle/HN5Yux4VqWyCeWCJ8";

export default function Home() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const update = () => {
      const target = new Date("2026-11-29T09:00:00+05:30");
      setDays(Math.max(0, Math.ceil(
        (target.getTime() - Date.now()) / 86400000
      )));
    };
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <nav>
        <h2>✿ PRAGNAX</h2>
        <a href={registration}>Register ↗</a>
      </nav>

      <section className="hero">
        <p>✧ A CELEBRATION OF INNER STILLNESS ✧</p>
        <h1>Find your <em>inner</em> harmony.</h1>
        <h2>Dhyana Anandotsavam 2026</h2>
        <p>
          A gathering to pause, reconnect and celebrate
          the joy of meditation.
        </p>
        <a className="button" href={registration}>
          REGISTER NOW ↗
        </a>
        <div className="event-info">
          <p>📅 Sunday, 29 November 2026</p>
          <p>📍 Visvesvaraya Auditorium, Khairatabad, Hyderabad</p>
          <h2>{days} DAYS TO GO</h2>
        </div>
      </section>

      <section className="about">
        <p>THE THOUGHT BEHIND IT</p>
        <h2>Make space for <em>what matters.</em></h2>
        <p>
          Dhyana Anandotsavam is an invitation to turn inward,
          share positive energy and experience the joy of
          meditation together.
        </p>
      </section>

      <section className="experience">
        <h2>A meaningful experience</h2>
        <div className="cards">
          <article>
            <h3>Stillness</h3>
            <p>Pause from the noise and discover inner quiet.</p>
          </article>
          <article>
            <h3>Awareness</h3>
            <p>Reconnect with the present moment.</p>
          </article>
          <article>
            <h3>Togetherness</h3>
            <p>Celebrate positivity and collective well-being.</p>
          </article>
        </div>
      </section>

      <section className="register">
        <h2>We'll meet in stillness.</h2>
        <p>Join us on 29 November 2026.</p>
        <a className="button" href={registration}>
          REGISTER FOR THE EVENT ↗
        </a>
      </section>

      <footer>
        <h2>✿ PRAGNAX</h2>
        <p>Grow with awareness.</p>
        <p>© 2026 PRAGNAX</p>
      </footer>
    </main>
  );
}
