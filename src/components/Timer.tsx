import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="numbers">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
