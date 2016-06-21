// $(document).ready(function() {
document.addEventListener("DOMContentLoaded", function(){

    function animateScroll() {

        if (document.body.scrollTop <= 0) {

            window.scrollBy(0, 5);
            setTimeout(animateScroll, 5);

        };
    };

  document.querySelector(".arrow").addEventListener("click", function(e) {

  animateScroll();
  

});

});
