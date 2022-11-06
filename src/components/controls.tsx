import { useDispatch } from 'react-redux';
import { person } from '../features/person';

const ControlPanel = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <button
        onClick={() => {
          dispatch(person.actions.create());
        }}
      >
        Generate Person
      </button>
    </header>
  );
};

export default ControlPanel;
