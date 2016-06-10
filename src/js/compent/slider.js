var React = require('react');
var Host = ''
var SliderList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (slider) {
      return (
        <div key={slider.image_url} className="swiper-slide w100">
          <img className="w100" src={Host + slider.image_url} />
        </div>
      );
    });
    return (
      <div className="swiper-wrapper">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});


var SliderBox = React.createClass({
  getInitialState: function() {
      return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
        $(".swiper-container").swiper({autoplay: 3000});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="swiper-container swiper-container-cover">
        <SliderList data={this.state.data} />
      </div>
    );
  }
});
module.exports = SliderBox;
