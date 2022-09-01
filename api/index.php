<?php
header('Access-Control-Allow-Origin: *');
// header('Content-type: application/json; charset=utf-8');

	
    $method = $_SERVER['REQUEST_METHOD'];
    $querys = $_SERVER['REQUEST_URI'];
    // $query = $_SERVER['QUERY_STRING'];
        // echo $query;
    // parse_str($query, $arr_id);
    // echo $arr_id['id'];
    // echo stristr($query, '=');

    $param = explode('/', $querys);
		$config = require 'db_config.php';
    $db = new PDO('mysql:host='.$config['host'].';dbname='.$config['name'].'', $config['user'], $config['password']);
    if ($method === 'GET') {
      if ($param[3] === 'authors') {
        $sql = 'SELECT * from author';
        $prep = $db->prepare($sql);
        $prep->execute();
        $db_data = $prep->fetchAll(PDO::FETCH_ASSOC);
        $res = json_encode($db_data, JSON_UNESCAPED_UNICODE);
        // echo $res[0];
        echo $res;
      }
      if ($param[3] === 'shelf') {
        $sql = 'SELECT * from shelf';
        $prep = $db->prepare($sql);
        $prep->execute();
        $db_data = $prep->fetchAll(PDO::FETCH_ASSOC);
        $res = json_encode($db_data, JSON_UNESCAPED_UNICODE);
        echo $res;

      }
      if ($param[3] === 'author') {
        if (isset($param[4])) {
          if (isset($param[5])) {
            if ($param[5] === 'book') {
              if (isset($param[6])) {
                $id = $param[4];
                $bookId = $param[6];
                $sql = 'SELECT * from book JOIN shelf ON book.shelf_id = shelf.id where book.author_id = ? and book.id = ?';
                $prep = $db->prepare($sql);
                $prep->execute(array($id, $bookId));
                $db_data = $prep->fetchAll(PDO::FETCH_ASSOC);
                $res = json_encode($db_data['0'], JSON_UNESCAPED_UNICODE);
                echo $res;
              } else {
                http_response_code(404);
                $res = [
                  'status' => false,
                  'message' => 'not found'
                ];
                echo json_encode($res, JSON_UNESCAPED_UNICODE);
              };  
            } else echo 'not book/books';
          } else {
            $id = $param[4];
            $sql = 'SELECT * from book where book.author_id = ?';
            $prep = $db->prepare($sql);
            $prep->execute(array($id));
            $db_data = $prep->fetchAll(PDO::FETCH_ASSOC);
            $res = json_encode($db_data, JSON_UNESCAPED_UNICODE);
            echo $res;
          }  
        } 
      }   
    }
    if ($method === 'POST') {
      if ($param[3] === 'newbook') {
        $data = file_get_contents('php://input');
        $data = json_decode($data, true);
        if (isset($data['shelf']) && isset($data['place']) && isset($data['name']) && isset($data['author_id'])) {
          $shelf = $data['shelf'];
          $place = $data['place'];
          $name = $data['name'];
          $author = $data['author_id'];
          $sql_shelf = 'SELECT id, isTaken FROM `shelf` WHERE shelf = ? and place = ?';
          $prep_shelf = $db->prepare($sql_shelf);
          $prep_shelf->execute(array($shelf, $place));
          $data_shelf = $prep_shelf->fetchAll(PDO::FETCH_ASSOC);
          $id_shelf = $data_shelf['0']['id'];
          if (!$data_shelf['0']['isTaken']) {
            $sql1 = 'INSERT INTO `book`(`id`, `name`, `author_id`, `shelf_id`) VALUES (UUID(), ?, ?, ?)';
            $prep = $db->prepare($sql1);
            $prep->execute(array($name, $author, $id_shelf));
            $sql_shelf = 'UPDATE `shelf` SET `isTaken`=1 WHERE id = ?';
            $prep = $db->prepare($sql_shelf);
            $prep->execute(array($id_shelf));
            http_response_code(201);
            $res = [
              "status" => true,
              "massege" => 'book is added'
            ];
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
          } else {
            http_response_code(404);
            $res = [
              'status' => false,
              'message' => 'place is taken'
            ];
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
          }; 
        } else {
          http_response_code(404);
            $res = [
              'status' => false,
              'message' => 'body is wrong'
            ];
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        }

        
      }
      if ($param[3] === 'newauthor') {
        if (isset($data['name'])) {
          $data = file_get_contents('php://input');
          $data = json_decode($data, true);
          $name = $data['name'];
          $sql1 = 'INSERT INTO `author`(`id`, `name`) VALUES (UUID(),?)';
          $prep = $db->prepare($sql1);
          $prep->execute(array($name));
          http_response_code(201);
          $res = [
            "status" => true,
            "massege" => 'author is added'
          ];
          echo json_encode($res, JSON_UNESCAPED_UNICODE);
        } else {
          http_response_code(404);
            $res = [
              'status' => false,
              'message' => 'body is wrong'
            ];
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        
      } 
      
    }
    }

// SELECT * from book JOIN shelf ON book.shelf_id = shelf.id where book.author_id = '11b34fc4-14cc-11' and book.id = 'a9d47e74-1678-11';
// {
//   "name": "Miss Betty",
//   "shelf": 0,
//   "place": 0,
//   "isTaken": 1
// }