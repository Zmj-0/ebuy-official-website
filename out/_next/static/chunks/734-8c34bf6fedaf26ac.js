(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{9930:function(e,t,s){"use strict";var l=s(7294),i=s(990),n=s(6546),r=s.n(n);i.ZP.registerPlugin(r()),t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=(0,l.useRef)(null),a=(0,l.useCallback)(()=>{i.ZP.to(n.current,{opacity:1,x:0,y:0,duration:s})},[e,t,s]),A=(0,l.useCallback)(()=>{i.ZP.to(n.current,{opacity:1,x:"left"===e?-t:"right"===e?t:0,y:"bottom"===e?-t:"top"===e?t:0,duration:s})},[e,t,s]);return(0,l.useEffect)(()=>{let s=n.current;i.ZP.set(s,{opacity:1,x:"left"===e?-t:"right"===e?t:0,y:"bottom"===e?-t:"top"===e?t:0,scale:1,transform:"translate3d(0, 0, 0)"});let l=r().create({trigger:s,start:"top bottom-=50",onEnter:a,onLeave:A,onEnterBack:a,onLeaveBack:A,scrub:!0});return n.current&&n.current.getBoundingClientRect().top<window.innerHeight?a():A(),r().refresh(),()=>{l.kill()}},[a,A,e,t]),n}},3410:function(e,t,s){"use strict";var l=s(7294);let i=()=>{let[e,t]=(0,l.useState)("scrolling down");return(0,l.useEffect)(()=>{let e=0,s=()=>{let s=window.pageYOffset||document.documentElement.scrollTop;s>e?t("scrolling down"):t("scrolling up"),e=s};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),{scrollDirection:e,isScrollUp:"scrolling up"===e}};t.Z=i},2734:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return E},default:function(){return R}});var l=s(5893),i=s(5634),n=s(4184),r=s.n(n),a=s(7294),A=s(1163),m=s(5708),c=s.n(m),d=s(3690);let o=(0,a.memo)(()=>{(0,i.QT)("about");let{md:e}=(0,i.Fs)();(0,A.useRouter)();let t=(0,i.iP)();(0,a.useMemo)(()=>t&&t.width/1.6>t.height,[t]);let[s,n]=(0,i.YD)(),[m,o]=(0,i.YD)(),u=(0,a.useRef)(null),[x,p]=(0,a.useState)(1),[_,g]=(0,a.useState)(0),b=(0,d.Z)();return(0,a.useEffect)(()=>{var e;let t=null===(e=u.current)||void 0===e?void 0:e.getBoundingClientRect().height,s=t+114;window.scrollY>s?p(0):p(1-window.scrollY/s/2),g(.4*window.scrollY)},[b]),(0,l.jsx)("section",{ref:u,className:r()(e?c().banner_m:c().banner_pc,"overflow-hidden"),children:(0,l.jsxs)("div",{className:r()("ebuy-container !flex h-full flex-col items-center justify-center text-white md:items-center md:justify-center  mt-[54px] md:mt-0"),style:{opacity:x,transform:"translateY(".concat(_,"px)")},children:[(0,l.jsx)("span",{ref:s,className:r()(" whitespace-pre-wrap text-center text-[44px] font-[550] leading-[62px] tracking-[4px] first-letter:mb-[9px]  md:pb-3  md:text-[50px] md:leading-[70px] md:mt-[68px]",{head1:n}),children:"加入我们"}),(0,l.jsx)("span",{ref:m,className:r()("mb-[22px]  whitespace-pre-wrap text-center text-[44px] font-[600] leading-[62px] first-letter:mb-[9px]  md:pb-3  md:text-[40px] md:leading-[70px]",{head2:o}),children:"Join us"})]})})});var u=s(5675),x=s.n(u),p={src:"/_next/static/media/0.5f55cfb1.png",height:96,width:110,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAjElEQVR42lWOMQqDQBBFJ1UgYE6QCyRpA7ukSZs+R8tFUqTUwkvYiYWW2iiCiLi+kQFx4cH8mcfsSOO9wL32Pqmdu6zZOeVNTnX4gAAZnGz4gYAQq1BADmIcYUD4iT5Wq/mHF80D+QoBvvSegj1RBBPP5JvW9kUvhNlu6GhG64ZNqIRiVInQQtTshXIBr0FqYBo6OmcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7};let _=()=>{let e=(0,i.QT)("joinus");return(0,l.jsx)("section",{className:r()("ebuy-container text-center text-[42px] font-[700] leading-[51px] text-[#333333]"),children:(0,l.jsxs)("div",{className:r()("col-start-1 col-end-25 pb-[72px] pt-[100px] md:pb-[92px] md:pt-[97px] flex justify-center"),children:[(0,l.jsx)(x(),{src:p,alt:"",className:r()("md:w-[55px] md:h-[48px] w-[54px] h-[47px] md:mr-[15px] mr-[11px] md:pb-[6px] pb-[1px] pt-[3px]")}),e("title")]})})};var g=s(4884),b=s.n(g),h={src:"/_next/static/media/1.d27dddf5.png",height:740,width:988,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AGxpd4SAkHBeY3dbVZdxX8Odg6drN3s9AADNxMWdlpeNfni9rKbTwLvZzszBub6bjZQA9fT44szF1bSp0ayeyZuO5svE8+7z5OTzALOiqJV4fauGiLWHfuDEvNvDvKmLfrCmuQDq4+Tj4+Ph4OHApprDqqLRy9XQzdPW0dcA8fLz5OPnxMDFhmxljnNzo5OfqJ6sqKO0DaNhvzyO9ycAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},f={src:"/_next/static/media/2.d0057ee3.png",height:740,width:988,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/ALipp9LUztXZy87L0czCwHF8bwAAAKiAYwDJxsnDxcHV28LSy7q9iXRbVBuHiHPfrpEAyqCKv7mXlol6wLWRyLmJ1czG/vHm7sizAOTDstLGo7+diLyZgr21hP/n2e/TvvnezADy1cbLrp7VuKTivq/lzcK9po43SwLfzr4A69C/47mg7byc0sjAhZqSABUAJkoA1c26Yh5f+sSSQzgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},j={src:"/_next/static/media/3.fe7eb317.png",height:740,width:988,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AHBucJOOj5aSkpCTpJ2juqGdoJmSlI+MkAB2cXKWlJezqKevmZinkZO3p6WcmZ2alZkAo6Gls6ajt4BxsERAsDs4p3Bhp5iTmZidAK6kpbqMeqtuXsMsLc81M6VoW7WHeMe7uwBKPEBJHxF/ZmKPc3KPdHN8aWdWNjBpWl0AS0xPNjo9Ojw/Zmdqb3BzZGFkaWdrU1Zb4ppGzRJV6T8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},N={src:"/_next/static/media/1-m.1bdf97c7.png",height:672,width:1372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AIN1dnp1gW5odXRfXaePh8KjkoxULGYzIwDi2t3l3+C9qqHIsKbUtq3k19bY1uDEwc8A1NTbyL3BuZeUvZCH0qyi3MG3x7i9ycvkAN3V19jP0c7Nz8axq82zq9HJz8a/wsjDzeeLQkwOGryjAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},w={src:"/_next/static/media/2-m.21599ee3.png",height:672,width:1372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AMXAv8XFyNPZxdTOvryNej1NEJqIcOm5nwC9koPIup6fmoW+spHFs4fVz8n65dfrzb0A37el28irvKGHv5mEy7+X++LU7NG7+ODSAPfayti6rNS3ouLBsuPLwZmIa2hvVPXezhYSRD91DK8SAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},v={src:"/_next/static/media/3-m.dd246386.png",height:672,width:1372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AG5rbYWDhq6mpq+bmquXmK+jo5iVmoqHjQCNio2zq6u6j4G2Qjy1NTGsgXSpn5+in6UAe3l9o4V+omxat1FPwFVSl2JTsZOMp6SpAEhGSRgMGE9GRnl0dXp4eWFbXUA4PV1aXxbPLwc3XwEyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},y={src:"/_next/static/media/4.cff58d16.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEXsODjsODjsODjtODjtODjsNzftODjtNzfsNzfsNzfsODjsODjsODjsODjsODjtNzftODjsODjtODjtODjtNzftNzfsNzfsNzftNzfsNzftNzfsNzftODjsODjtNzfsODjsODjtNzftODjsODjtNzfsNzdLcuCKAAAAInRSTlMAJidaapCaoKG5uru8vcLM6err7fH29vf4+Pn7/Pz8/f7+01oPJQAAAERJREFUeNoFQIcRgDAI/GA3YokdO+j+K3oAsYh3AAW1S3uHyrZTi7XGPkxfktuCp4uj9L0FpTaZzsqg1uzQQAD5UZjwA6mZBKhmTkgoAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},O=s(292),D=s(9930),z=s(3410);let U=()=>{let e=(0,i.QT)("joinus"),{lang:t}=(0,O.Cq)(),{md:s}=(0,i.Fs)(),n=(0,i.k7)(),a=n>=768&&n<=1024,A=(0,z.Z)(),m=e=>n>1024?"top"===e?(0,D.Z)("left",-50,.6):"center"===e?(0,D.Z)("right",-200,.6):"bottom"===e?(0,D.Z)("left",-200,.6):void 0:A.isScrollUp?(0,D.Z)("bottom",50,.6):(0,D.Z)("bottom",-50,.6);return(0,l.jsxs)("section",{className:r()("ebuy-container !flex flex-col ",b().all_container),children:[(0,l.jsx)("div",{ref:m("top"),className:r()(b().mar_r1),children:(0,l.jsxs)("div",{className:r()("flex-col-reverse md:mb-[72px] mb-[72px] rounded-8 bg-blur-6 max-w-auto",b().sub_container_right1,s?b().shadow_custom:"",s?b().opcity:""),children:[(0,l.jsxs)("div",{className:r()("md:rounded-8 md:bg-blur-6 md:z-20",s?"":b().shadow_custom,b().sub_context,b().opcity),children:[(0,l.jsx)("div",{className:r()("font-inter leading-[11px] md:ml-[24px] ml-[32px]",b().sub_title),children:e("content-title1")}),(0,l.jsx)("div",{className:r()("md:mr-[31px] md:mb-[43px] ml-[32px] mb-[63px] mr-[38px] leading-[44px] md:leading-[30px]",b().sub_text),children:e("content1")})]}),(0,l.jsx)(x(),{src:s?N:a?N:h,alt:"",className:r()("md:-ml-[40px] md:shrink-0 w-full  md:!mb-[unset] ",b().img_right)})]})}),(0,l.jsx)("div",{ref:m("center"),className:r()(b().mar_l),children:(0,l.jsxs)("div",{className:r()("flex-col rounded-8 bg-blur-6",b().sub_container_left,s?b().shadow_custom:"",s?b().opcity:""),children:[(0,l.jsx)(x(),{src:s?w:a?w:f,alt:"",className:r()("w-full",b().img_left)}),(0,l.jsxs)("div",{className:r()("md:rounded-8 md:bg-blur-6 md:z-20 md:-ml-[40px]",s?"":b().shadow_custom,b().sub_context_left,b().opcity),children:[(0,l.jsx)("div",{className:r()("font-inter leading-[11px] md:ml-[25px] mr-[39px] ml-[32px]",b().sub_title),children:e("content-title2")}),(0,l.jsx)("div",{className:r()("md:mr-[31px] md:mb-[43px] ml-[32px] mr-[52px] mb-[63px] leading-[44px] md:leading-[30px]",b().sub_text),children:e("content2")})]})]})}),(0,l.jsx)("div",{ref:m("bottom"),className:r()(b().mar_r2),children:(0,l.jsxs)("div",{className:r()("flex-col-reverse rounded-8 bg-blur-6 mt-[72px]",b().sub_container_right2,s?b().shadow_custom:"",s?b().opcity:""),children:[(0,l.jsxs)("div",{className:r()("md:rounded-8 md:bg-blur-6 md:z-20 md:shrink-0 ",s?"":b().shadow_custom,b().sub_context,b().opcity),children:[(0,l.jsx)("div",{className:r()("font-inter leading-[11px] md:ml-[24px] ml-[33px] ",b().sub_title),children:e("content-title3")}),(0,l.jsx)("div",{className:r()("md:mr-[24px]  ml-[33px] mr-[101px] mb-[36px] md:mb-[12px] leading-[44px] md:leading-[30px]",b().sub_text2),children:e("content3")}),"en"===t?(0,l.jsx)("ul",{className:r()("md:mb-[12px]",b().sub_ul),children:["Perfect promotion mechanism","Meal supplement (in some areas)","Holiday benefits","Six insurance and one gold fund"].map((e,t)=>(0,l.jsxs)("li",{className:r()("leading-[26px] md:leading-[31px]",b().sub_li),children:[(0,l.jsx)(x(),{src:y,alt:"",className:r()("md:leading-[11px] lending-[22px]",b().sub_li_img)}),e]},t))}):(0,l.jsx)("ul",{className:r()(" md:mb-[12px]",b().sub_ul),children:["完善的晋升机制","膳食补充剂（在某些地区）","假期福利","六险一金"].map((e,t)=>(0,l.jsxs)("li",{className:r()("leading-[26px] md:leading-[31px]",b().sub_li),children:[(0,l.jsx)(x(),{src:y,alt:"",className:r()("md:leading-[11px] lending-[22px]",b().sub_li_img)}),e]},t))})]}),(0,l.jsx)(x(),{src:s?v:a?v:j,alt:"",className:r()("md:-ml-[40px]  w-full ",b().img_right)})]})})]})};var E=!0;function R(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(_,{}),(0,l.jsx)(U,{})]})}},5708:function(e){e.exports={banner_pc:"styles_banner_pc__uU_ug",banner_m:"styles_banner_m__EIvQV"}},4884:function(e){e.exports={all_container:"styles_all_container__vPkMH",mar_r1:"styles_mar_r1__yVMT5",mar_r2:"styles_mar_r2__xFFse",mar_l:"styles_mar_l__wxXvW",shadow_custom:"styles_shadow_custom__nkB1T",opcity:"styles_opcity__ASQF4",sub_container_right1:"styles_sub_container_right1__pypQw",sub_container_right2:"styles_sub_container_right2__iBwEn",sub_container_left:"styles_sub_container_left__FIuse",sub_context:"styles_sub_context__lNSf_",sub_context_left:"styles_sub_context_left__KmKrL",sub_title:"styles_sub_title__iY_uz",sub_text:"styles_sub_text__sjd0Z",sub_text2:"styles_sub_text2__Kkr4N",img_right:"styles_img_right__wq6xL",img_left:"styles_img_left__1IpTf",sub_ul:"styles_sub_ul__CGN9K",sub_li:"styles_sub_li__rHp77",sub_li_img:"styles_sub_li_img__J_Hri",moveLeft:"styles_moveLeft__EhLsY",moveUp:"styles_moveUp___u5mi"}}}]);