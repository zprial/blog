/**
 * 首页，文章列表页
 */
import * as React from "react";
import * as get from 'lodash/get';
import { graphql } from 'gatsby'
import Link from "gatsby-link";
import Main from "../components/main";
import Banner from "../components/banner";
import { TagGroupProps } from '../types';

import "../styles/index.scss";

export default class Home extends React.Component<any, any> {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
    const tagGroup: Array<TagGroupProps> = get(this, "props.data.allMarkdownRemark.group") || [];
    return (
      <div>
        <Banner>
          <div className="banner-home">
            <h1>Stick To Powerless!</h1>
            <h3>坚持到无能为力!</h3>
          </div>
        </Banner>
        <Main>
          <div className="homepage">
            <div className="homepage-articles">
              {(posts || []).map(({ node }: any) => {
                // 文章标题
                const title = get(node, 'frontmatter.title') || node.fields.slug;
                // 标签
                const tags = get(node, 'frontmatter.tags') || [];
                // banner
                const cover = get(node, 'frontmatter.cover') || '';
                let banner = /^(https?:\/\/)|(\/\/)/gi.test(cover) ? cover : '';
                console.log('node.excerpt', node)

                return <section className="article-item" key={node.fields.slug}>
                  {banner && <div className="post-cover">
                    <Link to={node.fields.slug}>
                      <img src={cover} alt="" style={{ width: '100%' }} />
                    </Link>
                  </div>}
                  <div className="post-preview">
                    <Link to={node.fields.slug}>
                      <h3 className="post-title">{title}</h3>
                      <p className="post-info" dangerouslySetInnerHTML={{ __html: node.excerpt.substr(0, 200) }} />
                    </Link>
                  </div>
                  <div className="post-meta">
                    <ul className="tags">
                      {tags.map((t: string) => <li key={t}><Link to={`/tags/${t}`}>{t}</Link></li>)}
                    </ul>
                    <div className="date">
                      <i className="iconfont icon-date" />{node.frontmatter.date}
                    </div>
                  </div>
                </section>
              })}
            </div>
            <aside className="homepage-aside">
              <div className="homepage-aside_card">
                <div className="author">
                  <img
                    src={require("../static/avatar.jpeg")}
                    alt="Zprial"
                    width="70"
                    height="70"
                  />
                  <h5>Zprial</h5>
                  <p>前端菜鸟一枚，奋斗中。。。</p>
                  <ul className="icons">
                    <li>
                      <a href="https://github.com/zprial" target="_blank">
                        <i className="iconfont icon-github" />
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="tags">
                  {tagGroup.map(c => <li key={c.fieldValue}>
                    <Link to={`/tags/${c.fieldValue}`}>{c.fieldValue}</Link>
                  </li>)}
                </ul>
              </div>
              <div className="homepage-aside_search" />
            </aside>
          </div>
        </Main>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
