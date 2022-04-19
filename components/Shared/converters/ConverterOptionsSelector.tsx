import React, { FC, useState, useEffect } from 'react';

import * as Yup from 'yup';
import { SelectField, SubmitButton, TextField } from '../Forms/Elements';
import { Form } from '../Forms/Elements';
import CheckboxGroup from '../Forms/Elements/Checkbox';

interface Props {
  formSchema: any;
}

const ConverterOptionsSelector = (props: Props) => {
  const [formData, setFormData] = useState('');
  const [validationSchema, setValidationSchema] = useState({});
  useEffect(() => {
    initForm(props.formSchema);
    console.log(props.formSchema);
  }, [props]);

  const initForm = (formSchema: any) => {
    let _formData: any = {};
    let _validationSchema: any = {};

    if (formSchema) {
      for (var key of Object.keys(formSchema)) {
        _formData[key] = '';

        if (formSchema[key].type === 'text') {
          _validationSchema[key] = Yup.string();
        } else if (formSchema[key].type === 'email') {
          _validationSchema[key] = Yup.string().email();
        } else if (formSchema[key].type === 'select') {
          _validationSchema[key] = Yup.string().oneOf(
            formSchema[key].options.map((o: any) => o.value)
          );
        }

        if (formSchema[key].required) {
          _validationSchema[key] = _validationSchema[key].required('Required');
        }
      }
    }

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  };

  const getFormElement = (elementName: any, elementSchema: any) => {
    const props = {
      name: elementName,
      label: elementSchema.label,
      options: elementSchema.options
    };

    if (elementSchema.type === 'text' || elementSchema.type === 'email') {
      return <TextField {...props} />;
    }

    if (elementSchema.type === 'select') {
      return <SelectField {...props} />;
    }

    if (elementSchema.type === 'checkbox') {
      return <CheckboxGroup {...props} />;
    }
  };

  const onSubmit = (values: any, onSubmitProps: any) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="accordion-body">
      <span className="i-text">Input Options</span>
      <div className="form-box">
        <Form
          enableReinitialize
          initialValues={formData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="container">
            <div className="row">
              {props.formSchema &&
                Object.keys(props.formSchema).map((key, ind) => {
                  return (
                    <div className="col-6" key={key}>
                      <div className="form-control-box">
                        {getFormElement(key, props.formSchema[key])}
                      </div>
                    </div>
                  );
                })}

              <div className="col-12 my-2">
                <SubmitButton title="Submit Data" />
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ConverterOptionsSelector;
