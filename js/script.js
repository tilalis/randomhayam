DOMReady(function () {
  var button = document.getElementById('i-need-another-one'),
      rubai  = document.getElementById('rubai');

  function GETRubai() {
    GETRequest('rubai', function (responce) {
      document
      .getElementById('rubai')
      .innerHTML = JSON.parse(responce).content;
    });
  }

  GETRubai();
  
  button.onclick = function () {
    rubai
    .classList
    .remove('show-up');
    
    button
    .classList
    .remove('fade-in');

    setTimeout(function () {
      GETRubai();

      rubai
      .classList
      .add('show-up');
      
      button
      .classList
      .add('fade-in');
    }, 50);
  }
});


