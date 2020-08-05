<template>
  <el-dialog :show-close="false" :visible.sync="dialog"  title="Add Product Category">
    <el-form  label-width="150px" >
      <el-form-item label="Category Name">
        <el-input v-model="name"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
    <el-button @click="$emit('closeDialog')">Cancel</el-button>
    <el-button type="primary" @click="save">Confirm</el-button>
  </span>
  </el-dialog>
</template>

<script>
  import {productCategoriesRef} from "@/firebase"
  export default {
    name: "AddCategoryDialog",
    props:{
      dialog:{
        required:true,
        type:Boolean,
      }
    },
    data() {
      return {
        name: ""
      }
    },
    methods:{
      save(){
        productCategoriesRef.add({catname:this.name}).then(result=>{
          console.log(result)
          this.name=""
          this.$emit('closeDialog')
        })

      }
    }
  }
</script>

<style scoped>

</style>
