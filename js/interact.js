$(document).ready(function() {
  $("#slideControls").on('click', 'span', function() {
    $("#slideApp div").removeClass("opaque");

    var newImage = $(this).index();

    $("#slideApp div").eq(newImage).addClass("opaque");

    $("#slideControls span").removeClass("selected");
    $(this).addClass("selected");
  });
});
