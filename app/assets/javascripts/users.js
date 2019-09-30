window.addEventListener('load', function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });

  $('.js-search-button').click(function() {
    let searched = $('#js-search-bar').val().toString();
    $.ajax({
      url: `/users/search_in_params`,
      method: "GET",
      data: {
        searched: searched
      }
    }).done(function(tableString){
      $('.users-table').empty().append(tableString)
    });
  });

  let timesClicked = 0
  $('.js-image').click(function() {
    timesClicked++;

    if (timesClicked > 1) {
      $('.js-image').css("background-color", "white");
      $(".js-purple-image").show();
      $(".js-white-image").hide();
      timesClicked = timesClicked - 2;
    }else{
      $('.js-image').css("background-color", "white");
      $(this).css("background-color", "#967DFD");
      $(".js-purple-image").show();
      $(this).find(".js-purple-image").hide();
      $(".js-white-image").hide();
      $(this).find(".js-white-image").show();
    };
  });
});