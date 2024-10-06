import React from 'react';

import { Layout } from './Layout';
import { FlexGrid } from './FlexGrid';
import { Spacing } from './Spacing';
import { Sizing } from './Sizing';
import { Typography } from './Typography';

const Demo = () => (
  <div>
    <h3 className="text-2xl font-bold">Layout</h3>
    <Layout />

    <h3 className="text-2xl font-bold">Flexbox & Grid</h3>
    <FlexGrid />

    <h3 className="text-2xl font-bold">Spacing</h3>
    <Spacing />

    <h3 className="text-2xl font-bold">Sizing</h3>
    <Sizing />

    <h3 className="text-2xl font-bold">Typography</h3>
    <Typography />

    <details>
      <summary>Columns</summary>
      <table className="w-full text-left border-collapse"></table>
    </details>

    <details>
      <summary>Columns</summary>
      <table className="w-full text-left border-collapse"></table>
    </details>

    <details>
      <summary>Columns</summary>
      <table className="w-full text-left border-collapse"></table>
    </details>
  </div>
);

export { Demo };
