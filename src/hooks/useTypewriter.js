import { useState, useEffect } from 'react';

/**
 * Digita um texto caractere por caractere.
 * @param {string} text - Texto completo a ser digitado
 * @param {number} speed - Milissegundos por caractere (padrão: 45ms)
 * @param {number} delay - Atraso antes de começar (padrão: 0ms)
 * @returns {{ displayed: string, done: boolean }}
 */
export function useTypewriter(text, speed = 45, delay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let startTimeout;
    let interval;

    startTimeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return { displayed, done };
}
