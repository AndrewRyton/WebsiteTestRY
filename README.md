# Andrew’s Data Services

Marketing data cleaning, consolidation, and client-ready reporting for agencies.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Free GitHub Pages hosting

The page is prerendered to static HTML and uses no paid services or server at runtime. Original PDF imagery is optimized and bundled with the site.

1. Push this project to your GitHub repository.
2. In the repository, open **Settings → Pages → Build and deployment**, and select **GitHub Actions** as the source.
3. Push to `main` or run **Deploy static site to GitHub Pages** from the Actions tab. If your default branch is different, update the workflow branch.

The workflow automatically applies the Pages base path and uploads `dist/client`, not the server output. The same deployment works for repository Pages and account-root Pages. For a custom domain, set it in GitHub Pages before rerunning the workflow.

Dashboard, spreadsheet, terms, LinkedIn, and email buttons retain their original PDF destinations. Email opens the visitor’s email application; no form service or subscription is required. External sample documents remain controlled by their original sharing permissions.
