import './App.css';
import Item from './Item';
import {useCallback, useState} from 'react';

function App() {
  const [duplicate, setDuplicate] = useState(true)

  const items = [
    ['key1', 'val1'],
    ['key1', 'val2'],
  ];

  const toggleDuplicate = useCallback(() => {
    setDuplicate(v => !v)
  }, [setDuplicate])

  return (
    <div className='App'>
      {items.map(([key, value]) => (
        <Item key={duplicate ? key : value} value={value} />
      ))}
      <button onClick={toggleDuplicate}>
        Toggle duplicate keys
      </button>
    </div>
  );
}

export default App;
