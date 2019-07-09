import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

/* export default props => (
  <StaticQuery
    query={graphql`
      query {
        allSitePage {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={({ allSitePage }) => (
      <div>
        {allSitePage.edges.map(({ node: sku }) => {
          console.log(sku.id);
          return <p key={sku.id}>{sku.id}</p>;
        })}
      </div>
    )}
  />
);
 */

class Skus extends Component {
  componentDidMount() {
    console.log(this);
    /* const list = this.stripe.skus.list({ limit: 3 }, function(err, skus) {
      // asynchronously called
      console.log(skus);
    }); */
  }

  render() {
    return <span />;
  }
}

export default Skus;
