import { Formik } from 'formik';
import React, { useState } from 'react';
import { SubmitButton, TextField } from './Forms/Elements';
import * as Yup from 'yup';
import { useGetJsonDataMutation } from '../../services/ConverterApi';
import { TOOL_ROUTES } from '../../api/constants';

import { useAppSelector } from '@hooks/useAppSelector';
import { ConvertorsArray } from '../../data/ToolsList';
import { text } from 'node:stream/consumers';

type InputData = {
  inputAsText: string;
  inputAsURL: string;
  inputAsFile: File | string;
};

interface Props {
  onSubmitInputData: (item: any) => void;
  setResponseApiData: (res: any) => void;
}

const InputHandler = ({ onSubmitInputData, setResponseApiData }: Props) => {
  const [inputData, setInputData] = useState<InputData>({
    inputAsText: '',
    inputAsURL: '',
    inputAsFile: ''
  });
  const [tab, setTab] = useState<string>('text');
  const { toolName } = useAppSelector(state => state.converters);
  let apiUrlEndPoint = TOOL_ROUTES[toolName][tab];

  const [postData, data] = useGetJsonDataMutation();
  // console.log(data);
  setResponseApiData(data);

  const dataFilterObj = (obj: any) =>
    Object.entries(obj)
      .filter(([_, value]) => !!value || typeof value === 'boolean')
      .reduce((acc, [key, value]) => ({ ...acc, data: value }), {}) as {
      data: string | File;
    };

  const onSubmit = async (values: any, onSubmitProps: any) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    onSubmitInputData(values);

    let payloadData = dataFilterObj(values);

    const inputFormData = new FormData();
    if (toolName === ConvertorsArray[0].data[0].title) {
      inputFormData.append(tab, payloadData.data);
      inputFormData.append('drop', '0');
      inputFormData.append('table_schema', '1');
      inputFormData.append('insert', '1');
      inputFormData.append('update', '0');
    } else {
      inputFormData.append(tab, payloadData.data);
    }
    postData({ body: inputFormData, endpoint: apiUrlEndPoint });
  };

  const validationSchema = Yup.object({
    inputAsText: Yup.string().required('Required')
  });

  const initialValueSetter = (
    tab: string,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    setTab(tab);
    setFieldValue('inputAsText', '');
    setFieldValue('inputAsURL', '');
    setFieldValue('inputAsFile', '');
  };

  return (
    <>
      <Formik
        initialValues={inputData}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        {({ setFieldValue, handleSubmit, handleChange, values }) => {
          return (
            <>
              <form onSubmit={handleSubmit}>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      type="button"
                      className={`nav-link ${tab === 'text' ? 'active' : ''}`}
                      onClick={() => initialValueSetter('text', setFieldValue)}
                    >
                      <span className="icon-stack"></span>Enter Data
                    </button>
                    <button
                      type="button"
                      className={`nav-link ${tab === 'url' ? 'active' : ''}`}
                      onClick={() => initialValueSetter('url', setFieldValue)}
                    >
                      <span className="icon-world"></span>Enter URL
                    </button>
                    <button
                      type="button"
                      className={`nav-link ${tab === 'file' ? 'active' : ''}`}
                      onClick={() => initialValueSetter('file', setFieldValue)}
                    >
                      <span className="icon-attachment"></span>Choose File
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  {tab === 'text' ? (
                    <div
                      className={`tab-pane fade mb-3 ${
                        tab === 'text' ? 'show active' : ''
                      }`}
                    >
                      <TextField
                        rows={8}
                        name="inputAsText"
                        as="textarea"
                        onChange={handleChange}
                        value={values.inputAsText}
                      />
                    </div>
                  ) : tab === 'url' ? (
                    <div
                      className={`tab-pane fade mb-3 ${
                        tab === 'url' ? 'show active' : ''
                      }`}
                    >
                      <label htmlFor="basic-url" className="form-label">
                        Your vanity URL
                      </label>

                      <div className="input-group ">
                        <span className="input-group-text" id="basic-addon3">
                          https://example.com/users/
                        </span>

                        <TextField
                          name="inputAsURL"
                          onChange={handleChange}
                          value={values.inputAsURL}
                        />
                      </div>
                    </div>
                  ) : tab === 'file' ? (
                    <div
                      className={`tab-pane fade mb-3 ${
                        tab === 'file' ? 'show active' : ''
                      }`}
                    >
                      <label htmlFor="basic-url" className="form-label">
                        Choose Your File
                      </label>

                      <div>
                        <input
                          type="file"
                          onChange={e => {
                            if (e.target.files) {
                              setFieldValue('inputAsFile', e.target.files[0]);
                            }
                          }}
                        />
                      </div>
                    </div>
                  ) : null}
                  <SubmitButton title="Submit Data" />
                </div>
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default InputHandler;
