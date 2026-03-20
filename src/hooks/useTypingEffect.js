import { useEffect, useState } from 'react';

export function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const nextText = isDeleting
      ? currentWord.slice(0, displayText.length - 1)
      : currentWord.slice(0, displayText.length + 1);

    const timeout = setTimeout(
      () => {
        setDisplayText(nextText);

        if (!isDeleting && nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 900);
        } else if (isDeleting && nextText === '') {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      },
      isDeleting ? 50 : 95,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}
