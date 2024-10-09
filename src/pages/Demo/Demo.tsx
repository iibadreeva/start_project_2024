import React from 'react';

import { Layout } from './Layout';
import { FlexGrid } from './FlexGrid';
import { Spacing } from './Spacing';
import { Sizing } from './Sizing';
import { Typography } from './Typography';
import { Backgrounds } from './Backgrounds';
import { Borders } from './Borders';
import { Effects } from './Effects';
import { Tables } from './Tables';
import { Transitions } from './Transitions';
import { Transforms } from './Transforms';
import { Interactivity } from './Interactivity';
import { Svg } from './Svg';
import { Accessibility } from './Accessibility';

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

    <h3 className="text-2xl font-bold">Backgrounds</h3>
    <Backgrounds />

    <h3 className="text-2xl font-bold">Borders</h3>
    <Borders />

    <h3 className="text-2xl font-bold">Effects</h3>
    <Effects />

    <h3 className="text-2xl font-bold">Tables</h3>
    <Tables />

    <h3 className="text-2xl font-bold">Transitions & Animation</h3>
    <Transitions />

    <h3 className="text-2xl font-bold">Transforms</h3>
    <Transforms />

    <h3 className="text-2xl font-bold">Interactivity</h3>
    <Interactivity />

    <h3 className="text-2xl font-bold">SVG</h3>
    <Svg />

    <h3 className="text-2xl font-bold">Accessibility</h3>
    <Accessibility />

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
