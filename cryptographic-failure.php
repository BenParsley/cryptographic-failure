    <?php 
        include_once 'header.php';
    ?>
    <!--Splashscreen-->
    <section class="banner-selection">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content-area">
                        <div class="banner-content text-center">
                            <div class="banner-text-content">
                                <h2 class="banner-title">Cryptographic Failure!</h2>
                                <span class="banner-sub-title">A Collection of CVE<span class="text-lowercase">s</span></span>
                            </div>
                            <div class="banner-image anim-bounce">
                                <img class="behind-content" src="../img/general/background-banner.png" alt="[ERROR]background-banner-not-found">
                            </div>
                            <div class="arrow-down" id="section-one-movement">
                                <a href="#section-one-movement">
                                    <i class="icon fa-solid fa-circle-chevron-down fa-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Work in Progress 
    <section>
        <div class="search-area">
            <div class="container medium-container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="search-wrapper">
                            <form class="search-form" autocomplete="off">
                                <input type="text" name="user_input-search-text" class="search-text" placeholder="Search For CVEs">
                                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i><span style="padding-left: 15px">Search</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    -->
    <section class="main-content" id="#section-one-movement">
        <div class="container">
            <div class="crypto-blocks">
                <div class="crypto-block">  
                    <div class="row">
                        <div class="col-lg block-container ">
                            <h4 class="block-title">Weak Encoding for Password</h4>
                            <div class="block-content">
                                <p>Encoding a password with trivial and predictable encoding does not protect the password.</p>
                            </div>
                            <a href="#" id="block-1" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Imporper Following of a Certificate's Chain of Trust</h4>
                            <div class="block-content">
                                <p>
                                    The software does not follow, or incorrectly follows, the chain of trust for a certificate back to a trusted root certificate,
                                    resulting in incorrect trust of any resource that is associated with that certificate.
                                </p>
                            </div>
                            <a href="#" id="block-2" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Cryptographic Issues</h4>
                            <div class="block-content">
                                <p>
                                    Frequently this deals with the use of encoding techniques, encryption libraries, and hasing algorithms.
                                    The weaknesses in this category could lead to a degradation of hte quality data if they are not addressed.
                                </p>
                                <a href="#" id="block-3" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Cleartext Transmission of Sensitive Information</h4>
                            <div class="block-content">
                                <p>The software transmits sensitive or security-critical data in cleardata in a communicational channel that can be sniffed by unauthorized actors.</p>
                            </div>
                            <a href="#" id="block-4" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of Hard-coded Cryptographic Key</h4>
                            <div class="block-content">
                                <p>The use of a hard-coded cryptographic key significantly increases the possibility that encypted data may be recovered.</p>
                            </div>
                            <a href="#" id="block-5" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Key Exchange without Entity Authentication</h4>
                            <div class="block-content">
                                <p>The software performs a key exchange with an actor without verifying the identity of that actor.</p>
                            </div>
                            <a href="#" id="block-6" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Reusing a Nonce, Key Pair in Encryption</h4>
                            <div class="block-content">
                                <p>Nonces should be used for the present occasion and only once.</p>
                            </div>
                            <a href="#" id="block-7" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of a Key Past its Expiration date</h4>
                            <div class="block-content">
                                <p>
                                    The product uses a cryptographic key or password past its expiration date, which diminishes its safety significantly
                                    by increasing the time window for cracking attacks against that key.
                                </p>
                            </div>
                            <a href="#" id="block-8" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Missing Required Cryptographic Step</h4>
                            <div class="block-content">
                                <p>
                                    The product does not implement a required step in a cryptographic algorithm, resulting in a weaker encryption
                                    than advertised by the algorithm.
                                </p>
                            </div>
                            <a href="#" id="block-9" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Inadequate Encryption Stength</h4>
                            <div class="block-content">
                                <p>
                                    The software stores and transmits sensitive data using an encryption schema that is theoretically sound,
                                    but is not strong enough for the level of protection required. 
                                </p>
                            </div>
                            <a href="#" id="block-10" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of a Broken or Risky cryptographic Algorithm</h4>
                            <div class="block-content">
                                <p>
                                    The use of a broken or risky cryptographic algorithm is an unnecessary risk that may reuslt in the exposure of
                                    sensitive information.
                                </p>
                                <a href="#" id="block-11" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Reversible One-Way Hash</h4>
                            <div class="block-content">
                                <p>
                                    The product uses a algorithm that produces a digist (output value) that does not meet security expectations for 
                                    a hash function that allows an adversary to resonably determine the original input (preimage attack), find another 
                                    input that can produce the same hash (2nd preimage attack), or find multiple inputs that evaluate to the same hash (brithday attack).
                                </p>
                                <a href="#" id="block-12" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Not Using a Random IV with CBC Mode</h4>
                            <div class="block-content">
                                <p>
                                    The Product generates and uses a predictable Initiliation Vector (IV) with Cipher Block Chaining (CBC) Mode, which causes
                                    algorithm to be susceptible to dictionary attacks when they are encrypted under the same key.
                                </p>
                            </div>
                            <a href="#" id="block-13" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of Insufficiently Random Values</h4>
                            <div class="block-content">
                                <p>
                                    The software uses insufficiently random numbers or values in a security context that depends on unpredictable numbers.
                                </p>
                            </div>
                            <a href="#" id="block-14" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Insufficient Entropy</h4>
                            <div class="block-content">
                                <p>
                                    The software uses an algorithm or scheme that produces Insufficient entropy, leaving patterns or clusters of values that are more likely to occur than others. 
                                </p>
                                <a href="#" id="block-15" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Incorrect Usage of Seeds in Pseudo-Random Number Generation (PRNG)</h4>
                            <div class="block-content">
                                <p>The software uses a Pseudo-Random Number Generator (PRNG) but does not correctly manage seeds. </p>
                            </div>
                            <a href="#" id="block-16" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Same Seed in Pseudo-Random Number Generation (PRNG)</h4>
                            <div class="block-content">
                                <p>A Pseudo-Random Number Generator (PRNG) uses the same seed each time the product is initialized.</p>
                            </div>
                            <a href="#" id="block-17" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Predictable Seed in Pseudo-Random Number Generation (PRNG)</h4>
                            <div class="block-content">
                                <p>A Pseudo-Random Number Generator (PRNG) is initialized from a predictable seed, such that the process ID or system time.</p>
                            </div>
                            <a href="#" id="block-18" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of Cryptographically Weak Pseudo-Random Number Generation (PRNG)</h4>
                            <div class="block-content">
                                <p>The product uses a Pseudo-Random Number Generator (PRNG) in a security context, but ther PRNG's algorithm is not cryptographically strong.</p>
                            </div>
                            <a href="#" id="block-19" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Generation of Predictable Numbers or Identifier</h4>
                            <div class="block-content">
                                <p>The product uses a scheme that generates numbers or identifiers that are more predictable than required.</p>
                            </div>
                            <a href="#" id="block-20" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Improper Verification of Cryptographic Signature</h4>
                            <div class="block-content">
                                <p>The software does not verify, or incorrectly verifies, the cryptographic signature of data.</p>
                            </div>
                            <a href="#" id="block-21" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Unprotected Transport of Credentials</h4>
                            <div class="block-content">
                                <p>Login pages do not adequate measures to protect the username and password while they are in transit from the client to the server.</p>
                            </div>
                            <a href="#" id="block-22" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Selection of Less-Secure Algorithm During Negotiation ('Algorithm Downgrade')</h4>
                            <div class="block-content">
                                <p>
                                    A protocol or its implementation supports interaction between multiple actors and allow those actors to negotiate which algorithm should be 
                                    used as a protection mechanism such as encryption or authentication, but it does not select the storngest algorithm that is available 
                                    to both parties. 
                                </p>
                                <a href="#" id="block-23" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of a One-Way Hash without a Salt</h4>
                            <div class="block-content">
                                <p>
                                    The software uses a one-way encryptographic hash against an input that should not be reversible, such as a password, but the software does not also use a salt as part of the input.
                                </p>
                                <a href="#" id="block-24" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crypto-block">
                    <div class="row">
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of a One-Way Hash with a Predictable Salt</h4>
                            <div class="block-content">
                                <p>The software uses a one-way cryptographic hash against an input that should not be reversible, such as a password, but the software uses a predictable salt as part of the input.</p>
                            </div>
                            <a href="#" id="block-25" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of RSA Algorithm without OAEP</h4>
                            <div class="block-content">
                                <p>The software uses a RSA algorithm but does not incorporate Optimal Asymmetric Encryption Padding (OAEP), which might weaken the encryption.</p>
                            </div>
                            <a href="#" id="block-26" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </div>
                        <div class="col-lg block-container">
                            <h4 class="block-title">Use of Password Hash With Insufficient Computational Effort</h4>
                            <div class="block-content">
                                <p>
                                    The software generates a hash for a password, but it uses a scheme that does not provide a sufficient level of computational effort that would make 
                                    password cracking attack infeasible or expensive.
                                </p>
                                <a href="#" id="block-27" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="vertical-alignment-helper">
                    <div class="modal-dialog vertical-align-center">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="modal-title">error - update modal info</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-subtitle">
                                    <p id="modal-subtitle-text">error - update modal info</p>
                                </div>
                                <br>
                                <p id="modal-body-text">error - update modal info</p>
                                <p id="modal-body-text-2">error - update modal info</p>
                                <p id="modal-body-text-3">error - update modal info</p>
                                <p id="modal-body-text-4">error - update modal info</p>
                                <p id="modal-body-text-5">error - update modal info</p>
                                <div class="modal-mitigation">
                                    <p id="modal-mitigation-title">error - update modal info</p>
                                </div>
                                <p id="modal-mitigation-text">error - update modal info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
