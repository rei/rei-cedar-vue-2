const headers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const records = [];

for (let i = 0; i < 2; i += 1) {
  const record = {};

  headers.forEach((header) => {
    record[header] = header;
  });

  record.rowheader = 'Row header';
  records.push(record);
}

const tableData = {
  colHeaders: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  rowHeaders: ['Chest', 'Sleeve Length', 'Waist', 'Hip', 'Inseam'],
  rowData: [
    {
      xs: '31.5 - 33',
      s: '35 - 38',
      m: '38 - 41',
      l: '42 - 45',
      xl: '46 - 49',
      xxl: '50 - 53',
      xxxl: '54-57',
    },
    {
      s: '33',
      m: '34',
      l: '35',
      xl: '35.5',
      xxl: '36',
      xxxl: '36.6',
      xs: 'N/A',
    },
    {
      xs: '26.5 - 27.5',
      s: '28 - 30',
      m: '32 - 34',
      l: '36 - 38',
      xl: '40 - 42',
      xxl: '44 - 46',
      xxxl: '48 - 50',
    },
    {
      xs: 'N/A',
      s: '35 - 37',
      m: '38 - 40',
      l: '41 - 43',
      xl: '44 - 46',
      xxl: '47 - 49',
      xxxl: '51 - 54',
    },
    {
      xs: '31',
      s: '32',
      m: '32',
      l: '32',
      xl: '32',
      xxl: '32',
      xxxl: '32',
    },
  ],
  books: {
    headers: [
      'Title',
      'Year',
      'Author',
    ],
    records: [
      {
        title: 'Book A',
        year: 1823,
        author: 'Mikey',
        rowheader: 'row 1',
      },
      {
        title: 'Book C',
        year: 1532,
        author: 'Joey',
        rowheader: 'row 2',
      },
      {
        title: 'Book E',
        year: 1253,
        author: 'Scotty',
        rowheader: 'row 3',
      },
    ],
  },
  scroll: {
    headers,
    records,
  },
};

module.exports.tableData = tableData;
