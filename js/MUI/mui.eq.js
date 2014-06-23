/*!
 * 
 * MUI plugin
 * equalheights
 * Released under the MIT license
 * 
 */

var eq = function(div) {

var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

$(div).each(function() {
            $el = $(this);
            $($el).height('auto');
            topPosition = $el.position().top;

            if (currentRowStart != topPosition) {
                for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPosition;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
};

$(document).ready(function() {
   eq('.mui-eq > *'); 
});

$(window).resize(function() {
  eq('.mui-eq > *');
});