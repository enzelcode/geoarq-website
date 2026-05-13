export const SITE = {
  brand: "GeoArq",
  fullName: "GeoArq Arquitetura e Urbanismo",
  email: "geoarq@geoarqurb.com",
  phone: "+55 11 97398-4545",
  phoneDisplay: "(11) 97398-4545",
  whatsappNumber: "5511973984545",
  whatsappMessage: "Olá! Vim pelo site da GeoArq e gostaria de conversar sobre um projeto.",
  instagramHandle: "geoarq_urb",
  instagramUrl: "https://www.instagram.com/geoarq_urb",
} as const;

export const whatsappLink = (
  message: string = SITE.whatsappMessage,
  number: string = SITE.whatsappNumber
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
