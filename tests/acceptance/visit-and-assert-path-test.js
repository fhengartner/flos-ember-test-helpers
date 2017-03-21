import Ember from 'ember';
import startApp from 'dummy/tests/helpers/start-app';
import { module } from 'qunit';
import { test } from 'ember-qunit';
import 'dummy/tests/helpers/flos-test-helpers/visit-and-assert-path';

let app;

module('Acceptance: visitAndAssertPath', {
  beforeEach() {
    app = startApp();
  },
  afterEach() {
    Ember.run(app, 'destroy');
  }
});

test('visitAndAssertPath', function(assert) {
  visit('/one-button');

  visitAndAssertPath(assert, '/otherpage', 'otherpage');

  andThen(() => assert.equal(currentPath(), 'otherpage'));
});


