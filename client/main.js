list_adviser = function () {
  response = jQuery.ajax({
    url: "http://0.0.0.0:5667/api/advisers",
    method: "GET",
    dataType: "json",
    success: _handle_list_adviser,
    error: _handle_failure
  });
};

_handle_list_adviser = function (advisers) {
  debugger;
  var html_output = '';
  advisers.forEach(
    function (adviser) {
      html_output += '<p>' + adviser.username + '</p>'
    }
  );
  jQuery('#adviser_container').html(html_output);
};

add_adviser = function () {
  var username = jQuery('#username').val();
  var password = jQuery('#password').val();

  if (!_validate(username) || !_validate(password)) {
    alert('Invalid input!');
    return;
  }

  jQuery.ajax({
    url: "http://0.0.0.0:5667/api/advisers",
    method: "POST",
    data: {
      "username": username,
      "password": password
    },
    success: _handle_success,
    error: _handle_failure
  });
};

_validate = function (input_value) {
  return !!input_value.trim().length;
};

_handle_success = function (response) {
  console.log(response);
};

_handle_failure = function (XMLHttpRequest, textStatus, errorThrown) {
  alert(errorThrown);
};
