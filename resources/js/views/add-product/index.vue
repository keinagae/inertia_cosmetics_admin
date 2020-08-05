<template>
  <div class="app-container">
    <section class="section-add-product card-view">
      <el-row>
        <el-col :xs="24">
          <el-row v-if="alert.show">
            <el-col :xs="24">
              <el-alert
                :title="alert.title"
                :type="alert.type">
              </el-alert>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8" :lg="8" class="text-center mb-0" v-if="imagesUrl.length==0">
              <div class="product-add__img-box">
                <el-image :src="thumbnail" fit="cover"></el-image>
              </div>
              <el-row :gutter="10" class="mt-5">
                <el-col :xs="6" :md="6">
                  <el-image :src="thumbnail" fit="cover"></el-image>
                </el-col>
                <el-col :xs="6" :md="6">
                  <el-image :src="thumbnail" fit="cover"></el-image>
                </el-col>
                <el-col :xs="6" :md="6">
                  <el-image :src="thumbnail" fit="cover"></el-image>
                </el-col>
                <el-col :xs="6" :md="6">
                  <label for="id_add_images" class="product-add__upload-image bg-primary">
                    <span class="product-add__upload-icon">
                      <i class="el-icon-plus"/>
                    </span>
                    <span class="product-add__upload-label hidden-xs-only">Add More</span>
                    <input @change="ImageChanged" accept="image/*" id="id_add_images" hidden type="file"/>
                  </label>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="8" :lg="8" class="text-center mb-0" v-else>
              <div class="product-add__img-box">
                <el-image :src="imagesUrl[0]" fit="cover"></el-image>
              </div>
              <el-row :gutter="10" class="mt-5">
                <el-col :xs="6" :md="6" v-for="url in imagesUrl.slice(1,imagesUrl.length)" :key="url">
                  <el-image :src="url" fit="cover"></el-image>
                </el-col>
                <el-col :xs="6" :md="6">
                  <label for="id_add_images" class="product-add__upload-image bg-primary">
                    <span class="product-add__upload-icon">
                      <i class="el-icon-plus"/>
                    </span>
                    <span class="product-add__upload-label hidden-xs-only">Add More</span>
                    <input @change="ImageChanged" accept="image/*" id="id_add_images" hidden type="file"/>
                  </label>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="16" :lg="16" class="mb-0">
              <el-form ref="form" label-position="top" class="product-add" :model="form" :rules="formRules"
                       label-width="120px">
                <el-row :gutter="20">
                  <el-col :sm="12" class="mb-0">
                    <div class="form-group">
                      <el-form-item label="Product name" prop="Title">
                        <el-input v-model="form.Title"></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :sm="12" class="mb-0">
                    <div class="form-group">
                      <el-row>
                        <el-form-item label="Category name" prop="Category">
                          <el-col :span="20">
                            <el-select
                              v-model="form.Category"
                              clearable
                              multiple
                              placeholder="Category"
                              class="custom-select width-100"
                            >
                              <el-option
                                v-for="item in categories"
                                :key="item.catname"
                                :label="item.catname"
                                :value="item.catname"
                              ></el-option>
                            </el-select>
                          </el-col>
                          <el-col :span="4">
                            <el-button type="success" @click="catDialog=true" icon="el-icon-plus" circle></el-button>
                          </el-col>
                        </el-form-item>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="24" class="mb-0">
                    <div class="form-group">
                      <el-form-item label="Product Description" prop="Description">
                        <el-input
                          class="custom-input"
                          placeholder="Product Description"
                          type="textarea"
                          v-model="form.Description"
                          :autosize="{ minRows: 4}"
                        />
                      </el-form-item>

                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :sm="10" :md="8" :lg="5" class="mb-0">
                    <div class="form-group">
                      <el-form-item label="Price" prop="Price">
                        <el-input type="number" placeholder="20$" class="product-add__input-group" v-model="form.Price">
                          <span slot="prefix" class="el-input__icon el-text-search">USD</span>
                        </el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :sm="10" :md="8" :lg="5" class="mb-0">
                    <div class="form-group">
                      <el-form-item label="Stock" prop="Stock">
                        <el-input type="number" placeholder="" class="product-add__input-group" v-model="form.Stock">
