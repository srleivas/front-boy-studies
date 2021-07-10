<?php
  function openCon () {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "LoginsDB";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connection Failed: %s\n". $conn -> error);

    return $conn;
  }

  function createDb ($conn, $dbname) {
    $sql = "CREATE DATABASE ". $dbname;
    if ($conn->query($sql) === true) {
      echo "Database ". $dbname . " create!";
    }
    else {
      echo $conn->error;
    }
  }

  function dropDb ($conn, $dbname) {
    $sql = "DROP DATABASE ". $dbname;
    echo "Database ". $dbname . " dropped!";
    $conn->query($sql);
  }

  function dropTable ($conn, $tablename) {
    $sql = "DROP TABLE ". $tablename;
    echo "Table ". $tablename . " dropped!";
    $conn->query($sql);
  }

  function createTable ($conn, $tableName) {
    $createTable = "CREATE TABLE " . $tableName . " (
      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(30) NOT NULL UNIQUE,
      psw VARCHAR(30) NOT NULL UNIQUE,
      reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )";

      if ($conn -> query($createTable) === TRUE) {
        echo "Table Created";
      }
      else {
        echo "Error: " . $conn -> error;
      }
  }

  function closeCon ($conn) {
    $conn -> close();
  }

?>