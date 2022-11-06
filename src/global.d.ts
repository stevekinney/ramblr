type User = import('@ngneat/falso').User;
type CreditCard = import('@ngneat/falso/lib/credit-card').CreditCard;

type EntityStore<T, ID extends string = string> = {
  entities: Record<ID, T>;
  ids: ID[];
};

interface Person extends User {
  creditCards: CreditCard[];
  address: Address;
  previousAddresses: Address[];
  orders: unknown[];
}
