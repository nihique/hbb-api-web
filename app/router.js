import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HbbApiWebENV.locationType
});

Router.map(function() {
  this.resource('peerreview');
});

export default Router;
