<<template>
    <div>
        <secondHeader :xinXi="user"></secondHeader>
        <secondHeaderBottom></secondHeaderBottom>
        <nuxt/>
        <friendshipsLinks></friendshipsLinks>
        <indexFooter></indexFooter>
        <right_nav/>

    </div>
</template>

<script>
    import secondHeader from "~/components/secondHeader"
    import secondHeaderBottom from "~/components/secondHeaderBottom"
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
            secondHeader,friendshipsLinks,indexFooter,right_nav,secondHeaderBottom
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
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    /* 清除浮动*/
    .clearfix{
        clear: both;
        content: "";
        overflow: hidden;
    }
    /* 浮动*/
    .fleft {
        float: left;

    }
    .fright{
        float: right;
    }
    .mt-20{
        margin-top: 20px;
    }

</style>
