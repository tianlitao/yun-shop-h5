var React = require('react');

var FooterBox = React.createClass({
  render: function(){
    return (
      <nav className="bar bar-tab">
        <a className="tab-item external active" href="#">
          <span className="icon icon-home"></span>
          <span className="tab-label">首页</span>
        </a>
        <a className="tab-item external" href="#">
          <span className="icon icon-menu"></span>
          <span className="tab-label">分类</span>
        </a>
        <a className="tab-item external" href="#">
          <span className="icon icon-cart"></span>
          <span className="tab-label">购物车</span>
          <span className="badge">2</span>
        </a>
        <a className="tab-item external" href="#">
          <span className="icon icon-friends"></span>
          <span className="tab-label">我的</span>
        </a>
      </nav>
      )
  }
});
module.exports = FooterBox