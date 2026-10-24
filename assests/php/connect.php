<?php

    $userName = $_POST['userName'];
    $passWord = $_POST['passWord'];
    $rememberme = $_POST['rememberme'];

    //database connection


    $conn = new mysqli('localhost','root','','coffeenation_india.login_info');
    if ( $conn-> connect_error ){
        die("connection failed:".$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(userName,passWord,rememberme) values(?,?,?)");
        $stmt->bind_param("sss",$userName,$passWord,$rememberme);
        $stmt->execute();
        echo"Login Successful" ;
        $stmt->close();
        $conn->close();
    }

?>