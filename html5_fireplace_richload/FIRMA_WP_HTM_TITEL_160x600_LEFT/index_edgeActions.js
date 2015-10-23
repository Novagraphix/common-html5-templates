/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();
         setTimeout(delay, 6000);
         function delay() {
         	cnt++;
         	if (cnt<3) sym.play();
         }
         
         var b_kaufen = sym.getSymbol("btn_kaufen").getSymbolElement();
         TweenLite.to(b_kaufen,0.25,{scaleX:1.05,scaleY:1.05,onComplete:function(){TweenLite.to(b_kaufen,0.5,{scaleX:1,scaleY:1});}});
         
         sym.getComposition().getStage().setIntervalX(function () {
         	 var b_kaufen = sym.getSymbol("btn_kaufen").getSymbolElement();
         	 TweenLite.to(b_kaufen,0.25,{scaleX:1.05,scaleY:1.05,onComplete:function(){TweenLite.to(b_kaufen,0.5,{scaleX:1,scaleY:1});}});
         }, 2000, 2);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6915, function(sym, e) {
         this.play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         cnt = 0;
         
         sym.setIntervalX = function(callback, delay, repetitions) {
             var x = 0;
             var intervalID = window.setInterval(function () {
         
                callback();
         
                if (++x === repetitions) {
                    window.clearInterval(intervalID);
                }
             }, delay);
         }
         
         container = myFT.$("#Stage");
         
         myFT.on('talk', startAd);
         
         function startAd() {
         	var b_kaufen = sym.getSymbol("footer");
         	b_kaufen.play();
         }
         
         clicktag = document.getElementById("Stage_clicktag");
         myFT.applyClickTag(clicktag, 1);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_kaufen'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${b_kaufen}", "mouseover", function(sym, e) {
         var b_kaufen = sym.getSymbolElement();
         TweenLite.to(b_kaufen,0.25,{scaleX:1.05,scaleY:1.05});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_kaufen}", "mouseout", function(sym, e) {
         var b_kaufen = sym.getSymbolElement();
         TweenLite.to(b_kaufen,0.25,{scaleX:1,scaleY:1});

      });
      //Edge binding end

      

   })("btn_kaufen");
   //Edge symbol end:'btn_kaufen'

   //=========================================================
   
   //Edge symbol: 'footer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("footer");
   //Edge symbol end:'footer'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "pp2-12844647");