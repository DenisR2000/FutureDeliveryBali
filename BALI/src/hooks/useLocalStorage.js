import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  // Set up state to store the value
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  // Update local storage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return the value and a function to update it
  return [value, setValue];
};

export default useLocalStorage;



/*
   HOW TO USE 


   EXAMPLE 

   import useLocalStorage from './useLocalStorage';

    const App = () => {
    const [count, setCount] = useLocalStorage('count', 0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
    };
*/