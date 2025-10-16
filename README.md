
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
