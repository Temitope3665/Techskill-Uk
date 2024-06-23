import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-[#FFFFFF1A] 0dark:bg-slate-800',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
