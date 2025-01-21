import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    if (!Array.isArray(updatedContacts)) {
      return 'Data to be written must be an array';
    }
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('The data was successfully written to the file');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};
