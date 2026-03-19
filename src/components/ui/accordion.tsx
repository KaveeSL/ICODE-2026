import * as React from "react";

interface AccordionItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

interface AccordionItemRowProps {
  item: AccordionItem;
  open: boolean;
  onToggle: () => void;
}

const AccordionItemRow: React.FC<AccordionItemRowProps> = ({
  item,
  open,
  onToggle
}) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = React.useState(0);

  React.useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  return (
    <div className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4 text-left"
      >
        <span className="text-sm md:text-base font-semibold text-neutral-900">
          {item.question}
        </span>
        <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-semibold text-neutral-700 transition-transform duration-200">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
      >
        <div className="px-4 pb-4 pt-0 md:px-5 md:pb-5 text-sm text-neutral-700">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <AccordionItemRow
            key={item.id}
            item={item}
            open={open}
            onToggle={() => setOpenId(open ? null : item.id)}
          />
        );
      })}
    </div>
  );
};

