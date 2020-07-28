/**
 * 所有标签页
 */
import * as React from "react";
import * as kebabCase from "lodash/kebabCase";
import * as get from "lodash/get";
import { graphql } from 'gatsby'
import Link from "gatsby-link";
import Main from '../components/main';
import Banner from '../components/banner';
import { TagGroupProps } from '../types';

export default ({data}: any) => {
    const group: Array<TagGroupProps> = get(data, "allMarkdownRemark.group") || [];
    return <div className="tagPage">
      <Banner banner={require("../static/banner_tag.jpg")}>
        <div className="banner-home">
          <h1>「TAGS」</h1>
        </div>
      </Banner>
      <Main>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Main>
    </div>
}

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
