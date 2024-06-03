# webstax
## agency services
- full stack development
- figma 
- seo
- social media marketing

## structure
skeleton of webstax website:
```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```
built using astro.
astro looks for `.astro` or `.md` files in the `src/pages/` directory. 
each page is exposed as a route based on its file name.
react/svelte prebuilt components are within `src/components/`,
all static assets are placed in the `public/` directory.

## commands
all commands are run from the root of the project, from a terminal:
| command                | action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | installs dependencies                            |
| `npm run dev`          | starts local dev server at `localhost:3000`      |
| `npm run build`        | build your production site to `./dist/`          |
| `npm run preview`      | preview your build locally, before deploying     |
| `npm run astro ...`    | run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | get help using the Astro CLI                     |

## want to learn more?
check astros [documentation](https://docs.astro.build)
