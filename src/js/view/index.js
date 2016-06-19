var React = require('react');

var SliderBox = require('../compent/slider')

var SearchButton = require('../shared/search')

var SupplierBox = require('../compent/supplier')

var ActiveImg = require('../compent/active')

var HotProducts = require('../compent/hot_products')

var FooterBox = require('../shared/footer')

var Host = ''

var Index = React.createClass({
  render: function(){

    return (
      <div>
        <div id='header_search' >
          <SearchButton />
        </div>
        <div id="slider">
          <SliderBox url= {Host + "/mall/api/v1/home/slider"}/>
        </div>
        <div id="supplier">
          <SupplierBox />
        </div>
        <div id="active">
          <ActiveImg />
        </div>
        <div id="hot_products" class="hot-products">
          <HotProducts url= {Host + "/mall/api/v1/home/hot_products?per=3"}/>
        </div>
        <FooterBox data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = Index