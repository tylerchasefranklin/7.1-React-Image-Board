// 3rd Party
var React = require('react');

// Local imports
var ImageBoardCollection = require('../models/images.js').ImageBoardCollection;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;
var Image = require('../models/images.js').Image;


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageBoardCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      imageToEdit: false,
      collection: imageBoard,
      showForm: false
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },
  handleToggleForm: function(e){
    e.preventDefault();
    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  editImage: function(image){
    this.setState({imageToEdit: image});
  },
  render: function(){
    var imageList = this.state.collection.map(function(image){
      var self = this;
      return (
        <ListingComponent
          key={image.get("_id")}
          model={image}
          editImage={self.editImage}
          />
      );
    })
    return (
      <div>
        <header className="container-fluid main-header">
          <a className="add-image" href="#"><i className="glyphicon glyphicon-plus"></i></a>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage} /> : null}
            </div>
          </div>

          <div className="row">
            <imageList />
          </div>

        </div>
      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
