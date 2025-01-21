import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('The data was successfully written to the file');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};
