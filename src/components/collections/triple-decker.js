import React, { PropTypes } from 'react';
import Element from '../elements';

export const requirements = [
  {
    type: 'element',
    whitelist: ['Icon'],
  },
  {
    type: 'element',
    whitelist: ['Paragraph'],
  },
  {
    type: 'element',
    whitelist: ['Button', 'Link'],
  }
]

const TripleDecker = ({elements}) => (
  <div>
    {elements.map((element, i) => (
      <Element {...element} key={i} />
    ))}
  </div>
)

TripleDecker.propTypes = {

}

export default TripleDecker;