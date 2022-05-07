import React, { useState, useEffect } from 'react';
import AppHeader from '@components/Shared/header';
import AppLeftBar from '@components/Shared/Left-bar';
import InputHandler from '@components/Shared/InputHandler';
import ConverterOptionsSelector from '@components/Shared/converters/ConverterOptionsSelector';
import AppFileDownloader from '@components/Shared/FileDownloader';
import { JsonFormArray } from '@data/JsonFormData';
import StepperMaterial from '@components/Shared/stepper/Stepper';

export default function HorizontalLinearStepper() {
  const [activeTab, setActiveTab] = useState(JsonFormArray[0].id);
  const [toolName, setToolName] = useState(JsonFormArray[0].toolName);
  const [activeStep, setActiveStep] = useState(0);
  const [nextBtnActive, setNextBtnActive] = useState(true);

  let jsonForm = JsonFormArray.filter(
    json => activeTab === json.id && toolName === json.toolName
  );
  let [data] = jsonForm;

  useEffect(() => {
    jsonForm = JsonFormArray.filter(
      json => activeTab === json.id && toolName === json.toolName
    );
  }, [activeTab, toolName]);

  const onSubmitInputData = (inputData: any) => {
    if (
      inputData.inputAsText ||
      inputData.inputAsURL ||
      inputData.inputAsFile
    ) {
      setNextBtnActive(false);
    } else {
      setNextBtnActive(true);
    }
  };

  return (
    <div className="wrapper">
      <AppHeader />
      <AppLeftBar
        onNavigationHandler={(subItem: any) => {
          setActiveStep(0);
          setActiveTab(subItem.id);
          setToolName(subItem.title);
        }}
      />
      <div className="main-container">
        <StepperMaterial
          step1={<InputHandler onSubmitInputData={onSubmitInputData} />}
          step2={<ConverterOptionsSelector formSchema={data?.formSchema} />}
          step3={<AppFileDownloader />}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          nextBtnActive={nextBtnActive}
        />
      </div>
    </div>
  );
}
