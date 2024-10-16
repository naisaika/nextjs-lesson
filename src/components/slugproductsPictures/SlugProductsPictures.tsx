"use client";

import { useEffect, useState } from 'react';
import styles from "./SlugProductsPictures.module.scss"
import Image from 'next/image'; 

interface productsProps {
    video: string | undefined;
    picture: string[] | undefined;
}

export const SlugProductsPictures = ({video, picture}: productsProps) => {
    const [pictureClasses, setPictureClasses] = useState<string[]>([]);

    useEffect(() => {
        if (picture) { // postが存在し、pictureが配列の場合にのみmapを実行
          const updatedClasses = picture.map(() => ''); // 初期化
          setPictureClasses(updatedClasses);
        }
      }, [picture]);
    
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
    
  return (
    <div className={styles.picCont}>
    {video && (
      <video src={video} controls width={900} height={600} className={styles.video}></video>
    )}
    {Array.isArray(picture) && picture.map((pic, index) => (
      <Image key={index} src={pic} className={`${styles.pic} ${pictureClasses[index]}`}
      onLoad={(e) => handleImageLoad(e, index)}  // 画像ロード時にクラスを設定
        alt={`作品詳細${pic}-${index}`} width={900} height={600} priority />
    ))}
  </div>
  )
}
