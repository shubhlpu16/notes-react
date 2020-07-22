/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './Footer.css';

export default function Footer() {
  useStyles(s);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>© My Notes</span>
        <span className={s.spacer}>·</span>
        <span className={s.text}>2020</span>
      </div>
    </div>
  );
}
