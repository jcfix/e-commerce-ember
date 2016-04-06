import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  model() {
    return this.store.findAll('tour');
  },
  
  actions: {
    addToCart(tour) {
      this.get('shoppingCart').add(tour);
    }
  }
});
