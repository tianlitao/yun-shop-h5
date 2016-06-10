var React = require('react')

var Host = ''

var ProductHeader = React.createClass({
  render: function(){
    var product = this.props.data
    return (
      <div>
        <div className="buttons-tab">
          <a href="#tab1" className="tab-link active button">商品</a>
          <a href="#tab2" className="tab-link button">详情</a>
          <a href="#tab3" className="tab-link button">评价</a>
        </div>
        <div className="content-block product-header-header">
          <div className="tabs">
            <div id="tab1" className="tab active">
              <div className="content-block slider-image-box">
                <ProductShow data={product} />
              </div>
            </div>
            <div id="tab2" className="tab">
              <div className="content-block product-header-header">
                <div className="buttons-tab">
                  <a href="#tab4" className="tab-link active button">商品介绍</a>
                  <a href="#tab5" className="tab-link button">规格参数</a>
                </div>
                <div className="content-block">
                  <div className="tabs">
                    <div id="tab4" className="tab active">
                      <div className="content-block">
                        <div style={{overflowX: 'hidden'}} dangerouslySetInnerHTML={{__html: product.product_info.introduction}} />
                      </div>
                    </div>
                    <div id="tab5" className="tab">
                      <div className="content-block">
                        <div style={{overflowX: 'hidden'}} dangerouslySetInnerHTML={{__html: product.product_info.primary_param}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab3" className="tab">
              <div className="content-block">
                <p>This is tab 3 content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});


var ProductShow = React.createClass({
  render: function() {
    var product = this.props.data
    var slider_image = product.product_info.images_url.map(function (image_url) {
      return (
        <div key={image_url} className="swiper-slide w100">
          <img className="w100" src={image_url} />
        </div>
      );
    });
    return (
      <div className="swiper-container swiper-container-cover silder-container-width">
        <div className="swiper-wrapper">
          {slider_image}
        </div>
      </div>
    );
  }
});


var Product = React.createClass({
  getInitialState: function() {
    return {data: {product_info: {images_url: []}}};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data.data)
        this.setState({data: data.data});
        $(".swiper-container").swiper({autoplay: 5000});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <div id='infinite' className="content infinite-scroll infinite-scroll-bottom mt10" data-distance="500">
          <ProductHeader data={this.state.data} />
        </div>
      </div>
    );
  }
});
module.exports = Product
