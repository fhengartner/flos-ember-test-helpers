# What is flos-ember-test-helpers

This addon provides and registers test helpers for use in the testing of your application.

# Provided Helpers

## clickAndAssertPath

```js
clickAndAssertPath(assert, selector, expectedPath);
```

Click on the element specified by `selector` and assert that it has transitioned to route `expectedPath`.

```js
// Example:
clickAndAssertPath(assert, 'button', 'other.route');
```

## visitAndAssertPath

```js
visitAndAssertPath(assert, path, expectedPath);
```

Visit path and assert that it has transitioned to route `expectedPath`.

```js
// Example:
visitAndAssertPath(assert, '/a/path', 'a.path');
visitAndAssertPath(assert, '/will/redirect', 'expected.route');
```

# How to use this addon in your application
  
## Install

```
ember install flos-ember-test-helpers
```

## Using in acceptance tests

For each test helper you wish to use, you will need to import them.

* Add `import './flos-test-helpers/click-and-assert-path';` to the beginning of the `tests/helpers/start-app.js` file
* Add `import './flos-test-helpers/visit-and-assert-path';` to the beginning of the `tests/helpers/start-app.js` file
* Ignore globals in eslint / jshint
  * Add `"clickAndAssertPath": true,` to the globals section of the `.eslintrc`
  * Add "clickAndAssertPath", to the predef section of the `/tests/.jshintrc` file

