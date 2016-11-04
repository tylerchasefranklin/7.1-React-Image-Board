var React = require('react');


var ListingComponent = React.createClass({
  handleEdit: function(e){
    this.props.editImage(this.props.model);
  },
  render: function(){
    var imageSrc = this.props.model.get('url');
    var imageCaption = this.props.model.get('caption');



    return (
      <div className="col-sm-6 col-sm-offset-3">
        <div className="thumbnail">
          <img src="{imageSrc}" />
          <div className="caption">
            <p>{imageCaption}</p>
            <p><a href="#" onClick={this.handleEdit} className="btn btn-primary" role="button">Edit</a> <a href="#" className="btn btn-default" role="button">Remove</a></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  ListingComponent: ListingComponent
};
