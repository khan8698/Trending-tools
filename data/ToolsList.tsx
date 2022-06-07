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
        title: 'CSV to SQL',
        route: ''
      },

      {
        id: 2,
        title: 'CSV to JSON',
        route: ''
      },
      {
        id: 4,
        title: 'CSV to XML',
        route: ''
      },
      {
        id: 5,
        title: 'CSV to XLSX',
        route: ''
      },
      {
        id: 6,
        title: 'JSON to CSV',
        route: ''
      }
    ]
  }
];

export default toolsData;
