// var data = [
//   {author: "Pete Hunt", text: "This is one comment"},
//   {author: "Jordan Walke", text: "This1111 is *another* comment"}
// ];
var SliderList = React.createClass({
  render: function() {
    console.log(this.props)
    var commentNodes = this.props.data.map(function (slider) {
      return (
        <div className="swiper-slide" style={{width: '100%'}}>
          <img style={{width: '100%'}} src={slider.image_url} />
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
      <div className="swiper-container">
        <SliderList data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <SliderBox url="/mall/api/v1/home/slider" />,
  document.getElementById('content')
);