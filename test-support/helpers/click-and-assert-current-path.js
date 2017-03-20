import Ember from 'ember';

function _clickAndAssertCurrentPath(app, assert, selector, expectedPath) {
  click(selector);
  andThen(() => {
    assert.equal(currentPath(), expectedPath, `current path is ${expectedPath}`);
  });
}

export function clickAndAssertCurrentPath(assert, selector, context) {
  return _clickAndAssertCurrentPath(null, assert, selector, context);
}

export default Ember.Test.registerAsyncHelper('clickAndAssertCurrentPath', _clickAndAssertCurrentPath);
