import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Detail = (props: RouteComponentProps) => {
  console.log(props.match.params);
  return (
    <div>
      <div>
        <p>Hello from detail</p>
      </div>
    </div>
  );
};

export default Detail;
