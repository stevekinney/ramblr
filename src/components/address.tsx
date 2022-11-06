import clsx from 'clsx';
import { Address } from '@ngneat/falso';

const AddressCard = ({
  address,
  primary,
}: {
  address: Address;
  primary?: boolean;
}) => {
  return (
    <article className="border-2 shadow-md border-primary-500 bg-primary-50">
      <h3
        className={clsx(
          'px-4 py-2 font-semibold',
          primary && 'bg-emerald-300',
          !primary && 'bg-primary-200',
        )}
      >
        {primary ? 'Primary Address' : 'Alternate Address'}
      </h3>
      <div className="p-4">
        <p>{address.street}</p>
        <p>
          {address.city}, {address.country} {address.zipCode}
        </p>
      </div>
    </article>
  );
};

export default AddressCard;
