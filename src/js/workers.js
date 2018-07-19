
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

  var data =
    '<div class="col-md-6 mt-4 ">'+
      '<a href="worker-details.html" style="color: inherit; text-decoration: none;">'+
        '<div class="card card-hover card-gradient raisedbox">'+
          '<div class="card-body ">'+
            '<div class="row">'+
              '<div class="col col-auto mb-1">'+
                '<img src="//images.pexels.com/photos/295821/pexels-photo-295821.jpeg?cs=srgb&dl=adolescent-beanie-beautiful-295821.jpg&fm=jpg" alt="asas" class="img-fluid rounded" style="width:150px;height:150px; object-fit:cover;">'+
              '</div>'+
              '<div class="col align-self-center">'+
                '<div class="row">'+
                  '<div class="col">'+
                    '<ul class="list-group list-group-flush">'+
                      '<li class="list-group-item">'+
                        '<div class="row justify-content-between">'+
                          '<div class="mr-3"><b>Worker</b></div>'+
                          '<div class="">Chris ds Hemsworth</div>'+
                        '</div>'+
                      '</li>'+
                      '<li class="list-group-item">'+
                        '<div class="row justify-content-between">'+
                          '<div class="mr-3"><b>Town</b></div>'+
                          '<div class="">Kandy</div>'+
                        '</div>'+
                      '</li>'+
                      '<li class="list-group-item">'+
                        '<div class="row justify-content-between">'+
                          '<div class="mr-3"><b>Phone</b></div>'+
                          '<div class="">0784865154</div>'+
                        '</div>'+
                      '</li>'+
                    '</ul>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="card-footer text-justify">'+
            '<p><b>Jobs : </b>Well, Carpenter, Pestal Control, Aluminium etc...</p>'+
          '</div>'+
        '</div>'+
      '</a>'+
    '</div>';

  for (var i = 0; i < 5; i++) {
    $('#worker-data').append(data);
  }

});
