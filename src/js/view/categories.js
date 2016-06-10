var React = require('react');

var Footer = require('../shared/footer')

var Categories = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          分类页
        </div>
        <Footer data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = Categories