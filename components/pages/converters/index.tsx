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
import { setActiveTool, setToolName } from '@store/convertersSlice';

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [nextBtnActive, setNextBtnActive] = useState<boolean>(true);
  const [responseDataDownload, setResponseDataDownload] = useState<string>('');

  const { toolName, activeTool } = useAppSelector(state => state.converters);
  const dispatch = useAppDispatch();

  let jsonForm = JsonFormArray.filter(
    dynamicForm =>
      activeTool === dynamicForm.id && toolName === dynamicForm.toolName
  );
  let [data] = jsonForm;

  useEffect(() => {
    jsonForm = JsonFormArray.filter(
      dynamicForm =>
        activeTool === dynamicForm.id && toolName === dynamicForm.toolName
    );
  }, [activeTool, toolName]);

  const onNavigationHandler = () => {};

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

  const setResponseApiData = (res: any) => {
    setResponseDataDownload(res);
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
        }}
      />
      <div className="main-container">
        <StepperMaterial
          step1={
            <InputHandler
              onSubmitInputData={onSubmitInputData}
              setResponseApiData={setResponseApiData}
            />
          }
          step2={<ConverterOptionsSelector formSchema={data?.formSchema} />}
          step3={<AppFileDownloader resposeData={responseDataDownload} />}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          nextBtnActive={nextBtnActive}
        />
      </div>
    </div>
  );
}
