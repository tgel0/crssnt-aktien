import{s as A,n as j,o as F}from"../chunks/scheduler.BvLojk_z.js";import{S as M,i as z,e as C,b as m,s as w,c as D,d as b,f as P,g as _,h as q,p as E,A as I,j as B,k as n,l as S}from"../chunks/index.Bcd4Swig.js";function G(c){let e,s,v,k,l,r,f,a,h=c[3]?"+":"",g,t,u;return{c(){e=C("div"),s=C("div"),v=m(c[2]),k=w(),l=C("div"),r=m(c[0]),f=w(),a=C("div"),g=m(h),t=m(c[1]),u=m("%"),this.h()},l(i){e=D(i,"DIV",{class:!0});var o=b(e);s=D(o,"DIV",{class:!0});var V=b(s);v=P(V,c[2]),V.forEach(_),k=q(o),l=D(o,"DIV",{class:!0});var y=b(l);r=P(y,c[0]),y.forEach(_),f=q(o),a=D(o,"DIV",{class:!0});var d=b(a);g=P(d,h),t=P(d,c[1]),u=P(d,"%"),d.forEach(_),o.forEach(_),this.h()},h(){E(s,"class","title svelte-1e3vept"),E(l,"class","price svelte-1e3vept"),E(a,"class","change svelte-1e3vept"),I(a,"positive",c[3]),I(a,"negative",!c[3]),E(e,"class","stock-container svelte-1e3vept")},m(i,o){B(i,e,o),n(e,s),n(s,v),n(e,k),n(e,l),n(l,r),n(e,f),n(e,a),n(a,g),n(a,t),n(a,u)},p(i,[o]){o&4&&S(v,i[2]),o&1&&S(r,i[0]),o&8&&h!==(h=i[3]?"+":"")&&S(g,h),o&2&&S(t,i[1]),o&8&&I(a,"positive",i[3]),o&8&&I(a,"negative",!i[3])},i:j,o:j,d(i){i&&_(e)}}}function H(c,e,s){let{title:v}=e,{symbol:k}=e,{stockData:l=[]}=e,{stockCurrentPrice:r}=e,{stockPreviousClose:f}=e,{stockPercentageChange:a}=e,h=!1;return F(async()=>{try{const u=await(await fetch(`/api/stocks/${k}`)).json();s(0,r=u.stockData.currentPrice),s(4,f=u.stockData.previousClose),s(1,a=((r-f)/f*100).toFixed(2)),s(3,h=a>=0)}catch(t){console.error(`Error fetching ${v} stock data:`,t)}}),c.$$set=t=>{"title"in t&&s(2,v=t.title),"symbol"in t&&s(5,k=t.symbol),"stockData"in t&&s(6,l=t.stockData),"stockCurrentPrice"in t&&s(0,r=t.stockCurrentPrice),"stockPreviousClose"in t&&s(4,f=t.stockPreviousClose),"stockPercentageChange"in t&&s(1,a=t.stockPercentageChange)},[r,a,v,h,f,k,l]}class L extends M{constructor(e){super(),z(this,e,H,G,A,{title:2,symbol:5,stockData:6,stockCurrentPrice:0,stockPreviousClose:4,stockPercentageChange:1})}}export{L as component};
