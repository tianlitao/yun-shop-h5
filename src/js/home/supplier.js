var React = require('react');

var supplier_data = [
  {code: 'jd',name: '京东'},
  {code: 'suning',name: '苏宁'},
  {code: 'gome',name: '国美'},
  {code: 'category',name: '分类'},
  {code: 'leading',name: '领先未来'},
  {code: 'office',name: '办公伙伴'},
  {code: 'chenguang',name: '晨光'},
  {code: 'more',name: '更多'},
];

var SupplierList = React.createClass({
  render: function(){
    var supplierNodes = this.props.data.map(function(supplier){
      return (
        <a href="">
          <img className="supplier_img" src={'src/images/' + supplier.code + '.png'}/>
          <span>{supplier.name}</span>
        </a>
        );
    })
    return (
      <nav className="supplier_box">
        {supplierNodes}
      </nav>
      )

  }
});

var SupplierBox = React.createClass({
  render: function(){
    return (
      <SupplierList data={supplier_data} />
      );
  }
});
module.exports = SupplierBox


