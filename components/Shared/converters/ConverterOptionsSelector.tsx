import React, { FC } from "react";

const ConverterOptionsSelector: FC = () => {
  return (
    <>
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
                      CSV contains backslash escaping like \n, \t, and \,
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
    </>
  );
};

export default ConverterOptionsSelector;
