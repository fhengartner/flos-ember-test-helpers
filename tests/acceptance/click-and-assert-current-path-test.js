import Ember from 'ember';
import startApp from 'dummy/tests/helpers/start-app';
import { module } from 'qunit';
import { test } from 'ember-qunit';
import { clickAndAssertCurrentPath } from 'dummy/tests/helpers/click-and-assert-current-path';

let app;

module('Acceptance: clickAndAssertCurrentPath', {
  beforeEach() {
    app = startApp();
  },
  afterEach() {
    Ember.run(app, 'destroy');
  }
});

test('clickAndAssertCurrentPath', function(assert) {
  visit('/one-button');

  clickAndAssertCurrentPath(assert, 'button', 'otherpage');

  andThen(() => assert.equal(currentPath(), 'otherpage'));
});


