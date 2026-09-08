export { buildWhatsAppLink, composeWhatsAppMessage } from './utils/whatsapp';
export { contactFormDefaults, contactFormSchema } from './schemas/contactFormSchema';
export type { ContactFormInput } from './schemas/contactFormSchema';
export { useContactSubmit } from './hooks/useContactSubmit';
export { GalleryMedia } from './components/GalleryMedia';
export {
  comparisonRows,
  galleryItems,
  landingAnchors,
  navItems,
  owners,
  services,
  stats,
  visionText,
  whatsappPhone,
  whatsappRecipientName,
} from './data/landingData';
export type {
  ComparisonRow,
  ContactFormValues,
  GalleryItem,
  GalleryMediaType,
  NavItem,
  OwnerItem,
  ServiceItem,
  StatItem,
} from './types';
export { default as LandingPage } from './pages/LandingPage';