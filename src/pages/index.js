import React from 'react';
import Layout from '../components/layout';
import Video from '../components/video';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            videoSrcURL
            videoTitle
            title
            teaser
            albumDate
            albumTitle
            facebook
            instagram
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Layout headerTitle={data.site.siteMetadata.title}>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h2 className="m-ver3x">{data.site.siteMetadata.albumTitle}</h2>
            <p>{data.site.siteMetadata.teaser}</p>
            <p>{data.site.siteMetadata.albumDate}</p>
            <br />
            <br />
            <p>Guarda il nuovo video</p>
            <Video
              videoSrcURL={data.site.siteMetadata.videoSrcURL}
              videoTitle={data.site.siteMetadata.videoTitle}
              ratio="16-9"
            />
            <p>
              Anche disponibile su:&nbsp;
              <a
                target="_blank"
                href="https://open.spotify.com/album/67hZedDP3rYe3CogTA0pJD
"
              >
                spotify
              </a>
            </p>
            <p>
              Seguici su&nbsp;
              <a href={data.site.siteMetadata.facebook} target="_blank">
                facebook
              </a>
              &nbsp;e su&nbsp;
              <a href={data.site.siteMetadata.instagram} target="_blank">
                instagram
              </a>
            </p>
          </Layout>
        </>
      );
    }}
  />
);

export default IndexPage;
