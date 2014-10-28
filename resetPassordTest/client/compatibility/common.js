/**
 * Created by mbauer on 9/3/14.
 */

/**
 * Setup common Handlebars helpers
 */

/**
 * Outputs the current 'this' to the console.log.
 */
Template.registerHelper('outputThis', function() {
    console.log('this:', this);
});

/**
 * Returns a "pretty" date
 */
Template.registerHelper('prettifyDate', function(timestamp) {
    return new Date(timestamp).toLocaleString();
});

/**
 * Provides a word count.  Based on splitting on white spaces.
 */
Template.registerHelper('wordCount', function(txt) {
    return txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
});

/**
 * Provides 'not' functionality in Spacebars handlers
 */
Template.registerHelper('not', function(obj) {
    return !obj;
});

/**
 * Allows an #each to have an index and parent.
 *
 * Usage example:
 *   {{#each indexedArray myArray parent}}
 *       {{_index}} : {{value}} : {{_parent}}
 *   {{/each}}
 */
Template.registerHelper('indexedArray', function(context, parent) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index + 1;
            item._parent = parent;
            return item;
        })
    }
});

Template.registerHelper('prettifyDate', function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd');
});

Template.registerHelper('usernameFromId', function(user_id){
    return Meteor.users.findOne({_id: user_id}).username;
});



function createDismissibleAlert(alertMessage, alertType, appendToElement) {
    var alert = $('<div class="alert alert-' + alertType + ' alert-dismissible fade in" role="alert" />');
    alert.append('<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>');
    alert.append(alertMessage);
    $(appendToElement).append(alert);
};
