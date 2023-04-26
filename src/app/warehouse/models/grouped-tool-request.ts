import {ToolRequest} from "./tool-request";

export class GroupedToolRequest extends ToolRequest {
  requests?: ToolRequest[];
}
