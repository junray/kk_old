import React from 'react';
import Layout from '../components/layout';
import Video from '../components/video';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import blowup from '../images/blowup.jpeg';
import buscadero from '../images/buscadero.jpeg';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            videos {
              cinghiali {
                videoSrcURL
                videoTitle
                videoSubTitle
              }
              bach {
                videoSrcURL
                videoTitle
                videoSubTitle
              }
            }
            preorder
            snowdonia
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
            <p>
              {data.site.siteMetadata.preorder}{' '}
              <a
                href="https://snowdonia.bandcamp.com/album/liberty"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.site.siteMetadata.snowdonia}
              </a>
            </p>
            <br />
            <br />
            {/* 
             ==========================
              VIDEOS
             ==========================
             */}
            <p>
              <b>Guarda i nuovi video</b>
            </p>
            <Video
              videoSrcURL={data.site.siteMetadata.videos.cinghiali.videoSrcURL}
              videoTitle={data.site.siteMetadata.videos.cinghiali.videoTitle}
              videoSubTitle={
                data.site.siteMetadata.videos.cinghiali.videoSubTitle
              }
              ratio="16-9"
            />
            <br />
            <br />
            <Video
              videoSrcURL={data.site.siteMetadata.videos.bach.videoSrcURL}
              videoTitle={data.site.siteMetadata.videos.bach.videoTitle}
              videoSubTitle={data.site.siteMetadata.videos.bach.videoSubTitle}
              ratio="16-9"
            />

            {/* 
             ==========================
              RASSEGNA STAMPA
             ==========================
             */}
            {/*  <br />
            <br />
            <h2 className="m-top4x">Hanno scritto</h2>

            <p>
              <img width="20%" title="blowup" alt="blowup" src={blowup} />
            </p>
            <p>
              <img
                width="20%"
                title="buscadero"
                alt="buscadero"
                src={buscadero}
              />
            </p> */}
            <br />
            <br />

            {/* 
             ==========================
              PLATFORM
             ==========================
             */}
            <p>
              Anche disponibile su:&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/album/67hZedDP3rYe3CogTA0pJD
"
              >
                spotify
              </a>
            </p>
            <p className="m-bottom4x">
              Seguici su&nbsp;
              <a
                href={data.site.siteMetadata.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
              &nbsp;e su&nbsp;
              <a
                href={data.site.siteMetadata.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
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
