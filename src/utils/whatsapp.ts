const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '5511978986350';
const WHATSAPP_CAMPAIGN = import.meta.env.VITE_WA_CAMPAIGN ?? 'site_whatsapp';

export interface WhatsAppLinkOptions {
  message: string;
  source: string;
  medium?: string;
}

const encode = (value: string) => encodeURIComponent(value);

const buildQueryString = ({ message, source, medium = 'site' }: WhatsAppLinkOptions) => {
  return [
    ['text', message],
    ['utm_source', source],
    ['utm_medium', medium],
    ['utm_campaign', WHATSAPP_CAMPAIGN],
  ]
    .map(([key, value]) => `${key}=${encode(String(value))}`)
    .join('&');
};

export const buildWhatsAppUrls = (options: WhatsAppLinkOptions) => {
  const query = buildQueryString(options);

  return {
    deepLink: `whatsapp://send?phone=${WHATSAPP_NUMBER}&${query}`,
    webLink: `https://wa.me/${WHATSAPP_NUMBER}?${query}`,
    fallbackLink: `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&${query}`,
  } as const;
};

const MOBILE_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i;

export const isMobileDevice = (userAgent: string) => MOBILE_REGEX.test(userAgent);

export const getWhatsAppLinkForEnvironment = (options: WhatsAppLinkOptions) => {
  const urls = buildWhatsAppUrls(options);

  if (typeof navigator !== 'undefined' && isMobileDevice(navigator.userAgent)) {
    return urls.deepLink;
  }

  return urls.webLink;
};
