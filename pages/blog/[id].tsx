import React, { useMemo, useState } from "react";
import BlogDetailsComponent from "../../containers/blog-details/Blog-details.component";
import { useRouter } from "next/router";
import useClientQuery from "../../graphql/useClientQuery";
import { GET_POST } from "../../queries/blog-details-query";
import LoaderComponent from "../../components/loader/Loader.component";
import Head from "next/head";

function Blogdetails() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = router.query as any;

  const getPost = useClientQuery(GET_POST, {
    variables: { id: typeof id !== "undefined" ? id : "" },
    onError: (error) => {
      setErrorMsg(error.message);
    },
    onCompleted: (res) => {
      if (Object.keys(res).length > 0) {
        setErrorMsg("");
      }
    },
  });

  const getPostData = useMemo(() => {
    if (typeof getPost !== "undefined") {
      return getPost.data?.getPost;
    }
  }, [getPost]);

  console.log("getPostData", getPostData, errorMsg);
  return (
    <div>
      <Head>
        <title>{getPostData?.title} | Nebula Events</title>
      </Head>
      {typeof getPostData !== "undefined" ? (
        <BlogDetailsComponent getPostData={getPostData} id={id} />
      ) : errorMsg.length > 0 ? (
        errorMsg
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default Blogdetails;
