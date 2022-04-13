import React, { FC, useState, useEffect } from 'react';

import * as Yup from 'yup';
import { SelectField, SubmitButton, TextField } from '../Forms/Elements';
import { Form } from '../Forms/Elements';

const formSchema: any = {
  name: {
    type: 'text',
    label: 'Name',
    required: true
  },
  email: {
    type: 'email',
    label: 'Email',
    required: true
  },
  address: {
    type: 'text',
    label: 'Address',
    required: true
  },
  address2: {
    type: 'text',
    label: 'Address 2',
    required: true
  },
  address3: {
    type: 'text',
    label: 'Address 3',
    required: true
  },
  role: {
    type: 'select',
    label: 'Role',
    required: true,
    options: [
      {
        label: 'Admin',
        value: 'admin'
      },
      {
        label: 'User',
        value: 'user'
      }
    ]
  }
};
const ConverterOptionsSelector: FC = () => {
  const [formData, setFormData] = useState('');
  const [validationSchema, setValidationSchema] = useState({});

  console.log(formData);

  useEffect(() => {
    initForm(formSchema);
  }, []);

  const initForm = (formSchema: any) => {
    let _formData: any = {};
    let _validationSchema: any = {};

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
  };

  const onSubmit = (values: any, onSubmitProps: any) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="App">
      <Form
        enableReinitialize
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {Object.keys(formSchema).map((key, ind) => {
          return (
            <div className="form-control-box" key={key}>
              {getFormElement(key, formSchema[key])}
            </div>
          );
        })}
        <SubmitButton title="Submit Data" />
      </Form>
    </div>
  );
};
// return (
//   <>
//     <div className="accordion-body">
//       <span className="i-text">Input Options</span>
//       <div className="col-12">
//         <form>
//           <div className="form-box">
//             <div className="row">
//               <div className="col-6">
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     {' '}
//                     First row is column names
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="defaultCheck1"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Limit # of lines:
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder=""
//                       aria-label="default input example"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Skip # of Lines
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder=""
//                       aria-label="default input example"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Auto Detect
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault1"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Bar-|
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault2"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Field Separator:
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault3"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Tab
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault4"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Field Separator:
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault3"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Tab
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault4"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Replace Accents/Diacriticals
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="defaultCheck1"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Treat all Quoting Character as data
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="defaultCheck1"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     Input CSV Quoting Character is Apostrophe
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="defaultCheck1"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <label
//                     className="form-check-label col-lg-6"
//                     htmlFor="defaultCheck1"
//                   >
//                     CSV contains backslash escaping like \n, \t, and \,
//                   </label>
//                   <div className="col-lg-6">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="defaultCheck1"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </>
// );
// };

export default ConverterOptionsSelector;
