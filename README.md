# Layercode Demo App

## Description

This is a full-stack demo application that showcases a real-time voice agent built with Next.js and Layercode. The app allows users to interact with an AI-powered voice agent directly from their browser. Speech is transcribed in real time, sent to an LLM (Large Language Model) for processing, and the response is streamed back as synthesized speech. The backend uses Next.js API routes to handle webhooks and LLM integration, while the frontend uses Layercode's React SDK for audio streaming and playback.

**How it works:**
- The user speaks into their browser microphone.
- Audio is streamed to Layercode, which transcribes the speech and sends the text to the backend via a webhook.
- The backend processes the text (e.g., with an LLM) and streams the response back to Layercode.
- Layercode converts the response to speech and streams it back to the user's browser for playback.

## Getting Started

Follow these steps to check out the repository and run the app locally:

### 1. Clone the repository
```sh
git clone https://github.com/logan-vibe-test/layercode-demo-app.git
cd layercode-demo-app
```

### 2. Install dependencies
If you are using npm:
```sh
npm install
```
Or with yarn:
```sh
yarn install
```

### 3. Set up environment variables
Copy the example environment file and update it with your own values:
```sh
cp .env.example .env
# Edit .env as needed
```

### 4. Run the development server
If you are using npm:
```sh
npm run dev
```
Or with yarn:
```sh
yarn dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

---

For more details, see the documentation or contact the project maintainer.
