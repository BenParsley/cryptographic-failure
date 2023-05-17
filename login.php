    <?php 
        include_once 'header.php';
    ?>
    <section class="login-section">
        <div class="login-content">
            <h2 class="login-text">Login</h2>
            <p class="login-subtext">New here? <a href="signup.php" class="login-subtext-link ">Create an account here!</a></p>
            <form class="login-form" autocomplete="off" action="includes/login.inc.php" method="post">
                <label class="login-username-text">Username</label>
                <input class="login-username" type="text" name="uid" placeholder="Username/Email...">
                <label class="login-password-text">Password</label>
                <input class="login-password" type="password" name="pwd" placeholder="Password...">
                <button class="login-button" type="submit" name="submit">Login</button>
            </form>

            <?php 
                    if(isset($_GET["error"])){
                        if($_GET["error"] == "required-fields-are-empty"){
                            echo "<p> Fill in all the fields </p>";
                        }
                        else if($_GET["error"] == "wronglogin"){
                            echo "<p> Some of the details entered are invalid, please try again.</p>";
                        }
                    }
                 ?>
        </div>
    </section>
    </body>
</html>