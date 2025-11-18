# 2025-angular-interview

Interactive Angular playground that demonstrates change detection strategies, the CDK virtual scroll viewport, and using Web Workers to offload expensive calculations. Built with Angular CLI 19.1.1.

## Features

- **Home landing page** with quick navigation to every demo route.
- **User list demo** (`/users`) shows how `ChangeDetectionStrategy.OnPush` works with manual immutability and a `trackBy` function. Open DevTools to see how only the appended user logs on each click.
- **Virtual scroll demo** (`/virtual-scroll`) renders 5,000 generated users via `cdk-virtual-scroll-viewport`, demonstrating how the DOM stays light while you scroll through large data sets.
- **Web worker demo** (`/worker-demo`) spins up `heavy-computation.worker.ts` to perform CPU-intensive math (50M iterations) without freezing the UI, reporting the duration when complete.

## Getting started

```bash
npm install
npm run start # or: ng serve
```

The dev server runs on `http://localhost:4200/`. Any component or worker change reloads automatically.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run start` | Serve the app locally with live reload. |
| `npm run build` | Produce an optimized production build in `dist/`. |
| `npm run test` | Execute the Karma unit test suite. |

## Navigating the demos

1. Launch the dev server and open the browser.
2. Use the header buttons (Home, User List, Virtual Scroll Example, Web Worker Example) to switch between routes.
3. For the User List route, watch the console to understand how `trackBy` prevents re-rendering existing rows.
4. For the Virtual Scroll route, inspect the DOM while scrolling to confirm that only visible rows render (`itemSize` matches the CSS height).
5. For the Web Worker route, click "Start Calculation" and observe how the UI stays responsive while the worker logs its progress and returns the result.

## Project structure

```
src/app/
  app.routes.ts          # Route map pointing to each standalone component
  components/
    home/                # Simple landing view
    user-list/           # OnPush + trackBy demo
    virtual-scroll-list/ # CDK virtual scroll demo backed by UserService
    worker-demo/         # Worker client that posts messages to heavy-computation.worker.ts
  services/user.service.ts
  workers/heavy-computation.worker.ts
```

## Additional resources

- [Angular documentation](https://angular.dev)
- [Angular CDK ScrollingModule](https://material.angular.io/cdk/scrolling/overview)
- [Web Workers in Angular](https://angular.dev/tools/cli/workers)
