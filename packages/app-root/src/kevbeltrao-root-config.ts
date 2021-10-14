import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: '@kevbeltrao/todo',
  app: () => System.import('@kevbeltrao/todo'),
  activeWhen: ['/todo']
});

registerApplication({
  name: '@kevbeltrao/navbar',
  app: () => System.import('@kevbeltrao/navbar'),
  activeWhen: ['/']
});

registerApplication({
  name: '@kevbeltrao/info-app',
  app: () => System.import('@kevbeltrao/info-app'),
  activeWhen: ['/info'],
});

start({
  urlRerouteOnly: true,
});
