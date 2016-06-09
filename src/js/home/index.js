var React = require('react');

var SliderBox = require('./slider')

var SearchButton = require('../shared/search')

var SupplierBox = require('./supplier')

var ActiveImg = require('./active')

var HotProducts = require('./hot_products')

var FooterBox = require('../shared/footer')

var Host = 'http://localhost:3000'

var Index = React.createClass({
  render: function(){
    return (
      <div>
        <div id='header_search'>
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
        <div id="footer">
          <FooterBox />
        </div>
      </div>
      )
  }
});
module.exports = Index