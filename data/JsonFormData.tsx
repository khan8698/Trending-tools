import {ConvertorsArray} from "./ToolsList"

interface jsonFormArrayModel {
  id: number;
  toolName: string;
  formSchema: {
    [key: string]: {
      type: string;
      label: string;
      required: boolean;
      options?: Array<{ value?: string; label?: string; key?: string }>;
    };
  };
}

export const JsonFormArray: jsonFormArrayModel[] = [
  {
    id: 1,
    toolName: ConvertorsArray[0].data[0].title,
    formSchema: {
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
      },
      checkbox: {
        type: 'checkbox',
        label: 'Checkbox',
        required: false,
        options: [
          { key: 'Option 1', value: 'cOption1' },
          { key: 'Option 2', value: 'cOption2' },
          { key: 'Option 3', value: 'cOption3' }
        ]
      }
    }
  },
  {
    id: 2,
    toolName: 'CSV to JSON',
    formSchema: {
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
      makhol: {
        type: 'select',
        label: 'Makhol',
        required: true,
        options: [
          {
            label: 'Admin',
            value: 'admin'
          },
          {
            label: 'User',
            value: 'user'
          },
          {
            label: 'other',
            value: 'other'
          }
        ]
      },
      checkbox: {
        type: 'checkbox',
        label: 'Checkbox',
        required: false,
        options: [
          { key: 'Option 1', value: 'cOption1' },
          { key: 'Option 2', value: 'cOption2' }
        ]
      }
    }
  }
];
