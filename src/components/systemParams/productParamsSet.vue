<template>
  <div>
    <div class="selfHeader">
      <span>产品参数设置</span>
      <el-button type="warning" style="float: right;margin-top: 10px;">刷新</el-button>
    </div>
    <div class="mainBox">
      <el-row>
        <el-col :span="4">
          <div class="paramsName">
            <ul>
              <li><h3>设置项</h3></li>
              <li style="height: 240px;line-height:240px;">产品设置</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="productOptions">
            <ul style="border-left: 1px solid #000">
              <li style="border: 0;margin-top: 0;"><h3>参数</h3></li>
              <li>
                项目名称<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资金额<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                每人投资次数限制<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                总次数<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的SK币<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的TK币<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li>
                项目名称<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资金额<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                每人投资次数限制<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                总次数<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的SK币<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的TK币<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li>
                项目名称<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资金额<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                每人投资次数限制<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                总次数<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的SK币<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的TK币<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li style="margin-bottom: 0;border-bottom: 0;">
                项目名称<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资金额<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                每人投资次数限制<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                总次数<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的SK币<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                投资所需的TK币<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        memberRecommedNum:54
      }
    }
  }
</script>
<style lang=scss  type=text/scss  scope>
  .mainBox {
    .el-row {
      border: 1px solid #000;
      text-align: center;
      .paramsName {
        li {
          margin: 10px 0;
          height: 40px;
          line-height:40px;
          h3 {
            font-size:16px;
            font-weight:700;
          }
        }
      }
      .productOptions{
        li {
          margin: 10px 0;
          border-bottom: 1px solid #000;
          height:60px;
          line-height:60px;
          h3 {
            font-size:16px;
            font-weight:700;
          }
          .el-input {
            display: inline-block;
            width:100px;
            input {
              margin-left:10px;
            }
          }
        }
      }
    }
  }
</style>
