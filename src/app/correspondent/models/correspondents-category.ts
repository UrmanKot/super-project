
export class CorrespondentsCategory {
  readonly id:number;
  name?: string;
  description?: string;
  parent?: CorrespondentsCategory;
  expanded?:boolean;
  lft?: number;
  rght?: number;
  tree_id?: number;
  level?: any;
  // parent?: CorrespondentsCategory;
}
