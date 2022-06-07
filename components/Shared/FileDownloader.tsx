/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react';
import copy from 'copy-to-clipboard';

interface Props {
  resposeData: any;
}

const AppFileDownloader = ({ resposeData }: Props) => {
  console.log(resposeData)
  // const {
  //   data: { data }
  // } = resposeData;
  return (
    <>
      <div className="accordion-body">
        <div className="buttonarea accor-last">
          {/* <button className="btn">
            <span className="icon-recycle"></span>Convert CSV To GeoJSON
          </button> */}
          <button className="btn" onClick={() => copy(resposeData?.data?.data)}>
            <span className="icon-documents"></span>Copy Result to Clipboard
          </button>
          {/* <button className="btn">
            <span className="icon-upload-cloud"></span>Update Map
          </button> */}
        </div>
        {/* <textarea
          className="form-control mb-3"
          rows={8}
          placeholder="Output Results"
        ></textarea> */}
        <div className="row mb-3">
          {/* <div className="col-6">
            <div className="row">
              <div className="col-6">
                <label>Save your result:</label>
              </div>
              <div className="col-6 d-flex">
                <input
                  className="form-control"
                  type="text"
                  placeholder=""
                  aria-label="default input example"
                />
                <span>.geojson</span>
              </div>
            </div>
          </div> */}
          <div className="col">
            <div className="buttonarea p-0 justify-content-start">
              <a
                href={resposeData?.data?.data}
                target="_blank"
                className="btn ms-0"
              >
                <span className="icon-download-cloud">Download Result</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-6">
            <div className="row">
              <div className="col-6">
                <label>EOL</label>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AppFileDownloader;
