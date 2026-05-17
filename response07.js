
const http = require("http");
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
resp.write(`
    
    
    
    
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="CSS/01style.css">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>



  <style>
  
  
  
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body { 
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
   background-image: url("https://www.agrivi.com/wp-content/uploads/2014/10/wepik-photo-mode-2022722-16315.jpeg"); 
  background-size: cover;
  background-position: center;
}
#log{
    font-size: small;
  text-decoration: none;
  color:white;
}
.container {
  width: 380px;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 1s ease-in;
}

.container h1 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
}

.container p {
  .container { max-width: 90%; }
  font-size: 14px;
  color: #333;

  margin-bottom: 25px;
}

.input-box {
  width: 100%;
  margin-bottom: 15px;
  position: relative;
}

.input-box input {
  width: 100%;
  padding: 12px;
  padding-left: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
}

.input-box input:focus {
  border-color: #764ba2;
  box-shadow: 0 0 6px rgba(118, 75, 162, 0.4);
}

.input-box i {
 
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}


.btn {


  width: 100%;
  padding: 12px;
  background: #764ba2;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0 4px 10px rgba(118, 75, 162, 0.4);
}

.btn:hover {
  background: #5e3c91;
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(118, 75, 162, 0.6);
}

.link {
  margin-top: 15px;
  font-size: 14px;
}

.link a {
  color: #764ba2;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.link a:hover {
  color: #5e3c91;
  text-decoration: underline;
}

#forgot{ font-size: small;
  text-decoration: none;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0);}
}

  
  
  
  
  </style>
</head>
<body>

  <div class="container">


   <h1>Welcome to Ferti_Seva🌿</h1>
        <p > login to your account</p>

    <form action="#">
      <div class="input-box">
        <i class="fas fa-envelope"></i>
        <input type="email" placeholder="Email" required>
      </div>
      <div class="input-box">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" required>
      </div>
      <!-- <button type="submit" class="btn"><a id="log" onclick="window.location.href='3homepage.html'">Login</a></button> -->

      <!-- <button type="submit" class="btn"><a   id="log" onclick="window.location.href='3homepage.html'">Login</a> </button> -->
     <button type="submit" class="btn" onclick="window.location.href='3homepage.html'">Login</button>

      <div class="forgot">
         <a id="forgot" href="6forgot.html"> forgot password</a> 
      </div>
      <div class="link">
      <p>Don't have an account? <a href="2form.html"> Sign up</a></p>

      
      </div>

    </form>
  </div>

</body>
</html>

    
    
    `)
    resp.end(" ");

}).listen(4900);