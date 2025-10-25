import React, { useEffect } from 'react';

interface LinkPrefetcherProps {
  urls: string[];
}

/**
 * Componente que insere tags <link rel="prefetch"> no cabeçalho do documento
 * para pré-carregar recursos das URLs fornecidas, melhorando a velocidade de navegação.
 */
const LinkPrefetcher: React.FC<LinkPrefetcherProps> = ({ urls }) => {
  useEffect(() => {
    urls.forEach(url => {
      if (url && typeof document !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      }
    });

    // Cleanup function (opcional, mas boa prática)
    return () => {
      urls.forEach(url => {
        const links = document.head.querySelectorAll(`link[href="${url}"][rel="prefetch"]`);
        links.forEach(link => document.head.removeChild(link));
      });
    };
  }, [urls]);

  return null;
};

export default LinkPrefetcher;