import axios from "axios";

import { baseUrl } from "../config";
import { ApplyJop, IFormContuctInput } from "./types/types";

const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});




export const getSettingAPI = () => api.get("setting");
export const getCategoriesQueryAPI = (id:string|undefined) => api.get(`categories/${id}`);
export const getSubCategoriesQueryAPI = (id:string|undefined) => api.get(`sub_categories/${id}`);
export const getProductsQueryAPI = (id:string|undefined) => api.get(`products/${id}`);
export const getProductAPI = (id:string|undefined) => api.get(`product/${id}`);


export const getBlogAPI = (id:string|undefined) => api.get(`blog/${id}`);

export const getProjectsAPI = () => api.get(`projects`);
export const getMarketsAPI = () => api.get(`markets`);

export const getHomeAPI = () => api.get("home");
export const getPageAPI = (id:string|undefined) => api.get(`page/${id}`);
export const getBlogsAPI = (currentPage: number) =>
  api.get(`/blogs?page=${currentPage}`);

export const getCareersAPI = (currentPage: number) =>
  api.get(`/careers?page=${currentPage}`);

export const contactUsAPI = (contuctForm: IFormContuctInput) =>
  api.post("/contact_us", contuctForm);










export const getAboutAPI = () => api.get("about-us");








export const getTermsAPI = () => api.get("terms");
export const getCareerAPI = (id:string|undefined) => api.get(`career/${id}`);

export const getFQsAPI = () => api.get("questions");









export const CategoryCoursesAPI = (id: string) =>
  api.post("courses/filter/bycaregory", { category_id: id });

export const ArticleCategoryAPI = ({ name }: { name: string | undefined }) =>
  api.get(`search`, {
    params: {
      name: name,
    },
  });

export const ArticlesByIdAPI = (id: string | undefined) =>
  api.get(`category-articles?category_id=${id}`);



export const PackagesAPIPagination = (currentPage: number) =>
  api.get(`package-paginate?page=${currentPage}`);

export const SearchInstructorAPI = (name: string) =>
  api.post("serach-instructor", { name: name });
export const instructorsAPI = () => api.get("instructors");

export const SinglePackageAPI = (id: string) =>
  api.post("packageById", { package_id: id });

export const CourseDetailsAPI = (id: string) =>
  api.post("/courseById", { course_id: id });

// export const contactUsAPI = (contuctForm: IFormContuctInput) =>
//   api.post("/contact-us", contuctForm);

export const allBooksAPI = (currentPage: number) =>
  api.get(`book-paginate?page=${currentPage}`);


export const ApplyJopAPI = (data: ApplyJop) =>
  api.post("career", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });