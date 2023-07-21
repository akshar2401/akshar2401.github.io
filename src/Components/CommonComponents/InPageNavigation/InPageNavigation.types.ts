export type InPageNavigationItem = string;

export type InPageNavigationItems = ReadonlyArray<InPageNavigationItem>;

export type OnItemClickHandler = (
  index: number,
  items: InPageNavigationItems
) => void;

export interface InPageNavigationProps {
  items: InPageNavigationItems;
  header: string;
  onItemClick?: OnItemClickHandler;
}

export type InPageNavigationInternalComponent = React.FC<InPageNavigationProps>;
