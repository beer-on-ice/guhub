import '../styles/global.css';
import "nprogress/nprogress.css";

import * as React from "react";
import Router from "next/router";
import NProgress from "nprogress"

export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    //顶部导航栏动态样式
    var headroom = function(){
        const nav = document.getElementById('nav');
        if(document.documentElement.scrollTop!=0){
            nav.setAttribute('style', 'box-shadow: 0 1px 4px 0 rgb(0 0 0 / 0.05)');
        }else{
            nav.setAttribute('style', 'box-shadow: 0 0 0 0 #fff');
        }
    }
    headroom();
    window.addEventListener('scroll', headroom);

    //启用 nProgress
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);
    return () => {
        Router.events.off("routeChangeStart", handleRouteStart);
        Router.events.off("routeChangeComplete", handleRouteDone);
        Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return <Component {...pageProps} />
}