import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  review: DS.attr(),
  date_added: Date.now(),
  tour: DS.belongsTo('tour', { async: true })
});
