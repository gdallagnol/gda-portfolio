# GDA Portfolio

A portofolio web application for a cat wizard 🐱🧙‍♀️.

Using Astro, Tailwind and React.

# Local Development Instructions

Install [Node](https://nodejs.org/en/download/package-manager/)

Install [VS Code](https://code.visualstudio.com/)

Clone the repository

Open VS Code and open the project folder

Go to `Terminal` -> `New Terminal`

In the terminal, run `npm install`

In the terminal, run `npm run dev`

At this point, a browser tab should open up at the URL `http://localhost:4322/gda-portfolio`.

You can edit the files / texts and the browser will refresh automatically to reflect the changes.

# Folder Structure

Below is the folder structure with a brief explanation of the main directories and where to add what.

The files and folders without any comment next to them will likely not need any further changes and can be ignored.

```
├── README.md

├── astro.config.mjs

├── package-lock.json

├── package.json // this is where dependencies are specified

├── public
│   └── favicon.svg

├── src
│   ├── assets // add images here, inside the corresponding folder (branding/amaterasu, for instance)

│   ├── components

│   ├── layouts // the Layout.astro has the core HTML tags, like the page title, favicon and etc

│   ├── pages // all pages live inside this folder. if you want to create a new Branding page, copy one from the /branding directory, rename it and update texts as in the examples

│   └── utils

├── tailwind.config.mjs

└── tsconfig.json
```

# Deploying changes

The `.github/workflows/deploy.yml` file specifies the Github Action for pushing changes. This file doesn't need any changes for content update, but it's good to know it exists.

It is copied directly from [Astro's documentation](https://docs.astro.build/en/guides/deploy/github/#configure-astro-for-github-pages), where you can find more information if necessary.

Any changes that are commited and pushed to the `main` branch will trigger a deployment that you can see in Github, inside the repositories `Actions` tab.

# More information

If you need more information on creating pages, i18n or other topics, please check the [Astro docs](https://docs.astro.build/en/getting-started/).
