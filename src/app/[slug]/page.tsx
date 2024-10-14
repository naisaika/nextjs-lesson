"use client";

import { useEffect, useState } from 'react';
import { getAllData } from '@/api/apiData';
import Image from 'next/image';
import { WORK_DETAIL_TEXT } from '@/components/workDetailText/WorkDetailText';
import styles from "./Slug.module.scss";
import { DataType } from '@/api/dataType';

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
  const [pictureClasses, setPictureClasses] = useState<string[]>([]);

  useEffect(() => {
    if (post?.picture) { // postが存在し、pictureが配列の場合にのみmapを実行
      const updatedClasses = post.picture.map(() => ''); // 初期化
      setPictureClasses(updatedClasses);
    }
  }, [post]);

  // 画像のロード時にサイズをチェックする関数
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    const img = event.currentTarget;
    const isPortrait = img.naturalHeight > img.naturalWidth;
    
    // 画像の向きをチェックしてクラスを設定
    setPictureClasses((prevClasses) => {
      const updatedClasses = [...prevClasses];
      updatedClasses[index] = isPortrait ? styles.height : styles.width; // 縦が長い場合は.height、横が長い場合は.widthを追加
      return updatedClasses;
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

  const detailText = workDetailTextArray.find((detail) => detail.id === post.id);

  return (
    <div>
      <div className={styles.titleCont}>
        <h2 className={styles.title}>{post.title}</h2>
        <button type="button" className={styles.detailBtn}>DETAIL</button>
      </div>
      <div className={styles.picCont}>
        {post.video && (
          <video src={post.video} controls width={900} height={600} className={styles.video}></video>
        )}
        {Array.isArray(post.picture) && post.picture.map((pic, index) => (
          <Image key={index} src={pic} className={`${styles.pic} ${pictureClasses[index]}`} // クラスを追加
          onLoad={(e) => handleImageLoad(e, index)}  // 画像ロード時にクラスを設定
            alt={`作品詳細${pic}-${index}`} width={900} height={600} priority />
        ))}
      </div>
      <div>
        <div>
          <h3>{post.title}</h3>
          <p>{post.subTitle}</p>
          <span></span>
          <p>Category: {post.category}</p>
          <p>Architect: 
            {Array.isArray(post.architect) && 
              post.architect.map((text, index) => (
                <span key={index}>
                  <span>{text}</span>
                  {index < post.architect.length - 1 && " "}
                </span>
              ))}
          </p>
          <p>Date: {post.date}</p>
          <p>Location: {post.location}</p>
          <p>Web: {post.web}</p>
          <p>Photographer: {post.photographer}</p>
        </div>
        {detailText && <div>{detailText.text}</div>}
      </div>
    </div>
  );
};

export default WorkDetailPage;