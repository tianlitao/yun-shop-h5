var React = require('react');

var SearchButton = React.createClass({
  render: function(){
    return (
      <div className='bar bar-cover'>
        <div className="searchbar">
          <a className="searchbar-cancel">取消</a>
          <div className="search-input">
            <label className="icon icon-search"></label>
            <input type="search" id='search' placeholder='输入关键字...'/>
          </div>
        </div>
      </div>
      );
  }
});
module.exports = SearchButton;