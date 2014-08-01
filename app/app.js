import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'hbb-api-web', // TODO: loaded via config
  podModulePrefix: 'hbb-api-web/pods',
  Resolver: Resolver,
  LOG_TRANSITIONS: true,
});

loadInitializers(App, 'hbb-api-web');

export default App;
