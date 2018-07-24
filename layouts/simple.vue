<<template>
    <div>
        <div>
            <indexHeader :xinXi="user"></indexHeader>
            <div class="content">
                <nuxt/>
            </div>
            <friendshipsLinks></friendshipsLinks>
            <indexFooter></indexFooter>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios2'
    import qs from "qs"
    import api from '~/mainApi/index'
    import indexHeader from '~/components/indexHeader'
    import friendshipsLinks from '~/components/friendshipsLinks.vue'
    import indexFooter from '~/components/indexFooter.vue'
    import cookies from 'js-cookie'
    export default {
        name: "details",
        components: {
            indexHeader,friendshipsLinks,indexFooter,
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
    .content{
        width: 1100px;
        margin: 0 auto;
    }
</style>
