<?php
// print_r(htmlspecialchars($_GET["name"]));
$url = (isset($_GET['q'])) ? $_GET['q'] : '';
echo $url . 'ddd';
$dbconn = pg_connect("host=ec2-63-35-156-160.eu-west-1.compute.amazonaws.com port=5432 dbname=doruhpjqqq00s user=uxwabmdbzpptkw password=f9269251c38ab643df16d186fda812742d83ae015ecc6bf4ddbdf55ccac6142e");
if ($dbconn) {
  // print_r(var_dump($_GET));
//   print_r('fffff');
  $result = pg_query($dbconn, "SELECT id,name FROM book");
if ($result) {
  for ($row = 0; $row < pg_num_rows($result); $row++) {
  $id = pg_fetch_result($result, $row, 'id');
  echo $id ." ";
  $name = pg_fetch_result($result, $row, 'name');
  echo $name ." ";
  echo "\n";
  }
  } else {
    echo "The query failed with the following error:<br>";
  }
}

?>