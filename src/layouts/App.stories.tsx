import React from 'react';
import App from './App';
import { Oval } from '../components/Skeleton';
import { Line, Lines } from '../components/Skeleton.stories';

export default {
  title: 'layouts|App',
};

export const Default = () => (
  <App
    header={
      <>
        <Line />
        <Oval width={30} height={30} />
        <Line />
      </>
    }
    sidebar={
      <>
        <Oval width={30} height={30} />
        <Oval width={30} height={30} />
        <Oval width={30} height={30} />
      </>
    }
  >
    <Lines />
  </App>
);