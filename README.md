# What is flos-ember-test-helpers

This addon provides and registers test helpers for use in the testing of your application.

# Provided Helpers

## clickAndAssertCurrentPath

```js
clickAndAssertCurrentPath(assert, selector, expectedPath);
```

Click on the element specified by `selector` and assert that it has transitioned to route `expectedPath`.

```html
<button>click me</button>
```

```js
// Example:
clickAndAssertCurrentPath(assert, 'button', 'other.route');
```

# How to use this addon in your application
  
## Install

```
ember install flos-ember-test-helpers
```

## Using in acceptance tests

* Add `import from './click-and-assert-current-path';` to the beginning of the `tests/helpers/start-app.js` file
* Ignore globals in eslint / jshint
  * Add `"clickAndAssertCurrentPath": true,` to the globals section of the `.eslintrc`
  * Add "clickAndAssertCurrentPath", to the predef section of the `/tests/.jshintrc` file

