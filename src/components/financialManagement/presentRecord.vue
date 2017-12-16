<template>
  <div class="memberManagement">
    <div class="selfHeader">
      <span>提现记录</span>
      <el-button type="warning" style="float: right;margin-top: 10px;">刷新</el-button>
    </div>
    <div class="mainBox">
      <div class="header-title">
        <el-form :inline="true" :model="headerForm" class="demo-form-inline">
          <el-form-item label="用户手机号码">
            <el-input placeholder="请输入用户手机号码"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="tableBox">
        <template>
          <el-table
            :data="tableData3"
            height="550"
            border
            :fit="true"
            style="width: 100%;">
            <el-table-column align="center" prop="index" label="序号"></el-table-column>
            <el-table-column align="center" prop="id" label="用户ID"></el-table-column>
            <el-table-column align="center" prop="phoneBind" label="绑定手机号" width="120px"></el-table-column>
            <el-table-column align="center" prop="name" label="姓名"></el-table-column>
            <el-table-column align="center" prop="investmentBank" label="提现银行"></el-table-column>
            <el-table-column align="center" prop="investmentKgb" label="提现跨港宝个数"></el-table-column>
            <el-table-column align="center" prop="investmentMoney" label="提现金额"></el-table-column>
            <el-table-column align="center" prop="investmentSever" label="手续费"></el-table-column>
            <el-table-column align="center" prop="actualAccount" label="实际到账金额"></el-table-column>
            <el-table-column align="center" prop="shoppingPoint" label="购物积分"></el-table-column>
            <el-table-column align="center" prop="gameCoin" label="游戏币"></el-table-column>
            <el-table-column align="center" prop="status" label="状态"></el-table-column>
            <el-table-column align="center" label="操作" width="250px">
              <template slot-scope="scope">
                <el-button type="primary" @click="recharge(scope)" size="mini">充值</el-button>
                <el-button type="warning" @click="getInfo(scope)" size="mini">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>

    <!--新增model-->
    <el-dialog title="新增会员" :visible.sync="addMember.dialogFormVisible">
      <el-form :model="addMember" :rules="addMemberRule" ref="addMember">
        <el-form-item label="会员ID:" :label-width="addMember.formLabelWidth" prop="userId">
          <el-input v-model="addMember.userId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="绑定手机号" :label-width="addMember.formLabelWidth" prop="phoneBind">
          <el-input v-model="addMember.phoneBind" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="代理级别" :label-width="addMember.formLabelWidth">
          <el-select v-model="addMember.agentLevel" placeholder="请选择代理级别">
            <el-option label="省代" value="1"></el-option>
            <el-option label="市代" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推荐人ID" :label-width="addMember.formLabelWidth">
          <el-input v-model="addMember.recommedId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" :label-width="addMember.formLabelWidth" prop="loginPwd" ref="loginPwd">
          <el-input type="password" v-model="addMember.loginPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认登录密码" :label-width="addMember.formLabelWidth" prop="checkLoginPwd">
          <el-input type="password" v-model="addMember.checkLoginPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="交易密码" :label-width="addMember.formLabelWidth" prop="dealPwd" ref="dealPwd">
          <el-input type="password" v-model="addMember.dealPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认交易密码" :label-width="addMember.formLabelWidth" prop="checkDealPwd">
          <el-input type="password" v-model="addMember.checkDealPwd" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addMember.dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addMemberHttp('addMember')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      let checkPhoneBind =(rule, value, callback)=>{
        if (!(/^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/.test(value))){
          callback(new Error('请输入正确的手机号码'))
        }
        callback()
      }
      let checkLoginPwd=(rule, value, callback)=>{
        if(value ==''){
          callback(new Error('请输入登录密码'))
        }
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value))){
          callback(new Error('请输入6-16位字母和汉字组合'))
        }
        callback()
      }
      let checkLoginPwdAgain=(rule, value, callback)=>{
        if(this.addMember.loginPwd!==value){
          callback(new Error('两次输入的登录密码不一致'))
        }
        callback()
      }
      let checkDealPwd=(rule, value, callback)=>{
        if(value ==''){
          callback(new Error('请输入登录密码'))
        }
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value))){
          callback(new Error('请输入6-16位字母和汉字组合'))
        }
        callback()
      }
      let checkDealPwdAgain=(rule, value, callback)=>{
        if(this.addMember.dealPwd!==value){
          callback(new Error('两次输入的交易密码不一致'))
        }
        callback()
      }
      return {
        addMember: {
          dialogFormVisible: false,
          formLabelWidth: '120px',
          userId:'',
          phoneBind:'',
          agentLevel:'',
          recommedId:'',
          loginPwd:'',
          checkLoginPwd:'',
          dealPwd:'',
          checkDealPwd:''
        },
        addMemberRule:{
          userId: [
            { required: true, message: '请输入会员账号', trigger: 'blur' },
            { min: 11, max: 11,type:'number', message: '必须是11位数字', trigger: 'blur' }
          ],
          phoneBind: [{required: true,validator:checkPhoneBind, trigger: 'blur'}],
          loginPwd:[{required: true, validator: checkLoginPwd, trigger: 'blur'}],
          checkLoginPwd:[
            {required: true, validator: checkLoginPwdAgain, trigger: 'blur'}
          ],
          dealPwd:[
            {required: true, validator: checkDealPwd, trigger: 'blur'}
          ],
          checkDealPwd:[
            {required: true, validator: checkDealPwdAgain, trigger: 'blur'}
          ]
        },
        headerForm: {
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          defaultTime: '',
          memLevelDefaultValue: {
            label: '全部'
          },
        },
        tableData3: [{
          index: '1',
          id: 'sadsadsa',
          phoneBind: '18244979393',
          name: '张三',
          investmentBank:'sa12313',
          investmentKgb:'12313',
          investmentMoney:'12313',
          investmentSever:'13',
          actualAccount:'12300',
          shoppingPoint: 10000,
          gameCoin: 1000,
          status: '正常',
        }]
      }
    },
    methods: {
      onSubmit() {
        alert(111)
      },
      addMemberHttp(submitForm){
        let _this=this
        this.$refs[submitForm].validate((valid)=>{
          if(valid){
            _this.addMember.dialogFormVisible = false
            this.$message.success('发送请求')
          }else{
            this.$message.success('验证未通过' )
          }
        })
      },
      recharge(scope){
//        alert('充值'+scope)
        console.log(scope)
      },
      getInfo(scope){
        alert('查看详情'+scope)
      },
    }
  }
</script>
<style lang=scss    type=text/scss    scope>
  .memberManagement {
    h3 {
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid #DFDFDF;
      padding-bottom: 20px;
    }
    .header-title {
      margin-top: 20px;
    }
    .tableBox {
      .el-table {
        margin-top: 40px;
        .el-table__body-wrapper {
          overflow-x: hidden;
          overflow-y: auto;
        }
      }
    }
    .el-dialog__wrapper {
      .el-dialog {
        width: 30%;
        .el-form {
          width: 400px;
        }

      }
    }
  }
</style>
