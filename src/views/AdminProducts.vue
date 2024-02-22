
<template>
  <div>
    這裡是 後台 產品列表
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
const {VITE_API} = import.meta.env
const {VITE_PATH} = import.meta.env
export default{
	data(){
		return{
			products:{},
		}
	},
	methods:{
		 // 驗證是否有登入
      check(){
        const url = `${VITE_API}/api/user/check`;
        this.$http.post(url)
        .then(()=>{
          this.getData()
        })
        .catch((err)=>{
          alert(err.data.message)
        })
      },
		getProducts(){
			const api = `${VITE_API}api/${VITE_PATH}/admin/products/all`
			this.$http.get(api)
				.then((res) => {
					this.products = res.data.products
				}).catch((err) =>{
					alert(err.response.data.message)
				});
		}
	},
	mounted(){
		const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common.Authorization = token;
		this.getProducts()
	}
}
</script>