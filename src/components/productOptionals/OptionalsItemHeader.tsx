interface ComponentProps {
  title: string;
  instruction: string;
  requiredLabel: string;
}

export const OptionalsItemHeader = (props: ComponentProps) => {
  const { title, instruction, requiredLabel } = props;
  return (
    <div className="sticky top-0 flex justify-between items-center bg-purple-50 px-10 py-3">
      <div>
        <p>{title}</p>
        <p className="text-sm text-light-gray">{instruction}</p>
      </div>
      <div className="bg-primary text-white p-1 rounded">
        <p className="text-xs">{requiredLabel}</p>
      </div>
    </div>
  );
};
