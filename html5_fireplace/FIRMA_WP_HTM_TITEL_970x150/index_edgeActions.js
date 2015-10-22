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
         var vidElement = document.getElementById("Stage_videoplaceholder");
         
         vid = myFT.insertVideo({
           parent: vidElement,
           video: "video1",
           height: 250,
           width: 510,
           autoplay: true,
           muted: true,
           controls:false,
           loop: true,
         });
         
         snd = document.getElementById("Stage_snd");
         
         var soundon = $('<img id="soundon">');
         soundon.attr('src', 'images/sound_on.png');
         $( snd ).append(soundon);
         
         var styles = {
         	position : "absolute",
         	top: "0",
         	left: "0",
         	cursor: "pointer"
         };
         $( soundon ).css( styles );
         
         var soundoff = $('<img id="soundoff">');
         soundoff.attr('src', 'images/sound_off.png');
         $( snd ).append(soundoff);
         
         var styles = {
         	display: "none",
         	position : "absolute",
         	top: "0",
         	left: "0",
         	cursor: "pointer"
         };
         $( soundoff ).css( styles );
         
         soundon = document.getElementById("soundon");
         soundoff = document.getElementById("soundoff");
         
         soundon.addEventListener("click", function(){
         	$(this).hide();
         	$(soundoff).show();
         	vid.video.currentTime = 0;
         	vid.video.muted = false;
         });
         
         soundoff.addEventListener("click", function(){
         	$(this).hide();
         	$(soundon).show();
         	vid.video.muted = true;
         });
         
         //myFT.broadcast("startAd"); 
         
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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "pp2-12844647");