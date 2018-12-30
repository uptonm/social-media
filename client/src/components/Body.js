import React from 'react';
import { Segment } from 'semantic-ui-react';
import paragraph from '../assets/paragraph.png';

export default () => {
  return (
    <div className="padded">
      <Segment>
        <img src={paragraph} alt="paragraph" />
      </Segment>
    </div>
  );
};
