import List from './definition-list';

const CreditOrDebitCard = ({ card }: { card: CreditCard }) => {
  return (
    <article className="flex flex-col w-full gap-4 px-4 py-2 border-2 shadow-lg rounded-xl border-primary-900 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 sm:w-80">
      <h3 className="text-lg font-bold">{card.brand}</h3>
      <section>
        <p className="font-semibold">{card.fullName}</p>
        <p>{card.number}</p>
        <p>
          {card.validFrom} — {card.untilEnd}
        </p>
      </section>
      <List
        items={{ Account: card.account, CCV: card.ccv }}
        className="text-xs"
      />
    </article>
  );
};

export default CreditOrDebitCard;
