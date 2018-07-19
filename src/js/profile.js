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

  $("#tagert-reset").hide();
  $("#btnForgotPassword").click(function() {

    $('#tagert-login').fadeOut();

    setTimeout(function() {
      $('#tagert-reset').fadeIn();
    }, 400);
  });

  $("#btnGoBack").click(function() {
    $('#tagert-reset').fadeOut();

    setTimeout(function() {
      $('#tagert-login').fadeIn();
    }, 400);

  });

  $(".show-hide-password").on("click", function() {
    var el = $(this);

    if (el.find('.fa').hasClass('fa-eye')) {
      $(el).parent().prev().prop('type', 'text');
    } else {
      $(el).parent().prev().prop('type', 'password');
    }
    el.find('.fa').toggleClass("fa-eye fa-eye-slash");

  });

  $( "#myForm" ).submit(function( event ) {
    var selectRadioUser = document.forms["myForm"]["selectRadioUser"].value;
    var result = document.getElementById("login_validation_result");

    if (selectRadioUser == "") {
      result.innerHTML = "Please Select Your User type";
    } else {
      result.innerHTML = "";
      if(selectRadioUser == "worker"){
        window.location.href = "posts-worker.html";
      }else{
        window.location.href = "workers.html";
      }
    }
    event.preventDefault();
  });

});

document.getElementById('signup_profile_pic').onchange = function(evt) {
  var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function() {
      document.getElementById('signup_image_viewer').src = fr.result;
    }
    fr.readAsDataURL(files[0]);
  }
  // Not supported
  else {
    // fallback -- perhaps submit the input to an iframe and temporarily store
    // them on the server until the user's session ends.
  }
}
