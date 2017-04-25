$('#ajax-form button[type=submit]').click((event) => {
  event.preventDefault()
  $.get('ajax.njs', {
    fname: $('#ajax-form input[name=fname]').val(),
    lname: $('#ajax-form input[name=lname]').val(),
  }, (data) => {
    $('#ajax-output').html(data)
  })
  setTimeout(() => $('#ajax-output').html('loading'), 6000)
})
