import React, { useEffect, useMemo, useState } from "react";
import BlogComponent from "../../containers/blog/Blog.component";
import Head from "next/head";
import useClientQuery from "../../graphql/useClientQuery";
import { GET_POSTS } from "../../queries/blog-query";
import LoaderComponent from "../../components/loader/Loader.component";

function Blog(props: any) {
  const getPosts = useClientQuery(GET_POSTS);
  const getPostsData = useMemo(() => {
    if (typeof getPosts !== "undefined") {
      return getPosts.data?.getPosts;
    }
  }, [getPosts]);
  console.log("getPostsData", getPostsData);

  return (
    <div>
      <Head>
        <title>Blogs | Nebula Events</title>
      </Head>
      <div>
        {typeof getPostsData !== "undefined" ? (
          <BlogComponent getPostsData={getPostsData} search={props.search} />
        ) : (
          <LoaderComponent />
        )}
      </div>
    </div>
  );
}

export default Blog;
