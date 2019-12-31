<template>
  <q-layout view="hHh lpR fFf">
    <toolbar />
    <drawer />
    <base-view />
  </q-layout>
</template>

<script>
import  toolbar from '@/components/Toolbar'
import  drawer from '@/components/Drawer'
import  baseView from '@/components/BaseView'
export default {
  name: "baseLayout",
  components: {
    toolbar,
    drawer,
    baseView
  },
  data() {
    return {

      
    };
  },
  methods: {

  }
};
</script>
