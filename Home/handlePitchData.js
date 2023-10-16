import { useState } from 'react';

const initialDataPoints = [
  { id: '1', pitchType: 'Fastball', targetSpot: '1', didHit: 'Yes' },
  { id: '2', pitchType: 'Fastball', targetSpot: '1', didHit: 'Yes' },
  { id: '3', pitchType: 'Fastball', targetSpot: '1', didHit: 'Yes' },
  { id: '4', pitchType: 'Fastball', targetSpot: '1', didHit: 'Yes' },
  { id: '5', pitchType: 'Fastball', targetSpot: '1', didHit: 'Yes' },
  { id: '6', pitchType: 'Fastball', targetSpot: '1', didHit: 'Yes' },


];

export const useDataPoints = () => {
  const [dataPoints, setDataPoints] = useState(initialDataPoints);

  const addDataPoint = () => {
    const newDataPoint = {
      id: (dataPoints.length + 1).toString(),
      pitchType: 'New Pitch Type',
      targetSpot: 'New Target Spot',
      didHit: 'New Did Hit',
    };

    setDataPoints([...dataPoints, newDataPoint]);
  };

  return { dataPoints, addDataPoint };
};
