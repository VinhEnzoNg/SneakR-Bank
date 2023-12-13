# Sneakers Bank

## Strapi Backend

### Installation

1. Install the Strapi CLI globally:

    ```bash
    npm install -g create-strapi-app
    ```

2. Create a new Strapi project:

    ```bash
    npx create-strapi-app <project-name>
    ```

3. Install the Nuxt.js Strapi module:

    ```bash
    npm i @nuxtjs/strapi
    ```

4. Add the Nuxt.js Strapi module to your `nuxt.config.js` file:

    ```javascript
    // nuxt.config.js
    export default defineNuxtConfig({
      modules: ['@nuxtjs/strapi'],
      strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1338/',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
      }
    });
    ```

### Strapi Plugins

- **Import Export Entries:**
  This plugin helps you import and export data from and to your database in just a few clicks.

- **Documentation:**
  Create an OpenAPI Document and visualize your API with SWAGGER UI.

## Vue.js/Nuxt.js Frontend

### Installation

1. Initialize a new Nuxt.js project:

    ```bash
    npx nuxt@latest init <project-name>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-name>
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Access the development server at [http://localhost:3000/](http://localhost:3000/).

## Tailwind CSS Integration

### Installation

1. Install Tailwind CSS for Nuxt.js:

    ```bash
    npm install -D @nuxtjs/tailwindcss
    ```

2. Add Tailwind CSS to the `nuxt.config.js` file:

    ```javascript
    // nuxt.config.js
    export default defineNuxtConfig({
      modules: ['@nuxtjs/tailwindcss']
    });
    ```

3. Initialize Tailwind CSS configuration:

    ```bash
    npx tailwindcss init
    ```

## Import Data into Strapi

1. Create a new table in Strapi with the exact same keys as your JSON or CSV file.

2. If the data is too large, go to your Strapi project's folder, navigate to `config` → `middlewares.js`, and change:

    ```javascript
    "strapi::body"
    ```

    into

    ```javascript
    {
      name: "strapi::body",
      config: {
        jsonLimit: "<the size of your data>mb",
      },
    },
    ```

Now, you have set up your Sneakers Bank website with Strapi as the backend, Nuxt.js as the frontend, and Tailwind CSS for styling. You can start building and customizing your sneaker-related content on your website!