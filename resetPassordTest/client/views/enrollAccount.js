/**
 * Created by mbauer on 10/28/14.
 */

Template.enrollAccount.events({
    'click #btnEnroll': function(event, tmpl) {
        event.preventDefault();
        console.log('Enrolling with token ', this);
        Accounts.resetPassword(this, tmpl.$('#password').val(), function(err) {
            console.log('In the resetPassword callback')
            if (err) {
                // TODO Toss some error
                console.log('Error: ', err);
            } else {
                console.log('Enrollment successful, going home...');
                Router.go('home');
            }
        });
    }
});
