import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';
import { createFakeContact } from '../utils/createFakeContact';

const generateContacts = async (number) => {
  try {
    const newContact = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...readContacts, ...newContact];
    await writeContacts(updatedContacts);
  } catch (err) {
    console.error('Error:', err);
  }
};

generateContacts(5);
