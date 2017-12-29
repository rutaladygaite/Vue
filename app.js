var app = new Vue({
	el: "#app",
	data: {
		message: "Vue veikia",
		isVisible:false, //pacioje pradzioje neparodo paveiksleliu
		albums: JSON_DATA.albums,
	}
})