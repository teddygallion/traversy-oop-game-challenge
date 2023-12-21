function rectangle(name, width, height){
	this.name = name;
	this.width = width;
	this.height = height;
	this.area: () =>{
		return this.width * this.height;
	},

}
const rect1 = new Rectangle('rect 1', 10, 10);
const rect2 = new Rectangle('rect 2', 30, 40);
const rect3 = new Rectangle('rect 3', 40, 10);


