import { useMutation } from "@tanstack/react-query";
import { ApplyJop, IFormContuctInput } from "../utils/types/types";
import { ApplyJopAPI, contactUsAPI } from "../utils/api";
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

  export const useJopApplicationMutation = () => {
    return useMutation({
      mutationFn: (data: ApplyJop) => {
        console.log(data);
        return ApplyJopAPI(data);
      },
      onError: (err: AxiosError<CustomError>) => {
        return err;
      },
    });
  };