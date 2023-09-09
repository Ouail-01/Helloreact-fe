import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingSlice';

function MyGreetings() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="greeting">
      <h1>Random Greeting :</h1>
      <p>{randomGreeting}</p>
    </div>
  );
}

export default MyGreetings;
