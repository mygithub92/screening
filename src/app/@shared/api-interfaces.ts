export interface Account {
  id: string;
  email: string;
  accoutTye: number;
  isActive: boolean;
  companyName: string;
  address: string;
  roles: Role[];
  partners: Partner[];
  role: Role;
}

export interface Role {
  id: string;
  name: string;
  location: string;
  type: string;
  isActive: boolean;
}

export interface Partner {
  partnerCompanyId: string;
  roleId: string;
  isActive: boolean;
}

export interface Role {
  name: string;
  location: string;
  roleType: RoleType;
  isActive: boolean;
}

export interface RoleType {
  label: string;
  value: string;
}

export interface PartnerDetails {
  account: Account;
  role: Role;
}

export interface Product {
  id: string;
  companyName?: string;
  vineyardAddress?: string;
  pickingDay?: Date;
  rowRange?: string;
  numberOfBins?: string;
  block?: string;
  region?: string;
  vintage?: string;
  variety?: string;
  actualWeight?: string;
  batchId?: string;
  volume?: string;
  status?: string;
  wineInfo?: string;
  bottlingDate?: string;
  lcode?: string;
  brand?: string;

  currentOwner: User;
  ownerships: Ownership[];
}

export interface Ownership {
  user: any;
  date: string;
}

export interface User {
  userName: string;
  roleTypes: RoleType[];
  partners: any[];
}

export interface RoleType {
  label: string;
  value: string;
}
