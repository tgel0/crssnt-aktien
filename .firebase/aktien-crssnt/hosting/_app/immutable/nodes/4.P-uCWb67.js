import{s as j,n as I,o as q}from"../chunks/scheduler.BvLojk_z.js";import{S as A,i as F,e as w,b as m,s as V,c as C,d as D,f as _,g as d,h as y,p as S,A as M,j as z,k as n,l as b}from"../chunks/index.Bcd4Swig.js";function B(l){let e,s,h,v,r,k,f,a,i=l[3]?"+":"",g,u,t;return{c(){e=w("div"),s=w("div"),h=m(l[2]),v=V(),r=w("div"),k=m(l[0]),f=V(),a=w("div"),g=m(i),u=m(l[1]),t=m("%"),this.h()},l(c){e=C(c,"DIV",{class:!0});var o=D(e);s=C(o,"DIV",{class:!0});var E=D(s);h=_(E,l[2]),E.forEach(d),v=y(o),r=C(o,"DIV",{class:!0});var N=D(r);k=_(N,l[0]),N.forEach(d),f=y(o),a=C(o,"DIV",{class:!0});var P=D(a);g=_(P,i),u=_(P,l[1]),t=_(P,"%"),P.forEach(d),o.forEach(d),this.h()},h(){S(s,"class","title svelte-1vgvwwr"),S(r,"class","price svelte-1vgvwwr"),S(a,"class","change svelte-1vgvwwr"),M(a,"positive",l[3]),M(a,"negative",!l[3]),S(e,"class","stock-container svelte-1vgvwwr")},m(c,o){z(c,e,o),n(e,s),n(s,h),n(e,v),n(e,r),n(r,k),n(e,f),n(e,a),n(a,g),n(a,u),n(a,t)},p(c,[o]){o&4&&b(h,c[2]),o&1&&b(k,c[0]),o&8&&i!==(i=c[3]?"+":"")&&b(g,i),o&2&&b(u,c[1]),o&8&&M(a,"positive",c[3]),o&8&&M(a,"negative",!c[3])},i:I,o:I,d(c){c&&d(e)}}}function G(l,e,s){let{title:h}=e,{symbol:v}=e,{stockData:r=[]}=e,{stockShortName:k}=e,{stockregularMarketPrice:f}=e,{stockpreviousClose:a}=e,{stockPercentageChange:i}=e,g=!1;return q(async()=>{try{const c=await(await fetch(`/api/stocks/${v}`)).json();s(4,r=c),s(5,k=r.chart.result[0].meta.shortName),s(0,f=r.chart.result[0].meta.regularMarketPrice),s(6,a=r.chart.result[0].meta.previousClose),s(1,i=((f-a)/a*100).toFixed(2)),s(3,g=i>=0)}catch(t){console.error(`Error fetching ${h} stock data:`,t)}}),l.$$set=t=>{"title"in t&&s(2,h=t.title),"symbol"in t&&s(7,v=t.symbol),"stockData"in t&&s(4,r=t.stockData),"stockShortName"in t&&s(5,k=t.stockShortName),"stockregularMarketPrice"in t&&s(0,f=t.stockregularMarketPrice),"stockpreviousClose"in t&&s(6,a=t.stockpreviousClose),"stockPercentageChange"in t&&s(1,i=t.stockPercentageChange)},[f,i,h,g,r,k,a,v]}class K extends A{constructor(e){super(),F(this,e,G,B,j,{title:2,symbol:7,stockData:4,stockShortName:5,stockregularMarketPrice:0,stockpreviousClose:6,stockPercentageChange:1})}}export{K as component};
