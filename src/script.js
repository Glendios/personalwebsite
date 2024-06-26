var dictButton = document.getElementById("dictionarySearchButton");
var dictSearchBox = document.getElementById("searchInputBox");
dictButton.addEventListener("click", function(){
  var str = dictSearchBox.value;
  console.log(str);
});
dictSearchBox.addEventListener("keydown",function(event){
  //if ENTER, press button
  if(event.keyCode == 13){
    dictButton.click();
  }
});

var translateButton = document.getElementById("translateButton");
var translateBox = document.getElementById("translateInputBox");
translateButton.addEventListener("click", function(){
  var strTrans = translateBox.value;
  console.log(strTrans);
});
translateBox.addEventListener("keydown",function(event){
  //if ENTER, press button
  if(event.keyCode == 13){
    translateButton.click();
  }
});

function searchWebsites() {
      var searchTerm = document.getElementById("searchInputBox").value;

      // Update the source of each iframe to include the search term
      document.getElementById("naverFrame").src = "https://zh.dict.naver.com/#/search?query=" + encodeURIComponent(searchTerm);
      document.getElementById("weblioFrame").src = "https://cjjc.weblio.jp/content/" + encodeURIComponent(searchTerm);
      document.getElementById("reversoFrame").src = "https://context.reverso.net/%E7%BF%BB%E8%AF%91/%E4%B8%AD%E6%96%87-%E8%8B%B1%E8%AF%AD/" + encodeURIComponent(searchTerm);
      document.getElementById("forvoFrame").src = "https://forvo.com/word/" + encodeURIComponent(searchTerm);
      document.getElementById("deeplFrame").src = "https://www.deepl.com/translator#zh/en/" + encodeURIComponent(searchTerm);
}

function translateWebsites(){
      var translateInput = document.getElementById("translateInputBox").value;
      //document.getElementById("forvoFrame").src = "https://forvo.com/word/" + encodeURIComponent(translateInput);
      document.getElementById("deeplFrame").src = "https://www.deepl.com/translator#zh/en/" + encodeURIComponent(translateInput);
}

function scrollToTop(){
  // window.scrollTo(xCoord, yCoord);
  window.scrollTo(0,0);
}

function scrollToTopFrame(iframeId){
  var iframe = document.getElementById(iframeId);
  iframe.contentWindow.scrollTo(0,0);
  //iframe.contentWindow.scrollBy(0, -iframeWindow.pageYOffset);
}

function scrollToTopIframes() {
    //var iframeWindow = iframe.contentWindow;
    //scrollToTopFrame(naverFrame);
    scrollToTopFrame('weblioFrame');
    scrollToTopFrame("reversoFrame");
    var iframeArray = ['naverFrame','weblioFrame','reversoFrame','forvoFrame'];
    iframeArray.forEach(scrollToTopFrame);
    
}

function scrollDown(){
  window.scroll(0,window.scrollY+50);
}