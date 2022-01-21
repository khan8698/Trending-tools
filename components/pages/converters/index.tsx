/* eslint-disable @typescript-eslint/camelcase */
import AppHeader from "@components/Shared/header";
import AppLeftBar from "@components/Shared/Left-bar";
import React, { FC } from "react";

const Converters: FC = () => {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppLeftBar />
      <div className="main-container">
        <div className="heading-area">
          <h1>Convert CSV to JSON</h1>
          <p>
            Your delimited data must have a longitude and latitude. We will
            automatically identify the fields if we can based on the column
            headings and the data. See also
            <strong>
              <a href="">JSON to CSV</a>
            </strong>{" "}
            , See also{" "}
            <strong>
              <a href=""> CSV to KML</a>
            </strong>
          </p>
        </div>
        <div className="step-holder">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Step 1: Select your input
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        <span className="icon-stack"></span>Enter Data
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        <span className="icon-world"></span>Enter URL
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        <span className="icon-attachment"></span>Choose File
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <textarea
                        className="form-control"
                        placeholder="Enter or Past CSV here"
                        rows={8}
                      ></textarea>
                      <div className="buttonarea">
                        <button className="btn btn-primary">
                          <span className="icon-trashcan"></span> Clear Input
                        </button>
                        <button className="btn btn-primary">
                          <span className="icon-lamp5"></span> Example
                        </button>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <label htmlFor="basic-url" className="form-label">
                        Your vanity URL
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                          https://example.com/users/
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <label htmlFor="basic-url" className="form-label">
                        Choose Your File{" "}
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                        />
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Step 2: Choose input options (optional)
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="i-text">Input Options</span>
                  <div className="col-12">
                    <form>
                      <div className="form-box">
                        <div className="row">
                          <div className="col-6">
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                {" "}
                                First row is column names
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Limit # of lines:
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder=""
                                  aria-label="default input example"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Skip # of Lines
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder=""
                                  aria-label="default input example"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Auto Detect
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Bar-|
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Field Separator:
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault3"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Tab
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault4"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Field Separator:
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault3"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Tab
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault4"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Replace Accents/Diacriticals
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Treat all Quoting Character as data
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                Input CSV Quoting Character is Apostrophe
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="form-check-label col-lg-6"
                                htmlFor="defaultCheck1"
                              >
                                CSV contains backslash escaping like \n, \t, and
                                \,
                              </label>
                              <div className="col-lg-6">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Step 3: Choose input options
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="i-text">Input Options</span>
                  <form>
                    <div className="form-box">
                      <div className="row">
                        <div className="col-6">
                          <div className="row mb-3">
                            <label
                              className="form-check-label col-lg-6"
                              htmlFor="defaultCheck1"
                            >
                              {" "}
                              Latitude Field #{" "}
                            </label>
                            <div className="col-lg-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                aria-label="default input example"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              className="form-check-label col-lg-6"
                              htmlFor="defaultCheck1"
                            >
                              Longitude Field #
                            </label>
                            <div className="col-lg-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                aria-label="default input example"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              className="form-check-label col-lg-6"
                              htmlFor="defaultCheck1"
                            >
                              <strong>Sort CSV Ignore Case</strong>
                            </label>
                            <div className="col-lg-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row mb-3">
                            <label
                              className="form-check-label col-lg-6"
                              htmlFor="defaultCheck1"
                            >
                              Field Separator:
                            </label>
                            <div className="col-lg-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                aria-label="default input example"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Field #</th>
                            <th scope="col">Type</th>
                            <th scope="col">Direction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">First then</th>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Then By </th>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Then By </th>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="row">
                        <div className="col-5">
                          <strong>
                            Force Wrap numeric values in double quotes
                          </strong>
                        </div>
                        <div className="col-5">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingfour1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour1"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour1"
                >
                  Step 4: Generate output
                </button>
              </h2>
              <div
                id="flush-collapsefour1"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour1"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="buttonarea accor-last">
                    <button className="btn">
                      <span className="icon-recycle"></span>Convert CSV To
                      GeoJSON
                    </button>
                    <button className="btn">
                      <span className="icon-documents"></span>Copy Result to
                      Clipboard
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
                          <span className="icon-download-cloud"></span>Download
                          Result
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converters;
