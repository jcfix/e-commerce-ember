import Ember from 'ember';

export default Ember.Component.extend({
  editTour: false,
  actions: {
    editTour() {
      this.set('editTour', true);
    },
    update(tour) {
      var params = {
        name: this.get('name') ? this.get('name') : "" ,
        price: this.get('price') ? this.get('price') : "",
        tourLength: this.get('tourLength') ? this.get('tourLength') : "",
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : "",
        itinerary: this.get('itinerary') ? this.get('itinerary') : ""
      };
      this.set('editTour', false);
      this.sendAction('update', tour, params);
    }
  }
});
