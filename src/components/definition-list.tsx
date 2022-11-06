const List = ({
  items,
  className = '',
}: {
  items: Record<string, string>;
  className?: string;
}) => {
  return (
    <dd className={className}>
      {Object.entries(items).map(([label, item]) => (
        <div key={label}>
          <dt className="mr-1 inline-block font-semibold after:content-[':']">
            {label}
          </dt>
          <dd className="inline-block ">{item}</dd>
        </div>
      ))}
    </dd>
  );
};

export default List;
