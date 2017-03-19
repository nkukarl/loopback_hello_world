list = function () {
  response = jQuery.ajax({
    url: "http://0.0.0.0:5667/api/people",
    method: "get",
    dataType: "json",
    success: handle_list_success,
    error: handle_list_failure
  });
};

handle_list_success = function (response) {
  console.log(response);
};

handle_list_failure = function (XMLHttpRequest, textStatus, errorThrown) {
  alert(textStatus + ": " + errorThrown);
};
