import Ember from 'ember';

export default Ember.Component.extend({
  addNewTour: false,
  actions: {
    tourFormShow() {
      this.set('addNewTour', true);
    },
    save1() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        tourLength: this.get('tourLength'),
        description: this.get('description'),
        image: this.get('image'),
        itinerary: this.get('itinerary')
      };
      this.set('addNewTour', false);
      this.sendAction('save2', params);
    }
  }
});
