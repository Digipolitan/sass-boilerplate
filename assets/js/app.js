/**
 * Front-end Javascript
 * @namespace app
 */

var app = {
    
    DEBUG : true,
    
    // Debug function
    // =====================================
    debug : function() {
        if( app.DEBUG ) {
            return console.log( arguments );
        }
        return;
    },
    
    // Utils
    // =====================================
    utils : {
        
        breakpoints : {
            mobile : 728,
            tablet : 1024
        },
        
        isMobile : function() {
            if( $(window).width() <= this.breakpoints.mobile ) {
                return true;
            }
            return false;
        },
        
        isTablet : function() {
            if( $(window).width() <= this.breakpoints.tablet ) {
                return true;
            }
            return false;
        },
        
        // Return true if the given element is in viewport
        isInViewport : function( element ) {
            if (typeof jQuery === "function" && element instanceof jQuery) {
                element = element[0];
            }

            var rect = element.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
    },
    
    // Initialisation
    // =====================================
    init : function() {
        app.debug( 'Javascrip file loaded !' );
    },
}

$(document).ready( function() {
    app.init();
});