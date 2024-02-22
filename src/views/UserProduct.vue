<template>
    <div class="about">
    <h1>This is 單一產品頁面</h1>
    {{ product.title }}
  </div>
</template>
<script>
const {VITE_API} = import.meta.env
const {VITE_PATH} = import.meta.env
export default{
    data(){
        return {
            product:{},
        }
    },
    mounted(){
         const { id } = this.$route.params;
        const url = `${VITE_API}api/${VITE_PATH}/product/${id}`
        this.$http.get(url)
        .then((res) =>{
            this.product = res.data.product
        }).catch((err) =>{
            alert(err.response.data.message)
        })
    },
}
</script>