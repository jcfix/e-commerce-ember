import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('tour', params.tour_id);
  },
  actions: {
    save3(params) {
      var newReview = this.store.createRecord('review', params);
      var tour = params.tour;
      tour.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return tour.save();
      });
      this.transitionTo('tour');
    }
  }
});
