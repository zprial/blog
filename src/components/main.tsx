import * as React from "react";

export default ({ children, style, className }: { children: React.ReactNode, style?: React.CSSProperties, className?: string }) => (
  <main id="layout_main" style={style} className={className}>
    <div className="container">{children}</div>
  </main>
);
