import React, { useContext } from "react"
import { BlogPageArticles, PageCover } from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const Blog = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <PageCover>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
            alt="coverImg"
          ></img>
          <p>
            <span>BLOG</span>
          </p>
        </PageCover>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
          }}
        >
          {!!firebase && <BlogPageArticles firebase={firebase} />}
        </div>
      </section>
    </>
  )
}

export default Blog
