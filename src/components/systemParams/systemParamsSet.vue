<template>
  <div>
    <div class="selfHeader">
      <span>系统参数设置</span>
      <el-button type="warning" style="float: right;margin-top: 10px;">刷新</el-button>
    </div>
    <div class="mainBox">
      <el-row>
        <el-col :span="8">
          <div class="paramsName">
            <ul>
              <li><h3>设置项</h3></li>
              <li>推荐人</li>
              <li>静态收益</li>
              <li>跨港宝价值</li>
              <li>跨港宝最大值</li>
              <li>推荐奖励</li>
              <li>直推小区封顶设置</li>
              <li style="height: 80px;line-height:100px;">转账提现</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="paramsOptions">
            <ul style="border-left: 1px solid #000">
              <li><h3>参数</h3></li>
              <li>
                会员直推人数<el-input v-model="memberRecommedNum" type="text"></el-input>
                计算动态收益人数<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li>
                静态收益百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li>
                一个跨港宝价值<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li>杠杆收益倍数<el-input v-model="memberRecommedNum" type="text"></el-input></li>
              <li>
                直接推荐人获得投资推荐百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                间接推荐人获得投资推荐百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input>
              </li>
              <li style="height: 80px;line-height:50px;margin-bottom: 0;padding-bottom: 20px;">单线最高获得跨港宝百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                复投第二个单线最高获得跨港宝百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input><br/>
                复投第三个单线最高获得跨港宝百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                复投第四单线最高获得跨港宝百分比(%)<el-input v-model="memberRecommedNum" type="text"></el-input></li>
              <li style="height: 80px;line-height:50px;margin-bottom: 0;padding-bottom: 20px;">
                每笔提现<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                每日提现<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                每月提现<el-input v-model="memberRecommedNum" type="text"></el-input><br/>
                手续费(%)<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                最低提现限额<el-input v-model="memberRecommedNum" type="text"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;
                转帐倍数<el-input v-model="memberRecommedNum" type="text"></el-input>
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
      .paramsOptions{
        li {
          margin: 10px 0;
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
