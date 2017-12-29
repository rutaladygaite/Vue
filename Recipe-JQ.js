var app = new Vue({
	el: "#recepies",
	data: {
		recipes: JSON_DATA.recipes,
		checked: []
	},
	methods: {
		greet: function(name){
			alert("Greetings" + name);
		}
	}
})