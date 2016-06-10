var React = require('react')

var Host = ''

var ProductList = React.createClass({
  render: function() {
    var productNodes = this.props.data.map(function (product) {
      return (
        <li className="normal-list">
          <a href={'#/products/' + product.id} >
            <div className="pro-img">
              <img src={product.cover_url} />
            </div>
            <div className="product-info-box">
              <div className="product-name">
                <span>
                  {product.name}
                </span>
              </div>
              <div className="product-price-m">
                <em>
                  ¥<span className="price">{product.price}</span>
                </em>
              </div>
              <div className="gray-pro-info">
                <span>{product.review_num}条评价</span>
                <span>优惠率{product.yhl * 100}%</span>
              </div>
            </div>
          </a>
        </li>
      );
    });
    return (
      <ul className="list-container">
        {productNodes}
      </ul>
    );
  }
});


var Products = React.createClass({
  refresh: function(number,page){
    $.ajax({
      url: this.props.url + "?per=" + number + '&page=' + page,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  // test: function(){
  //   console.log(3333333)
  // },
  getInitialState: function() {
      return {data: []};
  },
  componentDidMount: function() {
    this.refresh(10,1);
  },

  // componentDidUpdate: function(){
  //   $("#infinite").scroller({ type: 'js' });
  //   $.initInfiniteScroll("#infinite");
  //   var refreshLists = document.getElementById('infinite');
  //   refreshLists.addEventListener('pageInit',this.test)

  // },
  render: function() {
    return (
      <div>
        <div id='infinite' className="content infinite-scroll infinite-scroll-bottom mt10" data-distance="500">
          <div className="list-block">
            <ProductList data={this.state.data} />
          </div>
          <div className="infinite-scroll-preloader">
            <div className="preloader"></div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Products
