import useCounter from '../hooks/use-conunter';

import Card from './Card';

const ForwardCounter = () => {
 
  const counter =  useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
