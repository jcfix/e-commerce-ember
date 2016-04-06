import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('tour', params.tour_id);
  },
  actions: {
    addToCart(tour) {
      this.get('shoppingCart').add(tour);
    }
  }
});
