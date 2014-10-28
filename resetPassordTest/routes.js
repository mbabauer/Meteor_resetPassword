/**
 * Created by mbauer on 9/2/14.
 */

/**
 * Validates if the user has a verified email address
 * @param user
 * @returns {_.some|*}
 */
function emailVerified(user) {
    return _.some(user.emails, function(email) {
        return email.verified;
    });
}

// Filters used in routes
var filters = {

};

// Configure the default routes for layout, loading, and not found
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
    // Initialize the loading template before hand
    Router.onBeforeAction('loading');
    // Map the routes
    Router.map(function() {
        // Homepage
        this.route('home', {
            path: '/'
        });

        this.route('dashboard', {
            path: '/dashboard'
        });

        this.route('userProfile', {
            path: '/profile',
            template: 'profile'
        });

        this.route('enrollAccount', {
            path: '/enroll-account/:token',
            data: function() { return this.params.token; }
        });

        this.route('signup', {
            path: '/signup'
        });

        this.route('notAuthorized', {
            path: '/notAuthorized'
        });

        this.route('notFound', {
            path: '/*'
        });
    });
}
