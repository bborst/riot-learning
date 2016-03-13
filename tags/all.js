riot.tag2('contact-list', '<h2>Contacts</h2> <input type="text" id="fNameInput" placeholder="First Name" onkeyup="{edit}"> <input type="text" id="lNameInput" placeholder="Last Name" onkeyup="{edit}"> <input type="text" id="ageInput" placeholder="Age" onkeyup="{edit}"> <button type="button" __disabled="{disabled}" onclick="{add}">Add Person</button> <div each="{p in opts.people}" data="{this}"><a href="#">{p.first} {p.last}</a></div>', '', '', function(opts) {

		this.on('mount', function() {
			console.info('Riot mount event fired');

		})

		this.on('data_loaded', function(peeps) {
			opts.people = peeps;

			this.update();
		})

}, '{ }');
riot.tag2('people-detail', '', '', '', function(opts) {
});
riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say Hi</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', '', '', function(opts) {
		this.sayHello = function() {
			this.greeting = this.greet.value;
			this.greet.value = '';
		}.bind(this)
}, '{ }');
riot.tag2('hello-world', '<h5>Hey {opts.greet}, its me, Riot!</h5>', '', '', function(opts) {
}, '{ }');
riot.tag2('people-count', '<div each="{countArray}"><b>{{ title }}</b>: <span class="{class}">{{ count }}</span></div>', '', '', function(opts) {
}, '{ }');
riot.tag2('people-detail', '<h1>Person Details</h1> <a href="#home">Home</a> <h2>{opts.person.first} {opts.person.last}</h2> <h3>{opts.person.age}</h3> <p>{opts.person.bio}</p> <a href="#people/{opts.index}/edit">Edit</a>', '', '', function(opts) {
}, '{ }');
riot.tag2('people-edit', '<a href="#home">Home</a> <h1>Edit Person</h1> <h2>{opts.person.first} {opts.person.last}</h2> <h3>{opts.person.age}</h3> <p>{opts.person.bio}</p> <input type="text" id="fNameInput" placeholder="First Name" value="{opts.person.first}"> <input type="text" id="lNameInput" placeholder="Last Name" value="{opts.person.last}"> <input type="text" id="ageInput" placeholder="Age" value="{opts.person.age}"> <textarea id="bioInput" placeholder="Bio" rows="4" cols="50" value="{opts.person.bio}"></textarea> <button type="button" __disabled="{disabled}" onclick="{add}">Update Person</button>', '', '', function(opts) {

		this.add = function(e) {
			opts.obj[opts.index].first = fNameInput.value;
			opts.obj[opts.index].last = lNameInput.value;
			opts.obj[opts.index].age = ageInput.value;
			opts.obj[opts.index].bio = bioInput.value;

			this.update();
		}

}, '{ }');
riot.tag2('people-index', '<people-list people="{opts.people}"></people-list>', '', '', function(opts) {
}, '{ }');
riot.tag2('people-list', '<h1>Riotjs: People List</h1> <input type="text" id="fNameInput" placeholder="First Name" onkeyup="{edit}"> <input type="text" id="lNameInput" placeholder="Last Name" onkeyup="{edit}"> <input type="text" id="ageInput" placeholder="Age" onkeyup="{edit}"> <button type="button" __disabled="{disabled}" onclick="{add}">Add Person</button> <person each="{person, i in opts.people}" data="{person}" index="{i}"></person>', '', '', function(opts) {

		this.disabled = true;

		this.edit = function(e) {
			this.disabled = (fNameInput.value == '' || lNameInput.value == '' || ageInput.value == '');
		}

		this.add = function(e) {
			opts.people.push({
				first: fNameInput.value,
				last: lNameInput.value,
				age: ageInput.value
			});

			this.fNameInput.value = '';
			this.lNameInput.value = '';
			this.ageInput.value = '';
			this.disabled = true
		}

		this.remove = function(e) {

			var person = e.item.i;
			opts.people.splice(person, 1);
		}

		this.oldFarts = function(age) {
			return (age >= 60);
		}
		this.whipperSnapper = function(age) {
			return (age <= 20);
		}

}, '{ }');

riot.tag2('person', '<div class="col-xs-12"><a href="#" onclick="{parent.remove}"><span class="glyphicon glyphicon-remove"></span></a> - <a href="#people/{opts.index}/detail">{opts.data.first} {opts.data.last}</a> - <small class="{red: oldFarts(opts.data.age), blue: whipperSnapper(opts.data.age)}">{opts.data.age}</small> <a href="#people/{opts.index}/edit"><span class="glyphicon glyphicon-wrench"></span>Edit</a></div>', '', '', function(opts) {
}, '{ }');

