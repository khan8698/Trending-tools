interface toolsDataItemModel {
  id: number;
  active: boolean;
  icon: string;
  data: Array<{ title: string; route: string }>;
}

interface tooldDataModel {
  [key: string]: toolsDataItemModel;
}

const toolsData: tooldDataModel = {
  Conversions: {
    id: 1,
    active: true,
    icon: 'icon-files',
    data: [
      {
        title: 'MS Word to PDF',
        route: ''
      },
      {
        title: 'CSV to JSON',
        route: ''
      },
      {
        title: 'CSV to PDF',
        route: ''
      },
      {
        title: 'CSV to HTML',
        route: ''
      },
      {
        title: 'CSV to SQL',
        route: ''
      },
      {
        title: 'Images to PDF',
        route: ''
      },
      {
        title: 'XML to XLSX',
        route: ''
      },
      {
        title: 'CSV to XLSX',
        route: ''
      },
      {
        title: 'HTML to PDF',
        route: ''
      },
      {
        title: 'CSV To Flat File',
        route: ''
      },
      {
        title: 'CSV To GeoJSON',
        route: ''
      },
      {
        title: 'CSV To HTML Table',
        route: ''
      },
      {
        title: 'CSV To JSON',
        route: ''
      },
      {
        title: 'CSV To KML',
        route: ''
      },
      {
        title: 'CSV To Markdown',
        route: ''
      },
      {
        title: 'CSV To Multi-line Data',
        route: ''
      },
      {
        title: 'CSV To PDF',
        route: ''
      },
      {
        title: 'CSV To SQL',
        route: ''
      }
    ]
  },
  Compressions: {
    id: 2,
    active: false,
    icon: 'icon-collapse',
    data: [
      {
        title: 'Files compress/Decompress',
        route: ''
      },
      {
        title: 'Files Extract',
        route: ''
      }
    ]
  },
  'Images Tools': {
    id: 3,
    active: false,
    icon: 'icon-images',
    data: [
      {
        title: 'Resize Image',
        route: ''
      },
      {
        title: 'Compress Image',
        route: ''
      },
      {
        title: 'Change background',
        route: ''
      },
      {
        title: 'Black & White Conversion',
        route: ''
      }
    ]
  },
  'Audio Video tools': {
    id: 4,
    active: false,
    icon: 'icon-file-play',
    data: [
      {
        title: 'Resize Image',
        route: ''
      },
      {
        title: 'Compress Image',
        route: ''
      },
      {
        title: 'Change background',
        route: ''
      },
      {
        title: 'Black & White Conversion',
        route: ''
      }
    ]
  },
  OCR: {
    id: 5,
    active: false,
    icon: 'icon-file-picture',
    data: [
      {
        title: 'Image to text',
        route: ''
      }
    ]
  },
  'File Viewers': {
    id: 6,
    active: false,
    icon: 'icon-file-empty',
    data: [
      {
        title: 'Adobe related files',
        route: ''
      },
      {
        title: 'SQL Files',
        route: ''
      },
      {
        title: 'Offic. PDF',
        route: ''
      },
      {
        title: 'JSON, XML. CSV',
        route: ''
      },
      {
        title: 'JSON, XML. CSV',
        route: ''
      },
      {
        title: 'Video. Images Audio',
        route: ''
      }
    ]
  }
};

interface ConvertorsArrayModel {
  id: number;
  active: boolean;
  icon: string;
  itemName: string;
  data: Array<{ id: number; title: string; route: string }>;
}

export const ConvertorsArray: ConvertorsArrayModel[] = [
  {
    id: 1,
    active: true,
    icon: 'icon-files',
    itemName: 'Conversion',
    data: [
      {
        id: 1,
        title: 'MS Word to PDF',
        route: ''
      },
      {
        id: 2,
        title: 'CSV to JSON',
        route: ''
      },
      {
        id: 4,
        title: 'CSV to HTML',
        route: ''
      },
      {
        id: 5,
        title: 'CSV to SQL',
        route: ''
      },
      {
        id: 6,
        title: 'Images to PDF',
        route: ''
      },
      {
        id: 7,
        title: 'XML to XLSX',
        route: ''
      },
      {
        id: 8,
        title: 'CSV to XLSX',
        route: ''
      },
      {
        id: 9,
        title: 'HTML to PDF',
        route: ''
      },
      {
        id: 10,
        title: 'CSV to Delimited',
        route: ''
      },
      {
        id: 11,
        title: 'CSV to Flat File',
        route: ''
      },
      {
        id: 12,
        title: 'CSV to GeoJSON',
        route: ''
      },
      {
        id: 13,
        title: 'CSV to HTML Table',
        route: ''
      },
      {
        id: 14,
        title: 'CSV to KML',
        route: ''
      },
      {
        id: 15,
        title: 'CSV to Markdown',
        route: ''
      },
      {
        id: 16,
        title: 'CSV to Multi-line Data',
        route: ''
      },
      {
        id: 17,
        title: 'CSV to PDF',
        route: ''
      }
    ]
  },
  {
    id: 2,
    active: false,
    icon: 'icon-files',
    itemName: 'Compressions',
    data: [
      {
        id: 1,
        title: 'Files compress/Decompress',
        route: ''
      }
    ]
  },
  {
    id: 3,
    active: false,
    icon: 'icon-files',
    itemName: 'Image Tools',
    data: [
      {
        id: 1,
        title: 'Resize Image',
        route: ''
      },
      {
        id: 2,
        title: 'Compress Image',
        route: ''
      },
      {
        id: 3,
        title: 'Change background',
        route: ''
      },
      {
        id: 4,
        title: 'Black & White Conversion',
        route: ''
      }
    ]
  },
  {
    id: 4,
    active: false,
    icon: 'icon-files',
    itemName: 'Audio/Video Tools',
    data: [
      {
        id: 1,
        title: 'Resize Image',
        route: ''
      },
      {
        id: 2,
        title: 'Compress Image',
        route: ''
      },
      {
        id: 3,
        title: 'Change background',
        route: ''
      },
      {
        id: 4,
        title: 'Black & White Conversion',
        route: ''
      }
    ]
  },
  {
    id: 5,
    active: false,
    icon: 'icon-files',
    itemName: 'OCR Tools',
    data: [
      {
        id: 1,
        title: 'Image to text',
        route: ''
      }
    ]
  },
  {
    id: 6,
    active: false,
    icon: 'icon-files',
    itemName: 'File Viewers',
    data: [
      {
        id: 1,
        title: 'Adobe related files',
        route: ''
      },
      {
        id: 2,
        title: 'SQL Files',
        route: ''
      },
      {
        id: 3,
        title: 'Office. PDF',
        route: ''
      },
      {
        id: 4,
        title: 'JSON, XML. CSV',
        route: ''
      },
      {
        id: 5,
        title: 'Video,Images Audio',
        route: ''
      }
    ]
  }
];

export default toolsData;
