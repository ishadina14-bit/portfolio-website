import { useEffect, useState } from 'react';

export function useRevealText(text, speed = 70) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (displayText === text) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, speed, text]);

  return displayText;
}
