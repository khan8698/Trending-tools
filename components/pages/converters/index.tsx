import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import React, { FC } from "react";

import ConverterOptionsSelector from "@components/Shared/converters/ConverterOptionsSelector";
import AppFileDownloader from "@components/Shared/FileDownloader";
import AppHeader from "@components/Shared/header";
import InputHandler from "@components/Shared/InputHandler";
import AppLeftBar from "@components/Shared/Left-bar";

const Converters: FC = () => {
  const inputContent = <InputHandler />;
  const step2Content = <ConverterOptionsSelector />;
  const step3Content = <AppFileDownloader />;

  function step2Validator() {
    return true;
  }

  function step3Validator() {
    return true;
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

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
            </strong>
            , See also
            <strong>
              <a href=""> CSV to KML</a>
            </strong>
          </p>
        </div>
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          steps={[
            {
              label: "Input data",
              subtitle: "0%",
              name: "Input Data",
              content: inputContent,
            },
            {
              label: "Select Options",
              subtitle: "50%",
              name: "Select Option",
              content: step2Content,
              validator: step2Validator,
            },
            {
              label: "Output",
              subtitle: "100%",
              name: "Output",
              content: step3Content,
              validator: step3Validator,
            },
          ]}
        />

        {/* <div className="step-holder">
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
                  <InputHandler />
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
                <ConverterOptionsSelector />
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
                <AppFileDownloader />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Converters;
