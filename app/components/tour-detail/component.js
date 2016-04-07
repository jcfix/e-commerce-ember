import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
        return Ember.String.htmlSafe('<h5>This tour has been added to your cart.</h5>');
    }
  }
});
