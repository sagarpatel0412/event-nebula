import React, { useEffect, useMemo } from "react";
import ProfileComponent from "../containers/profile/Profile.component";
import useClientQuery from "../graphql/useClientQuery";
import { IS_AUTHORIZED } from "../queries/login-query";
import { PROFILE_DETAILS } from "../queries/start-page-query";
import LoaderComponent from "../components/loader/Loader.component";
import Head from "next/head";
import {
  CREATE_USER_POST,
  GET_USER_POSTS,
  UPDATE_PROFILE,
} from "../queries/profile-query";
import { useMutation } from "@apollo/client";

function Profile(props: any) {
  const profileDetails = useClientQuery(PROFILE_DETAILS);
  const { loading, data } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  const getUserPosts = useClientQuery(GET_USER_POSTS);

  const [updateProfile, updateProfileStatus] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: PROFILE_DETAILS }, { query: IS_AUTHORIZED }],
  });

  const [createUserPost, createUserPostStatus] = useMutation(CREATE_USER_POST, {
    refetchQueries: [{ query: GET_USER_POSTS }],
  });

  const profileDetail = useMemo(() => {
    if (typeof profileDetails.data !== "undefined") {
      return profileDetails.data.profileDetails;
    }
  }, [profileDetails]);

  const isAuthorizedUser = useMemo(() => {
    if (typeof data !== "undefined") {
      return data?.isAuthorizedUser;
    }
  }, [data]);

  const getUserPostsData = useMemo(() => {
    if (typeof getUserPosts !== "undefined") {
      return getUserPosts.data?.getUserPosts;
    }
  }, [getUserPosts]);

  return (
    <div>
      <Head>
        <title>{profileDetail?.firstname?.toUpperCase()} | Nebula Events</title>
      </Head>
      {typeof profileDetail !== "undefined" ? (
        <ProfileComponent
          profileDetail={profileDetail}
          isAuthorizedUser={isAuthorizedUser}
          getUserPostsData={getUserPostsData}
          updateProfile={updateProfile}
          updateProfileStatus={updateProfileStatus}
          createUserPost={createUserPost}
          createUserPostStatus={createUserPostStatus}
        />
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default Profile;
