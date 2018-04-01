/*this is is for showing things when adblock is detected by the blocking of related script
 */
(function($) {
  $("#fallback").hide()
  if( window.canRunAds === undefined ){
     $("#fallback").show()
     }
})(jQuery);