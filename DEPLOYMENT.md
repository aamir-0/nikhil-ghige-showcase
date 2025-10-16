# GitHub Pages Deployment Guide

## ✅ Completed Steps

1. **Installed gh-pages package**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Updated package.json**
   - Added homepage: `https://aamir-0.github.io/nikhil-ghige-showcase`
   - Added predeploy script: `npm run build`
   - Added deploy script: `gh-pages -d dist`

3. **Updated vite.config.ts**
   - Added base path: `/nikhil-ghige-showcase/`

4. **Built and deployed**
   - Successfully built the production version
   - Published to gh-pages branch

## 🔧 Next Steps (IMPORTANT!)

### Configure GitHub Pages Settings

1. Go to your GitHub repository: `https://github.com/aamir-0/nikhil-ghige-showcase`

2. Click on **Settings** tab

3. In the left sidebar, click on **Pages**

4. Under **Build and deployment**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` branch (if you don't see it, refresh the page)
   - **Folder**: Select `/ (root)`

5. Click **Save**

6. Wait a few minutes for GitHub to build and deploy your site

## 🌐 Your Site URL

Once configured, your site will be available at:
**https://aamir-0.github.io/nikhil-ghige-showcase/**

## 🔄 Future Deployments

Whenever you make changes to your app, simply run:

```bash
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

## 🐛 Troubleshooting

If your site shows a blank page or 404:

1. **Check the branch**: Make sure GitHub Pages is set to deploy from `gh-pages` branch
2. **Clear cache**: Delete the `dist` folder and run `npm run build && npm run deploy`
3. **Check base path**: Ensure `vite.config.ts` has `base: "/nikhil-ghige-showcase/"`
4. **Check homepage**: Ensure `package.json` has the correct homepage URL
5. **Wait**: Sometimes it takes a few minutes for changes to propagate
6. **Try incognito**: Open your site in an incognito/private window to avoid cache issues

## 📝 Notes

- The `gh-pages` branch is automatically created and managed by the gh-pages package
- Don't manually edit the `gh-pages` branch
- Your source code stays on the `main` branch
- The deployed files are in the `gh-pages` branch
