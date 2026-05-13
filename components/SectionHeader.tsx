export function SectionHeader({
  id,
  label,
  centered,
}: {
  id?: string;
  label: string;
  centered?: boolean;
}) {
  return (
    <div
      id={id}
      className={`flex items-center gap-3 scroll-mt-24 ${centered ? 'justify-center' : ''}`}
    >
      {centered && <div className="w-12 h-px bg-line" />}
      <span className="font-mono text-[10.5px] text-muted uppercase tracking-[0.18em]">
        // {label}
      </span>
      <div className="flex-1 h-px bg-line max-w-[200px]" />
    </div>
  );
}
