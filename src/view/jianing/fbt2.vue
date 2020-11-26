<template>
  <div style="padding-right: 5vw;display: flex;justify-content: space-between;">
    <div style="width:57%;display:inline;float:left;">
    <EditForm
      v-if="infos.length"
      :infos="infos"
      :operateType="operateType"
      :submitText="submitText"
      :submitShow="false"
    />
    </div>
 <div style="padding-left: 80px;">
      <!-- <div class="radio-group" v-for="(radioMap, i) of radioMatrix" :key="i">
        <div
          :class="`active${radio.count}`"
          v-for="(radio, j) of radioMap.list"
          :key="j"
          @click="toggle(radio, radioMap)"
        ></div>
        <div class="radio-all" :class="`active${radioMap.count}`" @click="toggleAll(radioMap)"></div>
      </div>-->

      <template v-for="(radioMap, i) of radioMatrix">
        <div class="child-border" v-if="i % 6 === 0" :key="`border-${i}`">子框{{i / 6 + 1}}</div>
        <div class="radio-group" :key="i">
          <div
            :class="`active${radio.count}`"
            v-for="(radio, j) of radioMap.list"
            :key="j"
            @click="toggle(radio, radioMap)"
          ></div>
          <div class="radio-all" :class="`active${radioMap.count}`" @click="toggleAll(radioMap)"></div>
        </div>
      </template>
    </div>
    <Spin size="large" fix v-if="spinShow">
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
      <div>正在生成中...</div>
    </Spin>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm/index'
export default {
  name: 'kmlManage',
  components: {
    EditForm
  },
  data () {
    return {
      operateType: 'edit',
      submitText: '上传',
      infos: [],
      types: 2,
      radioMatrix: [
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        },
        {
          total: 0,
          count: 0,
          list: [
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 },
            { remark: 'oneline', total: 0, count: 0 }
          ]
        }
      ]
    }
  },
  mounted () {
    this.infos = [
      // {
      //   label: '姓名',
      //   key: 'name',
      //   value: 'ziChin',
      //   colSpan: 24,
      //   rules: true
      // },
      {
        label: '上传图片',
        key: 'fileList',
        type: 'upload',
        fileType: ['.kml'],
        extraParam: {
          radioMatrix: this.radioMatrix,
          types: this.types
        },
        multiple: true,
        value: []
      }
    ]
  },
  methods: {
    toggle (o, radioMap) {
      o.total++
      o.count = o.total % 3
      if (radioMap.list.every(e => e.count === o.count)) {
        radioMap.total = o.total
        radioMap.count = o.count
      }
    },
    toggleAll (radioMap) {
      radioMap.total++
      radioMap.count = radioMap.total % 3
      radioMap.list.map(o => {
        o.total = radioMap.total
        o.count = radioMap.count
      })
    }
  }
}
</script>

<style lang="" scoped>
.child-border {
  border: 1px solid;
  margin-bottom: -210px;
  height: 228px;
  line-height: 236px;
  margin-left: -80px;
  text-indent: 10px;
  font-size: 16px;
}
.radio-group {
  display: flex;
  margin-bottom: 20px;
}
.radio-group > div {
  border: 2px solid;
  width: 16px;
  height: 16px;
  line-height: 10px;
  text-align: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  box-sizing: border-box;
  color: #444;
  /* background-color: #444; */
}
.radio-group > div.active1 {
  color: #ed4014;
  background-color: #ed4014;
}
.radio-group > div.active2 {
  color: silver;
  background-color: silver;
}
/* .radio-group > div.active1::before,
.radio-group > div.active2::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid;
} */

.radio-group > .radio-all {
  margin-left: 40px;
  color: black;
  /* background-color: black; */
}
.radio-group > .radio-all.active1 {
  color: #d90000;
  background-color: #d90000;
}
.radio-group > .radio-all.active2 {
  color: gray;
  background-color: gray;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
</style>
