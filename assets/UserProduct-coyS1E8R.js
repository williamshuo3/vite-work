import{_ as r,c,b as n,t as i,d,o as p}from"./index-GMOwc2S3.js";var s={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"shuo-api",BASE_URL:"/vite-work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:u}=s,{VITE_PATH:_}=s,h={data(){return{product:{}}},mounted(){const{id:e}=this.$route.params,o=`${u}api/${_}/product/${e}`;this.$http.get(o).then(t=>{this.product=t.data.product}).catch(t=>{alert(t.response.data.message)})}},l={class:"about"},f=d("h1",null,"This is 單一產品頁面",-1);function m(e,o,t,E,a,T){return p(),c("div",l,[f,n(" "+i(a.product.title),1)])}const V=r(h,[["render",m]]);export{V as default};
