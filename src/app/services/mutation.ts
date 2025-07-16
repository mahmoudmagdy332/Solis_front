import { useMutation } from "@tanstack/react-query";
import {
  ApplyJop,
  IFormContuctInput,
  IFormnewsletterInput,
} from "../utils/types/types";
import { ApplyJopAPI, contactUsAPI, newsletterAPI } from "../utils/api";
import { AxiosError } from "axios";

export interface CustomError {
  message: string;
  status?: number;
}
export const useContuctMutation = () => {
  return useMutation({
    mutationFn: (data: IFormContuctInput) => {
      return contactUsAPI(data);
    },
  });
};

export const useNewsletterMutation = () => {
  return useMutation({
    mutationFn: (data: IFormnewsletterInput) => {
      return newsletterAPI(data);
    },
  });
};

export const useJopApplicationMutation = () => {
  return useMutation({
    mutationFn: (data: ApplyJop) => {
      return ApplyJopAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};
