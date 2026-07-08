# Bandway — IELTS Practice Site (starter)

A working React starter for an IELTS practice website, with a functional
Reading module (timer, questions, auto-scoring) and a Listening page ready
for its first audio file.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Project structure

```
src/
  App.jsx              — routes + nav
  index.css             — design tokens (colors, fonts) used everywhere
  pages/
    Home.jsx             — landing page with hero timer
    Reading.jsx           — working timed reading test with scoring
    Listening.jsx         — placeholder, ready to wire up audio
```

## Next steps

1. **Add real content**: swap the sample passage/questions in `Reading.jsx`
   for your own — consider moving them into a `src/data/` folder as JSON
   once you have more than one passage, so adding new tests doesn't mean
   editing code each time.
2. **Build out Listening**: drop an audio file into `public/audio/`, add an
   `<audio>` element to `Listening.jsx`, and reuse the same question
   rendering pattern from `Reading.jsx`.
3. **Add user accounts + saved progress**: once the practice modules work
   standalone, a lightweight backend (e.g. Firebase Auth + Firestore) is the
   fastest way to add login and score history without building your own
   server.
4. **Deploy**: this is a static Vite app — Vercel or Netlify will build and
   host it for free straight from a GitHub repo.
