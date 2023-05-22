import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.scss"
import p1 from "./images/1.png"
import p2 from "./images/2.png"
import p3 from "./images/3.png"
import m1 from "./images/1-m.png"
import m2 from "./images/2-m.png"
import m3 from "./images/3-m.png"
import pm4 from "./images/4.png"
import { useHeaderContext, useI18nContext } from "@/states";
import { useI18n, useInView, useWindowSize ,useResponsive} from "@/hooks";

export const Content=()=>{
    const t = useI18n("joinus");
    const {lang}=useI18nContext()
    console.log(lang);
    
    const { md } = useResponsive();
    // 第三部分ul遍历
    const lists=['Perfect promotion mechanism','Meal supplement (in some areas)','Holiday benefits','Six insurance and one gold fund']
    const lists2=['完善的晋升机制','膳食补充剂（在某些地区）','假期福利','六险一金']
    const showLists=()=>{
        if(lang==='en'){
             return(
            <ul className={classNames('md:mb-[12px]',styles.sub_ul)} >
              {lists.map((item,index)=>(
                <li key={index} className={classNames('leading-[26px] md:leading-[31px]',styles.sub_li)}>
                    <Image src={pm4} alt="" className={classNames('md:leading-[11px] lending-[22px]',styles.sub_li_img)}></Image>
                    {item}
                </li>
              ))}
            </ul>
            )
        }else{
            return(
                <ul className={classNames(' md:mb-[12px]',styles.sub_ul)} >
                  {lists2.map((item,index)=>(
                    <li key={index} className={classNames('leading-[26px] md:leading-[31px]',styles.sub_li)}>
                        <Image src={pm4} alt="" className={classNames('md:leading-[11px] lending-[22px]',styles.sub_li_img)}></Image>
                        {item}
                    </li>
                  ))}
                </ul>
                )
        }
    }
   
    return(
        <section className={classNames('ebuy-container !flex flex-col')}>
            {/* 上 */}
            <div  className={classNames('flex-col-reverse md:mb-[72px] mb-[72px] rounded-8 bg-blur-6',styles.sub_container,md?styles.shadow_custom:'',md?styles.opcity:'')}>
                <div className={classNames('md:rounded-8 md:bg-blur-6 md:z-20',!md?styles.shadow_custom:'',styles.sub_context,styles.opcity)}>
                    <div className={
                        classNames('font-inter leading-[11px] md:ml-[24px] ml-[32px]',styles.sub_title)
                        }>{t("content-title1")}
                    </div>
                    <div className={
                        classNames('md:mr-[31px] md:mb-[43px] ml-[32px] mb-[63px] mr-[38px] leading-[44px] md:leading-[30px]',styles.sub_text)
                        }>{t("content1")}
                    </div>
                </div>
                <Image src={!md?p1:m1} alt="" className={
                    classNames('md:-ml-[40px] md:shrink-0 w-full  md:!mb-[unset] ',styles.img)}>
                </Image>
            </div>
            {/* 中 */}
            <div  className={classNames('flex-col rounded-8 bg-blur-6',styles.sub_container,md?styles.shadow_custom:'',md?styles.opcity:'')}>
                <Image src={!md?p2:m2} alt="" className={classNames('w-full',styles.img)}></Image>
                <div className={classNames('md:rounded-8 md:bg-blur-6 md:z-20 md:-ml-[40px]',!md?styles.shadow_custom:'',styles.sub_context,styles.opcity)}>
                    <div className={
                        classNames('font-inter leading-[11px] md:ml-[25px] mr-[39px] ml-[32px]',styles.sub_title)
                        }>{t("content-title2")}
                    </div>
                    <div className={
                        classNames('md:mr-[31px] md:mb-[43px] ml-[32px] mr-[52px] mb-[63px] leading-[44px] md:leading-[30px]' ,styles.sub_text)
                        }>{t("content2")}
                    </div>
                </div>   
            </div>
            {/* 下 */}
            <div  className={classNames('flex-col-reverse rounded-8 bg-blur-6 mt-[72px]',styles.sub_container,md?styles.shadow_custom:'',md?styles.opcity:'')}>
                <div className={classNames('md:rounded-8 md:bg-blur-6 md:z-20 md:shrink-0 ',!md?styles.shadow_custom:'',styles.sub_context,styles.opcity)}>
                    <div className={
                        classNames('font-inter leading-[11px] md:ml-[24px] ml-[33px] ',styles.sub_title)
                        }>{t("content-title3")}
                    </div>
                    <div className={
                        classNames('md:mr-[24px]  ml-[33px] mr-[101px] mb-[36px] md:mb-[12px] leading-[44px] md:leading-[30px]',styles.sub_text)
                        }>{t("content3")}
                    </div>
                    { showLists()}
                </div>
                <Image src={!md?p3:m3} alt="" className={
                    classNames('md:-ml-[40px] md:shrink-0 w-full ',styles.img)
                    }>
                </Image>
            </div>
        </section>
    )
}