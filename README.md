# FreeMusicLab React Player

A zero-config React audio player for [FreeMusicLab.ai](https://freemusiclab.ai) — free AI music generated with Google Lyria.

## Features

- 🎵 Pulls free AI-generated tracks from FreeMusicLab API (no auth)
- ▶️ Built-in audio controls, playlist navigation
- 🎨 Tailwind-friendly, minimal CSS
- 📦 Tree-shakeable, TypeScript ready

## Install

```bash
npm install freemusiclab-react-player
```

## Usage

```jsx
import { FreeMusicPlayer } from 'freemusiclab-react-player';

export default function App() {
  return <FreeMusicPlayer genre="lofi" limit={20} />;
}
```

## Available genres

`lofi`, `cinematic`, `cafe`, `jazz`, `cyberpunk`, `ambient`, `study`, `sleep`, `focus`

See the full [FreeMusicLab.ai browse page](https://freemusiclab.ai/browse).

## About FreeMusicLab.ai

- 🎼 [2,000+ free AI-generated tracks](https://freemusiclab.ai/browse) — generated with [Google Lyria](https://deepmind.google/technologies/lyria/)
- ⬆️ [Upload your own AI music](https://freemusiclab.ai/upload)
- 📖 [Blog with free music guides](https://freemusiclab.ai/blog)
- 🔌 [Free developer API](https://freemusiclab.ai/docs)
- 📄 [License details](https://freemusiclab.ai/license) — commercial use permitted via Google's Generative AI Terms

All first-party tracks are royalty-free and carry SynthID watermarks for AI-content disclosure.

## License

MIT

---

Built by [@Dogfather1](https://github.com/Dogfather1) · [FreeMusicLab.ai](https://freemusiclab.ai)
