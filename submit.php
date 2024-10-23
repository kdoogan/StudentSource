<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name =  htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);

    if (empty($name)) {
        header('Location: /Assignment%201%20/submit.php');
        exit(); // Exit after redirecting to prevent further execution
    }

    // Echo the form data
    echo "This is the data which was entered";
    echo "<br>";
    echo htmlspecialchars_decode($name);
    echo "<br>";
    echo htmlspecialchars_decode($email);
    echo "<br>";
    echo htmlspecialchars_decode($phone);

    // Don't redirect after echoing the data
    // header('Location: /Assignment%201%20/submit.php');

} else {
    header('Location: /Assignment%201%20/submit.php');
}

?>
