import Ember from 'ember';

export default Ember.Service.extend({
  tours: [],

  add(tour) {
    this.get('tours').pushObject(tour);
  }
});
