(function (exports, d) {
  "use strict";

  // Zm5BRHFoZ1c1MkFDQzUzX3EweFZJRVc4NG9ud2plR0lyT2RpR2F4bQ==
  // Zm5BRHFoZ1c1MkFDQzUzX3EweFZJRVc4NG9ud2plR0lyT2RpR2F4bTo=
  function POSTRequest(url, data, authorization, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.setRequestHeader("Authorization", "Basic " + authorization)

    if (authorization !== undefined) {

    }

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }

    xhr.send(JSON.stringify(data));
  }
  
  exports.POSTRequest = POSTRequest;
}) (window, document);
