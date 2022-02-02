/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from "react";

const AppFileDownloader: FC = () => {
  return (
    <>
      <div className="accordion-body">
        <div className="buttonarea accor-last">
          <button className="btn">
            <span className="icon-recycle"></span>Convert CSV To GeoJSON
          </button>
          <button className="btn">
            <span className="icon-documents"></span>Copy Result to Clipboard
          </button>
          <button className="btn">
            <span className="icon-upload-cloud"></span>Update Map
          </button>
        </div>
        <textarea
          className="form-control mb-3"
          rows={8}
          placeholder="Output Results"
        ></textarea>
        <div className="row mb-3">
          <div className="col-6">
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
          </div>
          <div className="col-6">
            <div className="buttonarea p-0">
              <button className="btn">
                <span className="icon-download-cloud"></span>Download Result
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFileDownloader;
