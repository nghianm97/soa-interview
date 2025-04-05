# Interview Base Project

## Getting Started

- Run npm npm install first ( or yarn install or pnpm i)

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Note

- This code base has been created and updated regularly by me to be ready for future use.
- I used AI [v0.dev](https://v0.dev/) to help me build the UI, and used Cursor and Claude 3.5 to fix bugs and code future

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Results Achieved

- Built UI on all 4 platforms: Desktop, Mobile, Tablet (Horizontal), Tablet (Vertical)
- Map function
- Multiple language function
- Animation

## Directory structure

- /app/page.tsx: page to contain all the sessions
- /components/interview: contains each session component I used for the page
- /hooks: contain custom hook for interview test
- /locales: contain language file
- tailwind.config.ts: custom some config for scss

## Technology used

- Shadcn for base component
- TailwindCss
- Nextjs
- Typescript
- React hot toast
- I18n (integrated but only used to change the language on the title: LOGO EXAMPLE => ÉCHANTILLON DE LOGO and vice versa)
- Axios for api call (created common function in folder ( services/configApi.ts), integrated but cannot call api because api has CORS Policy error)
- Also configured husky and added storybook

## Summary

- My test may not be perfect due to time constraints, but I tried my best to complete it, thank you.
