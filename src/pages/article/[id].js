import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import { useDocumentDataOnce } from "react-firebase-hooks/firestore"
import renderHTML from "react-render-html"
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import CreateIcon from "@material-ui/icons/Create"
import styled from "styled-components"
import { BottomBar } from "../../components/common"
import { FirebaseContext } from "../../components/Firebase"

const ArticleTemplate = props => {
  const router = useRouter()

  const { user, firebase } = useContext(FirebaseContext)

  const [pageContext = null] = useDocumentDataOnce(
    router.query.id && firebase
      ? firebase.db.collection("articles").doc(router.query.id)
      : null,
    { idField: "id" }
  )

  const ArticleItem = styled.section`
    border-bottom: 1px solid #f4f4f4;
  `

  if (!pageContext) {
    return <p></p>
  }

  return (
    <section>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `4rem 1.5rem 1.45rem`,
        }}
      >
        <ArticleItem>
          <Title>{pageContext.title}</Title>
          <Date>{pageContext.date}</Date>
          <img src={pageContext.thumnail} alt="CoverImage"></img>
          <P
            style={{
              marginBottom: `1.45em`,
            }}
          >
            {renderHTML(pageContext.content)}
          </P>
        </ArticleItem>
        <div
          style={{
            marginTop: `1.45em`,
          }}
        ></div>
        <BottomBar>
          <FacebookShareButton
            url={`https://competent-babbage-50b994.netlify.app/article/${pageContext.articleNum}`}
            size={`2.3rem`}
            style={{
              display: `flex`,
              alignItems: `center`,
              marginRight: `1em`,
              borderRadius: `50%`,
              border: `0`,
              padding: `0`,
            }}
          >
            <FacebookIcon size={`2.3rem`} round style={{}} />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://competent-babbage-50b994.netlify.app/article/${pageContext.articleNum}`}
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <TwitterIcon
              size={`2.3rem`}
              round
              style={{
                marginRight: `1em`,
              }}
            />
          </TwitterShareButton>
          <LineShareButton
            url={`https://competent-babbage-50b994.netlify.app/article/${pageContext.articleNum}`}
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <LineIcon
              size={`2.3rem`}
              round
              style={{
                marginRight: `1em`,
              }}
            />
          </LineShareButton>
        </BottomBar>
      </div>
    </section>
  )
}

const Title = styled.p`
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  color: #222;
  font-size: 24px;
  margin-bottom: 1rem;
`

const Date = styled.p`
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  color: #222;
  font-size: 15px;
`

const P = styled.p`
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  color: #222;
  font-size: 15px;
`

export default ArticleTemplate
