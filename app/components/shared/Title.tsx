import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: TitleProps) => (
  <h2
    className={`text-[32px] md:text-[44px] lg:text-[56px] text-navy leading-[1.05] lg:leading-none mb-4 lg:mb-5 max-w-140 ${className}`}
  >
    {children}
  </h2>
);

function TitleHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-copper">{children}</span>;
}

TitleHighlight.displayName = "Title.Highlight";
Title.Highlight = TitleHighlight;

export default Title;
