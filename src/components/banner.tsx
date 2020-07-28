import * as React from "react";
import * as cx from "classnames";

interface PageProps {
  banner?: string; // 图片背景
  filter?: boolean;
  filterClass?: string;
  children?: React.ReactNode;
  className?: string;
}

export default class Banner extends React.Component<PageProps, any> {
  static defaultProps = {
    banner: require("../static/banner_home.jpg")
  };

  render() {
    const { banner, children, className, filter, filterClass } = this.props;
    return (
      <div id="layout_banner">
        {filter && <div className={cx("banner-filter", filterClass)}></div>}
        <div className="banner-image" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className={cx("banner-ctx", className)}>{children}</div>
      </div>
    );
  }
}
