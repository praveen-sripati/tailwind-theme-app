const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ThemeOption = ({ themeName, accentColor, isSelected, onSelect }) => {
  return (
    <div onClick={onSelect} className="cursor-pointer">
      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-primary">
        <div className="flex items-center justify-between space-x-2 rounded-sm p-2 dark:bg-background">
          <div style={{ backgroundColor: accentColor }} className="h-8 w-8 rounded-full" />
          <span className="font-semibold text-foreground">{themeName}</span>
        </div>
      </div>
      <div className={`mt-2 flex items-center justify-center text-primary ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
        <CheckIcon />
      </div>
    </div>
  );
};