(function() {
  'use strict';

  var imgExts = ['png','jpg','gif','jpeg','svg'];
  var ghImageHost = 'https://camo.githubusercontent.com';
  var linkSelector = [];
  var linkedImages = document.querySelectorAll('.comment-body a img');
  var links;

  for (var i = 0; i < imgExts.length; i++) {
    linkSelector.push('.comment-body a[href$="' + imgExts[i] + '"]');
  }

  links = document.querySelectorAll(linkSelector.join(',') + ', .comment-body a[href^="' + ghImageHost + '"]');

  if(linkedImages.length > 0){
    console.log(1);
    replaceLinkedImages(links);
  } else {
    console.log(2);
    replaceLinks(links);
  }

  function replaceLinkedImages(links) {
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var img = link.getElementsByTagName('img')[0];
      link.className += ' gh-a-rm-img';
      link.innerHTML = img.getAttribute('alt') || '(image)';
      link.setAttribute('data-content', link.innerHTML);
    }
  }

  function replaceLinks(links) {
    console.log(links);
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var altText = link.textContent;
      link.className = link.className.replace('gh-a-rm-img','');
      link.innerHTML = '<img class="gh-img-to-a" src="' + link.href + '" alt="' + altText + '">';
    }
  }
}());
