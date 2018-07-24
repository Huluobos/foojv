

    <template>
        <div>
            <secondHeader :xinXi="user"></secondHeader>
            <schoolHouseHeaderBottom></schoolHouseHeaderBottom>
            <div>
                学校新房页面
                <div>
                    <nuxt-link to="/shoolNewHouse/detail">学校新房详情页</nuxt-link>
                </div>
            </div>
            <friendshipsLinks></friendshipsLinks>
            <indexFooter></indexFooter>
            <right_nav/>

        </div>
    </template>

    <script>
        import secondHeader from "~/components/secondHeader"
        import schoolHouseHeaderBottom from "~/components/schoolHouseHeaderBottom"
        import right_nav from '~/components/right_nav.vue'
        import friendshipsLinks from '~/components/friendshipsLinks.vue'
        import indexFooter from '~/components/indexFooter.vue'
        import axios from '~/plugins/axios2'
        import qs from "qs"
        import api from '~/mainApi/index'
        import cookies from 'js-cookie'
        export default {
            name: "",
            components: {
                secondHeader,friendshipsLinks,indexFooter,right_nav,schoolHouseHeaderBottom
            },
            data() {
                return {
                    user:{},
                }
            },
            methods:{
                getCookies(){
                    if (cookies.get("userid")) {
                        this.user.userid = cookies.get("userid")
                        this.user.username = cookies.get("username")
                        this.user.userphone = cookies.get("userphone")
                        this.user.userpic = cookies.get("userpic")
                    }
                },
            },
            created(){
                this.getCookies()
            },
        }
    </script>

    <style>


    </style>
