import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContact = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...existingContacts, ...newContact];
    await writeContacts(updatedContacts);
  } catch (err) {
    console.error('Error:', err);
  }
};

generateContacts(3);
