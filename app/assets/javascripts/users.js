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
});