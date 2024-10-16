"use client";

import { useEffect, useState } from 'react';
import { getAllData } from '@/api/apiData';
import { WORK_DETAIL_TEXT } from '@/components/workDetailText/WorkDetailText';
import styles from "./Slug.module.scss";
import { DataType } from '@/api/dataType';
import { SlugProductsPictures } from '@/components/slugproductsPictures/SlugProductsPictures';
import { Events, Element, scroller } from 'react-scroll';

interface Params {
  params: {
    slug: string;
  };
}

// メタデータ生成関数（クライアントサイドではデータ取得が難しいため）
// export async function generateMetadata({ params }: Params) {
//   const data = await getAllData();

//   const decodedSlug = decodeURIComponent(params.slug);
//   const post = data.find((post) => post.url === decodedSlug);

//   if (!post) {
//     return { notFound: true };
//   }

//   return {
//     title: post.title,  // メタデータにタイトルを設定
//   };
// }

// 動的なページコンポーネント
const WorkDetailPage = ({ params }: Params) => {
  const [post, setPost] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const workDetailTextArray = WORK_DETAIL_TEXT();
  const [, setIsScrolling] = useState(false);

  useEffect(() => {

    const handleScrollStart = () => {
      setIsScrolling(true);
      document.body.classList.add(styles.loading);
    };

    const handleScrollEnd = () => {
      setIsScrolling(false);
      document.body.classList.remove(styles.loading);
    };

    Events.scrollEvent.register("begin", handleScrollStart);
    Events.scrollEvent.register("end", handleScrollEnd);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleAnimateScroll = (target: string) => {
    scroller.scrollTo(target, {
      duration: 3000,
      delay: 200, 
      smooth: 'easeInOutQuint',
      offset: -100,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllData();

      const decodedSlug = decodeURIComponent(params.slug);
      const foundPost = data.find((post) => post.url === decodedSlug) || null;
      setPost(foundPost);
      setLoading(false);
    };

    fetchData();
  }, [params.slug]); // slugが変更された場合にデータを再取得

  if (loading) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  if (!post) {
    return <div>Post not found</div>;  // 404ページを表示
  }

  const detailText = workDetailTextArray.find((detail) => String(detail.id) === String(post.id));

  return (
    <div>
      <div className={styles.titleCont}>
        <h2 className={styles.title}>
          {Array.isArray(post.title)? post.title.map((title, index) => (
            <span key={index}>{title}</span>
          )): post.title}</h2>
        <div onClick={() => handleAnimateScroll('detailText')}>
          <button type="button" className={styles.detailBtn}>DETAIL</button>
        </div>
      </div>
      <SlugProductsPictures video={post.video} picture={post.picture} />
      <Element name="detailText">
        <div className={styles.textSection}>
          <div className={styles.textCont}>
            <h3 className={styles.textTitle}>
              {Array.isArray(post.title)? post.title.map((title, index) => (
                <span key={index}>{title}</span>
              )): post.title}
            </h3>
            <p className={styles.textSubTitle}>
              {Array.isArray(post.subTitle)? post.subTitle.map((title, index) => (
                <span key={index}>{title}</span>
              )): post.subTitle}</p>
            <span className={styles.line}></span>
            <p className={styles.nomalText}>Category:&nbsp;{post.category}</p>
            <p className={styles.nomalText}>Architect:&nbsp;
              {Array.isArray(post.architect)? 
                post.architect.map((text, index) => (
                  <span key={index}>
                    <span>{text}</span>
                    {index < post.architect.length - 1 && " "}
                  </span>
                )): post.architect}
            </p>
            <p className={styles.nomalText}>Date: {post.date}</p>
            <p className={styles.nomalText}>Location: {post.location}</p>
            <p className={styles.webText}>
              <span>Web:&nbsp;</span> 
              <span className={styles.web}>{post.web}</span>
            </p>
            <p className={styles.nomalText}>Photographer:&nbsp;{post.photographer}</p>
          </div>
          {detailText && <div className={styles.textDetail}>{detailText.text}</div>}
        </div>
      </Element>
    </div>
  );
};

export default WorkDetailPage;