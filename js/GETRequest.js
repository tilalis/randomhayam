(function (exports, d) {
  "use strict";

  function GETRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }

    xhr.send();
  }
  
  exports.GETRequest = GETRequest;
}) (window, document);
