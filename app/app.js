import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'sandbox', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'sandbox');

export default App;

App.GravatarImageComponent = Ember.Component.extend({
  size: 200,
  email: '',

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + window.hex_md5(email) + '?s=' + size;
  }.property('email', 'size')
});