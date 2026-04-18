export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  benefits?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
