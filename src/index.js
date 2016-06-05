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


ReactDOM.render(
  <SliderBox url="/mall/api/v1/home/slider" />,
  document.getElementById('slider')
);

ReactDOM.render(
  <SearchButton />,
  document.getElementById('header_search')
);


ReactDOM.render(
  <SupplierBox data={supplier_data} />,
  document.getElementById('supplier')
);


ReactDOM.render(
  <ActiveImg />,
  document.getElementById('active')
);