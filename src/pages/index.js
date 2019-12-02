import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexComponent extends React.Component {
  render() {
    const data = this.props.data.allGdataCsv.edges
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Blog Title</th>
              <th>Blog URL</th>
              <th>Notes</th>
              <th>Blog Topic Cover in Reverence Guide</th>
              <th>Blog Topic Cover in Tutorial</th>
              <th>Tags</th>
              <th>Questions</th>
              <th>Should This Be Turned into a Blog</th>
              <th>Date Published</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.Blog_post_title}</td>
                <td>{row.node.Blog_post_URL}</td>
                <td>{row.node.Notes}</td>
                <td>{row.node.Blog_Topic_Covered_in_Reference_Guide}</td>
                <td>{row.node._Blog_Topic_Covered_in_Tutorials}</td>
                <td>{row.node._Tags}</td>
                <td>{row.node.Questions}</td>
                <td>{row.node.Should_be_Turned_into_a_Doc_}</td>
                <td>{row.node.Date_Published}</td>
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
    allGdataCsv {
      edges {
        node {
          Blog_post_title
          Blog_post_URL
          Notes
          Questions
          Blog_Topic_Covered_in_Reference_Guide
          _Blog_Topic_Covered_in_Tutorials
          Should_be_Turned_into_a_Doc_
          _Tags
          Date_Published
        }
      }
    }
  }
`




