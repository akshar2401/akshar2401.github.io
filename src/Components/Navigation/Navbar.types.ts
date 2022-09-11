export interface INavbarItem {
  name: string;
  isActive?: boolean;
}

export class NavbarItems {
  constructor(public navBarItems: INavbarItem[]) {}
}
