import React from 'react';

import ReactDOM from 'react-dom';

import App from './App.jsx';

// import SliderBox from './src/home/slider'

import SearchButton from './src/js/shared/search'

import SupplierBox from './src/js/home/supplier'

import ActiveImg from './src/js/home/active'

// import HotProducts from './src/home/hot_products'

import FooterBox from './src/js/shared/footer'



// ReactDOM.render(
//   <SliderBox url="/mall/api/v1/home/slider" />,
//   document.getElementById('slider')
// );

ReactDOM.render(
  <SearchButton />,
  document.getElementById('header_search')
);


ReactDOM.render(
  <SupplierBox />,
  document.getElementById('supplier')
);


ReactDOM.render(
  <ActiveImg />,
  document.getElementById('active')
);

// ReactDOM.render(
//   <HotProducts url="/mall/api/v1/home/hot_products?per=3" />,
//   document.getElementById('hot_products')
// )

ReactDOM.render(
  <FooterBox />,
  document.getElementById('footer')
)