import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TeamHealthCheck from 'src/components/Dashboard/Views/TeamHealthCheck.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Users from 'src/components/Dashboard/Views/Users.vue'
import Teams from 'src/components/Dashboard/Views/Teams.vue'
import CreateTHC from 'src/components/Dashboard/Views/THC/CreateTHC.vue'
import ViewTHCDetails from 'src/components/Dashboard/Views/THC/ViewTHCDetails.vue'
import Home from 'src/components/Dashboard/Views/Home.vue'

import auth from 'src/components/auth'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/logout',
    beforeEnter (to, from, next) {
      auth.logout()
      next('/')
    }
  },
  {
    path: '/admin',
    component: DashboardLayout,
    beforeEnter: requireAuth,
    redirect: '/admin/thc',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'thc',
        name: 'thc',
        component: TeamHealthCheck
      },
      {
        path: 'users',
        name: 'users',
        component: Users
      },
      {
        path: 'teams',
        name: 'teams',
        component: Teams
      },
      {
        path: 'user',
        name: 'user',
        component: UserProfile
      },
      {
        path: 'create-thc',
        name: 'CreateTHC',
        title: 'Start THC',
        component: CreateTHC
      },
      {
        path: 'view-thc',
        name: 'ViewTHCDetails',
        component: ViewTHCDetails
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default routes
