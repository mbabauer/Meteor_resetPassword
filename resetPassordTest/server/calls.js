/**
 * Created by mbauer on 10/28/14.
 */

Accounts.urls.enrollAccount = function (token) {
    return Meteor.absoluteUrl('enroll-account/' + token);
};

Meteor.methods({
    signup: function(userInfo) {
        console.log('call to signup with info:', userInfo);
        if (Meteor.isServer) {
            if (userInfo) {
                var userId = Accounts.createUser({username: userInfo.username, email: userInfo.email, profile: {}});
                console.log('Created User');
                Accounts.sendEnrollmentEmail(userId);
                console.log('Sent enrollment to ' + userInfo.email);
            }
        }
    }
});
