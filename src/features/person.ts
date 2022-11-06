import {
  randAddress,
  randCreditCard,
  randNumber,
  randUser,
  User,
} from '@ngneat/falso';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getFullName = (first: string, last: string) => first + ' ' + last;

const generateCreditCards = (person: Person): void => {
  const fullName = getFullName(person.firstName, person.lastName);
  const length = randNumber({ min: 1, max: 2 });
  const creditCards = randCreditCard({
    length,
    fullName,
  });
  person.creditCards = creditCards;
};

const generatePreviousAddresses = (person: Person): void => {
  const length = randNumber({ min: 0, max: 3 });
  const addresses = randAddress({ length });
  person.previousAddresses = addresses;
};

const generatePerson = (id?: string): Person => {
  const user: User = { ...randUser() };

  const person = {
    ...user,
    address: randAddress(),
    creditCards: [],
    previousAddresses: [],
    orders: [],
  };

  if (id) person.id = id;

  generateCreditCards(person);
  generatePreviousAddresses(person);

  return person;
};

const createInitialState = (): EntityStore<Person> => ({
  entities: {},
  ids: [],
});

export const person = createSlice({
  name: 'person',
  initialState: createInitialState(),
  reducers: {
    create: (state, action: PayloadAction<{ id?: undefined } | undefined>) => {
      const person = generatePerson(action.payload?.id);

      state.entities[person.id] = person;
      state.ids.push(person.id);
    },
  },
});
