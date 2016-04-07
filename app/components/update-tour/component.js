import Ember from 'ember';

export default Ember.Component.extend({
  editTour: false,
  actions: {
    editTour() {
      this.set('editTour', true);
    },
    update(tour) {
      var params = {
        name: this.get('tour.name') ? this.get('tour.name') : "" ,
        price: this.get('tour.price') ? this.get('tour.price') : "",
        tourLength: this.get('tour.tourLength') ? this.get('tour.tourLength') : "",
        description: this.get('tour.description') ? this.get('tour.description') : "",
        image: this.get('tour.image') ? this.get('tour.image') : "",
        itinerary: this.get('tour.itinerary') ? this.get('tour.itinerary') : ""
      };
      this.set('editTour', false);
      this.sendAction('update', tour, params);
    }
  }
});
