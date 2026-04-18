import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "").replace(/^(\+56)/, "$1 ");
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/56961861768?text=${encodeURIComponent(message)}`;
}
