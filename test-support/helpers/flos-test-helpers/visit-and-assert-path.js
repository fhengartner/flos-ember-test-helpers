import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('visitAndAssertPath', function(app, assert, visitURL, expectedPath) {
  visit(visitURL);
  andThen(() => {
    assert.equal(currentPath(), expectedPath, `is on ${expectedPath}`);
  });
});
