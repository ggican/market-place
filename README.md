# FOR ACCESS WEBSITE JUST PRESS SUBMIT BUTTON LOGIN PAGE

# Project Overview

This project is a Next.js application that includes several services, components, and tools to build a robust user interface. It integrates with **Storybook** for component documentation, **Chromatic** for visual testing, and **MSW (Mock Service Worker)** for API mocking. It is a multi-environment application, meaning it can be configured to run in different environments (e.g., development, production).

---

## URLs for Key Resources

- **Chromatic** (Visual Testing and Component Library):  
  [Chromatic Library](https://www.chromatic.com/library?appId=6735dea95fe061d89236dfeb)

- **Storybook** (Component Documentation and Testing):  
  [Storybook URL](https://market-place-storybook.vercel.app/)

- **Live Website** (Production URL):  
  [Website URL](https://market-place-red-eight.vercel.app/)

---

## Environment Variables

The following environment variables are used in this project:

- **`NEXT_PUBLIC_TOKEN`**:  
  This token is used for authentication to access secure APIs. It's a public token and can be exposed in frontend requests.  
  **Example**:  
  `eyJhbGciOiJXXXXXXXXX`

- **`NEXT_PUBLIC_BASE_API`**:  
  This is the base URL for your backend API. It’s used to make network requests to the server. Exposed to the client side for API consumption.  
  **Example**:  
  `https://example-api.sebaris.link`

- **`NEXT_PUBLIC_ENV`**:  
  Defines the environment in which the application is running (e.g., development, production, or staging). Useful for configuring environment-specific behaviors.  
  **Example**:  
  `'development' | 'production'`

- **`NEXT_PUBLIC_IMAGE`**:  
  A placeholder for the image URL. This variable can be used to store image URLs that are dynamically fetched or stored.  
  **Example**:  
  _(empty or URL)_

- **`NEXT_PUBLIC_API_MOCKING`**:  
  Controls whether API mocking is enabled. This is useful during development to simulate API responses. In production, it should be set to `disabled`.  
  **Example**:  
  `disabled` or `enabled`

---

## NPM Scripts Explanation

The following scripts are defined in the `package.json` file to automate common tasks such as running the development server, testing, linting, formatting, building the project, and more.

### **Scripts**

- **`dev`**:  
  Starts the Next.js development server for local development. This will run the app in development mode, enabling features like hot-reloading for easier development.

  ```bash
  npm run dev

  ```

- **`build`**:  
  Builds the production version of the Next.js app. This creates an optimized and minified version of the application that is ready for deployment.
  ```bash
  npm run build

  ```
- **`storybook`**:  
  Starts Storybook in development mode at port 6006. Storybook is used for building and testing UI components in isolation.

  ```bash
  npm run storybook

  ```

- **`build-storybook`**:  
  Builds a static version of Storybook, which can be deployed to a hosting service. This is used for publishing the Storybook UI components library.

  ```bash
  npm run build-storybook

  ```

- **`chromatic`**:  
  Deploys Storybook to Chromatic for visual testing and UI review. Chromatic allows you to perform visual regression testing on your components.
  ```bash
  npm run chromatic
  ```




---

## Page

you can open page in the website :

- **`(external)`**:  
  This is for external user or end user to visit website
  ```bash
  (external)
    - "/" Home Page External
    - "/products/:id" Product Detail
  ```

- **`admin`**:  
  This is for admin user for access dashboard
  ```bash
  admin
    - "/admin" Home Page Admin
    - "/admin/products" Product Form
  ```

- **`(guest)`**:  
  This is for guest user no access to website
  ```bash
  (guest)
    - "/login" Login Page
    - "/register" Register Page
  ```

