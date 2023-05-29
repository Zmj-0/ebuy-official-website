import classNames from "classnames";
import styles from "./styles.module.scss"
import phone_m from './images/phone1-m.png'
import phone from './images/phone1.png'
import Image from "next/image";
import app_1 from "./images/app-1-m.png"
import ecode from "./images/ecode-m.png"
import { useI18n, useInView, useWindowSize ,useResponsive} from "@/hooks";
// import { useRouter } from "next/router";
import { useEffect, useState,useRef } from "react";

export const Banner = () => {
  const t=useI18n('download')
  const imgElement=useRef(null)
  console.log(imgElement);
  
  // 切换手机大图
  const { md } = useResponsive();

   //点击跳转苹果商城下载
   useEffect(() => {
    const downloadApp = (element: any) => {
        const handleClick = () => {
          console.log(1);
          
            window.location.href ="https://apps.apple.com/cn/app/ebuy%E6%98%93%E8%B4%AD%E7%94%9F%E9%B2%9C/id1072583697?l=en";
        };
        element.addEventListener("click", handleClick);
        return () => element.removeEventListener("click", handleClick);
    };
    if (md) {
        const cleanup = downloadApp(imgElement.current);
        return () => {
            cleanup();
        };
    }
   }, [md]);

  return (
    <section className={classNames('w-full',styles.banner)}>
      <div className={classNames('!flex',styles.content,styles.ebuy_container)}>
        {/* 手机大图 */}
        <div className={classNames(styles.phone_content)}>
          <Image src={!md ? phone : phone_m} alt="" className={classNames(styles.phone)}></Image>
        </div>

        {/* 文字内容区域 */}
        <div className={classNames(styles.text_content)}>
          <div className={classNames('leading-[69px] md:w-[100%] ',styles.title)}>{t('title')}</div>
          <ul className={classNames(styles.sub_ul)}>
            <li>{t('subtitle1')} </li>
            <li>{t('subtitle2')} </li>
            <li>{t('subtitle3')} </li>
          </ul>

          {/* 图片 下载方式 */}
          <div className={classNames(styles.ecode_content)}>
            <Image ref={imgElement} src={app_1} alt="" className={classNames('w-[214px] h-[65px]')}></Image>
            <Image src={ecode} alt=""  className={classNames('w-[120px] ml-[54px]')}></Image>
          </div>
          
          {/* 底部文字 */}
          <div  className={classNames(styles.footer_text)}>{t('footertitle')} </div>
        </div>
      </div>
    </section>
  )
};


 
