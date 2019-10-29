var carousel = document.querySelector('.carousel');
var cellCount = 5;
var selectedIndex = 0;
var arr = [];

// content for things that go into <p> later
var exp0 = "Generally considered the pioneer of abstract art, Wassily Kandinsky grew up in Moscow, where he created his Composition series, which comprised 10 paintings, the number seven of which Kandinsky called the “most complex piece he ever created.” Then in 1922 he moved to Germany, where he taught at the Bauhaus school of art and architecture, until 1933 when the Nazis closed the school and confiscated the first three of Kandinsky’s compositions, labeling them as “degenerative art” - and then destroyed them. The imagery found in Composition VII includes Christian eschatology, resurrection, New Age spirituality and the Four Horseman of the Apocalypse as found in the Revelation of John of Patmos.";
var exp1 = "An abstract painter in the ilk of the famous Abstract Expressionists of the 1940s ‘50s and beyond, Helen Frankenthaler was heavily influenced by the work of Jackson Pollock. After she saw at an exhibition of Pollock’s drip paintings in 1950, she said, “It was all there. I wanted to live in this land. I had to live there, and master the language.” She was also influenced by the water color paintings of Paul Cézanne and John Marin. Emphasizing spontaneity in her paintings, she said, “A really good picture looks as if it happened at once.” Utilizing a technique she called “soak stain,” which allowed colors to soak into the canvas, Frankenthaler’s painting Mountains and Sea is one of her first exhibited paintings and is perhaps the most popular painting of her decades-long career.";
var exp2 = "Christina’s World is one of the most recognizable American paintings of the twentieth century. It depicts a woman crawling across a treeless field as she gazes at a house and other smaller buildings in the distance. The woman is Anna Christina Olson, who suffered from Charcot-Marie-Tooth disease, an incurable illness causing the progressive loss of muscle tissue. Regarding the painting’s inclusion is pop culture, it has appeared movies such as: 2001: A Space Odyssey (the painting hangs on the wall of a hotel room through which walks astronaut David Bowman after he passes through the star gate) and War on Everyone, in which a character looks at a print of the painting and says, “It’s kinda creepy. It's like something bad's gonna happen but there's nothing she can do about it.";
var exp3 = "A Belgian painter working in styles such as Surrealism and Expressionism, James Ensor belonged to Les XX, a group of 20 Belgian artists, designers and sculptors who had an annual exhibition of their of art, to which many other prominent artists were invited. Unfortunately, when Ensor exhibited Christ’s Entry into Brussels, it was rejected by Les XX and not shown in public until 1929. Considered a scandalous work, it shows Christ riding a donkey into a carnival-like assemblage of people wearing grotesque masks; historical figures are also depicted among the crowd. Regarding Ensor’s controversial artwork, one critic wrote, “Ensor is a dangerous person who has great changes and is consequently marked for blows. It is at him that all the harquebuses are aimed.";
var exp4 = "A Belgian Surrealist, René Magritte liked painting artworks that challenged people’s sense of reality. Often depicting ordinary objects and/or people in unusual, improbable or fantastic settings, Magritte’s paintings take you on a dreamy trip to your own subconscious– or perhaps the collective subconscious of humankind, if such a thing exists. Golconda shows a residential scene of red-roofed buildings, over which numerous middle-aged men dressed in overcoats and bowler hats (as Magritte often depicted himself in paintings) are seen falling from the sky – or suspended in air in a kind of grid pattern. Are these men individuals or multiples of the same man? Curiously, Magritte’s mother committed suicide when he was 14, and it’s been theorized that his puzzling artworks shift from a state of her being alive – or dead.";
var art0 = new Art("Composition VII by Wassily Kandinsky", exp0, "composition.jpg");
var art1 = new Art("Mountains and Sea by Helen Frankenthaler", exp1, "mountains.jpg");
var art2 = new Art("Christina’s World by Andrew Wyeth", exp2, "christina.jpg");
var art3 = new Art("Christ’s Entry into Brussels by James Ensor", exp3, "christ.jpg");
var art4 = new Art("Golconda by René Magritte", exp4, "golconda.jpg");

arr.push(art0);
arr.push(art1);
arr.push(art2);
arr.push(art3);
arr.push(art4);

// counter for the index of the displayed carousel
var curr = 0;

// set img src to #
// $(#image) + i.attr("src", gallery[i].image)

function Art(name, explanation, image) {
    this.name = name;
    this.explanation = explanation;
    this.image = image;
}

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-275px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('#previous');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  curr--;
  rotateCarousel();
  if (curr < 0){            // edge case
      curr = 4;
  }
  info(curr);
});

var nextButton = document.querySelector('#next');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  curr++;
  rotateCarousel();
  if (curr > 4){            // edge case
      curr = 0;
  }
  info(curr);
});

// initializes the image source attributes
function init(){
    $("p").hide();
    for (var i in arr){
        $("#image" + i).attr("src", arr[i].image);
    }
}

// displays information when  needed
function info(num){
    $("#title").hide().html(arr[num].name).fadeIn(1000);
    $("#info").hide().html(arr[num].explanation).fadeIn(1000);
}

$(document).ready (
	function() 
	{   		
        init();
        info(0);        // default
    }
);
