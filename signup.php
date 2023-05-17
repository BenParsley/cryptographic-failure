    <?php 
        include_once 'header.php';
    ?>
    <section class="login-section">
        <div class="signup-content">
                <h2 class="login-text">Create an account!</h2>
                <br>
                <form class="login-form" autocomplete="off" action="includes/signup.inc.php" method="post">
                    <input class= "login-username" type="text" name="name" placeholder="Full Name...">
                    <input class= "login-username" type="text" name="email" placeholder="Email...">
                    <input class= "login-username" type="text" name="uid" placeholder="Username...">
                    <input class= "login-username" type="password" name="pwd" placeholder="Password...">
                    <input class= "login-username" type="password" name="pwdRepeat" placeholder="Repeat Password...">
                    <button class="login-button" type="submit" name="submit">Create Account!</button>
                </form>
                <?php 
                    if(isset($_GET["error"])){
                        if($_GET["error"] == "required-fields-are-empty"){
                            echo "<p>One or more of the fields were empty, Please try again. </p>";
                        }
                        else if($_GET ["error"] == "invaliduid"){
                            echo "<p>The username you have already is invalid, Please try another username. </p>";
                        }
                        else if($_GET ["error"] == "invalidemail"){
                            echo "<p>The email that you have entered is invalid. Pleasae try again.</p>";
                        }
                        else if($_GET ["error"] == "passwordsdontmatch"){
                            echo "<p>The Passwords do not match, Please try again. </p>";
                        }
                        else if($_GET ["error"] == "usernametaken"){
                            echo "<p> The username you have already entered has been used, Please try another username. </p>";
                        }
                        
                        else if($_GET ["error"] == "stmtfailed"){
                            echo "<p> Something went wrong... Please Try Again.</p>";
                        }
                        else if($_GET ["error"] == "none"){
                            echo "<p> You have successfully made an account! </p>";
                        }
                    }
                 ?>
        </div>
    </section>
</body>
</html>