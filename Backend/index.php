<?php

// Handle AJAX requests
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $action = $_POST['action'];

  if ($action == 'login') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Authentication Logic
    if ($username == 'user' && $password == 'pass') {
      echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
      echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
    }
  }

  if ($action == 'order') {
    $orderDetails = $_POST['orderDetails'];
    // Order Processing
    echo json_encode(['status' => 'success', 'message' => "Order received: $orderDetails"]);
  }
}
?>
