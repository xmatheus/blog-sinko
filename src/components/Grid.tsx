import { twMerge } from 'tailwind-merge';

export function Grid({ children, className }: { children: React.ReactNode; className?: string }) {
    const classNames = twMerge('max-w-[1280px] mx-auto px-6', className);

    return <div className={classNames}>{children}</div>;
}
