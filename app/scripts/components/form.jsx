var React = require('react');
var AppComponent = require('./app.jsx').AppComponent;


var FormComponent = React.createClass({
  getInitialState: function(){
    return {
      url: '',
      caption: ''
    };
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue})
  },
  handleSubmit: function(e){
    e.preventDefault();
    var newImage = {url: this.state.url, caption: this.state.caption};
    this.props.addImage(newImage);
    // this.props.collection.create(newImage);
    this.setState({url: '', caption: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} className="well" action="index.html" method="post">
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input onChange={this.handleUrlChange} type="text" className="form-control" id="url" value={this.state.url} placeholder="Image URL" />
        </div>
        <div className="form-group">
          <label htmlFor="caption">Image Caption</label>
          <textarea onChange={this.handleCaptionChange} className="form-control" id="caption" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-default">Add Image</button>
      </form>
    );
  }
});


module.exports = {
  FormComponent: FormComponent
};
