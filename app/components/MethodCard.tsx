"use client";

import { motion } from "framer-motion";
import { fadeUpItem as item } from "./shared/motion";

interface Props {
  num: string;
  name: string;
  desc: string;
  isLast: boolean;
  nodeRef: (el: HTMLSpanElement | null) => void;
  fillRef: (el: HTMLSpanElement | null) => void;
}

// Each stage draws its own rail segment, extended by one gutter so the
// segments meet and read as a single continuous line. Keep the 2.5rem in
// sync with the grid's gap-x-10 / gap-y-10 in Method.tsx. The last stage
// gets a short stub instead: the rail ends in the air and never closes —
// the logo's open arc, at section scale.
const SEGMENT = "w-[calc(100%_+_2.5rem)]";
const SEGMENT_LAST = "w-10";
const RISER = "h-[calc(100%_-_14px_+_2.5rem)]";
const RISER_LAST = "h-10";

const MethodCard = ({ num, name, desc, isLast, nodeRef, fillRef }: Props) => {
  const segment = isLast ? SEGMENT_LAST : SEGMENT;
  const riser = isLast ? RISER_LAST : RISER;

  return (
    <motion.div variants={item} className="relative pl-7 lg:pl-0">
      {/* Vertical rail — below lg only, and always static. The travelling
          animation is a desktop affordance; stacked, it would only drag the
          eye down past text the reader is still on. */}
      <span
        aria-hidden="true"
        className={`lg:hidden absolute left-[4.5px] top-3.5 w-px bg-rule ${riser}`}
      />
      <span
        aria-hidden="true"
        className="lg:hidden absolute left-0 top-px w-2.5 h-2.5 border border-copper bg-copper"
      />

      <div className="font-mono text-[11px] font-medium leading-none tracking-[0.08em] uppercase text-ink-3">
        Etapa {num}
      </div>

      {/* Horizontal rail — lg and up. Node and fill render lit so the
          section reads complete with no JS and under reduced motion; the
          GSAP timeline in Method.tsx resets them and takes over. */}
      <div aria-hidden="true" className="hidden lg:block relative h-2.5 my-5">
        <span
          className={`absolute left-0 top-[4.5px] h-px bg-rule ${segment}`}
        />
        <span
          ref={fillRef}
          className={`absolute left-0 top-[4.5px] h-px bg-copper ${segment}`}
        />
        {/* Opaque fill on purpose — it masks the rail passing behind. */}
        <span
          ref={nodeRef}
          className="absolute left-0 top-0 w-2.5 h-2.5 border border-copper bg-copper"
        />
      </div>

      <h3 className="font-heading font-medium text-[22px] lg:text-[26px] text-navy leading-[1.15] mt-4 lg:mt-0 mb-3">
        {name}
      </h3>
      <p className="text-[15px] lg:text-[16px] text-ink-2 leading-[1.7]">
        {desc}
      </p>
    </motion.div>
  );
};

export default MethodCard;
