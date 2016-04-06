import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('tour');
  },
  actions: {
    save3(params) {
      var newTour = this.store.createRecord('tour', params);
      newTour.save();
      this.transitionTo('admin');
    }
  }
});
