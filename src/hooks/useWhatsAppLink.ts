import { useMemo, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { buildWhatsAppUrls, isMobileDevice, type WhatsAppLinkOptions } from '../utils/whatsapp';

interface UseWhatsAppLinkOptions extends WhatsAppLinkOptions {
  medium?: string;
}

export const useWhatsAppLink = ({ message, source, medium = 'site' }: UseWhatsAppLinkOptions) => {
  const urls = useMemo(() => buildWhatsAppUrls({ message, source, medium }), [message, source, medium]);

  const isMobile = useMemo(() => {
    if (typeof navigator === 'undefined') {
      return false;
    }

    return isMobileDevice(navigator.userAgent);
  }, []);

  const href = isMobile ? urls.deepLink : urls.webLink;

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isMobile) {
        return;
      }

      event.preventDefault();

      const target = event.currentTarget.target || '_self';

      const openWindow = window.open(urls.deepLink, target);

      window.setTimeout(() => {
        try {
          if (openWindow && !openWindow.closed) {
            openWindow.location.href = urls.webLink;
          } else {
            window.open(urls.webLink, target);
          }
        } catch {
          window.open(urls.webLink, target);
        }
      }, 800);
    },
    [isMobile, urls.deepLink, urls.webLink],
  );

  return {
    href,
    onClick: isMobile ? handleClick : undefined,
    fallbackHref: urls.webLink,
    fallbackApiHref: urls.fallbackLink,
  };
};

export default useWhatsAppLink;
