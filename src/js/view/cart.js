var React = require('react');

var Footer = require('../shared/footer')

var Cart = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          购物车
        </div>
        <Footer data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = Cart