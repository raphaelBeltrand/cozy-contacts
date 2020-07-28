import ContactsList from './ContactsList'

export function buildLastNameFirst(contact) {
  const givenName =
    contact.name && contact.name.givenName
      ? contact.name.givenName.toUpperCase()
      : ''
  const familyName =
    contact.name && contact.name.familyName
      ? contact.name.familyName.toUpperCase()
      : ''
  const name = `${familyName} ${givenName}`.trim()
  return name
}

export const sortLastNameFirst = (contact, comparedContact) => {
  const nameA = buildLastNameFirst(contact)
  const nameB = buildLastNameFirst(comparedContact)
  return nameA.localeCompare(nameB)
}

export const toto = contacts => {
  console.info('contacts', contacts)
}

export default ContactsList
