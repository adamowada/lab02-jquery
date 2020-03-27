'use strict';

function Image(image) {
  this.url = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
}

// Use jQuery .clone() to render
// Use horns to sort as stretch goal later

Image.prototype.render = function () {
  // Clone image-template element
  let $imageClone = $('.image-template').clone();
  // Append cloned element to main
  $('main').append($imageClone);
  // Get h2, Set title
  $imageClone.find('h2').text(this.title);
  // Get img, Set src
  $imageClone.find('img').attr('src', this.url);
  // Get img, Set alt
  $imageClone.find('img').attr('alt', this.title);
  // Get p, Set description
  $imageClone.find('p').text(this.description);
  // Remove class attribute
  $imageClone.removeClass('image-template');
  // Set class using keyword
  $imageClone.attr('class', this.keyword);
};


// Read the json file

Image.readJson = () => {
  $.ajax('../data/page-1.json')
    .then(data => {
      data.forEach(item => {
        let image = new Image(item);
        console.log(image);
        image.render();
      });
    });
};

$(() => Image.readJson());
