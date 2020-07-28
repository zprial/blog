import * as React from "react";
import * as throttle from "lodash/throttle";
import * as classnames from "classnames";
import Link from "gatsby-link";

export default class extends React.Component<any, any> {
  scrollTop = 0; // 当前滚动高度

  state = {
    hide: false, // 是否隐藏头部
    white: false // 是否需要白色背景
  };

  componentDidMount() {
    this.scrollTop = document.documentElement.scrollTop || 0;
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = throttle(e => {
    const currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop < 30) {
      this.setState({
        white: false
      });
    }
    // 当页面往上滚，并且滚的距离大于150的时候隐藏掉
    if (currentScrollTop > 160 && currentScrollTop - this.scrollTop > 0) {
      if (!this.state.hide) {
        this.setState({ hide: true });
      }
    } else {
      this.setState({ hide: false, white: !(currentScrollTop <= 30) });
    }
    this.scrollTop = currentScrollTop;
  }, 200);

  render() {
    const { hide, white } = this.state;
    return (
      <header
        id="layout-header"
        className={classnames({
          hide,
          white
        })}
      >
        <h2>Zprial</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">主页</Link>
            </li>
            <li>
              <Link to="/tags">TAGS</Link>
            </li>
            {/* <li>
              <Link to="/category">分类</Link>
            </li>
            <li>
              <Link to="/photos">相册</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    );
  }
}
