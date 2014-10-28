/**
 * Created by mbauer on 10/28/14.
 */
Template.signup.events({
    'click #signup': function(event, tmpl) {
        event.preventDefault();
        Meteor.call('signup', {username: tmpl.$('#username').val(),email: tmpl.$('#email').val()}, function(err, result) {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Successfully created user!');
                Router.go('home');
            }
        });
    }
});
