# available:// landing

Static landing page ready for GitHub Pages.

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml
├── .nojekyll
├── index.html
├── styles.css
└── script.js
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push this folder to the `main` branch.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` (or run the `Deploy to GitHub Pages` workflow manually from the Actions tab).

After the workflow finishes, your site URL will be one of these:

- `https://<username>.github.io/<repo-name>/` (project site)
- `https://<username>.github.io/` (if repo is named `<username>.github.io`)

## Local preview

Run from this directory:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).
