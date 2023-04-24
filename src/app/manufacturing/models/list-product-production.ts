import {Product} from '../../product-structure/models/product';
import {UITask} from '../components/manufacturing-chart/manufacturing-chart.component';
import {Color} from '@shared/models/task';

export type ListProductProductionGroup = Array<ListProductProduction>;

export class ListProductProduction {
  product: Product;
  products: Product[] = [];
  tasks: UITask[] = [];
  task?: Task;
  isGrouped: boolean;

  /** Используется для фильтрации в списке */
  isFiltered = true;
  /** Используется для фильтрации в списке (видно в том числе родительские isFiltered) */
  isVisible = true;
  /** Свёрнута ли ветка дерева */
  isExpanded = true;

  /** Наведение на элемент */
  isHover = false;

  /** Выбрана в списке */
  isSelected = true;

  /** Выбрана для развертывания / свертывания */
  isActive = false;

  /** Порядковый номер */
  index: number;

  parent: ListProductProduction;
  children: ListProductProduction[] = [];

  color: Color;

  /** Группируем дочерние элементы, чтобы у них был общий цветной прямоугольник */
  groups: ListProductProductionGroup[] = [];

  constructor(config?: Partial<ListProductProduction>) {
    if (config) {
      Object.assign(this, config);
    }
  }

  get hasChildren(): boolean {
    return Boolean(this.children.length || !this.parent);
  }

  getChildrenEnd() {
    return new Date(Math.max(
      ...this.children
        .map(child => child.tasks)
        .flat()
        .map(task => task.end_date.getTime())
    ));
  }

  get isBlocked(): boolean {
    return this.tasks
      .map(p => p.tasks)
      .flat()
      .some(t => t.status === 'On stock');
  }

  getEnd() {
    return new Date(Math.max(
      ...this.tasks
        .map(t => t.tasks)
        .flat()
        .map(task => task.end_date.getTime())
    ));
  }

  public updateGroups() {
    this.groups = [];
    for (const child of this.children) {
      // разбиваем всего на 2 группы: с дочерними, без дочерних
      const groupIndex = child.hasChildren ? 0 : 1;
      this.groups[groupIndex] = this.groups[groupIndex] ?? [] as ListProductProductionGroup;
      this.groups[groupIndex].push(child);
    }
  }
}
