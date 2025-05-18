import React from 'react';
import { useEffect } from 'react';

const LinkToAnchor = (props) => {
    useEffect(() => {
        console.log(`Scrolling to anchor ID: ${props.anchorId}`);
    const anchor = document.getElementById(props.anchorId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.anchorId]);

  return (
    <a href={`/#${props.anchorId}`} className={props.anchorClass}>
      {props.anchorText} 
    </a>
  );
};

export default LinkToAnchor;