export const API_ENDPOINTS = {
  CSV_TO_SQL: {
    TEXT: '/csv/sql/text',
    URL: '/csv/sql/url',
    FILE: '/csv/sql/file'
  },
  CSV_TO_JSON: {
    TEXT: '/csv/json/text',
    URL: '/csv/json/url',
    FILE: '/csv/json/file'
  },
  CSV_TO_XML: {
    TEXT: '/csv/xml/text',
    URL: '/csv/xml/url',
    FILE: '/csv/xml/file'
  },
  CSV_TO_XLSX: {
    TEXT: '/csv/excel/text',
    URL: '/csv/excel/url',
    FILE: '/csv/excel/file'
  },
  JSON_TO_CSV: {
    TEXT: '/json/csv/text',
    URL: '/json/csv/url',
    FILE: '/json/csv/file'
  }
};

export const TOOL_ROUTES: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  'CSV to SQL': {
    text: API_ENDPOINTS.CSV_TO_SQL.TEXT,
    url: API_ENDPOINTS.CSV_TO_SQL.URL,
    file: API_ENDPOINTS.CSV_TO_SQL.FILE
  },
  'CSV to JSON': {
    text: API_ENDPOINTS.CSV_TO_JSON.TEXT,
    url: API_ENDPOINTS.CSV_TO_JSON.URL,
    file: API_ENDPOINTS.CSV_TO_JSON.FILE
  },
  'CSV to XML': {
    text: API_ENDPOINTS.CSV_TO_XML.TEXT,
    url: API_ENDPOINTS.CSV_TO_XML.URL,
    file: API_ENDPOINTS.CSV_TO_XML.FILE
  },
  'CSV to XLSX': {
    text: API_ENDPOINTS.CSV_TO_XLSX.TEXT,
    url: API_ENDPOINTS.CSV_TO_XLSX.URL,
    file: API_ENDPOINTS.CSV_TO_XLSX.FILE
  },
  'JSON to CSV': {
    text: API_ENDPOINTS.JSON_TO_CSV.TEXT,
    url: API_ENDPOINTS.JSON_TO_CSV.URL,
    file: API_ENDPOINTS.JSON_TO_CSV.FILE
  }
};