var React = require('react');

var Footer = require('../shared/footer')

var User = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          用户页
        </div>
        <Footer data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = User