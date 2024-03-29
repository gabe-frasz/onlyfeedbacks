import { CircleNotch } from "phosphor-react";

export const Loading = () => {
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      <CircleNotch weight="bold" className="h-4 w-4 animate-spin" />
    </div>
  );
};
