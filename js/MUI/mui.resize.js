/*!
 * 
 * MUI plugin
 * resize
 * Released under the MIT license
 * 
 */


// breakpoints

var handheld = 500 
    tablet = 768;

var w = $(window).width(); 
if ( w <= tablet && w > handheld) {
    $('body').addClass('mui-tablet');
} else if ( w <= handheld ) {
    $('body').addClass('mui-handheld');   
}

$(window).resize(function() {
    
    w = $(window).width(); 
    if ( w <= handheld ) {
        $('body').addClass('mui-handheld');
        $('body').removeClass('mui-tablet');
        // all events in handheld mode
        
    } else if ( w <= tablet && w > handheld ) {
        $('body').addClass('mui-tablet');
        $('body').removeClass('mui-handheld'); 
        // all events in tablet mode
 
    } else if ( w > tablet ) {
        $('body').removeClass('mui-tablet');     
    }
});