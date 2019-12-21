import ProductList from '@/views/pages/product/List.vue';
import ProductDetail from '@/views/pages/product/Detail.vue';

const PreComponent = '<router-view/>';

export default {
  path: '',
  component: { template: PreComponent },
  redirect: {
    name: 'project-list',
  },
  children: [
    {
      path: '/product/list',
      name: 'product-list',
      component: ProductList,
      meta: {
        title: 'Products',
      },
    }, {
      path: 'product/detail/:id',
      name: 'product-detail',
      component: ProductDetail,
      meta: {
        title: 'Products',
      },
    },
  ],
};
