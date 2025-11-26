// Route types
export type RouteSource = 'INTERNAL' | 'EXTERNAL';

export type InternalRouteType = 'PLP' | 'CLP' | 'PD';

export interface InternalRoute {
  src: 'INTERNAL';
  screen: InternalRouteType;
  params: {
    id: string;
  };
}

export interface ExternalRoute {
  src: 'EXTERNAL';
  url: string;
}

export type Route = InternalRoute | ExternalRoute;

export interface HighlightCard {
  id: string;
  title: string;
  image: string;
  route: Route;
}

export interface CategoryNode {
  id: string;
  name: string;
  image: string;
  route: Route;
  children?: CategoryNode[];
}

export interface BrandsNode {
  id: string;
  name: string;
  image: string;
  route: Route;
}

export interface HighlightContentResponse {
  highlights: HighlightCard[];
}

export interface CategoryTreeResponse {
  categories: CategoryNode[];
  brands: BrandsNode;
}

export type RootStackParamList = {
  index: undefined;
  'category/[id]': { id: string; name: string };
  products: { screen: InternalRouteType; id: string };
  brands: undefined;
};
