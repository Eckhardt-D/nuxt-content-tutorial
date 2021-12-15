# Nuxt.js Content Blog

Learn how to build and deploy a Nuxt.js blog website to Firebase. 🎈

## Start by adding your firebase project

Note you'll need to install firebase:

```bash
npm i -g firebase-tools@latest
```

You'll need to be authenticated to your firebase project.

```bash
firebase login
```

If you don't have a project yet, run the following and follow the steps:

```bash
firebase projects:create
```

To initialize your blog run:

```bash
firebase init hosting
```

The options below will allow your code to deploy automatically to your firebase hosting everytime you push to your main branch.

- ? What do you want to use as your public directory? `dist`
- ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `N`
- ? Set up automatic builds and deploys with GitHub? `y`
- ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) (<your-account>/nuxt-content-tutorial)
- ? Set up the workflow to run a build script before every deploy? (y/N) `y`
- ? What script should be run before every deploy? (npm ci && npm run build) `npm run test && npm run generate`
- ? Set up automatic deployment to your site's live channel when a PR is merged? (Y/n) `Y`
- ? What is the name of the GitHub branch associated with your site's live channel? `main`
