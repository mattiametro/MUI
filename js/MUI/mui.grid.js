/*!
 * 
 * MUI plugin
 * grid
 * Released under the MIT license
 * 
 */

(function($) {
    $.fn.mui_grid = function() {
            var len = $(this).length,
                len = len - 1;
            for (var i = 0; i <= len; i++) {
                var griditems = $(this).eq(i).children().length;
                var griditems_width = 100 / griditems;
                $(this).eq(i).children().css('width', + griditems_width + '%');
            }
        
    };
})(jQuery);

$('.mui-grid').mui_grid();
