import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: TitleProps) => (
  <h2
    className={`text-[28px] md:text-[36px] lg:text-[44px] text-navy leading-[1.1] lg:leading-[1.05] mb-4 lg:mb-5 max-w-140 ${className}`}
  >
    {children}
  </h2>
);

interface LedeProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

function TitleLede({ children, className = "", light = false }: LedeProps) {
  return (
    <p
      className={`text-[15px] lg:text-[17px] leading-[1.7] max-w-160 ${light ? "text-white/60" : "text-ink-3"} ${className}`}
    >
      {children}
    </p>
  );
}

TitleLede.displayName = "Title.Lede";
Title.Lede = TitleLede;

export default Title;
