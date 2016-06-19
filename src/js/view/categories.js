var React = require('react');

var Footer = require('../shared/footer')

var SearchButton = require('../shared/search')

var CategoryList = require('../compent/category')

var Categories = React.createClass({
  render: function(){
    return (
      <div>
        <div id='header_search' className='h48'>
          <SearchButton />
        </div>
        <div className='category-viewport' >
          <CategoryList />
        </div>
        <Footer data={this.props.location.pathname}/>
      </div>
      )
  }
});
module.exports = Categories