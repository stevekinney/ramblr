import { useSelector } from 'react-redux';
import { RootState } from '..';
import ControlPanel from './controls';
import PersonProfile from './person';

const Application = () => {
  const people = useSelector<RootState, string[]>((state) => state.person.ids);

  return (
    <main className="flex flex-col gap-8 p-10 m-auto">
      <ControlPanel />
      <section className="flex flex-wrap gap-8">
        {people.map((id) => (
          <PersonProfile key={id} personId={id} />
        ))}
      </section>
    </main>
  );
};

export default Application;
