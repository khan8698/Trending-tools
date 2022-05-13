import React, { useState, useEffect } from 'react';
import AppHeader from '@components/Shared/header';
import AppLeftBar from '@components/Shared/Left-bar';
import InputHandler from '@components/Shared/InputHandler';
import ConverterOptionsSelector from '@components/Shared/converters/ConverterOptionsSelector';
import AppFileDownloader from '@components/Shared/FileDownloader';
import { JsonFormArray } from '@data/JsonFormData';
import StepperMaterial from '@components/Shared/stepper/Stepper';

import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setActiveTool, setToolName } from 'toolkitStore/convertersSlice';

export default function HorizontalLinearStepper() {
  // const [activeTab, setActiveTab] = useState(JsonFormArray[0].id);
  // const [toolName, setToolName] = useState(JsonFormArray[0].toolName);

  const [activeStep, setActiveStep] = useState(0);
  const [nextBtnActive, setNextBtnActive] = useState(true);

  const { toolName, activeTool } = useAppSelector(state => state.converters);
  const dispatch = useAppDispatch();

  let jsonForm = JsonFormArray.filter(
    json => activeTool === json.id && toolName === json.toolName
  );
  let [data] = jsonForm;

  useEffect(() => {
    jsonForm = JsonFormArray.filter(
      json => activeTool === json.id && toolName === json.toolName
    );
  }, [activeTool, toolName]);

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
          setNextBtnActive(true);
          dispatch(setActiveTool(subItem.id));
          dispatch(setToolName(subItem.title));
          // setActiveTab(subItem.id);
          // setToolName(subItem.title);
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
