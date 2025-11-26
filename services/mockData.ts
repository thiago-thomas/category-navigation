import { BrandsNode, CategoryNode, HighlightCard } from '@/types';

export const mockHighlights: HighlightCard[] = [
  {
    id: 'h1',
    title: 'Summer Sale',
    image: 'https://picsum.photos/seed/summer/400/300',
    route: {
      src: 'INTERNAL',
      screen: 'PLP',
      params: { id: 'summer-sale' },
    },
  },
  {
    id: 'h2',
    title: 'New Arrivals',
    image: 'https://picsum.photos/seed/newarrivals/400/300',
    route: {
      src: 'INTERNAL',
      screen: 'PLP',
      params: { id: 'new-arrivals' },
    },
  },
  {
    id: 'h3',
    title: 'Best Sellers',
    image: 'https://picsum.photos/seed/bestsellers/400/300',
    route: {
      src: 'INTERNAL',
      screen: 'CLP',
      params: { id: 'best-sellers' },
    },
  },
  {
    id: 'h4',
    title: 'Special Offers',
    image: 'https://picsum.photos/seed/offers/400/300',
    route: {
      src: 'EXTERNAL',
      url: 'https://example.com/offers',
    },
  },
];

export const mockCategories: CategoryNode[] = [
  {
    id: 'c1',
    name: 'Electronics',
    image: 'https://picsum.photos/seed/electronics/200/200',
    route: {
      src: 'INTERNAL',
      screen: 'CLP',
      params: { id: 'electronics' },
    },
    children: [
      {
        id: 'c1-1',
        name: 'Smartphones',
        image: 'https://picsum.photos/seed/smartphones/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'CLP',
          params: { id: 'smartphones' },
        },
        children: [
          {
            id: 'c1-1-1',
            name: 'iPhone',
            image: 'https://picsum.photos/seed/iphone/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'iphone' },
            },
          },
          {
            id: 'c1-1-2',
            name: 'Samsung',
            image: 'https://picsum.photos/seed/samsung/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'samsung' },
            },
          },
          {
            id: 'c1-1-3',
            name: 'Google Pixel',
            image: 'https://picsum.photos/seed/pixel/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'pixel' },
            },
          },
        ],
      },
      {
        id: 'c1-2',
        name: 'Laptops',
        image: 'https://picsum.photos/seed/laptops/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'CLP',
          params: { id: 'laptops' },
        },
        children: [
          {
            id: 'c1-2-1',
            name: 'MacBook',
            image: 'https://picsum.photos/seed/macbook/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'macbook' },
            },
          },
          {
            id: 'c1-2-2',
            name: 'Windows Laptops',
            image: 'https://picsum.photos/seed/windows/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'windows-laptops' },
            },
          },
        ],
      },
      {
        id: 'c1-3',
        name: 'Tablets',
        image: 'https://picsum.photos/seed/tablets/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'PLP',
          params: { id: 'tablets' },
        },
      },
      {
        id: 'c1-4',
        name: 'Accessories',
        image: 'https://picsum.photos/seed/accessories/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'CLP',
          params: { id: 'accessories' },
        },
        children: [
          {
            id: 'c1-4-1',
            name: 'Cases',
            image: 'https://picsum.photos/seed/cases/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'cases' },
            },
          },
          {
            id: 'c1-4-2',
            name: 'Chargers',
            image: 'https://picsum.photos/seed/chargers/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'chargers' },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'c2',
    name: 'Fashion',
    image: 'https://picsum.photos/seed/fashion/200/200',
    route: {
      src: 'INTERNAL',
      screen: 'CLP',
      params: { id: 'fashion' },
    },
    children: [
      {
        id: 'c2-1',
        name: "Men's Clothing",
        image: 'https://picsum.photos/seed/mensclothing/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'CLP',
          params: { id: 'mens-clothing' },
        },
        children: [
          {
            id: 'c2-1-1',
            name: 'Shirts',
            image: 'https://picsum.photos/seed/shirts/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'mens-shirts' },
            },
          },
          {
            id: 'c2-1-2',
            name: 'Pants',
            image: 'https://picsum.photos/seed/pants/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'mens-pants' },
            },
          },
          {
            id: 'c2-1-3',
            name: 'Shoes',
            image: 'https://picsum.photos/seed/mensshoes/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'mens-shoes' },
            },
          },
        ],
      },
      {
        id: 'c2-2',
        name: "Women's Clothing",
        image: 'https://picsum.photos/seed/womensclothing/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'CLP',
          params: { id: 'womens-clothing' },
        },
        children: [
          {
            id: 'c2-2-1',
            name: 'Dresses',
            image: 'https://picsum.photos/seed/dresses/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'dresses' },
            },
          },
          {
            id: 'c2-2-2',
            name: 'Tops',
            image: 'https://picsum.photos/seed/tops/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'womens-tops' },
            },
          },
          {
            id: 'c2-2-3',
            name: 'Shoes',
            image: 'https://picsum.photos/seed/womensshoes/200/200',
            route: {
              src: 'INTERNAL',
              screen: 'PLP',
              params: { id: 'womens-shoes' },
            },
          },
        ],
      },
      {
        id: 'c2-3',
        name: 'Accessories',
        image: 'https://picsum.photos/seed/fashionaccessories/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'PLP',
          params: { id: 'fashion-accessories' },
        },
      },
    ],
  },
  {
    id: 'c3',
    name: 'Home & Garden',
    image: 'https://picsum.photos/seed/homegarden/200/200',
    route: {
      src: 'INTERNAL',
      screen: 'CLP',
      params: { id: 'home-garden' },
    },
    children: [
      {
        id: 'c3-1',
        name: 'Furniture',
        image: 'https://picsum.photos/seed/furniture/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'PLP',
          params: { id: 'furniture' },
        },
      },
      {
        id: 'c3-2',
        name: 'Decor',
        image: 'https://picsum.photos/seed/decor/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'PLP',
          params: { id: 'decor' },
        },
      },
      {
        id: 'c3-3',
        name: 'Garden Tools',
        image: 'https://picsum.photos/seed/gardentools/200/200',
        route: {
          src: 'INTERNAL',
          screen: 'PLP',
          params: { id: 'garden-tools' },
        },
      },
    ],
  },
];

export const mockBrands: BrandsNode = {
  id: 'brands',
  name: 'Shop by Brand',
  image: 'https://picsum.photos/seed/brands/200/200',
  route: {
    src: 'INTERNAL',
    screen: 'CLP',
    params: { id: 'brands' },
  },
};
