import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('clickAndAssertPath', function(app, assert, selector, expectedPath) {
  click(selector);
  andThen(() => {
    assert.equal(currentPath(), expectedPath, `current path is ${expectedPath}`);
  });
});
