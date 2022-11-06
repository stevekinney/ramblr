import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type SectionProps = {
  title?: string;
  className?: string;
};

const Title = ({ children }: PropsWithChildren<{}>) => {
  if (!children) return null;
  return <h2 className="mb-4 text-lg font-bold">{children}</h2>;
};

const Section = ({
  title,
  children,
  className = '',
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={clsx(className)}>
      <Title>{title}</Title>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
        {children}
      </div>
    </section>
  );
};

export default Section;
