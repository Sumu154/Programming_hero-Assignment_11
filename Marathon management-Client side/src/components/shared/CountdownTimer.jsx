import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { timeLeftFormat } from '../../Utils/Formatters/timeFormatters';


const CountdownTimer = ( { remainingTime } ) => {
  return (
    <div>
      <CountdownCircleTimer  isPlaying  duration={timeLeft / 1000} colors={['#004777', '#F7B801', '#A30000', '#A30000']} colorsTime={[7, 5, 2, 0]} strokeWidth={8} size={100}>
        {({ remainingTime }) => remainingTime > 0 ? <span className="text-center p-1">{timeLeftFormat(remainingTime)}</span> : "Time's Up!"}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;