# Obscurdle

Obscurdle is a simple React Native/Expo application that acts like a vocabulary flashcard game. One word is shown at a time. Tap the screen to reveal its definition and tap again for a new random word. The project is written in TypeScript and includes a small Jest test suite.

## Development

1. Install dependencies:

```bash
npm install
```

2. Start the Expo development server:

```bash
npx expo start
```

3. Run tests:

```bash
npm test
```

## Repository layout

- `App.tsx` – the main entry point showing a single `WordCard` that responds to screen taps.
- `WordCard.tsx` – component used for showing a word and its definition.
- `__tests__/` – Jest tests and snapshots for components.
- `__mocks__/` – manual mocks used during tests.

## License

This project is licensed under the ISC license.
