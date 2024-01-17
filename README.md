# Luxury Watches ✨

## Theme Structure
Inside your Adastra ✨ theme project, you'll see the following folders and files.

1. Most Shopify themes files and folders remain the same.
2. There is only one additional **Super Special** folder called `src` (you can change its name in `vite.config.js` file).
3. Instead of directly editing static assets in the theme `assets` directory, you will use the new `src` directory instead.
4. Static files inside the `src` directory are served by [Vite](https://vitejs.dev).
5. When launching the developement sever command `npm run dev` the command launches two dev servers, one for [Vite](https://vitejs.dev) to serve static files and the other one for Shopify to upload the development theme to remote Shopify server (Takes a bit of time).

```shell
/
├── assets
├── config
├── layout
├── locales
├── sections/
│   └── hello-world.liquid
├── snippets/
│   └── colors.liquid
├── src/  # Source directory (name can be changed in vite.config.js)
│   ├── entrypoints/ # Entrypoints directory (name can be changed in vite.config.js)
│   │   ├── base.css
│   │   └── index.js
│   └── hello-world.js
├── templates
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run build`        | Build and minifies your production static files to `./assets/` folder |
| `npm run preview`      | Preview of your remote development theme, before deploying |
| `npm run check`        | Run theme check to lint the theme |
| `npm run adastra ...`    | Run CLI commands like `adastra dev`, `adastra check` |
| `npm run adastra --help` | Get help using the Adastra CLI |
