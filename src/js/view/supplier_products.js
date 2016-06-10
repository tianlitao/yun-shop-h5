var React = require('react');

var SearchButton = require('../shared/search')

var Products = require('../compent/product_list')

var Footer = require('../shared/footer')

var Host = ''


var SupplierProducts = React.createClass({
  render: function(){
    return (
      <div>
        <div id='header_search' className="h40">
          <SearchButton />
        </div>
        <div>
          <Products url= {Host + "/mall/api/v1/supplier/" + this.props.params.code + "/products"} />
        </div>
        <Footer data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = SupplierProducts