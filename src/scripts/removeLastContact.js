import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    contacts.splice(contacts.length - 1, 1);
    await writeContacts(contacts);
  } catch (err) {
    console.error('Error:', err);
  }
};

removeLastContact();
