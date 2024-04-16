import { GridProvider as Provider } from '@faceless-ui/css-grid';
import { ReactNode } from 'react';

type PropTypes = {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const GridProvider = ({children}: PropTypes): JSX.Element => {
  return (
    <Provider
      breakpoints={{
        s: 768,
        m: 1279,
        l: 1679
      }}
      rowGap={{
        s: '30px',
        m: '30px',
        l: '30px',
        xl: '30px',
      }}
      colGap={{
        s: '30px',
        m: '30px',
        l: '30px',
        xl: '30px',
      }}
      cols={{
        s: 6,
        m: 12,
        l: 12,
        xl: 12,
      }}
    >
      {children}
    </Provider>
  )
}

export default GridProvider;
