<contact-list>
	<h2>Contacts</h2>
	<input type="text" id="fNameInput" placeholder="First Name" onkeyup="{ edit }">
	<input type="text" id="lNameInput" placeholder="Last Name" onkeyup="{ edit }">
	<input type="text" id="ageInput" placeholder="Age" onkeyup="{ edit }">
	<button type="button" disabled="{ disabled }" onclick="{ add }">Add Person</button>

	<div each={p in opts.people} data={this}><a href="#">{p.first} {p.last}</a></div>

	<script>
		// Event: Mount
		this.on('mount', function() {
			console.info('Riot mount event fired');
			// For when we use json data
			//opts.callback(this);
		})

		// Event: Data Loaded, passing in peeps data
		this.on('data_loaded', function(peeps) {
			opts.people = peeps;
			// Tells Riot to rerender
			this.update();
		})		
		
	</script>
</contact-list>