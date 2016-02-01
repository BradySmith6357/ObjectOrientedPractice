var Cat = function(name, color, weight, hairLength, attitude, adorability){

	this.name = name;
	this.color = color;
	this.weight = weight;
	this.hairLength = hairLength;
	this.attitude = attitude;
	this.adorability = adorability;

}

Cat.prototype.meow = function(){
	console.log(this.name + " goes meow!")
}
Cat.prototype.meowFight = function(otherCat){
	console.log(this.name + " meows at " + otherCat.name)
}

var diabloCat = new Cat(
		"Diablo", 
		"Red",
		17,
		"short",
		"cranky",
		"high"
	)

var steve = new Cat(
	"Steve",
	"orange",
	4,
	"long",
	"sleepy",
	"insane!"
	)

// Create a Quote class that has 2 properties: Author and text 


var Quote = function(author, text){
	this.author = author || "some author";
	this.text = text || "Say something!";
}

// Update your Quote class to have a method. This method should return the number of words in the quote.
Quote.prototype.wordCount = function(){
	return this.text.split(" ").length
}

var quote1 = new Quote(
	"Dr. Seuss",
	"I do not like green eggs and ham"
	)

var quote2 = new Quote(
	"Chuck Phulianik",
	"Big, like I would imagine god's"
	)

console.log(quote1, quote2)



