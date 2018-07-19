

$(document).ready(function() {
  $("#main-footer").load("footer.html");

  $('[data-toggle="tooltip"]').tooltip();

  $('.popper').popover({
    placement: 'bottom',
    container: 'body',
    html: true,
    content: function() {
      return $(this).next('.popper-content').html();
    }
  }).on("mouseenter", function() {
    var _this = this;
    $(this).popover("show");
    $(this).siblings(".popover").on("mouseleave", function() {
      $(_this).popover('hide');
    });
  }).on("mouseleave", function() {
    var _this = this;
    setTimeout(function() {
      if (!$(".popover:hover").length) {
        $(_this).popover("hide")
      }
    }, 1000);
  });

  var msgInd;
  $("#message_lists").on("click", "a", function() {
    msgInd = $(this).index();
    var targetDiv = document.getElementById("message_lists").getElementsByClassName("myName")[msgInd].innerHTML;
    console.log(targetDiv);
  });

});
