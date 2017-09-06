/**
 * Created by Moon on 2017/7/15.
 */
//姓名认证

//邮箱认证
var email = document.getElementById("email");
var Reg1 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
email.addEventListener("blur",function checkEmail(){
    if(email.value == ""){
        alert("请输入邮箱！");
        email.style.borderColor = "";
    }else{
        if(Reg1.test(email.value)){
            email.style.borderColor = "#5cb85c";
        }
        else{
            email.style.borderColor = "#8b211e";
        }
    }
});

//手机认证
var sellphoneNum = document.getElementById("sellphoneNum");
var Reg2 = /^139+[0-9]{8}/;
sellphoneNum.addEventListener("blur",function checkNum(){
    if(sellphoneNum.value == ""){
        alert("请输入手机号！")
    }else{
        if(Reg2.test(sellphoneNum.value)){
            sellphoneNum.style.borderColor = "#5cb85c";
        }
        else{
            sellphoneNum.style.borderColor = "#8b211e";
        }
    }
});
//提交表单
function check() {
    if(Reg1.test(email.value)&&Reg2.test(sellphoneNum.value)){
        return true
    }else{
          alert('没有按照规定填写！');
          return false;
    }

}
