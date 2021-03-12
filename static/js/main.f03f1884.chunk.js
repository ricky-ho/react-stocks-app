(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(10),r=c.n(s),n=(c(19),c(3)),A=c.n(n),i=c(6),l=c(5),o=c(11),d=(c(21),c(1)),j=function(e){var t=e.searchSubmit;return Object(d.jsx)("div",{className:"flex justify-center align-center",children:Object(d.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),t(e.target[0].value),e.target[0].value=""},children:[Object(d.jsx)("input",{type:"text","aria-label":"search-field",placeholder:"Search by ticker symbol",required:!0}),Object(d.jsx)("button",{type:"submit",className:"search-btn","aria-label":"search-submit",children:Object(d.jsx)(o.a,{className:"react-icons",style:{color:"#fff"}})})]})})},h=(c(23),function(e){var t=e.searchSubmit;return Object(d.jsx)("header",{className:"flex justify-center",children:Object(d.jsx)("div",{className:"flex justify-center align-center",children:Object(d.jsx)(j,{searchSubmit:t})})})}),b=(c(24),function(){return Object(d.jsxs)("footer",{className:"flex-col justify-center align-center",children:[Object(d.jsx)("a",{id:"attribution",href:"https://iexcloud.io",rel:"noopener noreferrer",target:"_blank",children:"Data provided by IEX Cloud"}),Object(d.jsx)("a",{href:"https://github.com/ricky-ho/react-stocks-search",rel:"noopener noreferrer",target:"_blank",children:"View source code"})]})}),u=function(e,t){var c=e>=0?"+":"";return"".concat(c).concat(e.toFixed(2)," (").concat(c).concat((100*t).toFixed(2),"%)")},m=function(e){var t=e.data,c=e.localeDate;return Object(d.jsxs)("section",{id:"quote",className:"display-section",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:"font-xs font-secondary",children:[t.primaryExchange?"".concat(t.primaryExchange," | "):""," Currency in USD"]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:"font-xxl",children:[t.latestPrice?t.latestPrice.toFixed(2):"--",Object(d.jsxs)("span",{className:"font-m ".concat(t.change>=0?"font-green":"font-red"),children:[" ",null!==t.change&&null!==t.changePercent?u(t.change,t.changePercent):""]})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:"font-xs font-secondary",children:[t.latestSource?t.latestSource:"--"," |"," ",t.latestUpdate?c(t.latestUpdate):"--"," |"," ",Object(d.jsx)("a",{className:"font-xs font-tertiary no-text-decoration",href:"https://iexcloud.io",rel:"noopener noreferrer",target:"_blank",children:"IEX Cloud"})]})})]})},x=(c(25),function(e){var t=1e12;return e/t>1?"".concat((e/t).toFixed(3),"T"):e/1e9>1?"".concat((e/1e9).toFixed(2),"B"):"".concat((e/1e6).toFixed(2),"M")}),f=function(e){var t=e.data;return Object(d.jsx)("section",{id:"stats",className:"display-section",children:Object(d.jsxs)("div",{className:"stats-content flex justify-center align-center",children:[Object(d.jsx)("table",{className:"stats-table",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"Prev. Close"}),Object(d.jsx)("td",{children:t.previousClose?t.previousClose.toFixed(2):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"Open"}),Object(d.jsx)("td",{children:t.open?t.open.toFixed(2):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"High"}),Object(d.jsx)("td",{children:t.high?t.high.toFixed(2):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"Low"}),Object(d.jsx)("td",{children:t.low?t.low.toFixed(2):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"Volume"}),Object(d.jsx)("td",{children:t.latestVolume?x(t.latestVolume):"--"})]})]})}),Object(d.jsx)("table",{className:"stats-table",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"Marketcap"}),Object(d.jsx)("td",{children:t.marketCap?x(t.marketCap):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"P/E"}),Object(d.jsx)("td",{children:t.peRatio?t.peRatio:"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"52 Week High"}),Object(d.jsx)("td",{children:t.week52High?t.week52High.toFixed(2):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"52 Week Low"}),Object(d.jsx)("td",{children:t.week52Low?t.week52Low.toFixed(2):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"font-secondary",children:"Avg. Volume"}),Object(d.jsx)("td",{children:t.avgTotalVolume?x(t.avgTotalVolume):"--"})]})]})})]})})},p=c(12),y=c.n(p),O=function(e){var t=e.data,c=e.priceChange,a=function(e){return[{name:"Price",data:e.map((function(e){return[Date.parse("".concat(e.date," ").concat(e.minute)),e.close]}))}]}(t),s=function(e){var t=e>0?"#00873c":"#eb0f29";return{chart:{id:"area-datetime",type:"area",zoom:{enabled:!1},animations:{enabled:!1},fill:{enabled:!0}},dataLabels:{enabled:!1},grid:{show:!0,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}},padding:{top:5}},markers:{size:0,colors:["#000"],strokeWidth:0,showNullDataPoints:!1,hover:{size:4}},stroke:{colors:[t],width:2},fill:{type:"solid",colors:[t],opacity:.4},xaxis:{type:"datetime",labels:{datetimeFormatter:{hour:"h:mm TT",minute:"h:mm TT"},datetimeUTC:!1},axisBorder:{show:!0,color:"#bcbec0"},axisTicks:{show:!0,color:"#bcbec0"},crosshairs:{show:!0,position:"back",stroke:{color:"#909090",dashArray:2}}},yaxis:{decimalsInFloat:2,axisBorder:{color:"#bcbec0"},axisTicks:{show:!0,color:"#bcbec0"},crosshairs:{show:!0,position:"back",stroke:{color:"#909090",dashArray:2}},tooltip:{enabled:!0}},tooltip:{enabled:!0,x:{formatter:function(e){return new Date(e).toLocaleString([],{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})+" EST"}},y:{formatter:function(e){return"$".concat(e.toFixed(2))}},marker:{show:!1}}}}(c);return Object(d.jsxs)("section",{id:"chart",className:"display-section flex-col",children:[Object(d.jsx)("p",{className:"text-center",children:Object(d.jsx)("strong",{className:"font-xs",children:"*Due to IEX free tier restrictions, only the intraday prices will be displayed. The data may also be incomplete, thus may not reflect the entire market day and may cause breaks in the chart."})}),Object(d.jsx)(y.a,{options:s,series:a,type:"area",height:500,width:"96%"})]})},k=c(8),N=(c(30),function(e){var t=e.data,c=e.symbol,s={width:"15px",paddingLeft:"5px"},r=Object(a.useState)(!1),n=Object(l.a)(r,2),A=n[0],i=n[1],o=Object(a.useState)(!1),j=Object(l.a)(o,2),h=j[0],b=j[1],u=Object(a.createRef)();Object(a.useEffect)((function(){u.current.clientHeight<u.current.scrollHeight&&b(!0)}),[u]),Object(a.useEffect)((function(){u.current.style.height=A?"100%":"12.3rem"}),[u,A]);return Object(d.jsxs)("section",{id:"company",className:"display-section",children:[Object(d.jsxs)("h2",{className:"font-m section-title",children:["About ",c]}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("div",{id:"company-profile",className:"flex",children:Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Sector"}),Object(d.jsx)("td",{className:"font-secondary",children:t.sector?t.sector:"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Industry"}),Object(d.jsx)("td",{className:"font-secondary",children:t.industry?t.industry:"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"CEO"}),Object(d.jsx)("td",{className:"font-secondary",children:t.CEO?t.CEO:"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Employees"}),Object(d.jsx)("td",{className:"font-secondary",children:t.employees?t.employees.toLocaleString("en-US"):"--"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Headquarters"}),Object(d.jsx)("td",{className:"font-secondary",children:t.city&&t.state?"".concat(t.city,", ").concat(t.state):"--"})]})]})})}),t.description?Object(d.jsxs)("div",{className:"flex-col align-center",children:[Object(d.jsx)("div",{id:"company-description",ref:u,className:"font-secondary ".concat(h&&!A?"fade-active":""),children:t.description}),h&&Object(d.jsxs)("button",{id:"expand-btn",className:"font-xs font-tertiary flex justify-center align-center",type:"text",onClick:function(){i(!A)},children:[A?"Fold":"More",A?Object(d.jsx)(k.b,{className:"react-icons",style:s}):Object(d.jsx)(k.a,{className:"react-icons",style:s})]})]}):Object(d.jsx)("div",{ref:u,className:"flex justify-center align-center",children:Object(d.jsx)("p",{className:"font-m",children:"Company description not available."})})]})]})}),v=(c(31),function(e){var t=e.data,c=e.localeDate;return Object(d.jsx)("a",{className:"no-text-decoration font-m font-primary",href:t.url,rel:"noopener noreferrer",target:"_blank","aria-label":"View the full article: ".concat(t.headline),children:Object(d.jsxs)("article",{className:"newscard flex",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:t.image,onError:function(e){e.target.src="data:image/jpeg;base64,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"},alt:"".concat(t.headline)})}),Object(d.jsxs)("div",{className:"newscard-content flex-col",children:[Object(d.jsx)("h3",{className:"font-sm",children:t.headline},t.url),Object(d.jsxs)("p",{className:"font-secondary",children:[t.source," | ",c(t.datetime)]}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"font-primary",children:t.summary})})]})]})})}),g=(c(32),function(e){var t=e.data,c=e.localeDate;return Object(d.jsxs)("section",{id:"news",className:"display-section",children:[Object(d.jsx)("h2",{className:"font-m section-title",children:"Recent News"}),t.length>0?t.map((function(e,t){return Object(d.jsx)(v,{data:e,localeDate:c},t)})):Object(d.jsx)("div",{id:"empty-news",className:"flex justify-center",children:Object(d.jsx)("p",{className:"font-sm text-center",children:"No recent news found."})})]})}),w=(c(33),function(e){var t=e.data,c=e.localeDate;return 0===Object.keys(t).length||t.error?Object(d.jsx)("main",{className:"flex justify-center ",children:Object(d.jsxs)("div",{id:"error",className:"font-xl",children:[t.status?t.status:"Error"," -"," ",t.message?t.message:"Symbol not found in IEX database"]})}):Object(d.jsxs)("main",{className:"flex-col",children:[Object(d.jsxs)("div",{className:"flex-col separator",children:[Object(d.jsxs)("h1",{id:"title",className:"font-l",children:["(",t.quote.symbol,") ",t.quote.companyName]}),Object(d.jsxs)("div",{id:"main-details",className:"flex main",children:[Object(d.jsx)(m,{data:t.quote,localeDate:c}),Object(d.jsx)(f,{data:t.quote})]})]}),Object(d.jsx)("div",{className:"separator",children:Object(d.jsx)(O,{data:t["intraday-prices"],priceChange:t.quote.change})}),Object(d.jsx)("div",{className:"separator",children:Object(d.jsx)(N,{data:t.company,symbol:t.quote.symbol})}),Object(d.jsx)(g,{data:t.news,localeDate:c})]})}),S=c(9),E=function(){var e=Object(i.a)(A.a.mark((function e(t){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cloud.iexapis.com/stable/stock/".concat(t,"/batch?types=quote,company,news,intraday-prices&last=3&token=").concat("pk_395b589bbe8d4562af134c19ce9b1026"));case 3:if((c=e.sent).ok){e.next=6;break}return e.abrupt("return",P(c));case 6:return e.next=8,c.json();case 8:if(null!==(a=e.sent).quote&&null!==a.company){e.next=13;break}return e.abrupt("return",P({status:"400",statusText:"IEX returned null data"}));case 13:return e.abrupt("return",Object(S.a)(Object(S.a)({},a),{},{error:!1,quote:W(a.quote),company:Z(a.company)}));case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",P({status:500,statusText:"Internal server error"}));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){return{symbol:e.symbol,companyName:e.companyName,primaryExchange:e.primaryExchange,open:e.open,previousClose:e.previousClose,high:e.high,low:e.low,latestPrice:e.latestPrice,latestSource:e.latestSource,latestUpdate:e.latestUpdate,latestVolume:e.latestVolume,volume:e.volume,avgTotalVolume:e.avgTotalVolume,change:e.change,changePercent:e.changePercent,week52High:e.week52High,week52Low:e.week52Low,peRatio:e.peRatio,marketCap:e.marketCap}},Z=function(e){return{description:e.description,CEO:e.CEO,employees:e.employees,sector:e.sector,industry:e.industry,city:e.city,state:e.state}},P=function(e){return{error:!0,status:e.status,message:e.statusText}},R=c(37),U=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!0),n=Object(l.a)(r,2),o=n[0],j=n[1],u=function(){var e=Object(i.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,E(t);case 3:c=e.sent,s(c),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("TSLA");case 2:t=e.sent,s(t),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"flex-col align-center ",children:[Object(d.jsx)(h,{searchSubmit:u}),Object(d.jsx)("div",{id:"App",className:"App flex justify-center align-center",children:o?Object(d.jsx)(R.a,{animation:"border",variant:"primary",role:"status",children:Object(d.jsx)("span",{"aria-label":"Loading",style:{display:"none",color:"#1262ec"},children:"Loading..."})}):Object(d.jsx)(w,{data:c,localeDate:function(e){return new Date(e).toLocaleString([],{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",timeZone:"America/New_York",timeZoneName:"short"})}})}),Object(d.jsx)(b,{})]})};c(34);r.a.render(Object(d.jsx)(U,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f03f1884.chunk.js.map