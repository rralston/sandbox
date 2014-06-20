import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SandboxENV.locationType
});

Router.map(function() {
	this.route('about');
    this.route('contact');
});

export default Router;
