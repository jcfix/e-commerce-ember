import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    save1() {
      var params = {
        user: this.get('user') ? this.get('user'): "",
        review: this.get('review') ? this.get('review'): "",
        tour: this.get('tour')
      };
      this.set('addNewReview', false);
      this.sendAction('save2', params);
    }
  }
});
