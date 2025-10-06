# Deployment Guide

## Automatic Deployment (Recommended)

The website automatically deploys to GitHub Pages when you push to the `master` branch.

### How it works:
1. Push your changes to the `master` branch
2. GitHub Actions automatically builds and deploys the site
3. The site is available at your GitHub Pages URL

### GitHub Actions Workflow:
- **Trigger**: Push to `master` branch
- **Build**: Uses Node.js 18 and pnpm
- **Deploy**: Automatically deploys to GitHub Pages
- **Status**: Check the Actions tab in your GitHub repository

## Manual Deployment (Fallback)

If you need to deploy manually:

```bash
pnpm run deploy:manual
```

This will:
1. Clean the build directory
2. Build the project
3. Deploy to the `gh-pages` branch

## GitHub Pages Configuration

Make sure your GitHub repository has GitHub Pages enabled:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` (for manual) or GitHub Actions (for automatic)

## Environment Variables

The build process uses:
- `NODE_ENV=production` for production builds
- GitHub Actions automatically sets up the environment

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Verify `svelte.config.js` is configured correctly

### Deployment Fails
- Check GitHub Pages settings
- Verify repository permissions
- Check if the `gh-pages` branch exists

### Manual Deployment Issues
- Ensure you have `gh-pages` package installed
- Check your GitHub credentials
- Verify the repository URL in `scripts/deploy.js`
