<template>
  <!-- eslint-disable vue/no-parsing-error -->
  <div>
    <!-- 导航栏 -->
    <Menu class="nav-box" mode="horizontal" theme="primary" active-name="1">
      <Row>
        <Col span="12">
          <MenuItem name="logo" style="font-size: 20px">{{logo}}</MenuItem>
        </Col>
        <Col span="12" class="flex-right">
          <Submenu name="1">
            <template slot="title">
              <Avatar style="background-color: #87d068;padding-left: 7px;" icon="ios-person" />
              <span v-if="info">&nbsp;&nbsp;{{info.name}}&nbsp;&nbsp;</span>
            </template>
            <MenuItem name="1-1" @click.native="$emit('logout')">登出</MenuItem>
          </Submenu>
        </Col>
      </Row>
    </Menu>
    <Layout class="container">
      <!-- 布局：菜单栏 -->
      <Sider
        v-show="menuName"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
        :class="['menu-item', {'collapsed-menu' : isCollapsed}]"
        width="230"
        style="height: 100%;"
      >
        <Menu class="menu-box" theme="dark" :active-name="menuName" @on-select="jump" ref="menu">
          <div v-for="(menu1, i1) in infos" :key="i1">
            <Submenu :name="menu1.name" v-show="!menu1.hidden" v-if="menu1.children">
              <template slot="title">
                <Icon :type="menu1.icon" />
                <span>{{menu1.label}}</span>
              </template>
              <div v-for="(menu2, i2) in menu1.children" :key="i2">
                <Submenu :name="menu2.name" v-show="!menu2.hidden" v-if="menu2.children">
                  <template slot="title">
                    <Icon :type="menu2.icon" />
                    <span>{{menu2.label}}</span>
                  </template>
                  <MenuItem
                    :name="menu3.name"
                    v-for="(menu3, i3) in menu2.children"
                    :key="i3"
                    v-show="!menu3.hidden"
                  >
                    <Icon :type="menu3.icon" />
                    <span>{{menu3.label}}</span>
                  </MenuItem>
                </Submenu>
                <MenuItem :name="menu2.name" v-show="!menu2.hidden" v-else>
                  <Icon :type="menu2.icon" />
                  <span>{{menu2.label}}</span>
                </MenuItem>
              </div>
            </Submenu>

            <MenuItem :name="menu1.name" v-show="!menu1.hidden" v-else>
              <Icon :type="menu1.icon" />
              <span>{{menu1.label}}</span>
            </MenuItem>
          </div>
        </Menu>
      </Sider>
      <!-- 布局：主页面（面包屑 + 主页面） -->
      <Layout class="layout-box">
        <Breadcrumb class="bread" v-if="menuLabel !== `首页`">
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem>{{menuLabel}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="main">
          <slot></slot>
        </div>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  props: {
    info: {
      type: Object,
      default: Object,
    },
    infos: {
      type: Array,
      // [{name, label, icon}]
      default: () => [],
    },
    logo: {
      type: String,
      default: "LOGO",
    },
  },
  computed: {
    menuName: {
      set: (v) => v,
      get() {
        return this.$route.name;
      },
    },
    menuLabel() {
      return this.$route.meta.name;
    },
  },
  watch: {
    menuName(v) {
      let num = v.slice(-1);
      let menu = this.$refs.menu;
      if (num > 0) {
        let _openNames = menu.openedNames;
        let _curMenu = `data-${num}`;
        if (!_openNames.includes(_curMenu)) {
          _openNames.push(_curMenu);
          if (!_openNames.includes("data")) {
            _openNames.push("data");
          }
          this.$nextTick(() => {
            menu.updateOpened();
          });
        }
      }
    },
  },
  methods: {
    jump (name) {
      this.menuName = name

      this.$router.push({ name })
    }
  }
}
</script>

<style scoped>
  .nav-box{
    background: #515a6e;
  }
.flex-right {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
.container {
  height: calc(100vh - 60px);
  overflow: hidden;
  clear: both;
}
.container .menu-box {
  height: 100%;
  overflow: auto;
}
.container .menu-flod {
  margin-top: -50px;
  text-align: center;
  bottom: 0;
  position: absolute;
  width: 100%;
  line-height: 50px;
  cursor: pointer;
}
.container .layout-box {
  height: 100%;
  background-color: white;
}
.container .layout-box .bread {
  line-height: 40px;
  height: 40px;
  overflow: hidden;
  margin: 0 20px;
  padding: 0 10px;
  border-bottom: 1px solid silver;
}
.container .layout-box .main {
  height: calc(100% - 50px);
  padding: 20px 30px;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
  overflow: hidden;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
