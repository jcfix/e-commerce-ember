import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
    console.log(item);
  },
  remove(item) {
  this.get('items').removeObject(item);
  },
  empty() {
    this.get('items').setObjects([]);
  },
  cartTotal: Ember.computed('items.length', function() {
    var cartTotal = 0;
    for (let total of this.get('items')) {
      cartTotal += parseInt(total.get('price'));
    }
    return cartTotal;
  })
});
