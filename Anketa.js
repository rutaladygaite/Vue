new Vue({
	el: "#duomenys",
	data: {

		vardas: "",
		pavarde: "",
		metai: "",
		checked: []
	},
	methods: {
		greet: function(name){
			alert("Greetings " + name);
		}
	}
})

