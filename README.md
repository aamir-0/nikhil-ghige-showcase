
# nikhil-ghige-showcase

## Project Overview

This is a React + Vite + TypeScript project using shadcn-ui and Tailwind CSS.

## Local Development

1. **Clone the repository:**
	```sh
	git clone https://github.com/aamir-0/nikhil-ghige-showcase.git
	cd nikhil-ghige-showcase
	```

2. **Install dependencies:**
	```sh
	npm install
	```

3. **Start the development server:**
	```sh
	npm run dev
	```
	The app will be available at [http://localhost:8080](http://localhost:8080)

## Deployment to GitHub Pages

1. **Build the project:**
	```sh
	npm run build
	```

2. **Deploy to GitHub Pages:**
	```sh
	npm run deploy
	```
	This will publish the `dist` folder to the `gh-pages` branch.

3. **Configure GitHub Pages:**
	- Go to your repository on GitHub
	- Click on **Settings** > **Pages**
	- Set source to `gh-pages` branch, folder `/ (root)`
	- Save and wait a few minutes

4. **Access your site:**
	- Your app will be live at: [https://aamir-0.github.io/nikhil-ghige-showcase/](https://aamir-0.github.io/nikhil-ghige-showcase/)

## Troubleshooting

- If you see a 404 error, make sure:
  - The `gh-pages` branch contains the built files (`index.html`, `assets/`, etc.)
  - The `homepage` field in `package.json` is set to your GitHub Pages URL
  - The `base` option in `vite.config.ts` is set to `/nikhil-ghige-showcase/`
  - GitHub Pages is configured to use the `gh-pages` branch
  - Wait a few minutes after deployment

## Technologies Used

- Vite
- React
- TypeScript
- shadcn-ui
- Tailwind CSS

## Host this project on your own GitHub Pages

You can publish this project on your own GitHub Pages in two supported ways. Before deploying, update the configuration to match your GitHub username and repository name.

### 0) Update configuration (required)

1. Set the correct homepage in `package.json`:
	```json
	{
	  "homepage": "https://<your-username>.github.io/<your-repo-name>"
	}
	```

2. Set the correct base path in `vite.config.ts` (must match your repo name):
	```ts
	export default defineConfig(({ mode }) => ({
	  base: "/<your-repo-name>/",
	  // ...existing config...
	}));
	```

3. Routing: This project uses `HashRouter`, which works out of the box on GitHub Pages and avoids 404s on refresh. If you switch to `BrowserRouter`, you must add a `404.html` that serves `index.html` to handle SPA routing on GitHub Pages.

### Option A: Deploy to a `gh-pages` branch (recommended)

1. Install the deploy tool (already added here, repeat if needed):
	```powershell
	npm install gh-pages --save-dev
	```

2. Ensure these scripts exist in `package.json`:
	```json
	{
	  "scripts": {
		 "predeploy": "npm run build",
		 "deploy": "gh-pages -d dist"
	  }
	}
	```

3. Build and publish:
	```powershell
	npm run deploy
	```

4. In GitHub → Settings → Pages:
	- Source: Deploy from a branch
	- Branch: `gh-pages`, Folder: `/ (root)`

Your site will be at: `https://<your-username>.github.io/<your-repo-name>/`

### Option B: Publish from `main` using `/docs` folder

1. Build the site into `docs/`:
	```powershell
	npm run build:docs
	```

2. Commit and push the `docs/` folder to `main`:
	```powershell
	git add docs
	git commit -m "build: publish to docs for GitHub Pages"
	git push origin main
	```

3. In GitHub → Settings → Pages:
	- Source: Deploy from a branch
	- Branch: `main`, Folder: `/docs`

Your site will be at: `https://<your-username>.github.io/<your-repo-name>/`

### Custom domains (optional)

If you use a custom domain, set `base: "/"` in `vite.config.ts`, remove the `homepage` field (or set it to your custom domain), and add a `CNAME` file at the root of the published branch containing your domain.

### Quick checklist

- `package.json` → `homepage` matches your URL
- `vite.config.ts` → `base` matches your repo name (or `/` for custom domains)
- Use `HashRouter` (already configured) to avoid SPA 404s on refresh
- Choose one publishing method: `gh-pages` branch or `main` + `/docs`
- After pushing/deploying, wait 1–3 minutes for Pages to update
