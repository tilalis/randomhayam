var URL = "https://graphql.fauna.com/graphql";
var QUERY = "query getRubai($number: Int!) { rubai: rubaiByNumber(number: $number) { text: rubai } }"
var API_KEY = "Zm5BRHFoZ1c1MkFDQzUzX3EweFZJRVc4NG9ud2plR0lyT2RpR2F4bTo=";

function setRubai(responce) {
  document
  .getElementById('rubai')
  .innerHTML = JSON.parse(responce).data.rubai.text;
}

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

DOMReady(function () {
  var button = document.getElementById('i-need-another-one'),
      rubai  = document.getElementById('rubai');

  function GETRubai() {
    POSTRequest(
      URL, 
      {
        query: QUERY, 
        variables: {
          number: getRandomInt(0, 452)
        }
      }, 
      API_KEY, 
      setRubai
    );
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


