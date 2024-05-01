import { FC } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 550;
  let frequency = 0.013;

  // Adjusted amplitude values to maintain balance
  const waves = {
    frontWave: new WaveObj([0.013, 0.025, 0.01], 'rgb(0, 8, 184, 0.1)'),
    backWave: new WaveObj([0.009, 0.018, 0.005], 'rgb(67, 166, 198, 0.1)'),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };

  if (context) render();
  return null;
};

export default Wave;
