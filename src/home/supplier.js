
var SupplierList = React.createClass({
  render: function(){
    var supplierNodes = this.props.data.map(function(supplier){
      return (
        <a href="">
          <img className="supplier_img" src={'images/' + supplier.code + '.png'}/>
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
      <SupplierList data={this.props.data} />
      );
  }
});


