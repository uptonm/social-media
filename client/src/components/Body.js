import React from "react";
import { Segment, Statistic } from "semantic-ui-react";
import paragraph from "../assets/paragraph.png";

export default () => {
  return (
    <div className="half-width" align="center">
      <Segment.Group>
        <Segment vertical>
          <Statistic label="Total Users" value="5,550" />
        </Segment>
        <Segment vertical>
          <img src={paragraph} alt="paragraph" />
        </Segment>
      </Segment.Group>
    </div>
  );
};
