import Ember from 'ember';

function _clickAndAssertCurrentPath(app, selector, expectedPath) {
  click(selector);
  andThen(() => {
    assert.equal(currentPath(), expectedPath, `current path is ${expectedPath}`);
  });
}

export function clickAndAssertCurrentPath(selector, context) {
  return _clickAndAssertCurrentPath(null, selector, context);
}

export default registerAsyncHelper('clickAndAssertCurrentPath', _clickAndAssertCurrentPath);
