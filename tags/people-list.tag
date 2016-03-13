<people-list>
	<h1>Riotjs: People List</h1>
	<input type="text" id="fNameInput" placeholder="First Name" onkeyup="{ edit }">
	<input type="text" id="lNameInput" placeholder="Last Name" onkeyup="{ edit }">
	<input type="text" id="ageInput" placeholder="Age" onkeyup="{ edit }">
	<button type="button" disabled="{ disabled }" onclick="{ add }">Add Person</button>

	<person each={person, i in opts.people } data={ person } index={ i }></person>

	<script>

		this.disabled = true;

		// Check the inputs for all values then enable button
		this.edit = function(e) {
			this.disabled = (fNameInput.value == '' || lNameInput.value == '' || ageInput.value == '');
		}

		// Add method
		this.add = function(e) {
			opts.people.push({
				first: fNameInput.value,
				last: lNameInput.value,
				age: ageInput.value
			});

			// Clear out the fields and disble the button
			this.fNameInput.value = '';
			this.lNameInput.value = '';
			this.ageInput.value = '';
			this.disabled = true
		}

		this.remove = function(e) {
			// console.info(e.item.i);
			var person = e.item.i;
			opts.people.splice(person, 1);
		}

		// DOM classes
		this.oldFarts = function(age) {
			return (age >= 60);
		}
		this.whipperSnapper = function(age) {
			return (age <= 20); 
		}

	</script>

</people-list>

<person>
	<div class="col-xs-12"><a href="#" onclick={ parent.remove }><span class="glyphicon glyphicon-remove"></span></a> - <a href="#people/{ opts.index }/detail">{ opts.data.first } { opts.data.last }</a> - <small class={ red: oldFarts(opts.data.age), blue: whipperSnapper(opts.data.age) }>{ opts.data.age }</small> <a href="#people/{ opts.index }/edit"><span class="glyphicon glyphicon-wrench"></span>Edit</a></div>
</person>

