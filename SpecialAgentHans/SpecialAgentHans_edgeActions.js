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

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbol("game_over").play();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop("post_score");
         

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
   
   })("menu");
   //Edge symbol end:'menu'

   //=========================================================
   
   //Edge symbol: 'minigame_1'
   (function(symbolName) {   
   
   })("minigame_1");
   //Edge symbol end:'minigame_1'

   //=========================================================
   
   //Edge symbol: 'post_score_button'
   (function(symbolName) {   
   
   })("post_score_button");
   //Edge symbol end:'post_score_button'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7842125");