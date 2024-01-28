import {ZodIssue} from "zod";

type FormattedError = {
  message: string;
  path: string;
}

export function formatIssue(issue: ZodIssue): FormattedError {
  return {
    message: issue.message,
    path: issue.path.join("."),
  }
}