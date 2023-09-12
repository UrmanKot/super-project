import {Permission} from './permission';

export class Role {
  readonly id: number;
  name: string;
}

export class Roles {
  count: number;
  next: string;
  previous: string;
  results: Role[];
}

export class RolePermissions {
  readonly id: number;
  name: string;
  permissions: Permission[];
}
