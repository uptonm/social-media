import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';
import paragraph from '../assets/paragraph.png';

export default () => {
  return (
    <div className="half-width" align="center">
      <Segment>
        <Statistic label="Total Users" value="5,550" />
      </Segment>
      <Segment>
        <img src={paragraph} alt="paragraph" />
      </Segment>
    </div>
  );
};
