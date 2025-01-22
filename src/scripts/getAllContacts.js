import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (err) {
    console.error('Error:', err);
  }
};

console.log(await getAllContacts());
