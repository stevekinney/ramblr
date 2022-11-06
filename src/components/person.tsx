import { useSelector } from 'react-redux';
import { RootState } from '..';
import AddressCard from './address';
import CreditOrDebitCard from './credit-card';
import List from './definition-list';
import Section from './section';

const PersonProfile = ({ personId }: { personId: string }) => {
  const person = useSelector<RootState, Person>(
    (state) => state.person.entities[personId],
  );

  return (
    <article
      id={`person-${person.id}`}
      className="flex flex-col w-full gap-4 p-4 border-2 rounded-lg shadow-sm place-content-between border-primary-400 lg:flex-row lg:gap-12"
    >
      <header className="flex flex-col items-center gap-4 m-auto w-60">
        <img
          className="w-24 h-24 border-2 rounded-full shadow-sm border-primary-900"
          src={person.img}
          alt={`Photograph of ${person.firstName}`}
        />
        <div>
          <h1 className="text-xl font-bold">
            {person.firstName} {person.lastName}
          </h1>
          <p className="text-sm">@{person.username}</p>
        </div>
        <List items={{ Email: person.email, Phone: person.phone }} />
      </header>

      <div className="flex flex-col flex-grow gap-8 xl:flex-row">
        <Section title="Addresses">
          <AddressCard address={person.address} primary />
          {person.previousAddresses.map((address) => (
            <AddressCard key={address.zip} address={address} />
          ))}
        </Section>

        <Section title="Credit Cards">
          {person.creditCards.map((card) => (
            <CreditOrDebitCard card={card} />
          ))}
        </Section>
      </div>
    </article>
  );
};

export default PersonProfile;
