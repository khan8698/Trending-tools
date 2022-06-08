/* eslint-disable @typescript-eslint/camelcase */
import AppHeader from '@components/Shared/header';
import React, { FC } from 'react';

import data from '@data/ToolsList';
import AppFooter from '@components/Shared/Footer';

const HomePage: FC = () => {
  console.log(Object.values(data));
  return (
    <div className="wrapper">
      <AppHeader />
      <div className="tab-holder">
        <div className="container">
          <div className="d-flex">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {Object.keys(data).map((t, i) => {
                return (
                  <button
                    key={i}
                    className={`nav-link ${data[t].active ? 'active' : ''}`}
                    id={`${t.split(' ').join('_')}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#v-pills-${t.split(' ').join('_')}`}
                    type="button"
                    role="tab"
                    aria-controls={`v-pills-${t.split(' ').join('_')}`}
                    aria-selected="true"
                  >
                    <span className={`tabicon ${data[t].icon}`}></span>
                    <span className="tab-text">{t}</span>
                  </button>
                );
              })}
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              {Object.keys(data).map((t, i) => {
                return (
                  <div
                    className={`tab-pane fade${
                      data[t].active ? ' show active' : ''
                    }`}
                    id={`v-pills-${t.split(' ').join('_')}`}
                    role="tabpanel"
                    aria-labelledby={`${t.split(' ').join('_')}-tab`}
                    key={i}
                  >
                    {/* <div className="heading">
                      <h1>Conversion Tools</h1>
                    </div> */}
                    <ul>
                      {data[t].data.map((d, j) => {
                        return (
                          <li key={j}>
                            <a href={`${d.route || '#'}`}>{d.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sp-feature">
        <div className="container">
          <h2>Special Features</h2>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="feather-area">
                <div className="circle">
                  <span className="icon-sp icon-browser"></span>
                </div>
                <h3>Convert to/from</h3>
                <p>
                  HTML, JSON, XML Text, KML, YAML, Media Wiki, Markdown plus
                  many more.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area pink">
                <div className="circle">
                  <span className="icon-sp icon-document"></span>
                </div>
                <h3>CSV Viewer and Editor</h3>
                <p>can read or edit any Excel file. Including large files.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area perpal">
                <div className="circle">
                  <span className="icon-sp icon-documents"></span>
                </div>
                <h3>Copy and paste Excel data</h3>
                <p>
                  into our tools as Tab separated (TSV). Read and Convert Excel
                  to CSV automatically.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area blue">
                <div className="circle">
                  <span className="icon-sp icon-layers"></span>
                </div>
                <h3>Use SQL to query CSV</h3>
                <p>
                  and write to CSV or JSON. Field separators auto-detect mode is
                  default.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area green">
                <div className="circle">
                  <span className="icon-sp icon-envelope"></span>
                </div>
                <h3>Extract emails</h3>
                <p>or URLs from web pages. Write the data to CSV.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area pink">
                <div className="circle">
                  <span className="icon-sp icon-document"></span>
                </div>
                <h3>CSV Viewer and Editor</h3>
                <p>can read or edit any Excel file. Including large files.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area perpal">
                <div className="circle">
                  <span className="icon-sp icon-documents"></span>
                </div>
                <h3>Copy and paste Excel data</h3>
                <p>
                  into our tools as Tab separated (TSV). Read and Convert Excel
                  to CSV automatically.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area blue">
                <div className="circle">
                  <span className="icon-sp icon-layers"></span>
                </div>
                <h3>Use SQL to query CSV</h3>
                <p>
                  and write to CSV or JSON. Field separators auto-detect mode is
                  default.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="feather-area green">
                <div className="circle">
                  <span className="icon-sp icon-envelope"></span>
                </div>
                <h3>Extract emails</h3>
                <p>or URLs from web pages. Write the data to CSV.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="howitwork">
        <div className="container">
          <h2>How it Work</h2>
          <div className="work-view">
            <span className="line"></span>
            <span className="start active">1</span>
            <span className="mid">2</span>
            <span className="end">3</span>
          </div>
          <div className="work-math">
            <div className="work-area">
              <span className="btn-area mb-2">
                Upload File <span className="ionwork icon-upload-cloud"></span>
              </span>
              <span className="subtittle">
                Drag & drop files, or select link Max. <br />
                file size 50MB (want more?)
              </span>
            </div>
            <div className="work-area">
              <span className="btn-area mb-3">
                Upload File{' '}
                <span className="ionwork icon-chevron-thin-down"></span>
              </span>
              <span className="subtittle">Or choose a different format</span>
            </div>
            <div className="work-area">
              <span className="btn-area mb-2">
                Download File{' '}
                <span className="ionwork icon-download-cloud"></span>
              </span>
              <span className="subtittle">
                (And agree to our Terms) <br /> &#10003; Email when done?
              </span>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default HomePage;
