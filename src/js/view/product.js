var React = require('react');

var SearchButton = require('../shared/search')

var ProductShow = require('../compent/product_show')

var Footer = require('../shared/footer')

var Host = ''


var Product = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <ProductShow url= {Host + "/mall/api/v1/products/" + this.props.params.id } />
        </div>
        <Footer data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = Product