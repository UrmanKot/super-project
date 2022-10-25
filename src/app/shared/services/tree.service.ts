import { Injectable } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  createTree(categories: any[], expanseMap: any): TreeNode[] {
    const prepareNodes: Partial<TreeNode>[] = [];

    categories.forEach(element => {
      const ins = {data: element, expanded: false, children: []};

      if (expanseMap) {
        ins.expanded = expanseMap[element.id];
      }
      prepareNodes.push(ins);
    });

    const root: TreeNode[] = [];

    const idMapping = prepareNodes.reduce((acc, el, i) => {
      acc[el.data.id] = i;
      return acc;
    }, {});

    prepareNodes.forEach(el => {
      if (el.data.parent === null) {
        root.push(el);
        return;
      }

      const parentEl = prepareNodes[idMapping[el.data.parent]];
      parentEl.children = [...(parentEl.children || []), el];

      if (parentEl.children.length === 0) {
        // delete parentEl.children;
      }
    });

    return root;
  }

  mapExpansion(nodes: TreeNode[], expanseMap: any): void {
    const createExpanseMap = (node: TreeNode) => {
      if (node.expanded) {
        expanseMap[node.data.id] = node.expanded;
      } else {
        expanseMap[node.data.id] = false;
      }

      if (node.children) {
        node.children.forEach(element => {
          createExpanseMap(element);
        });
      }
    }

    nodes.forEach(element => {
      createExpanseMap(element);
    });
  }

  findSelectedNode(selectedNode: TreeNode, tree: TreeNode[]): TreeNode {
    let newSelectedNode: TreeNode;

    if (selectedNode.parent) {
      let parent = selectedNode.parent;
      let parentIds = [];

      while (parent) {
        parentIds.push(parent.data.id);
        parent = parent.parent;
      }

      parentIds = parentIds.reverse();
      let node = tree.find(cat => cat.data.id === parentIds[0]);

      let i = 1;
      while (node.data.id !== parentIds[parentIds.length - 1]) {
        node = node.children.find(t => t.data.id === parentIds[i]);
        i++;
      }

      newSelectedNode = node.children.find(item => item.data.id === selectedNode.data.id);
    } else {
      newSelectedNode = tree.find(category => category.data.id === selectedNode.data.id);
    }

    return newSelectedNode;
  }
}
