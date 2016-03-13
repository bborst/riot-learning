
export default function() {
	// Make this instance observable
	riot.observable(this);

	// Store Functions
	var _setCountStore = countArray() {
		this.trigger('setCountStore', countArray);
	}

	// Action Listeners
	this.on('setCountAction', _setCountStore);
}