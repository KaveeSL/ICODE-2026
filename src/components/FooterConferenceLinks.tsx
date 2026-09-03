import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type FooterConferenceLinksProps = {
  /** Homepage footer: hash-only anchors on the same page */
  samePage?: boolean;
};

const itemClass = "hover:underline hover:text-neutral-100 transition-colors";
const submitClass =
  "font-semibold text-uom-gold tracking-wide hover:text-[#ffc84d] hover:underline transition-colors drop-shadow-[0_0_8px_rgba(246,168,0,0.35)]";

export function FooterConferenceLinks({ samePage = false }: FooterConferenceLinksProps) {
  const path = (hash: string) => (samePage ? hash : `/${hash}`);

  const NavItem = ({
    to,
    children,
    className = itemClass
  }: {
    to: string;
    children: ReactNode;
    className?: string;
  }) =>
    samePage ? (
      <a href={to} className={className}>
        {children}
      </a>
    ) : (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <ul className="space-y-1.5 list-disc list-inside">
      <li>
        <NavItem to={path("#about")}>About ICODE2026</NavItem>
      </li>
      <li>
        <NavItem to={path("#dates")}>Important Dates</NavItem>
      </li>
      <li>
        <Link to="/programme/day1" className={itemClass}>
          Schedule
        </Link>
      </li>
      <li>
        <Link to="/gallery/day1" className={itemClass}>
          Gallery
        </Link>
      </li>
      <li>
        <Link to="/proceedings" className={itemClass}>
          Programme
        </Link>
      </li>
      <li>
        <NavItem to={path("#faq")}>FAQs</NavItem>
      </li>
      <li>
        <NavItem to={path("#contact")}>Contact</NavItem>
      </li>
      <li>
        <Link to="/call-for-papers" className={submitClass}>
          Submit Abstract
        </Link>
      </li>
    </ul>
  );
}
