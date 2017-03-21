import Ember from 'ember';
import startApp from 'dummy/tests/helpers/start-app';
import { module } from 'qunit';
import { test } from 'ember-qunit';
import 'dummy/tests/helpers/flos-test-helpers/click-and-assert-path';

let app;

module('Acceptance: clickAndAssertPath', {
  beforeEach() {
    app = startApp();
  },
  afterEach() {
    Ember.run(app, 'destroy');
  }
});

test('clickAndAssertPath', function(assert) {
  visit('/one-button');

  clickAndAssertPath(assert, 'button', 'otherpage');

  andThen(() => assert.equal(currentPath(), 'otherpage'));
});


