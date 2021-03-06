$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //debugger;
    var dancer = new dancerMakerFunction(
      $('.dancefloor').height() * Math.random(),
      $('.dancefloor').width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
  
  
  $('.lineUp').on('click', function(event) {
    //loop through the window.dancers array
    window.dancers.forEach(function(dancer) {      
      dancer.css('top', '0', 'left', 'auto', 'position', 'relative');
      //one by one move dancers from dancefloor to span in middle of page
      dancer.appendTo($('.partyline'));
    });
  });
  
});
