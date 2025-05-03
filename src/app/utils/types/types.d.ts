export interface IFormContuctInput {
  name: string;
  email: string;
  phone: string;
  company_name:string;
  product_type:string
  subject: string;
  file:File;
  message: string;
}

export interface IFormnewsletterInput {

  email: string;
}
export type langInitialState={
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
}


export type ApplyJop = {
  file: File;
  email: string;
  name: string;
  phone?: string;
  current_location?: string;
  current_company?: string;
  linked_in?: string;
  git_hub?: string;
  portfolio?: string;
  other_website?: string;
  why_interested?: string;
  addition_information?: string;
  career_id: number | undefined;
};
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
  address:string,
  linkedin: string,
  description: string,
  footer_logo: string,

}
export type title= {
  id: number,
  title: string,
  slug:string,
}
export type page= {
  id: number,
  title: string,
  slug:string,
  link_type:string,
  link_follow:string
}
export type name= {
  id: number,
  name: string,
}
export type settingType = {
loading:boolean,
setting: setting|null,
header_pages: page[],
footer_pages: page[],
footer_products:name[],
footer_markets:name[],
footer_careers: title[],
footer_projects:title[],
main_categories:name[],
footer_blogs:{
  id: number,
  image: string,
  created_at: string,
  title: string,
  card_description:string
}[]
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
  news: Blog[] | null;
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
export type blog_category = {
  id:number;
  name: string;
};
export type Blog = {
  id:number;
  description: string;
  title: string;
  image: string;
  card_description:string,
  updated_at: string;
  blog_category:blog_category;
};
export type BLogType = {
  Blogs: Blog[] | null;
  currentPage: number;
  last_page: number;
};

export type Career = {
  title: string;
  description: string;
  short_description: string;
  address: string;
  image: string;
  type: string;
  place: string;
  id:number;
};
export type CareerType = {
  Careers: Career[] | null;
  currentPage: number;
  last_page: number;
};

export type sub_category = {
  id: number;
  image:string;
  name:string;
  description: string;
  features: string;
  products:productCardType[]|undefined;
  category:category|undefined;
};

export type category = {
  sub_categories: sub_category[] ;
  name: string;
  description:string;
  image:string;
  id:number;
  main_category:name|undefined
};

export type categoryType = {
  categories: category[];

};

export type files={
  id:number;
  file: string;
  name: string;
}
export type productType = {
  id: number|null;
  image: string|null;
  name: string|null;
  description: string|null;
  product_application_images:{image:string}[];
  product_images:{image:string}[];
  effects:{
    name: string,
    image: string,
    image_effect: string,
  }[],
  product_files:files[]
  sub_category:sub_category|undefined,
};

export type project = {
  image: string,
  video: string,
  title: string,
  description: string,

};

export type Market = {
id:number,
image: string,
name: string,
card_description:string,
description: string,
products:productCardType[],
};

export type MarketType = {
  allMarket: Market[],
  selected_market: Market|null,
};

export type aboutSection={
    id:number,
    image: string,
    title: string,
    description: string,
}
export type aboutType=aboutSection[]
