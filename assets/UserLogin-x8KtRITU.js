import{_ as c,e as u,c as m,d as s,h as p,i as d,v as l,o as _}from"./index-chucV4u9.js";var f={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"shuo-api",BASE_URL:"/vite-work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:h}=f,v={data(){return{user:{}}},methods:{login(){const r=`${h}admin/signin`;u.post(r,this.user).then(e=>{const{token:n,expired:i}=e.data;document.cookie=`hexToken=${n};expires=${new Date(i)};`,this.$router.push("/admin/products")}).catch(()=>{alert("重新登入")})}}},w={class:"container"},b={class:"row justify-content-center"},x=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),g={class:"col-8"},E={class:"form-floating mb-3"},V=s("label",{for:"username"},"Email address",-1),k={class:"form-floating"},P=s("label",{for:"password"},"Password",-1),T=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),y=s("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1);function D(r,e,n,i,t,a){return _(),m("div",w,[s("div",b,[x,s("div",g,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=p((...o)=>a.login&&a.login(...o),["prevent"]))},[s("div",E,[d(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o)},null,512),[[l,t.user.username]]),V]),s("div",k,[d(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o)},null,512),[[l,t.user.password]]),P]),T],32)])]),y])}const A=c(v,[["render",D]]);export{A as default};
