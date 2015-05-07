This project is written in typescript 1.5 with ES6 modules.

Take a look at the `scripts` section of `package.json` to understand how it works.
Typescript assets are compiled with http://webpack.github.io[webpack].

To build the app, run:

----
npm run build
----

To start a dev server with hot reload:

----
npm start
----

It will automatically open a browser on `http://localhost:8080/webpack-dev-server/`.
Use `http://localhost:8080/` if you don't want auto-reload.

To deploy to github-pages:

----
npm run deploy
----
