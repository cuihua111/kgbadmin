<template>
  <div>
    <div class="selfHeader">
      <span>系统数据统计</span>
      <el-button type="warning" style="float: right;margin-top: 10px;">退出</el-button>
    </div>
    <div class="mainBox">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>注册用户总数</p>
            <span v-text="registerTotal"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>充值总额</p>
            <span v-text="rechargeTotal"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>提现总额</p>
            <span v-text="withdrawalsTotal"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>跨港宝个数</p>
            <span v-text="kgbTotal"></span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>SK币总数</p>
            <span v-text="SKTotal"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>TK币总数</p>
            <span v-text="TKTotal"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>静态收益</p>
            <span v-text="staticIncome"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>动态收益</p>
            <span v-text="dynamicIncome"></span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>总投资金额</p>
            <span v-text="investmentTotal"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>商城积分</p>
            <span v-text="shopIntegral"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>游戏币</p>
            <span v-text="gameCoin"></span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      registerTotal:10000,
      rechargeTotal:10000,
      withdrawalsTotal:10000,
      kgbTotal:10000,
      SKTotal:10000,
      TKTotal:10000,
      staticIncome:10000,
      dynamicIncome:10000,
      investmentTotal:10000,
      shopIntegral:10000,
      gameCoin:10000,
    }
  }
}
</script>
<style lang=scss  type=text/scss  scope>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    padding:20px 0;
    border-radius: 4px;
    .bg-purple {
      background: #d3e6d2;
      text-align: center;
      p {
        padding:10px 0;
      }
      span {
        display: inline-block;
        padding:30px 0;
      }
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
  }
</style>
