import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
    actions: {
    remove(item) {
      console.log(item);
      this.get('shoppingCart').remove(item);
      this.sendAction('removeItem');
    }
  }
});
