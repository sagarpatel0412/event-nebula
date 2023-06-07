import React, { useEffect, useState } from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import { BlogComponentPropsInterface } from "../../interface/blog-interface";
import CardComponent from "../../components/card/Card.component";
import { debounce } from "lodash";

function BlogComponent(props: BlogComponentPropsInterface) {
  const [postData, setPostData] = useState<Array<any>>(props.getPostsData);
  const [loading, setLoading] = useState<boolean>(true);

  const debouncedSearch = debounce((criteria) => {
    setLoading(false);
    setPostData(criteria);
  }, 5000);

  useEffect(() => {
    if (props.search.length > 0) {
      const searchData = props.getPostsData.filter((i: any) => {
        return i.title === props.search;
      });
      setLoading(true);
      debouncedSearch(searchData);
    } else {
      setLoading(false);
      setPostData(props.getPostsData);
    }
  }, [props]);

  return (
    <CommonModuleComponent>
      <div className="min-h-screen">
        {loading === false ? (
          <div className="flex gap-2 mt-2 mx-2 grid grid-cols-4 m-3">
            {typeof props.getPostsData !== "undefined" &&
              postData.map((i: any) => {
                return <CardComponent cardData={i} key={i.id} />;
              })}
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-3xl font-bold">Loading...</h1>
          </div>
        )}
      </div>
    </CommonModuleComponent>
  );
}

export default BlogComponent;
