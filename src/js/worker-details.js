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

  $(".commentExpand").click(function() {
    var el = $(this);
    $(el).parent().next().collapse("toggle");
    el.find('.fa').toggleClass("fa-angle-down fa-angle-up");
  });
  
  $(".commentExpand").click(function() {
    var el = $(this);

    $(el).parent().parent().next().next().collapse("toggle");
    el.find('.fa').toggleClass("fa-angle-down fa-angle-up");
  });

});
