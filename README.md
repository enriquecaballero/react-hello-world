# React Hello, World!

[![Greenkeeper badge](https://badges.greenkeeper.io/enriquecaballero/react-hello-world.svg)](https://greenkeeper.io/)

This is a very simple, boiler-plate, client-side only application using React, Webpack, and Babel.

## Demo

https://enriquecaballero.github.io/react-hello-world/

## Running / How does it work?

- ### `npm run build`

    This executes the following script:
    ```
  $ webpack
    ```

    This tells webpack to bundle the files.  Webpack by default will look for a `webpack.config...` file in the current directory, so it finds `webpack.config.babel.js` and uses that.

    The `.babel.js` on the end gets the code transpiled using our babel configuration first, before it is executed, so we can use ES2015 language features in our webpack configuration.

    The result of running this command is three new or updated files in the `<PROJECT_ROOT>/dist` directory:

    1. `bundle.js`: a bundle containing a transpiled  `<PROJECT_ROOT>/src/index.jsx`, along with all of `index.jsx`'s dependencies.  This includes `react`, `react-dom`, `<PROJECT_ROOT>/src/components/Hello`, and any dependencies that those files have.

    2. `index.html`: because `index.html` is listed as an entry point in our webpack configuration and we use the `html-loader`, the file gets copied from `<PROJECT_ROOT>/src` to `<PROJECT_ROOT>/dist` for us.  At this point, we are not performing any transpilation or other transformations of this file, just copying it over.

- ### `npm start`

    This executes the following script:
    ```
  $ webpack --watch
    ```

    This tells webpack to bundle the files, just as it did with the `npm run build` script previously discussed.

    The difference is that webpack will then also _watch_ for further changes.  Whenever a change is made, that part of the code is rebundled automatically, so you always have an up-to-date bundle.

    This requires a refresh to view the updated output in your browser.

    Additionally, the `-d` option is the [development shortcut](https://github.com/webpack/docs/wiki/cli#development-shortcut--d).  Among other things, this causes webpack to emit one additional file:

    3. `bundle.js.map`: map files that make debugging our bundle possible using something like Chrome's developer tools.  Map files enable the browser to trace minified code back to the actual code that the developer wrote.

### Webpack Dev Server

Coming Soon

## Contributing

Use GitHub to fork this project, make and commit your changes, and then [submit a new pull request](https://github.com/enriquecaballero/react-hello-world/pulls).

### Updating `gh-pages`

We're just using the `dist` directory on the `gh-pages` branch to showcase our [demo](./src/website/Website.jsx).

After making your changes, run:

```shell
$ npm run build

# !! commit your changes here !!

$ git subtree push --prefix dist origin gh-pages
```

This updates the bundled code in the `dist` directory, then you commit the updated source, then push the `dist` directory to the root of the `gh-pages` branch.
