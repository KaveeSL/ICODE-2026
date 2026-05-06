import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
  WHATSAPP_ICON_PATH
} from "../constants/contact";

/** “Get in touch” row: WhatsApp icon + number (opens WhatsApp). */
export function ContactWhatsAppFooterItem() {
  return (
    <li>
      <div className="inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path fill="currentColor" d={WHATSAPP_ICON_PATH} />
          </svg>
        </span>
        <a
          href={CONTACT_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-uom-gold hover:underline"
          aria-label={`WhatsApp ${CONTACT_PHONE_DISPLAY}`}
        >
          {CONTACT_PHONE_DISPLAY}
        </a>
      </div>
    </li>
  );
}
