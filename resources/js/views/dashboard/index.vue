<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import adminDashboard from './admin';
import editorDashboard from './editor';
import shopOwnerDashboard from './shop-owner';
import productSellerDashboard from './product-seller';
import businessDashboard from './selling-product';

export default {
  name: 'Dashboard',
  components: {
    adminDashboard,
    editorDashboard,
    shopOwnerDashboard,
    productSellerDashboard,
    businessDashboard,
  },
  data() {
    return {
      currentRole: 'adminDashboard',
    };
  },
  computed: {
    ...mapGetters(['roles']),
  },
  created() {
    if (this.roles.includes('seller')) {
      this.currentRole = 'productSellerDashboard';
    } else if (this.roles.includes('admin User')) {
      this.currentRole = 'adminDashboard';
    } else if (this.roles.includes('business')) {
      this.currentRole = 'businessDashboard';
    } else if (this.roles.includes('shop Owner')) {
      this.currentRole = 'shopOwnerDashboard';
    }
  },
};
</script>
