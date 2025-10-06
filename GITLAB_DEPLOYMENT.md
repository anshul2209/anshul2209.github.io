# GitLab Pages Deployment Guide

This guide explains how to deploy your SvelteKit portfolio website to GitLab Pages.

## Prerequisites

1. A GitLab account
2. A GitLab repository (create one if you don't have it)
3. Git configured on your local machine

## Setup Instructions

### 1. Create GitLab Repository

1. Go to [GitLab.com](https://gitlab.com) and sign in
2. Click "New project" → "Create blank project"
3. Name your project (e.g., `anshulbansal-portfolio`)
4. Set visibility to "Public" (required for GitLab Pages)
5. Click "Create project"

### 2. Push Your Code to GitLab

```bash
# Add GitLab remote (replace with your GitLab repository URL)
git remote add gitlab https://gitlab.com/yourusername/yourprojectname.git

# Push to GitLab
git push gitlab master
```

### 3. Enable GitLab Pages

1. Go to your GitLab project
2. Navigate to **Settings** → **Pages**
3. The pages will be automatically enabled when the CI/CD pipeline runs successfully

## Deployment Methods

### Automatic Deployment (Recommended)

The website automatically deploys to GitLab Pages when you push to the `master` or `main` branch.

**How it works:**
1. Push your changes to the `master`/`main` branch
2. GitLab CI/CD automatically builds and deploys the site
3. The site is available at: `https://yourusername.gitlab.io/yourprojectname`

### Manual Deployment

If you need to deploy manually:

```bash
# For GitLab Pages
pnpm run deploy:gitlab:manual
```

## GitLab CI/CD Configuration

The `.gitlab-ci.yml` file includes:

- **Build Stage**: Installs dependencies and builds the SvelteKit app
- **Deploy Stage**: Deploys to GitLab Pages
- **Test Stage**: Tests the build process on merge requests

### Pipeline Stages

1. **Build**: Uses Node.js 18 and pnpm to build the application
2. **Deploy**: Copies build artifacts to the `public` directory for GitLab Pages
3. **Test**: Validates the build process on merge requests

## Configuration Files

### `.gitlab-ci.yml`
- Defines the CI/CD pipeline
- Uses Node.js 18 image
- Caches dependencies for faster builds
- Deploys to GitLab Pages automatically

### `svelte.config.js`
- Configured for static site generation
- Optimized for GitLab Pages deployment
- Includes prerender configuration

## Environment Variables

The build process uses:
- `NODE_ENV=production` for production builds
- GitLab CI/CD automatically sets up the environment

## Troubleshooting

### Build Fails
- Check the CI/CD pipeline logs in GitLab
- Ensure all dependencies are in `package.json`
- Verify `svelte.config.js` is configured correctly

### Deployment Fails
- Check GitLab Pages settings
- Verify repository is public (required for GitLab Pages)
- Check if the CI/CD pipeline completed successfully

### Manual Deployment Issues
- Ensure you have pnpm installed
- Check your GitLab credentials
- Verify the repository URL

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Add your custom domain
3. Configure DNS settings to point to GitLab Pages
4. Add a `CNAME` file to your repository root (if needed)

## Performance Optimization

The configuration includes:
- Dependency caching for faster builds
- Static site generation for optimal performance
- Optimized build artifacts

## Security

- Repository must be public for GitLab Pages
- CI/CD pipeline runs in isolated environment
- No sensitive data should be committed to the repository

## Monitoring

- Check pipeline status in **CI/CD** → **Pipelines**
- Monitor deployment status in **Settings** → **Pages**
- View build logs for debugging

## Support

For issues with GitLab Pages:
- [GitLab Pages Documentation](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [SvelteKit Documentation](https://kit.svelte.dev/)
