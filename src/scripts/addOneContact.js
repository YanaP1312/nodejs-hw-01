import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...currentContacts, newContact];
    await writeContacts(updatedContacts);
  } catch (err) {
    console.error('Error:', err);
  }
};

addOneContact();
