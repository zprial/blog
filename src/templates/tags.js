/**
 * 指定标签的列表的模板
 */
import React from "react";
import Link from "gatsby-link";
import Main from '../components/main';
import Banner from '../components/banner';

export default ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <div>
      <Banner banner={require("../static/banner_tag.jpg")}>
        <div className="banner-home">
          <h1>「{tag.toLocaleUpperCase()}」</h1>
        </div>
      </Banner>
      <Main>
        <ul className="tag-list">
          {edges.map(({ node }, i) => {
            const { path, title } = node.frontmatter;
            return (
              <li key={path}>
                <Link to={path} title={title}>{i+1}. {title}</Link>
              </li>
            );
          })}
        </ul>
        <p className="tag-all-link"><Link to="/tags">ALL TAGS</Link></p>
      </Main>
    </div>
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;