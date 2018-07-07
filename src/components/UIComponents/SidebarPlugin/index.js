import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-home',
      path: '/admin/overview'
    },
    {
      name: 'THC',
      icon: 'ti-pulse',
      path: '/admin/thc'
    },
    {
      name: 'Internal Polls',
      icon: 'ti-panel',
      path: '/admin/table-list'
    },
    {
      name: 'Marketing',
      icon: 'ti-flag-alt',
      path: '/admin/notifications'
    },
    {
      name: 'Users',
      icon: 'ti-user',
      path: '/admin/users'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