<!--                          <span slot="prefix" class="el-input__icon el-text-search"></span>-->
                        </el-input>
                      </el-form-item>

                    </div>
                  </el-col>
                  <el-col :sm="8" class="mb-0">
                    <div class="form-group">
                      <label for="shop_name" class="el-form-item__label width-100">&nbsp;</label>
                      <el-button type="primary" @click="save" class="btn-primary product-add__btn-add">{{docId!==null?"Update":"Add"}}</el-button>
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <add-category-dialog :dialog="catDialog" @closeDialog="catDialog=false"></add-category-dialog>
    </section>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import AddCategoryDialog from "@/components/products/cat/AddCategoryDialog";
  import {productCategoriesRef,productsRef,productStorageRef,storage} from "@/firebase"

  export default {
    components: {AddCategoryDialog},
    data() {
      let priceValidation = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Price Is required'));
        } else if (parseFloat(value) <= 0) {
          callback(new Error('Please enter a valid price'));
        } else {
          callback();
        }
      };
      let stockValidation = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Stock Is required'));
        } else if (parseInt(value) <= 0) {
          callback(new Error('Please enter a valid Stock amount'));
        } else {
          callback();
        }
      };
      return {
        alert:{
          title:"",
          type:"",
          show:false,
        },
        catDialog: false,
        thumbnail: '/images/products/product-3.png',
        categories: [],
        order: {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          paid_link: '#',
          delivered_link: '#',
        },
        imageError:false,
        form: {
          Category: '',
          Price: '',
          Stock: '',
          Description: '',
          Title: '',
          Photo: [],
          SellerID:"AouyYHCz3tSjIUhSXhBu5l3empF3",
          Discount:0,
          AverageRating:0,
          TotalReviews:0,
          SearchData:[],
          Approved:false,
          Status:"Active"
        },
        formRules: {
          Title: [
            {required: true, message: 'Name is required is required', trigger: 'blur'},
          ],
          Category: [
            {required: true, message: 'At least one Category is required', trigger: 'blur'},
          ],
          Description: [
            {required: true, message: 'Product description is required', trigger: 'blur'},
          ],
          Price: [
            {required: true, message: 'Price is required', trigger: 'blur'},
            {validator: priceValidation, trigger: 'blur'},

          ],
          Stock: [
            {required: true, message: 'Stock is required', trigger: 'blur'},
            {validator: stockValidation, trigger: 'blur'},
          ]
        },
        imagesUrl: [],
        docId:null,
      };
    },
    firestore: {
      categories: productCategoriesRef
    },
    methods: {
      pageTitle() {
        return this.$route.meta.pageTitle || '';
      },
      ImageChanged(event) {
        productStorageRef.put(event.target.files[0]).then(function(snapshot) {
          console.log(snapshot);
        });
        // this.form.Photo.push(event.target.files[0])
        // let url = URL.createObjectURL(event.target.files[0])
        // this.imagesUrl.push(url)
      },
      save(){
        if(this.docId) {
          this.update()
        }else {
          this.create()
        }
      },
      create(){
        if(this.$refs.form.validate()){
          // if(this.form.Photo.length<3){
          //   this.imageError=true
          // }else{
          console.log("adding product")
          productsRef.add(this.form).then(response=>{
            this.form.Title=""
            this.form.Price=0
            this.form.Category=[]
            this.form.Stock=0
            this.form.Description=""
            this.form.Photo=[]
            this.imagesUrl=[]
            this.alert.title="Product Saved"
            this.alert.type="success"
            this.alert.show=true
          }).catch(error=>{
            this.alert.title="Product Saving Failed"
            this.alert.type="error"
            this.alert.show=true
          })
          // }
        }
      },
      update(){
        if(this.$refs.form.validate()){
          // if(this.form.Photo.length<3){
          //   this.imageError=true
          // }else{
          console.log("adding product")
          productsRef.doc(this.docId).set(this.form).then(response=>{
            this.form.Title=""
            this.form.Price=0
            this.form.Category=[]
            this.form.Stock=0
            this.form.Description=""
            this.form.Photo=[]
            this.imagesUrl=[]
            this.alert.title="Product Updated"
            this.alert.type="success"
            this.alert.show=true
            this.$router.replace({name:"Products"})
          }).catch(error=>{
            this.alert.title="Product Update Failed"
            this.alert.type="error"
            this.alert.show=true
          })
          // }
        }
      }
    },
    mounted() {
      if(this.$route.params.id){
        this.docId=this.$route.params.id
        productsRef.doc(this.docId).get().then(product=>{
          if (product.exists){
            console.log(product.data())
            this.form={...this.form,...product.data()}
          }else{
            console.log("no product")
          }
        })
      }
    }
  };
</script>

<style scoped>
  .line {
    text-align: center;
  }

  .el-input__inner {
    width: 100%;
  }
</style>

