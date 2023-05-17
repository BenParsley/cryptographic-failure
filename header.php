<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cryptography</title>
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="/css/login.css">
        <link rel="stylesheet" href="/css/crypto-block.css"> 
        <link rel="stylesheet" href="/css/modal2.css"> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/46a7856d38.js" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="../js/update-modal-information2.js"></script>
    </head>
    <body>
        <div class="header-section">
            <div class="header-top">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6 col-md-6">
                            <div class="header-top-left d-flex">
                                <div class="email">
                                    <a class="test" href="mailto:ben.parsley1@hotmail.com"><i class="fa-solid fa-envelope fa-xs"></i>info@benparsley.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="header-top-right d-flex align-items-center justify-content-end">
                                <div class="language-part">
                                <i class="fa fa-globe"></i>
                                <select>
                                    <option>English</option>
                                    <option>普通話</option>
                                    <option>Español</option>
                                    <option>Arabic</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container ">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>    
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav main-menu ml-auto">
                                    <li class="nav-item">
                                        <a  href="index.php">What is Cryptography?</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="cryptographic-failure.php">Cryptographic Failure</a>
                                    </li>
                                    <!-- Need More Work, temporary fix above has been used instead
                                    <li class="menu_has_children"><a href="#">Cryptographic Failure</a>
                                        <ul class="sub-menu">
                                            <li><a href="cryptographic-failure.php">View ALL</a></li>
                                            <li><a href="cryptographic-failure.php">Weak Cryptographic Algorithms</a></li>
                                            <li><a href="cryptographic-failure.php">Key Management</a></li>
                                            <li><a href="cryptographic-failure.php">Random Number Generation</a></li>
                                            <li><a href="cryptographic-failure.php">Interaction Between Cryptographic Operations</a></li>
                                        </ul>
                                    </li>
                                    -->
                                    <li>
                                        <a href="mailto:ben.parsley1@hotmail.com">Contact</a>
                                    </li>
                                    <?php
                                        if(isset($_SESSION["useruid"])){
                                            echo "<li><a href='profile.php'>Profile</a></li>";
                                            echo "<div class='header-join-part'><a href='includes/logout.inc.php'><button type='button' class='btn btn-primary btn-hover' data-toggle='modal' data-target='#signInModal'>Logout</button></a></div>";
                                        }else{
                                            echo "<div class='header-join-part'><a href='login.php'><button type='button' class='btn btn-primary btn-hover' data-toggle='modal' data-target='#signInModal'>Login</button></a></div>";
                                        }
                                    ?>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </body>
</html>