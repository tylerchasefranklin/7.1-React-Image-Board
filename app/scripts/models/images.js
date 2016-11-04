var Backbone = require('backbone');


var Image = Backbone.Model.extend({
  defaults: {
    imageUrl: '',
    caption: ''
  }
});

var ImageBoardCollection = Backbone.Collection.extend({
  model: Image,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/image-board'
});

module.exports = {
  Image: Image,
  ImageBoardCollection: ImageBoardCollection
};
