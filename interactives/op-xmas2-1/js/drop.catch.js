/*=========================================
 * drop.catch.js: Version 1.0
 * author: Raj Vivakaran
 * Licensed MIT
 * Requirements JS Libraries
=========================================*/

Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};


(function ($) {

  $.fn.dropCatchGame = function (options) {
    var SVGContianer = $(this);

    //Defaults
    var settings = $.extend({
      numberDropItemAtOneTime: 3,// Number of the item drop at any one time
      dropSVG: ['img/gift1.svg', 'img/gift2.svg', 'img/gift3.svg'],// SVG image of good drop item
      dropNotifySVG: 'img/grab-gift.svg',// SVG image of bouns drop item
      dropSVGWidth: 50,// SVG image width of good drop item
      dropSVGHeight: 59,// SVG image Height of good drop item
      dropSVGPoint: 1,// Points added for good drop item
      dropSVGNoOfItems: 10,// Number of good drop item to drop
      dropBonusSVG: 'img/star.svg',// SVG image of bouns drop item
      dropBonusNotifySVG: 'img/grab-star.svg',// SVG image of bouns drop item
      dropBonusSVGWidth: 48,// SVG image width of bouns drop item
      dropBonusSVGHeight: 48,// SVG image Height of bouns drop item
      dropBonusSVGPoint: 5,// Points added for bouns drop item
      dropBonusSVGNoOfItems: 2,// Number of bouns drop item to drop
      dropBadSVG: 'img/coal.svg',// SVG image of bad drop item
      dropBadNotifySVG: 'img/grab-coal.svg',// SVG image of bad drop item
      dropBadSVGWidth: 48,// SVG image width of bad drop item
      dropBadSVGHeight: 48,// SVG image Height of bad drop item
      dropBadSVGPoint: -1,// Points added for bad drop item
      dropBadSVGNoOfItems: 3,// Number of bad drop item to drop
      catchSVG: 'img/elf-idle2.gif',// SVG image of catch item
      catchMovingSVG: 'img/elf-walking2.gif',// SVG image of catch item
      catchSVGWidth: 82,// Width of SVG image of catch item
      catchSVGHeight: 130,// Height of SVG image of catch item
      catchSVGRandomPlace: false,// Randomize X cord where to place SVG image of catch item
      dropSpeed: 4000,// Drop speed of the item, for bonus item speed will be half
      dropGameEndType: 'timebased',// End the game based on either timebased/Number of item
      totalDropItem: 1,// Total number of items drop
      totalDropsTime: 60,// Total drop time based on seconds
      IncreaseDropItemSpeedFor: 10,// Total drop time increased for every n seconds
      IncreaseDropItemSpeed: 600,// CSS to show the remaining time
      NotifyRemainingTime: ".time p",// CSS to show the remaining time
      orderOfItems: [],// Provide the order of drop items(good,bad,bouns)
      randomiseDrop: true,// Randomize drop items
      currentScoreID: false,//CSS ID or Class to update the current score
      noDropItemSoFar: false,//CSS ID or Class to update the Numbe of item drop
      showCountDownText: false,//CSS ID or Class to update the Numbe of item drop
      countDownTexts: [],//CSS ID or Class to update the Numbe of item drop
      countDownTextsTiming: 1000,
      // Callbacks
      beforeGameInit: function(options) {},// Callback function before SVG init
      afterGameInit: function(snap) {},// Callback function after SVG init and before game start
      dropItemCaught: function(item, catcher) {},// Callback function after SVG init and before game start
      badDropItemCaught: function(item, catcher) {},// Callback function after SVG init and before game start
      goodDropItemCaught: function(item, catcher) {},// Callback function after SVG init and before game start
      GameBeforeEndedTime: 10,//No of seconds before the game before end Callback
      GameBeforeEnded: function() {},// Callback function to trigger just before game end
      GameEnded: function(catchScore, bestCatchScore) {}// Callback function after game ended

    }, options);

    settings.beforeGameInit();
    if(Math.seedrandom != undefined){
      Math.seedrandom();
    }

    /* Needed Functions */
    var populateArrayWithValue = function(item, count){
      var result = [];
      for(var i = 0; i < count; i++){
        result.push(item);
      }
      return result;
    };

    var repeatArrayUntill = function(arr, count){
      while(arr.length < count){
        arr = arr.concat(arr);
      }
      if(arr.length > count){
        arr = arr.slice(0, count);
      }
      return arr;
    };

    var removeItemArray = function(value, arr) {
      return arr.filter(function(item) {
        return item !== value;
      });
    };

    /* Detect collision */
    var collisionDetection = function(dropitem, target){
      var bounds = dropitem.getBBox();
      bounds.right = bounds.x + settings.dropSVGWidth;
      bounds.bottom = bounds.y + settings.dropSVGHeight;

      var compare = target.getBBox();
      compare.right = compare.x + settings.catchSVGWidth;
      compare.bottom = compare.y + settings.catchSVGHeight;

      if (!(compare.right < bounds.x ||
            compare.x > bounds.right ||
            compare.bottom < bounds.y ||
            compare.y > bounds.bottom)
         ) {
           return true;
      }
      return false;
    };

    var dropitems = [];
    var catchIds = [];
    var generateDropItemsOrder = function() {
      if(settings.dropGameEndType == 'timebased'){
        settings.totalDropItem = 1000;
      }

      /* Generate drop order */
      if(settings.orderOfItems == undefined || settings.orderOfItems.length <=0){
        settings.orderOfItems = populateArrayWithValue('good', settings.dropSVGNoOfItems).concat(
                                populateArrayWithValue('bad', settings.dropBadSVGNoOfItems),
                                populateArrayWithValue('bouns', settings.dropBonusSVGNoOfItems));
        settings.orderOfItems = repeatArrayUntill(settings.orderOfItems, settings.totalDropItem);
      }
      if(settings.randomiseDrop){
        settings.orderOfItems = settings.orderOfItems.shuffle();
      }
    }
    generateDropItemsOrder();
    /* Preload the SVG */
    $('.hidden-content').append('<img src="'+settings.dropSVG+'" />')
    $('.hidden-content').append('<img src="'+settings.dropBonusSVG+'" />')
    $('.hidden-content').append('<img src="'+settings.dropBadSVG+'" />')
    $('.hidden-content').append('<img src="'+settings.catchSVG+'" />')

    /*Add SVG contianer*/
    SVGContianer.append('<svg id="svg-contianer" width="100%" height="100%"></svg>');
    //Init Snap
    var snap = Snap("#svg-contianer");

    if(snap != null){
      var SVGWidth = $(snap.node).innerWidth();
      var SVGHeight = $(snap.node).innerHeight();
      snap.attr({ viewBox: "0 0 "+SVGWidth+" "+SVGHeight });
      settings.afterGameInit(snap);
      var g = snap.group();
      var floor = g.rect(0, SVGHeight - 100, SVGWidth, SVGHeight);
      floor.attr({ 'fill': '#50514F'});
      //settings.catchSVGAt_y = SVGHeight - (settings.catchSVGHeight + 50);
      var dropItemCount = 0;
      var dropItemTotal = 0;
      var prevDropItem_x = 0;
      var catchScore = 0;
      var bestCatchScore = 0;
      var startNextLimit = Math.floor((SVGHeight - (settings.catchSVGHeight + 50)) / (settings.numberDropItemAtOneTime + 1));
      var trackDropItem = null;
      var stopDroping = false;
      var starttimestamp = false;
      var currentDropSpeed = settings.dropSpeed;
      var gameSkipped = false;

      var gameInit = function() {
        dropItemCount = 0;
        dropItemTotal = 0;
        prevDropItem_x = 0;
        catchScore = 0;
        bestCatchScore = 0;
        startNextLimit = Math.floor((SVGHeight - (settings.catchSVGHeight + 50)) / (settings.numberDropItemAtOneTime + 1));
        trackDropItem = null;
        stopDroping = false;
        starttimestamp = false;
        gameSkipped = false;
        generateDropItemsOrder();
        currentDropSpeed = settings.dropSpeed;
        $(settings.NotifyRemainingTime).text(settings.totalDropsTime);
        $(settings.noDropItemSoFar).text(dropItemTotal);
        $(settings.currentScoreID).text(catchScore);
      };


      /* Add Good dropItem */
      var addDropItems = function() {
        if(dropItemTotal >= settings.totalDropItem){
          return false;
        }
        //Update the counter
        dropItemTotal++;
        dropItemCount++;
        if(settings.noDropItemSoFar){
          $(settings.noDropItemSoFar).text(dropItemTotal);
        }
        //Init the new drop Item
        var dropItemWidth = settings.dropSVGWidth;
        var dropImage = settings.dropSVG[(Math.floor(Math.random() * 100) % 3)];
        var Speed = currentDropSpeed;
        var dropClass = 'add-point-'+settings.dropSVGPoint;
        var currentDropType = settings.orderOfItems[dropItemTotal - 1];
        //Update the item based on type
        if(currentDropType == 'bad'){
          dropImage = settings.dropBadSVG;
          dropItemWidth = settings.dropBadSVGWidth;
          dropClass = 'add-point-'+settings.dropBadSVGPoint;
        }
        else if(currentDropType == 'bouns'){
          dropImage = settings.dropBonusSVG;
          dropItemWidth = settings.dropBonusSVGWidth;
          dropClass = 'add-point-'+settings.dropBonusSVGPoint;
          Speed = Speed - Math.floor(Speed/3);
        }

        //Make sure the item is not close to each other
        var pos_x = Math.floor((Math.random() * (SVGWidth - dropItemWidth)) + 10);
        if(Math.abs(prevDropItem_x - pos_x) < SVGWidth/4){
          while(Math.abs(prevDropItem_x - pos_x) < SVGWidth/4){
            pos_x = Math.floor((Math.random() * (SVGWidth - dropItemWidth)) + 10);
          }
        }

        //Adding the item to SVG
        var image = g.image(dropImage, pos_x, 0);
        prevDropItem_x = pos_x;
        image.addClass(dropClass);
        image.addClass('type-'+currentDropType);
        image.addClass(image.id);
        dropitems.push('.'+image.id);
        if(trackDropItem == null){
          trackDropItem = image.id;
        }

        //Adding animation and the events
        image.stop().animate({ 'transform' : 't 0 '+(SVGHeight - 75) }, Speed, function(x){
            var catchItem = Snap.select(catchIds[0]);
            if(starttimestamp){
              var currentsecs = settings.totalDropsTime + Math.floor((starttimestamp - (new Date()))/1000);
              if(currentsecs < 0){
                currentsecs = 0;
              }
              $(settings.NotifyRemainingTime).text(currentsecs);
            }
            $.each(dropitems, function(index, item){
                var currentDropItem = Snap.select(item);
                var position = currentDropItem.getBBox();
                /*Check if we need to start droping item */
                if(trackDropItem == currentDropItem.id) {
                  if(Math.floor(currentDropItem.getBBox().y) > (startNextLimit * dropItemCount)
                        && dropItemCount < settings.numberDropItemAtOneTime && dropItemTotal < settings.totalDropItem
                        && !stopDroping) {
                    trackDropItem = null;
                    addDropItems();
                  }
                }

                /* Detect for collision with current drop item*/
                if(collisionDetection(currentDropItem, catchItem)) {
                    notifyCatchedItem(position.x, position.y, currentDropItem);
                    settings.dropItemCaught(currentDropItem, catchItem);
                    dropitems = removeItemArray('.'+currentDropItem.id, dropitems);
                    var extractPoints = currentDropItem.attr('class').match(/add-point-([-0-9]+)\s/);
                    if(extractPoints.length >= 2 && extractPoints[1]){
                      catchScore +=  parseInt(extractPoints[1]);
                    }
                    if(settings.currentScoreID){
                      $(settings.currentScoreID).text(catchScore);
                    }
                    $(catchIds[0]).addClass('catch-item-caught')
                    if(extractPoints[1] < 0){
                      $(catchIds[0]).addClass('catch-item-caught-bad')
                      settings.badDropItemCaught(currentDropItem, catchItem);
                    }
                    else {
                      settings.goodDropItemCaught(currentDropItem, catchItem);
                    }
                    currentDropItem.remove();
                }
            });

            return mina.linear(x);
          },
          function(){ //After Item has finsihed droping
            dropitems = removeItemArray('.'+this.id, dropitems);

            //Update the best score
            var extractPoints = this.attr('class').match(/add-point-([-0-9]+)\s/);
            if(extractPoints.length >= 2 && parseInt(extractPoints[1]) > 0){
              bestCatchScore +=  parseInt(extractPoints[1]);
            }

            //This is track item, assign to null so next added item will be track item
            if(trackDropItem == this.id) {
              trackDropItem = null;
            }

            this.remove();
            dropItemCount--;

            if(dropItemCount <= 0){
              if((dropItemTotal >= settings.totalDropItem) || (stopDroping && dropitems.length <= 0)) {//Check All the item has been droped
                if(!gameSkipped){
                  settings.GameEnded(catchScore, bestCatchScore);
                }
              }
              else {
                addDropItems(); //Drop the next item
              }
            }
          }
        );
      };


      /* Add Catch item */
      var minCatchPos = $(snap.node).offset().left + 30;
      var maxCatchPos = SVGWidth + $(snap.node).offset().left - 30;

      var catchMove = function(dx, dy, x, y, e) {
        if($(this.node).attr('href') !== settings.catchMovingSVG){
          $(this.node).attr('href', settings.catchMovingSVG);
        }
        if( (typeof dx == 'object') && ( dx.type == 'touchmove') ) {
            x = dx.changedTouches[0].clientX;
            dx = x - this.data('ox');
        }
        if(x > minCatchPos && x < maxCatchPos){
          this.attr({
            transform: origTransform + (origTransform ? "T" : "t") + [dx, 0]
          });
        }
      };

      var catchStart = function (x,y,e) {
        if( (typeof x == 'object') && ( x.type == 'touchstart') ) {
          x.preventDefault();
          this.data('ox', x.changedTouches[0].clientX );
        }
        $(this.node).attr('href', settings.catchSVG);
        origTransform = this.transform().local;
      };

      var catchStop = function (x,y,e) {
        $(this.node).attr('href', settings.catchSVG);
      };

      var addCatchItem = function() {
        var pos_x = Math.floor(SVGWidth/2 - settings.catchSVGWidth/2);
        var pos_y = SVGHeight - (settings.catchSVGHeight + 50);
        if(settings.catchSVGRandomPlace){
          pos_x = Math.floor((Math.random() * (SVGWidth - settings.catchSVGWidth)) + 10)
        }
        var image = g.image(settings.catchSVG, pos_x, pos_y);
        image.addClass(image.id);
        image.addClass('item-catch');
        catchIds.push('.'+image.id);
        image.drag(catchMove, catchStart, catchStop);
        image.touchstart(catchStart);
        image.touchmove(catchMove);
        image.touchend(catchStop);
      };

      var notifyCatchedItem = function(pos_x, pos_y, item) {
        var img_src = "";
        if(item.hasClass('type-good')){
          img_src = settings.dropNotifySVG;
        }
        else if (item.hasClass('type-bouns')) {
          img_src = settings.dropBonusNotifySVG;
        }
        else if (item.hasClass('type-bad')) {
          img_src = settings.dropBadNotifySVG;
        }
        else {
          return false;
        }
        var image = g.image(img_src, pos_x , pos_y);
        image.addClass(image.id);
        //Adding animation and the events
        image.stop().animate({ 'transform' : 't 0 50' }, 500, function(x){
          return mina.linear(-x);
        },
        function(){
          this.remove();
        });
      }
      /* Start the Game */
      addCatchItem();
      var increaseDropSpeedCounter = undefined;
      var increaseDropSpeedAction = function () {
        if(!stopDroping){
          currentDropSpeed = currentDropSpeed - settings.IncreaseDropItemSpeed;
        }
        else if(increaseDropSpeedCounter != undefined){
          clearInterval(increaseDropSpeedCounter);
        }
      };

      var endTimeOut = undefined;
      var endBeforeTimeOut = undefined;

      var startGame = function(){
        if(!gameSkipped){
          addDropItems();
          if(settings.dropGameEndType == 'timebased'){
            starttimestamp = new Date();
            increaseDropSpeedCounter = setInterval(increaseDropSpeedAction, settings.IncreaseDropItemSpeedFor * 1000);
            endTimeOut = setTimeout(function(){ stopDroping = true; }, (settings.totalDropsTime - 3) * 1000 );
            endBeforeTimeOut = setTimeout(settings.GameBeforeEnded, (settings.totalDropsTime - settings.GameBeforeEndedTime - 1) * 1000 );
          }
        }
      }

      //Countdown text
      var counterTextTimeOut = [];
      var Start = function(){
        if(settings.showCountDownText && settings.countDownTexts.length > 0) {
          var timing = 1500;
          var bounceTexts = [];

          for( var index=0; index < settings.countDownTexts.length; index++ ) {
              (function() {
                  var svgTextElement = g.text(SVGWidth/2 - 35, SVGHeight/2 - 35, settings.countDownTexts[index])
                      .addClass('countdown-text');
                  bounceTexts.push(svgTextElement);
                  var timeOut = setTimeout( function() {
                          Snap.animate( 0, 1, function( value ) {
                              svgTextElement.attr({ 'font-size': value * 70,  opacity: value });      // Animate by font-size ?
                          }, timing, mina.bounce,
                          function() {
                            svgTextElement.remove()
                            bounceTexts.pop();
                            if(bounceTexts.length <= 0){
                              startGame();
                            }
                          } );
                  }
                  ,index * timing);
                  counterTextTimeOut.push(timeOut);
              }());
          };
        }
        else {
          startGame();
        }
      };

      var Restart = function(){
        gameInit();
        Start();
      };

      var Stop = function(){
        stopDroping = true;
        gameSkipped = true;
        if(counterTextTimeOut.length > 0){
          $.each(counterTextTimeOut, function(index, timeOut) {
            if(timeOut != undefined){
              clearTimeout(timeOut);
            }    
          });
        }
        if(endTimeOut != undefined){
          clearTimeout(endTimeOut);
        }
        if(endBeforeTimeOut != undefined){
          clearTimeout(endBeforeTimeOut);
        }
        settings.GameEnded(catchScore, bestCatchScore);
      }
      Start();
    }
    return {
      init: gameInit,
      start: Start,
      restart: Restart,
      stop: Stop
    };
  }; // End drop.catch.js

}(jQuery));
