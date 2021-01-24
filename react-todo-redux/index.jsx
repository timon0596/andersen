import React from 'react';
import ReactDom from 'react-dom';
import { App } from './elements/app/app';

require.context('./', true, /.css$/);

ReactDom.render(<App />, document.querySelector('.root'));
