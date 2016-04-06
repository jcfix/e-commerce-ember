import Ember from 'ember';

export default Ember.Component.extend({
  editTour: false,
  actions: {
    update(tour, params) {
      this.sendAction('update', tour, params);
    },
    delete(tour) {
      if (confirm("Are you sure you want to delete this tour?")) {
        this.sendAction('destroyTour', tour);
      }
    }
  }
});
