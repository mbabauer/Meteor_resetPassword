/**
 * Created by mbauer on 10/28/14.
 */

Template.home.events({
    'click #login': function(event, tmpl) {
        event.preventDefault();
        Meteor.loginWithPassword(tmpl.$('#username').val(), tmpl.$('#password').val());
        Router.go('dashboard');
    }
});
