import React from "react"
const ClientSideOnlyLazy = React.lazy(() =>
  import("./video-client")
)
const Video = ({video}) => {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy video={video}/>
        </React.Suspense>
      )}
    </>
  )
}

export default Video;