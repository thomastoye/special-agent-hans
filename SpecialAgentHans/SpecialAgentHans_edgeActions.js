/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

// add globals here
var score = 460;
var stageRef;
var tmpScore; // temporary global variable for use during minigames
				  // due to scoping it would get lost otherwise


// random between a and b (both inclusive, so [a, b])
function randomInc(a, b) {
	 return Math.floor(Math.random() * (b - a + 1)) + a;
}

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbol("game_over").play();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop("menu");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.getSymbol("finale_game").play();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         stageRef = sym;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         sym.getSymbol("minigame_1").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         sym.getSymbol("minigame_2").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         sym.getSymbol("minigame_3").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'game_over'
   (function(symbolName) {   
   
   })("game_over");
   //Edge symbol end:'game_over'

   //=========================================================
   
   //Edge symbol: 'finale_game'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         
         // random between a and b (both inclusive, so [a, b])
         function randomInc(a, b) {
             return Math.floor(Math.random() * (b - a + 1)) + a;
         }
         
         function randChar() {
         	if(randomInc(1,15) == 1) return "<br/>";
         	return String.fromCharCode( randomInc(33,126));
         }
         
         var clearInt = setInterval(
         	function(){
         		var text = sym.$("scrolling_text");
         		text.html("");
         	}, 2000
         )
         
         var randInt = setInterval(
         	function(){
         		var text = sym.$("scrolling_text");
         		text.html(text.html() + randChar());
         	}, 5
         );
         
         setTimeout(
         	function(){
         		clearInterval(clearInt);
         		clearInterval(randInt);
         		sym.play("intro_endgame");
         	}, 6200
         )

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         var text = sym.$("scrolling_text");
         
         sym.stop();
         
         text.html("");
         
         // append to the textbox
         var append = function(toAppend){
         	text.html(text.html() + toAppend);
         }
         
         var lines = [ "# cat /tmp/py6y4ka/askb", "", "", "The time has come...", "The time is here to HACK THE MAINFRAME", "", "", "You have ten seconds to spawn as much terminals as possible.", "More terminals with a green font = more hacking, obviously", "", "Use <SPACE> to spawn a new terminal. Press <SPACE> now to continue."];
         
         var line = lines.join('\n');
         var pos = 0;
         
         var typewriter = setInterval(
         	function() {
         		if(pos == line.length) {
         			clearInterval(typewriter);
         			return;
         		}
         
         		var chr = line[pos];
         		if(chr == '\n') chr = "<br/>";
         		append(chr);
         		pos++;
         	}, 20
         )
         
         var ev = function(e) {
         	if(e.which != 32) return;
         	$(window).off("keypress", ev);
         	clearInterval(typewriter);
         	sym.stop("game_endgame");
         }
         
         $(window).on("keypress", ev);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         var text = sym.$("scrolling_text");
         text.text("");
         
         var terminalsSpawned = 0;
         
         // random between a and b (both inclusive, so [a, b])
         function randomInc(a, b) {
             return Math.floor(Math.random() * (b - a + 1)) + a;
         }
         
         // register event handler to spawn terminals
         // to turn off: $(window).off("keyup", ev);
         var ev = function(e) {
         	if(e.which != 32) return;
         	terminalsSpawned++;
         	var newTerminal = sym.createChildSymbol("terminal", sym.$("terminal_container"));
         	var el = newTerminal.getSymbolElement(); // sought so long for this
         	el.css({"position":"absolute", "top": randomInc(1,400) + "px", "left": randomInc(1,400) + "px"});
         }
         
         $(window).on("keyup", ev);
         
         var timeout = setTimeout(function() {
         	score += terminalsSpawned;
         	$(window).off("keyup", ev);
         	clearTimeout(timeout);
         	sym.stop("game_aftermath");
         }, 10 * 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         var closeInt = window.setInterval(function() {
         	var syms = sym.getChildSymbols();
         	if(syms.length == 0) {
         		window.clearInterval(closeInt);
         		sym.play("go_postgame");
         	} else {
         		syms[syms.length - 1].deleteSymbol();
         	}
         }, 100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().stop("highscores");

      });
      //Edge binding end

   })("finale_game");
   //Edge symbol end:'finale_game'

   //=========================================================
   
   //Edge symbol: 'terminal'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var text = sym.$("contents");
         
         // random between a and b (both inclusive, so [a, b])
         function randomInc(a, b) {
             return Math.floor(Math.random() * (b - a + 1)) + a;
         }
         
         var possibilities = ["C:\\> Hacking Level 15 core switch...", "C:\\> Turning on repeaters...", "/var/log$ rm -Rf /", "/tmp$ ./uploadVirus.sh"];
         
         text.text(possibilities[randomInc(0, possibilities.length - 1)]);

      });
      //Edge binding end

   })("terminal");
   //Edge symbol end:'terminal'

   //=========================================================
   
   //Edge symbol: 'highscores'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         var jsonUrl = "http://student.howest.be/thomas.toye/specialagenthans/backend/api/highscores.php";
         
         $.getJSON(jsonUrl, function(data, idx) {
         	var scores = data.reduce(function(prev, curr, idx) {
         		if(typeof prev == "string")
         			return prev + "<br/>" + (idx + 1) + ". " + curr.name + ": " + curr.score;
         		return idx + ". " + prev.name + ": " + prev.score + "<br/>" + (idx + 1) + ". " + curr.name + ": " + curr.score
         	});
         
         	sym.$("contents").html(scores);
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${back_button}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("menu");

      });
      //Edge binding end

   })("highscores");
   //Edge symbol end:'highscores'

   //=========================================================
   
   //Edge symbol: 'back_button'
   (function(symbolName) {   
   
   })("back_button");
   //Edge symbol end:'back_button'

   //=========================================================
   
   //Edge symbol: 'post_score'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 82, function(sym, e) {
         sym.$("score").text(score);
         
         // placeholder ophalen
         var namePlaceholder = sym.$('name_cont');
         
         // textbox aanmaken
         var nameTextbox = $("<input />").attr({
         	'type': 'text',
         	'placeholder': 'Name',
         	'id': 'name'
         }).css({
         	'width': '100%',
         	'height': '100%',
         	'font-size': '100%'
         });
         
         // textbox toevoegen
         nameTextbox.appendTo(namePlaceholder);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${post_score_button}", "click", function(sym, e) {
         var name = sym.$("#name").val();
         
         $.post("http://student.howest.be/thomas.toye/specialagenthans/backend/api/highscore.php", {"name": name, "score": score});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${back_button}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("menu");

      });
      //Edge binding end

   })("post_score");
   //Edge symbol end:'post_score'

   //=========================================================
   
   //Edge symbol: 'menu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${play_button}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("minigame_3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instructions_button}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("uitleg");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${highscores_button}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("highscores");

      });
      //Edge binding end

   })("menu");
   //Edge symbol end:'menu'

   //=========================================================
   
   //Edge symbol: 'minigame_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         tmpScore = 0;
         
         function randomInc(a, b) {
             return Math.floor(Math.random() * (b - a + 1)) + a;
         }
         
         // generate ~100 wires
         for(var i = 0; i < 100; i++) {
         	// create new wire symbol
         	var newWire = sym.createChildSymbol("grey_cable", sym.$("wire_container"));
         	var el = newWire.getSymbolElement();
         
         	// change size, rotation, x and y
         
         	var deg = randomInc(0, 180); // rotate randomly between 0 and 180 degrees
         
         	el.css({
         		"position": "absolute",
         		"top": randomInc(1,400) + "px",
         		"left": randomInc(1,400) + "px",
         		"transform": "rotate(" + deg + "deg) scale(100,0.2)",
         		"-webkit-transform": "rotate(" + deg + "deg) scale(100,0.2)",
         		"-ms-transform": "rotate(" + deg + "deg) scale(100,0.2)",
         		"cursor": "crosshair"
         	});
         
         	// add event listener
         
         	el.click(function(ev) {
         		tmpScore++;
         		$(this).fadeOut(100).remove();
         	});
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${back_button}", "click", function(sym, e) {
         sym.play("generate_cables");

      });
      //Edge binding end

   })("minigame_1");
   //Edge symbol end:'minigame_1'

   //=========================================================
   
   //Edge symbol: 'post_score_button'
   (function(symbolName) {   
   
   })("post_score_button");
   //Edge symbol end:'post_score_button'

   //=========================================================
   
   //Edge symbol: 'play_button'
   (function(symbolName) {   
   
   })("play_button");
   //Edge symbol end:'play_button'

   //=========================================================
   
   //Edge symbol: 'instructions_button'
   (function(symbolName) {   
   
   })("instructions_button");
   //Edge symbol end:'instructions_button'

   //=========================================================
   
   //Edge symbol: 'highscores_button'
   (function(symbolName) {   
   
   })("highscores_button");
   //Edge symbol end:'highscores_button'

   //=========================================================
   
   //Edge symbol: 'grey_cable'
   (function(symbolName) {   
   
   })("grey_cable");
   //Edge symbol end:'grey_cable'

   //=========================================================
   
   //Edge symbol: 'minigame_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${back_button}", "click", function(sym, e) {
         sym.play("start");
         

      });
      //Edge binding end

   })("minigame_2");
   //Edge symbol end:'minigame_2'

   //=========================================================
   
   //Edge symbol: 'glow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("glow");
   //Edge symbol end:'glow'

   //=========================================================
   
   //Edge symbol: 'minigame_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${startbutton}", "click", function(sym, e) {
         sym.play("start");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${click_intercept}", "click", function(sym, e) {
         sym.$("mok").animate({left: e.pageX - 53}, 250)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${royco_cont}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         tmpScore = 0;
         
         function updateScore() {
         	sym.$("score").text(tmpScore * 1000);
         }
         
         sym.stop();
         updateScore();
         
         for(var i = 0; i < 300; i++) {
         	// create new royco symbol
         	var newRoyco = sym.createChildSymbol("royco", sym.$("royco_cont"));
         	var el = newRoyco.getSymbolElement();
         
         	el.css({
         		"position": "absolute",
         		"top": "-370px",
         		"left": randomInc(1,750) - 270 + "px",
         		"transform": "scale(0.2,0.2)",
         		"-webkit-transform": "scale(0.2,0.2)",
         		"-ms-transform": "scale(0.2,0.2)"
         	});
         
         	(function(element) {
         		var t = setTimeout(function() {
         			element.animate({
         				"top": "150px"
         			}, {
         				duration: 1000,
         				complete: function() {
         					var thisCenter = $(this).offset().left + $(this).width() / 2;
         					var mokCenter = sym.$("mok").offset().left + sym.$("mok").width() / 2 + 250;
         					if(Math.abs(thisCenter - mokCenter) < 50) {
         						$(this).fadeOut();
         						tmpScore++;
         					}
         					updateScore();
         					$(this).animate({"top": "+=200px"}, {complete: function(){ $(this).remove(); }})
         
         				} 
         			});
         		}, randomInc(0,45000));
         	})(el);
         }
         
         setTimeout(function() {
         	sym.play("wrapup");
         }, 47000);

      });
      //Edge binding end

   })("minigame_3");
   //Edge symbol end:'minigame_3'

   //=========================================================
   
   //Edge symbol: 'royco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("royco").css({"background-image": "url(\"images/royco-" + randomInc(1,4) + ".png\")"});

      });
      //Edge binding end

   })("royco");
   //Edge symbol end:'royco'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7842125");