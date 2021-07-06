function showLoginForm(){
    //檢查登入bar面版上 spanLogin 的字是登入或登出
    //如果是登入，就顯示登入用的燈箱(lightBox)
    if(document.getElementById("spanLogin").innerText == ""){
      document.getElementById("lightBox").style.display = "block";
    }
    //如果是登出
          //將登入bar面版上，登入者資料清空 
          //spanLogin的字改成登入
          //將頁面上的使用者資料清掉      <----- 0.0????
    else{
      document.getElementById("memName").innerText = "";
      document.getElementById("spanLogin").innerText = "";
    }
  
  }//showLoginForm
  
  function sendForm(){
    //帳號必須是 Sara , 密碼是 111
   
    //帳密錯誤
      //顯示 帳密錯誤 訊息
    if(document.getElementById("memId").value != "jonathan" || document.getElementById("memPsw").value != 111){
      window.alert("Error Information！");
    }
    //登入成功
      //登入bar面版上 memName 的字改成會員匿稱
      
      //登入bar面版上 spanLogin 的字改成登出
      
      //將登入表單上的資料清空，並隱藏起來
    else{
      document.getElementById("memName").innerText = "Jonathan";
      document.getElementById("spanLogin").innerText = "登出";
      document.getElementById("memId").value = "";
      document.getElementById("memPsw").value = "";
      document.getElementById("lightBox").style.display = "none";
    }
  }
  
  function cancelLogin(){
    //將登入表單上的資料清空，並將燈箱隱藏起來
    document.getElementById("memId").value = "";
    document.getElementById("memPsw").value = "";
    document.getElementById("lightBox").style.display = "none";
  }
  

  //show點擊影片跳出
  function showVideo(){

		document.getElementById("video").style.display = "block";
    // document.getElementsByTagName("body")[0].onclick = closeVideo;
  }

  // function closeVideo(){
	// 	document.getElementById("video").style.display = "none";
  // }

  function init(){
    //===設定spanLogin.onclick 事件處理程序是 showLoginForm
    document.getElementById("spanLogin").onclick = showLoginForm;
    //===設定btnLogin.onclick 事件處理程序是 sendForm
    document.getElementById("btnLogin").onclick = sendForm;
    //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
    document.getElementById("btnLoginCancel").onclick = cancelLogin;
  
    for(var i=0;i<=29;i++){
      document.getElementsByClassName("grid-play")[i].onclick = showVideo;
			} 
  
     
  
  
  }; //window.onload
  




  window.onload=init;