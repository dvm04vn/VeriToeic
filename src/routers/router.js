// import Auth from "../components/Auth";
import HomeLayout from "../layouts/HomeLayout";
import Answers from "../pages/Answers";
// import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Learning from "../pages/Learning-paths";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Test from "../pages/Test";
import Topic from "../pages/Topic";
import Profile from "../pages/Profile";
import DefaultLayout from '../layouts/DefaultLayout'
import Personal from "../pages/Setting/components/Personal";
import Setting from "../pages/Setting";
import Security from "../pages/Setting/components/Security";
import { Admin, AdminQuestion, AdminTopics } from "../pages/Admin";
import AdminLayout from '../layouts/Admin';

import Success from "../pages/Success";

const PrivateRouters = [
    // { path: '/admin', component: Admin, layout: Admin },
    
];

const PublicRouters = [
    {path: '/', component :  Home, layout : HomeLayout},
    // {path: '/auth', component : Auth, layout: HomeLayout},
    {path: '/success/:id', component: Success, layout: HomeLayout},
    {path: 'learning-paths', component: Learning, layout: HomeLayout},
    {path: '/quiz/:slug', component: Quiz, layout: HomeLayout},
    {path: '/topic', component: Topic, layout: HomeLayout},
    {path: '/answers', component: Answers, layout: HomeLayout},
    {path: '/test', component: Test, layout: HomeLayout},
    {path: '/result/:id', component: Result, layout: HomeLayout},
    {path: '/:username', component: Profile, layout:HomeLayout },
    // {path: '/profile', component: Profile, layout:HomeLayout },
    {path: '/setting/personal', component: Personal, layout: Setting},
    {path: '/setting/security', component: Security, layout: Setting},
    { path: '/admin/', component: Admin, layout: AdminLayout },
    { path: '/admin/topics', component: AdminTopics , layout: AdminLayout},
    { path: '/admin/:slug/add-questions', component: AdminQuestion , layout: AdminLayout},
    // { path: '/admin/question', component: AdminQuestion , layout: AdminLayout},
];

export { PrivateRouters, PublicRouters};