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
var score = 0;


   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbol("game_over").play();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("finale_game");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.getSymbol("finale_game").play();
         sym.stop();
         console.log("arrived at finale_game");

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
         	}, 1000 // TODO change to ~6200
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
         	alert("you spawned " + terminalsSpawned);
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
         console.log("go_postgame!");

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7842125");