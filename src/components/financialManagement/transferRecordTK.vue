<template>
  <div class="memberManagement">
    <div class="selfHeader">
      <span>TK币转账记录</span>
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
            <el-table-column align="center" prop="toUserId" label="转TK币到用户ID"></el-table-column>
            <el-table-column align="center" prop="num" label="数量"></el-table-column>
            <el-table-column align="center" prop="remittanceDate" label="转出日期"></el-table-column>
            <el-table-column align="center" prop="arrivalSK" label="到账SK币？？？"></el-table-column>
            <el-table-column align="center" prop="status" label="状态"></el-table-column>
            <el-table-column align="center" label="操作" width="250px">
              <template slot-scope="scope">
                <el-button type="primary" @click="passFunc(scope)" size="mini">通过</el-button>
                <el-button type="warning" @click="deleteFunc(scope)" size="mini">删除</el-button>
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
          remittanceTotal:100,
          audited:4,
          unAudited:96
        },
        tableData3: [{
          index: '1',
          id: 'sadsadsa',
          phoneBind: '18244979393',
          toUserId: '21321',
          num: '111',
          remittanceDate: '2017-12-16',
          arrivalSK: 1000,
          status: '正在审核',
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
      passFunc(scope){
//        alert('充值'+scope)
        console.log(scope)
      },
      deleteFunc(scope){
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
