import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(tour) {
      if (confirm("Are you sure you want to delete this tour?")) {
        this.sendAction('destroyTour', tour);
      }
    }
  }
});
