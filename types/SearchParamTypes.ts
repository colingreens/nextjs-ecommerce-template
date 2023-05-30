export type SearchParamTypes = {
  params: Params;
  searchParams: SearchParams;
};

type Params = {
  id: string;
};

type SearchParams = {
  name: string;
  image: string;
  unit_amount: number | null;
  id: string;
  description: string;
  features: string;
};
