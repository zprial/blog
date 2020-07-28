/**
 * 博客文章模板
 */
import React from 'react';
import { Link } from 'gatsby';
import Main from '../components/main';
import Banner from '../components/banner';

export default ({ data, pathContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pathContext;

  const { title, cover, tags, date, author } = post.frontmatter;

  return (
    <div>
      <Banner banner={cover} filter>
        <div className="banner-post container">
          <h1>{title}</h1>
          <div className="post-meta">
            <div className="item">
              <i className="iconfont icon-person"></i>
              {author || 'Zprial'}
            </div>
            <div className="item">
              <i className="iconfont icon-date"></i>
              {date}
            </div>
          </div>
          <ul className="post-tags">
            {tags.map((c) => (
              <li key={c}>
                <Link to={`/tags/${c}`}>{c}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Banner>
      <Main style={{ backgroundColor: '#fff' }}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        {/* {previous && <li>
                <Link to={previous.fields.slug} rel="prev"> {previous.frontmatter.title}</Link>
            </li>} */}
      </Main>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        cover
        tags
      }
    }
  }
`;
