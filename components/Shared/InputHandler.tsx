import React, { FC } from "react";

const InputHandler: FC = () => {
  return (
    <>
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
            Choose Your File
          </label>
          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputHandler;
