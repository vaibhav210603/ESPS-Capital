import { ReactNode } from 'react';

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SectionWrapper({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-32 overflow-hidden', className)}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
