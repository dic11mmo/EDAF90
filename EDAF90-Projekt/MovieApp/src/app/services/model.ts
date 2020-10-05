export interface Page<T> {
  results: T[];
  page: number;
  total_results: number;
  total_pages: number;
}

export interface APIError {
  status: string;
}
