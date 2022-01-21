/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from "react";

const AppLeftBar: FC = () => {
  return (
    <div className="sidebar">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Conversion
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="#">MS Word to PDF</a>
                  </li>
                  <li>
                    <a href="#">CSV to JSON</a>
                  </li>
                  <li>
                    <a href="#">CSV to PDF</a>
                  </li>
                  <li>
                    <a href="#">CSV to HTML</a>
                  </li>
                  <li>
                    <a href="#">CSV to HTML</a>
                  </li>
                  <li>
                    <a href="#">CSV to SQL</a>
                  </li>
                  <li>
                    <a href="#">Images to PDF</a>
                  </li>
                  <li>
                    <a href="#">XML to XLSX</a>
                  </li>
                  <li>
                    <a href="#">CSV to XLSX</a>
                  </li>
                  <li>
                    <a href="#">HTML to PDF</a>
                  </li>
                  <li>
                    <a href="#">CSV To Delimited</a>
                  </li>
                  <li>
                    <a href="#">CSV To Flat File</a>
                  </li>
                  <li>
                    <a href="#">CSV To GeoJSON</a>
                  </li>
                  <li>
                    <a href="#">CSV To HTML Table</a>
                  </li>
                  <li>
                    <a href="#">CSV To JSON</a>
                  </li>
                  <li>
                    <a href="#">CSV To KML</a>
                  </li>
                  <li>
                    <a href="#">CSV To Markdown</a>
                  </li>
                  <li>
                    <a href="#">CSV To Multi-line Data</a>
                  </li>
                  <li>
                    <a href="#">CSV To PDF</a>
                  </li>
                  <li>
                    <a href="#">CSV To SQL</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Compressions
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="#">Files compress/Decompress</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Image Tools
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="#">Resize Image</a>
                  </li>
                  <li>
                    <a href="#">Compress Image</a>
                  </li>
                  <li>
                    <a href="#">Change background</a>
                  </li>
                  <li>
                    <a href="#">Black & White Conversion</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Audio/Video Tools
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="#">Resize Image</a>
                  </li>
                  <li>
                    <a href="#">Compress Image</a>
                  </li>
                  <li>
                    <a href="#">Change background</a>
                  </li>
                  <li>
                    <a href="#">Black & White Conversion</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                OCR Tools
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="#">Image to text</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingsix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                File Viewers
              </button>
            </h2>
            <div
              id="collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="#">Adobe related files</a>
                  </li>
                  <li>
                    <a href="#">SQL Files</a>
                  </li>
                  <li>
                    <a href="#">Offic. PDF</a>
                  </li>
                  <li>
                    <a href="#">JSON, XML. CSV</a>
                  </li>
                  <li>
                    <a href="#">Video. Images Audio</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AppLeftBar;
