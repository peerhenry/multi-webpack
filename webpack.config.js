const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CONFIG PARTS

function page(title){
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title,
      }),
    ]
  }
}

const devServer = {
  devServer: {
    stats: "errors-only",
    open: true,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 300 // delay rebuild because otherwise somehow only the changed test is shown on browser refresh
    }
  }
}

const entry = {
  entry: "./src/main.js"
}

const output = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}

const sourcemap = { devtool: 'source-map' };
const modeDev = { mode: "development" };
const modeProd = { mode: "production" };

// CONFIGS

const testEntry = {
  entry: "./tests.js"
}

const testRules = {
  module: {
    rules: [{
      test: /test\.js$/,
      use: 'mocha-loader',
      exclude: /node_modules/
    }]
  }
}

const testConfig = merge([
  testEntry,
  testRules,
  devServer,
  sourcemap,
  page("Test Report"),
  modeDev
]);

const developmentConfig = merge([
  entry,
  devServer,
  sourcemap,
  page("My Page (debug)"),
  modeDev
]);

const productionConfig = merge([
  entry,
  output,
  page("My Page"),
  modeProd
]);

// EXPORTS

module.exports = env => {

  console.log("### env: " + env);

  switch(env)
  {
    case "test":
      return testConfig;
    case "development":
      return developmentConfig;
    case "production":
      return productionConfig;
  }
}