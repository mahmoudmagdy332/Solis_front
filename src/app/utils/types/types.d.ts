export interface IFormContuctInput {
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  order_number: string;
  subject: string;
  message: string;
}
export interface IFormAddCommentInput {
  name: string;
  email: string;
  Website: string;
  message: string;
}

export type setting= {
  id: number,
  logo: string,
  facebook: string,
  twitter: string,
  instagram: string,
  youtube:string,
  email: string,
  mobile: string,
  linkedin: string,
  description: string,
  footer_logo: string,

}
export type title= {
  id: number,
  title: string,
  slug:string,
}
export type name= {
  id: number,
  name: string,
}
export type settingType = {
loading:boolean,
setting: setting|null,
header_pages: title[],
footer_pages: title[],
footer_products:name[],
footer_markets:name[],
footer_careers: title[],
footer_projects:title[],
main_categories:name[]
};
export interface New {
  image:string,
  title:string,
  description:string,
  updated_at:string
};
export interface Market {
  id:number;
  image:string,
  name:string,
  description:string,
};
export interface Product {
  image:string,
  name:string,
  description:string,
};
export interface Brand {
  image:string,
};
export type homeType = {
  news: New[] | null;
  markets: Market[] | null;
  products: productCardType[] | null;
  brands: Brand[] | null;

};

export type productCardType={
  id:number,
  name: string,
  small_description: string,
  image: string,
  effects:{
    image_effect: string,
  }[]
}
export type Blog = {
  description: string;
  title: string;
  image: string;
  short_description: string;
  updated_at: string;
};
export type BLogType = {
  Blogs: Blog[] | null;
  currentPage: number;
  last_page: number;
};