<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件的委派 -->
      <div>
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2">
              <!-- 一级分类地盘 -->
              <div class="item">
                <h3>
                  <a href="#">c1.categoryName</a>
                </h3>
                <!-- 通过JS实现动态行内样式，进行二级、三级分类的显示与隐藏(display:none|block切换的) -->
                <div class="item-list clearfix">
                  <!-- 二级分类 -->
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="#">c2.categoryName</a>
                      </dt>
                      <dd>
                        <!-- 三级分类 -->
                        <em>
                          <a href="#">c3.categoryName</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TypeNav",
    data() {
      return {
        show: true,  // 默认显示
      }
    },

    //不管是Home|Search利用的都是全局组件TypeNav,TypeNav在Home路由与Search路由下状态不一样的。
    //VC身上有一个很值钱的东西$route,这玩意可以让你知道当前TypeNav处于那个路由下
    mounted() {
      //派发action
      //路由切换的时候,路由组件会被销毁重建【子组件不也是】
      if (this.$route.path !== "/home") {
        this.show = false;
      }
    },
  }
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    
    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background-color: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }

            &.active {
              background-color: yellowgreen;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            left: 210px;
            top: 0;
            width: 734px;
            min-height: 460px;
            background-color: #f7f7f7;
            border: 1px solid;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          /* &:hover {
            .item-list {
              display: block;
            }
          }
          */
        }
      }
    }

    /*过渡动画:商品分类 进入阶段*/
    .sort-enter {
      height: 0px;
    }

    .sort-enter-active {
      transition: all 0.3s;
    }
    .sort-enter-to {
      height: 461px;
    }
  }
}
</style>