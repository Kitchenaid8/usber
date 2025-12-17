interface StepItemProps {
  number: number;
  text: string;
}

export const StepItem = ({ number, text }: StepItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-sm font-bold">{number}</span>
      </div>
      <p className="text-foreground font-medium text-sm">{text}</p>
    </div>
  );
};
