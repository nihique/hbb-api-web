import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HbbApiWebENV.locationType
});

Router.map(function() {
  this.resource('peer-reviews', function() {
    this.route('new');
  });
});

export default Router;
