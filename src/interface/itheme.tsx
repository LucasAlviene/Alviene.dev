import { ReactChildren, ReactChild } from 'react';

export default interface ITheme {
    background?: string
    primary?: string
    secondary?: string
    text?: string
    textPrimary?: string
  }

  //ReactChild[| ReactChildren | never[]