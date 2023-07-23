export interface ProgressBarProps {
  current: number;
  max?: number;
  min?: number;
}

export type ProgressBarInternalComponent = React.FC<ProgressBarProps>;
