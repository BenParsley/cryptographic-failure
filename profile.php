<?php 
        include_once 'header.php';
    ?>
    <section class="login-section">
        <div class="login-content">
            <?php 
                if(isset($_SESSION["useruid"])){
                    echo "<p style='margin-top: 0; text-align: center; font-size: 30px; padding-top: 150px'>Hello there " . $_SESSION["useruid"] . "</p>";
                }
                ?>
        </div>
    </section>
    </body>
</html>

margin-top: 0;
    text-align: center;
    font-size: 30px;
    padding-top: 150px;