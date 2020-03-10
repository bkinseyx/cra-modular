import React from 'react';

import { AppComponentProps } from 'App';
import Common from 'components/Common';

const First: React.FC<AppComponentProps> = ({ appData }) => (
  <div>
    this is the first react module!!!!
    {JSON.stringify(appData)}
    <Common />
  </div>
);

export default First;
