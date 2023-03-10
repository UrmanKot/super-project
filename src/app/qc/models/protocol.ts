export class QcProtocol {
  readonly id: number;
  name: string;
  comment: string;
}

export class QrProtocolParagraph {
  readonly id: number;
  name: string;
  comment: string;
}

export class QcProtocols {
  next: string;
  previous: string;
  count: number;
  results: QcProtocol[];
}

export class ProductQcProtocol {
  id: number;
}
