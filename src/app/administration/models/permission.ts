export class Permission {
  readonly id: number;
  name: string;
}

export class Permissions {
  total: number;
  data: Permission[];
}

export class ModulePermission {
  readonly id: number;
  name: string;
  description: string;
  is_module_permissions_selected_in_role?: boolean;
}
