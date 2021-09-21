// // /* globals Chart:false, feather:false */
// <?php
// include "connection.php";
//
// $dbname = 'school_ITSH';
// $myquery = "
//   SELECT * FROM  `options`
//   ";
// $q = mysqli_query($connect, $myquery);
//
// $result = mysqli_query($connect, "SELECT * FROM `options`");
// while ($output = mysqli_fetch_assoc($result)) {
//   $num = $output['temp'];
//
// ?>
var popCanvas = document.getElementById("popChart");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: {
    labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
    datasets: [{
      label: 'Population',
      data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ]
    }]
  }
});
// const dataLine = {
//   type: "line",
//   data: {
//     labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
//     datasets: [{
//       label: "Traffic",
//       data: [3234, 2234, 3234, 1234],
//       borderColor: "#4285F4",
//       backgroundColor: "#4285F4",
//       fill: false,
//     }, ],
//   },
// };
//
// new mdb.Chart(document.getElementById("chart-line"), dataLine);
