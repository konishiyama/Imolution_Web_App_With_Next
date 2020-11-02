import React, { useContext } from "react"
import styled from "styled-components"
import Link from "next/link"
import TopCover from "../components/TopCover"
import Declaration from "../components/Declaration"
import Activity from "../components/Activity"
import Products from "../components/Products"
import Contact from "../components/Contact"
import {
  IndexArticles,
  IndexMemberPosts,
  SubTitle,
  SeeMore,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import Fade from "react-reveal/Fade"

const IndexPage = ({ data }) => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <TopCover></TopCover>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `0rem 1.5rem 0rem`,
          }}
        >
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>活動内容</span>
            </SubTitle>
          </Fade>
          <Activity></Activity>
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>商品について</span>
            </SubTitle>
          </Fade>
          <Products></Products>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.5rem 0`,
          }}
        >
          <div
            style={{
              margin: `2.5rem auto 0 `,
              textAlign: `center`,
            }}
          >
            <Fade bottom duration={1500}>
              <Link href="/products">
                <SeeMore>商品一覧</SeeMore>
              </Link>
            </Fade>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 480,
            padding: `0rem 0.8rem 0`,
          }}
        >
          {!!user && (
            <div>
              <Fade bottom duration={1500}>
                <SubTitle>
                  <span>コミュニティー</span>
                </SubTitle>
              </Fade>
              <Fade duration={2500}>
                {!!firebase && <IndexMemberPosts firebase={firebase} />}
              </Fade>
              <div
                style={{
                  margin: `2.5rem auto 0 `,
                  textAlign: `center`,
                }}
              >
                <Fade bottom duration={1500}>
                  <Link href="/member">
                    <SeeMore>投稿一覧</SeeMore>
                  </Link>
                </Fade>
              </div>
            </div>
          )}
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>ブログ</span>
          </SubTitle>
        </Fade>
        <Fade duration={1500}>
          {!!firebase && <IndexArticles firebase={firebase} />}
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.5rem 0`,
          }}
        >
          <div
            style={{
              margin: `2.5rem auto 0 `,
              textAlign: `center`,
            }}
          >
            <Fade bottom duration={1500}>
              <Link href="/blog">
                <SeeMore>ブログ一覧</SeeMore>
              </Link>
            </Fade>
          </div>
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>お問合せ</span>
          </SubTitle>
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 480,
            padding: `0rem 0.8rem 2.45rem`,
          }}
        >
          <Contact></Contact>
        </div>
      </section>
    </>
  )
}

export default IndexPage
