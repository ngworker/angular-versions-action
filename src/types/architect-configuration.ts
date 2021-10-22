export interface ArchitectConfiguration {
  builder: string;
  options?: {
    [prop: string]: unknown;
  };
  [prop: string]: unknown;
}
