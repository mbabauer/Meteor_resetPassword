/**
 * Created by mbauer on 9/12/14.
 */

/**
 * Create an object used to track a boolean reactively
 */
var ReactiveBoolean;
ReactiveBoolean = (function() {
    ReactiveBoolean.booleanState = false;

    ReactiveBoolean.prototype._deps = {};

    function ReactiveBoolean(initialState) {
        if (initialState && typeof initialState == 'boolean') {
            this.booleanState = initialState;
        }
        this._deps['state'] = new Tracker.Dependency();
    }

    ReactiveBoolean.prototype.getState = function() {
        this._deps['state'].depend();
        return this.booleanState;
    }

    ReactiveBoolean.prototype.setState = function(value) {
        if (value === this.booleanState) {
            return;
        } else {
            this.booleanState = value;
            console.log('ReactiveBoolean: state is now ' + value);
            return this._deps['state'].changed();
        }
    }

    return ReactiveBoolean;
})();
