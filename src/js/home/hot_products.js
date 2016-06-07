var HotProductList = React.createClass({
  render: function() {
    var productNodes = this.props.data.map(function (product) {
      return (
        <li className="hot-product-li">
          <div>
            <a>
              <img className="w100" src={product.cover_url} />
            </a>
          </div>
          <div>
            <span className='show-price'>
              {product.price}
            </span>
            <span className="show-market-price">
              {product.market_price}
            </span>
          </div>
        </li>
      );
    });
    return (
      <ul className="fl">
        {productNodes}
      </ul>
    );
  }
});


var HotProducts = React.createClass({
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
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="fl">
        <div className="hot-product-title"><span>热销商品</span></div>
        <HotProductList data={this.state.data} />
      </div>
    );
  }
});
