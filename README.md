# Weather App Starter (APC 440, Modules 8-10)

This project is for APC440 - by Dan Rhode

This is the starting point for the React weather app you will build over
Modules 8, 9, and 10. It was created with Vite (React, JavaScript) and
includes a few files you will need.

## What's in this repository

| File | Purpose |
|---|---|
| `CLAUDE.md` | Project instructions that Claude Code reads automatically. Do not delete it. |
| `.node-version` | Tells Render which Node.js version to build with. |
| `package.json` / `package-lock.json` | The exact versions of React and Vite everyone in the class uses. |
| `src/App.jsx` | The starting page. You will replace it in Module 8. |
| `src/styles.css` | Plain CSS styles for the app. |
| `src/data/mockWeather.json` | Synthetic sample weather for three cities (Module 8 only). Not real weather. |
| `src/data/weatherCodes.js` | Turns Open-Meteo weather codes into text labels and icons. |

## Get started

1. On GitHub, click **Use this template** and create your own repository.
2. Clone your new repository and open it in VS Code.
3. In the VS Code terminal, check your Node.js version (it should start with `24`):

   ```
   node -v
   ```

4. Install the exact dependency versions:

   ```
   npm ci
   ```

5. Start the development server and open the local address it prints:

   ```
   npm run dev
   ```

## Deploy to Render

Create a new **Static Site** on Render connected to your repository, with:

| Setting | Value |
|---|---|
| Build command | `npm ci && npm run build` |
| Publish directory | `dist` |
| Environment variable | `SKIP_INSTALL_DEPS` = `true` |

Every push to your main branch redeploys the site automatically.

## Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Runs the app locally with instant reload |
| `npm run build` | Builds the production version into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally |
