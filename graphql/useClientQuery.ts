import { QueryHookOptions, useQuery } from "@apollo/client";
import { OperationVariables } from "@apollo/client";
import { DocumentNode } from "graphql";

export default function useClientQuery<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
>(query: DocumentNode, options?: QueryHookOptions<TData, TVariables>) {
  // omit useQuery call on server side
  if (typeof window === "undefined") {
    return {} as any;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<TData, TVariables>(query, options);
}
