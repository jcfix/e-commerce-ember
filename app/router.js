import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('new-tour');
  this.route('tour', {path: '/tour/:tour_id'});
});

export default Router;
