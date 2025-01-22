import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (err) {
    console.error('Error:', err);
  }
};

removeAllContacts();
