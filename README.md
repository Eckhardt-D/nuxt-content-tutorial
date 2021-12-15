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

- ? What do you want to use as your public directory? `dist`
- ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
- ? Set up automatic builds and deploys with GitHub? y
