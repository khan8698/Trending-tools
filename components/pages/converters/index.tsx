import React, { useState, useEffect } from 'react';
import AppHeader from '@components/Shared/header';
import AppLeftBar from '@components/Shared/Left-bar';
import InputHandler from '@components/Shared/InputHandler';
import ConverterOptionsSelector from '@components/Shared/converters/ConverterOptionsSelector';
import AppFileDownloader from '@components/Shared/FileDownloader';
import { JsonFormArray } from '@data/JsonFormData';
import StepperMaterial from '@components/Shared/stepper/Stepper';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad'
];

export default function HorizontalLinearStepper() {
  const [activeTab, setActiveTab] = useState(JsonFormArray[0].id);
  const [toolName, setToolName] = useState(JsonFormArray[0].toolName);
  const [activeStep, setActiveStep] = useState(0);

  let jsonForm = JsonFormArray.filter(
    json => activeTab === json.id && toolName === json.toolName
  );
  let [data] = jsonForm;

  useEffect(() => {
    jsonForm = JsonFormArray.filter(
      json => activeTab === json.id && toolName === json.toolName
    );
  }, [activeTab, toolName]);

  return (
    <div className="wrapper">
      <AppHeader />
      <AppLeftBar
        onNavigationHandler={subItem => {
          setActiveStep(0);
          setActiveTab(subItem.id);
          setToolName(subItem.title);
        }}
      />
      <div className="main-container">
        <StepperMaterial
          step1={<InputHandler />}
          step2={<ConverterOptionsSelector formSchema={data?.formSchema} />}
          step3={<AppFileDownloader />}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  );
}
