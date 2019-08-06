export class TaskDescription {
  id: number;
  title: string;
  type: string;
  sources: string[];
  description: string;
}

export class TaskMatchResult {
  source: string;
  matched: boolean;
  groups: string[];
}
