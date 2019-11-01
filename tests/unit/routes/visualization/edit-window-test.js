import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | visualization/edit-window', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:visualization/edit-window')
    assert.ok(route)
  })
})
