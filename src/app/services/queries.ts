/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getBlogsAPI, getHomeAPI, getPageAPI, getSettingAPI } from "../utils/api";
// import {
//   allBooksAPI,
//   coursesAPI,
//   getAboutAPI,
//   getCareersAPI,
//   getFQsAPI,
//   getCategoriesQueryAPI,
//   getHomeAPI,
//   getSettingAPI,
//   getTermsAPI,
//   instructorsAPI,
//   instructorsAPIPagination,
//   PackagesAPIPagination,
//   getIntroAPI,
//   ArticleCategoryAPI,
//   ArticlesByIdAPI,
//   getTestimonialsAPI,
//   getPrivaciesAPI,
//   getPackagesAPI,
//   courseIdAPI,
//   getCareerAPI,
//   getCountriesAPI,
// } from "../utils/api";
// import {
//   getLogoutAPI,
//   getMyLearningAPI,
//   getStartLessonAPI,
//   getStudentProfileAPI,
//   getsurveyAPI,
//   myLearningIdAPI,
//   SubscribePackageAPI,
// } from "../utils/apiAuth";
// import { CoursesParams } from "../utils/types/types";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../store";
// import { changeLoading } from "../slices/settingSlice";
// import { removeUser } from "../slices/UserSlice";

export function settingQuery() {
  return useQuery({
    queryKey: ["setting"],
    queryFn: async () => await getSettingAPI(),
    refetchOnMount: false,
    retry: 1,
  });
}

// export function AboutUsQuery() {
//   return useQuery({
//     queryKey: ["About"],
//     queryFn: async () => await getAboutAPI(),
//   });
// }
// export function TermsQuery() {
//   return useQuery({
//     queryKey: ["Terms"],
//     queryFn: async () => await getTermsAPI(),
//   });
// }
// export function careerQuery(id:string|undefined) {
//   return useQuery({
//     queryKey: ["Terms"],
//     queryFn: async () => await getCareerAPI(id),
//   });
// }

// export function surveyQuery() {
//   return useQuery({
//     queryKey: ["survey"],
//     queryFn: async () => await getsurveyAPI(),
//   });
// }
// export function IntroQuery() {
//   return useQuery({
//     queryKey: ["FQs"],
//     queryFn: async () => await getIntroAPI(),
//   });
// }
// export function FQsQuery() {
//   return useQuery({
//     queryKey: ["FQs"],
//     queryFn: async () => await getFQsAPI(),
//   });
// }
// export function CareerQuery() {
//   return useQuery({
//     queryKey: ["career"],
//     queryFn: async () => await getCareersAPI(),
//   });
// }

// export function categoriesQuery() {
//   return useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => await getCategoriesQueryAPI(),
//     refetchOnMount: false,
//     retry: 1,
//   });
// }



export function homeQuery() {
  return useQuery({
    queryKey: ["home"],
    queryFn: async () => await getHomeAPI(),
    refetchOnMount: false,
  });
}
export function pageQuery(id:string|undefined) {
  return useQuery({
    queryKey: ["page"],
    queryFn: async () => await getPageAPI(id),
  });
}
export function BlogsQuery(currentPage: number) {
  return useQuery({
    queryKey: ["blogs", currentPage],
    queryFn: async () => await getBlogsAPI(currentPage),
    refetchOnMount: false,
  });
}







// export function packagesQuery() {
//   return useQuery({
//     queryKey: ["packages"],
//     queryFn: async () => await getPackagesAPI(),
//   });
// }
// export function SubscribePackageQuery(id: number | undefined) {
//   return useQuery({
//     queryKey: ["packages-subscription", id],
//     queryFn: async () => await SubscribePackageAPI(id),
//     enabled: false,
//   });
// }
// export function AllInstructorQuery() {
//   return useQuery({
//     queryKey: ["AllInstructor"],
//     queryFn: async () => await instructorsAPI(),
//   });
// }

// export function UseBooksQuery() {
//   return useQuery({
//     queryKey: ["BooksPagenation"],
//     queryFn: async () => await allBooksAPI(1),
//   });
// }

// export function CourseIdQuery(id: string | undefined) {
//   return useQuery({
//     queryKey: ["CourseId"],
//     queryFn: async () => await courseIdAPI(id),
   
//   });
// }
// export function MyLearningIdQuery(id: string | undefined) {
//   return useQuery({
//     queryKey: ["MyLearningId",id],
//     queryFn: async () => await myLearningIdAPI(id),
 

//   });
// }

// export function getCountriesQuery() {
//   return useQuery({
//     queryKey: ["MyLearningId"],
//     queryFn: async () => await getCountriesAPI(),
 

//   });
// }
