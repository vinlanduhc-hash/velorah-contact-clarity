import { cn } from "@/lib/utils";

export function TailwindCssBackgroundSnippet({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      }}
    />
  );
}
