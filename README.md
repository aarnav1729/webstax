# Webstax [We're Live](https://main--webstaxx.netlify.app/)


## Agency Services
Webstax is a premier web development agency offering a comprehensive range of services designed to help businesses enhance their online presence and achieve their digital goals. Our core services include:

- **Full Stack Development**: We specialize in building robust, scalable, and high-performance web applications using the latest technologies and frameworks. Our full stack development services cover both front-end and back-end development, ensuring a seamless user experience and efficient server-side operations.
- **Figma Design**: Our design team excels in creating visually stunning and user-friendly interfaces. Using Figma, we craft detailed prototypes and design systems that enhance user engagement and satisfaction.
- **SEO (Search Engine Optimization)**: We optimize your website to improve search engine rankings, increase visibility, and drive organic traffic. Our SEO services include keyword research, on-page optimization, technical SEO, and link building strategies.
- **Social Media Marketing**: We develop and implement effective social media strategies to boost your brand's visibility and engagement across various platforms. Our services include content creation, social media management, and advertising campaigns.


## Project Overview
Webstax is a modern web application built using [Astro](https://astro.build), a powerful framework designed for building fast, content-focused websites. This project leverages Astro's capabilities to deliver a seamless user experience with prebuilt components, dynamic routing, and efficient asset management.


### Features
- **Dynamic Routing**: Astro enables intuitive navigation by exposing each `.astro` or `.md` file in the `src/pages/` directory as a route based on its file name.
- **Prebuilt Components**: The application uses React and Svelte prebuilt components to enhance functionality and performance, ensuring a modular and maintainable codebase.
- **Static Assets Management**: All static assets, such as images, fonts, and icons, are efficiently managed and served from the `public` directory, contributing to faster load times and better performance.
- **SEO Optimization**: The application includes meta tags, structured data, and other SEO best practices to improve search engine visibility and rankings.
- **Responsive Design**: Webstax is designed to provide an optimal viewing experience across a wide range of devices, from desktops to mobile phones.


### Technology Stack
- **Frontend**: Built using Astro, with prebuilt components from React and Svelte.
- **Styling**: Tailwind CSS is used for styling, providing a utility-first approach to design and ensuring consistency across the application.
- **Backend**: The backend is powered by Node.js and Express, providing a robust and scalable server-side framework.
- **Database**: MongoDB is used for data storage, offering flexibility and performance for managing the application's data.
- **Deployment**: Deployed on Netlify, a platform that offers seamless deployment, continuous integration, and performance optimization for static sites and web applications.


### Project Structure
Skeleton of the Webstax website:
/
├── public/
│   ├── avatars/
│   ├── favicon_io/
│   ├── fonts/
│   ├── work/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Navigation.astro
│   │   │   └── Footer.astro
│   │   ├── landing/
│   │   │   ├── Hero.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── tally.astro
│   └── styles/
│       └── global.css
├── dist/
│   ├── fonts/
│   ├── work/
│   └── index.html
├── site.webmanifest
├── LICENSE
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.cjs
└── tsconfig.json


### Commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Builds your production site to `./dist/`         |
| `npm run preview`      | Previews your build locally, before deploying    |
| `npm run astro ...`    | Runs CLI commands like `astro add`, `astro check`|
| `npm run astro --help` | Gets help using the Astro CLI                    |


## Deployment
Webstax is deployed on [Netlify](https://www.netlify.com/), a powerful platform for hosting static sites and web applications. The deployment process involves building the site using Astro and pushing the production-ready files to the `dist` directory. Netlify handles continuous deployment, ensuring that any changes pushed to the repository are automatically built and deployed.


## Contributing
We welcome contributions to improve Webstax. Whether it's new features, enhancements, or bug fixes, we encourage you to fork the repository, make your changes, and submit a pull request. Our team will review the submissions and merge them as appropriate.


## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


## Want to Learn More?
Check Astro's [documentation](https://docs.astro.build).

For any inquiries or support, please contact us at [webstaxx@gmail.com](mailto:webstaxx@gmail.com).
