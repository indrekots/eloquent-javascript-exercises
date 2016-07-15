getUrl("/author", "text/plain");
getUrl("/author", "text/html");
getUrl("/author", "application/json");
getUrl("/author", "application/rainbows+unicorns");

function getUrl(url, acceptHeader) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.setRequestHeader("Accept", acceptHeader);
  req.addEventListener("load", function() {
    console.log(req.responseText);
  });
  req.send(null);
}
