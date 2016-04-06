import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  tourLength: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  itinerary: DS.attr()
});
