<people-edit>
	<a href="#home">Home</a>
	<h1>Edit Person</h1>
	<h2>{ opts.person.first } { opts.person.last }</h2>
	<h3>{ opts.person.age }</h3>
	<p>{ opts.person.bio }</p>

	<input type="text" id="fNameInput" placeholder="First Name" value="{ opts.person.first }">
	<input type="text" id="lNameInput" placeholder="Last Name" value="{ opts.person.last }">
	<input type="text" id="ageInput" placeholder="Age" value="{ opts.person.age }">
	
	<textarea id="bioInput" placeholder="Bio" rows="4" cols="50" value="{ opts.person.bio }"></textarea>

	<button type="button" disabled="{ disabled }" onclick="{ add }">Update Person</button>

	<script>
		// Add method
		this.add = function(e) {
			opts.obj[opts.index].first = fNameInput.value;
			opts.obj[opts.index].last = lNameInput.value;
			opts.obj[opts.index].age = ageInput.value;
			opts.obj[opts.index].bio = bioInput.value;

			this.update();
		}

	</script>
</people-edit>