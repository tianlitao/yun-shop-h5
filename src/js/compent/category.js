var React = require('react')
var Host = ''

var CategoryRoot = React.createClass({
  clickHandler: function (event) {
  },
  render: function() {
    {console.log('ssssss11222sss')}
    {console.log(this.props.data)}
    var clickHandler = this.clickHandler
    var categoryNodes = this.props.data.map(function (category) {
      return (
        <li onClick={clickHandler} key={category.id} data-category-id={category.id}>
          <a>
            {category.name}
          </a>
        </li>
      );
    });
    return (
      <ul >
        {categoryNodes}
      </ul>
    );
  }
});

var CategoryContent = React.createClass({
  getInitialState: function() {
      return {categories: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: '/mall/api/v1/categories/descendants?category_personality_id=' + 31002,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({categories: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    return(
      <div className='category-content-wrapper'>
        <div>

        </div>

      </div>
    )
  }

})


var CategoryList = React.createClass({
  getInitialState: function() {
      return {data: [{id: ''}]};
  },
  componentDidMount: function() {
    $.ajax({
      url: '/mall/api/v1/categories/roots',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        this.setState({data: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <div className="category-tab">
          <CategoryRoot data={this.state.data} />
        </div>
        <div className="category-content">
          <CategoryContent data={this.state.data} />
        </div>
      </div>
    );
  }

});
module.exports = CategoryList
