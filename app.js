'use strict';

// import Riot from 'riot';
// import '../tags/contact-list.tag';
// import PeoplelistObservable from '../mixins/peoplelistObservable.js';

var params = {
		people: [
		{
			first:"Bryan",
			last:"Borst",
			age:"40",
			bio:"Bryan's bio"
		}, 
		{
			first:"Alex",
			last:"Borst",
			age:"25",
			bio:"Alex's bio"
		}, 
		{
			first:"Some",
			last:"One",
			age:"77",
			bio:"Some One's bio"
		}, 
		{
			first:"This",
			last:"Guy",
			age:"17",
			bio:"This Guy's bio"
		}, 
		{
			first:"Some",
			last:"Chick",
			age:"34",
			bio:"Some Chicks's bio"
		}, 
		{
			first:"Some",
			last:"Dude",
			age:"70",
			bio:"Some Dude's bio"
		}, 
		{
			first:"Test",
			last:"Tester",
			age:"18",
			bio:"Test's bio"
		}, 
		{
			first:"Testing",
			last:"Testies",
			age:"22",
			bio:"Testing's bio"
		}
	]
}

/**
* Routes
*/
riot.route.stop();
riot.route.start();

var routes = {
	home: function(id, action) {
		riot.mount('#view', 'people-index', {people: params.people});
	},
	people: function(id, action) {
		switch (action) {
			case 'detail':
				riot.mount('#view', 'people-detail', { person: params.people[id], index: id });
				break;
			case 'edit':
				riot.mount('#view', 'people-edit', { person: params.people[id], index: id, obj: params.people });
				break;
		}
	} 
}
/**
 * Example: people/1/detail
 * 
 * collection = 'people'
 * id = 1
 * action = 'detail'
 * 
 */
function handler(collection, id, action) {
	var routeFn = routes[collection || 'home'];
	routeFn(id, action);
}

riot.route(handler);
riot.route.exec(handler);



// riot.mixin(peoplelistObservable)
// riot.mount('people-list', params);




