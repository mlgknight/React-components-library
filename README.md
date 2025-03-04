# React Component Library with TypeScript and Vite

This project is a React component library built with TypeScript and Vite. It provides a set of reusable and customizable UI components that can be used in various React applications. The library is designed to be lightweight, fast, and easy to integrate into any project.

## Features

- **React**: Built with the latest version of React for creating interactive UIs.
- **TypeScript**: Utilizes TypeScript for type safety and better developer experience.
- **Vite**: Uses Vite for fast development and optimized production builds.
- **ESLint**: Configured with ESLint for code quality and consistency.
- **Reusable Components**: Includes a variety of reusable UI components such as cards, badges, tooltips, banners, and more.

## Components

### Card

A customizable card component that can be used to display content in a structured format.

### Badge

A badge component for displaying status or notifications.

### Tooltip

A tooltip component for displaying additional information on hover.

### Toast

A toast notification component for displaying brief messages.

### Banner

A banner component for displaying important messages or alerts.

### Testimonials

A testimonials component for displaying user feedback or reviews.

## Project Structure

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
	// Set the react version
	settings: { react: { version: '18.3' } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
	},
});
```
