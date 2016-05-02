# React Hello, World!

This is a very simple, boiler-plate, client-side only application using React, Webpack, and Babel.

## Demo

TODO link to gh-pages

## Running / How does it work?

A few different scripts have been provided to see the different possibilities with babel and webpack.

### Babel

> `npm run babel`

This command will just run the babel transpilation on the two `*.jsx` source files in `/src`, and output the transpiled versions to the corresponding location in `/lib`.

This will allow you to see what the output of babel looks like.

Additionally, these files could then be required via the `<script />` tag in an HTML document and, as long as all of their dependencies were present as well (`react`, `react-dom`, etc.), these would be able to be executed in any modern browser.

### Webpack

- `npm run build`

    This executes the following script:
    ```shell
    node ./node_modules/.bin/webpack
    ```

    This tells webpack to bundle the files.  Webpack by default will look for a `webpack.config...` file in the current directory, so it finds `webpack.config.babel.js` and uses that.

    The `.babel.js` on the end gets the code transpiled using our babel configuration first, before it is executed, so we can use ES2015 language features in our webpack configuration.

    The configuration is thoroughly documented with comments in the file.

    The result of running this command is three new or updated files in the `/dist` directory:

    1. `bundle.js`: a bundle containing a transpiled  `/src/index.jsx`, along with all of `index.jsx`'s dependencies.  This includes `react`, `react-dom`, `/src/components/Hello`, and any dependencies that those files have.
    2. `index.html`: because `index.html` is listed as an entry point in our webpack configuration and we use the `html-loader`, the file gets copied from `/src` to `/dist` for us.  At this point, we are not performing any transpilation or other transformations of this file, just copying it over.

- `npm run dev`

    This executes the following script:
    ```shell
    node ./node_modules/.bin/webpack -d --watch
    ```

    This tells webpack to bundle the files, just as it did with the `npm run build` script previously discussed.

    The difference is that webpack will then also watch for further changes.  Whenever a change is made, that part of the code is rebundled automatically, so you always have an up-to-date bundle.

    This requires a refresh to view the updated output in your browser.

    Additionally, the `-d` option is the [development shortcut](https://github.com/webpack/docs/wiki/cli#development-shortcut--d).  Among other things, this causes webpack to emit one additional file:

    3. `bundle.js.map`: map files that make debugging our bundle possible using something like Chrome's developer tools.  Map files enable the browser to trace minified code back to the actual code that the developer wrote.

### Webpack-dev-server

Coming soon

## Contributing

Please do!  Use GitHub to fork this project, make and commit your changes, and then [submit a new pull request](https://github.com/enriquecaballero/react-hello-world/pulls).

### Updating `gh-pages`

We're just using the `/dist` directory on the `gh-pages` branch to show people what the result of the included code is.

After making your changes, run:

```shell
npm run build

# !! commit your changes here !!

git subtree push --prefix dist origin gh-pages
```

This updates the bundled code in the `/dist` directory, then you commit the updated source, then push the `/dist` directory to the root of the `gh-pages` branch.

The biggest downside to this is having bundled code in our repo, but we'll live.

## Recommended Reading

- Appendix A of Pro React: [Webpack for React](http://www.pro-react.com/materials/appendixA/)
