import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  
  model() {
    return this.store.findAll('tour');
  },
  actions: {
    save3(params) {
      var newTour = this.store.createRecord('tour', params);
      newTour.save();
      this.transitionTo('admin');
    },
    update(tour, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          tour.set(key, params[key]);
        }
      });
      tour.save();
      this.transitionTo('admin');
    },
    destroyTour(tour) {
      tour.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
