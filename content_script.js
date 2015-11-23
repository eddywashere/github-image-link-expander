(function() {
  'use strict';

  var links = document.querySelectorAll('.comment-body a[href$="png"]:not(.gh-a-to-img)');
  var linkImages = document.querySelectorAll('.comment-body a.gh-a-to-img');

  if(links.length > 0){
    for (var i = 0; i < links.length; i++) {
      var text = links[i].textContent;
      links[i].className = links[i].className + " gh-a-to-img";
      links[i].setAttribute('data-content', text);
      links[i].innerHTML = '<img class="gh-img-to-a" src="' + links[i].href + '">';
    }
  } else {
    for (var i = 0; i < linkImages.length; i++) {
      linkImages[i].className = linkImages[i].className.replace('gh-a-to-img','');
      linkImages[i].innerHTML = linkImages[i].getAttribute('data-content');
    }
  }
}());
