import axios from "axios";

import { baseUrl } from "../config";

const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});




export const getSettingAPI = () => api.get("setting");
export const getCategoriesQueryAPI = () => api.get("categories");

export const getHomeAPI = () => api.get("home");
export const getPageAPI = (id:string|undefined) => api.get(`page/${id}`);
export const getBlogsAPI = (currentPage: number) =>
  api.get(`/blogs?page=${currentPage}`);










export const getAboutAPI = () => api.get("about-us");








export const getTermsAPI = () => api.get("terms");
export const getCareerAPI = (id:string|undefined) => api.get(`career/${id}`);

export const getFQsAPI = () => api.get("questions");



export const getCareersAPI = () => api.get("careers");






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
