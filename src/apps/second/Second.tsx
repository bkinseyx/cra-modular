import React from 'react';

import { AppComponentProps } from 'App';
import Common from 'components/Common';

const Second: React.FC<AppComponentProps> = ({ appData }) => (
  <div>
    this is the second react module!!!! <Common />
    {JSON.stringify(appData)}
  </div>
);

export default Second;
