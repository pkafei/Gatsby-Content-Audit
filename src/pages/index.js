import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexComponent extends React.Component {
  render() {
    const data = this.props.data.allContentAuditCsv.edges
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Blog Title</th>
              <th>Blog URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.Blog_post_title}</td>
                <td>{row.node.Blog_post_URL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexComponent

export const query = graphql`
  {
    __typename
    allContentAuditCsv {
      edges {
        node {
          Blog_post_title
          Blog_post_URL
        }
      }
    }
  }
`




