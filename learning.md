# Commands

## Start Vite Project with React

- pnpm create vite@latest .
- choose react with javascript + swc
- remove existing files
- pnpm install
- pnpm run dev

## Add Tailwind

- pnpm add -D tailwindcss postcss autoprefixer
- pnpx tailwindcss init -p
  Then go inside the tailwind.config.js file and add the following:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Then go inside the index.css file and add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
