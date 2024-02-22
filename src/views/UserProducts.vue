<template>
  <div>
    <h1>產品列表頁面</h1>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div style="
                height: 100px;
                background-size: cover;
                background-position: center;
              " :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">
                <i class="fas fa-spinner fa-pulse"></i>
                查看更多
              </button>
              <button type="button" class="btn btn-outline-danger">
                <i class="fas fa-spinner fa-pulse" ></i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <UserProductModal ref="userProductModal" :product="product" />
  </div>
</template>
<script>
import UserProductModal from'../components/UserProductModal.vue'
const {VITE_API} = import.meta.env
const {VITE_PATH} = import.meta.env
export default{
    data() {
      return {
        product:{},
        products: [],// products 陣列存取外部回傳的產品資料
        tempProduct: {}// temp 物件存取要渲染的產品細節
      }
    },
    components:{
      UserProductModal
    },
    methods: {
      // 取得產品api
      getData(){
        const url = `${VITE_API}/api/${VITE_PATH}/products`
        this.$http.get(url)
        .then((res)=>{
          this.products = res.data.products
        })
        .catch((err)=>{
          alert(err.data.message)
        })
      },
      getProduct(id) {
      const url = `${VITE_API}api/${VITE_PATH}/product/${id}`;
      this.$http.get(url)
        .then((response) => {
          this.product = response.data.product;
          this.$refs.userProductModal.openModal();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
        },
      },
      mounted() {
        this.getData()
      }
}
</script>
