/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Search from 'components/Search/Search';
import Stats from 'components/Stats/Stats';
import messages from './messages';
import Countries from '../../components/Countries/Countries';

export default function HomePage() {
  return (
    <div>
      <Search />
      <Stats />
      <Countries />
    </div>
  );
}
