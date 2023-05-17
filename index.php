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
                                <span class="banner-sub-title">You're in the right place!</span>
                                <h2 class="banner-title">What is Cryptography?</h2>
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
    <!-- What is Cryptography? -->
    <section class="section-one">
        <div class="container smaller-container">
            <h3 class="section-text section-one-sub-title">Got Any Questions</h3>
            <h2 class="section-text section-one-title">We've got answers</h2>
            <div class="row menu-pos-fix">
                <div class="col-md-4">
                    <a href="#what-is-cryptography?">
                        <button class="menu-item">What is Cryptography?</button>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="#types-of-encryption">
                        <button class="menu-item">Types of Encryption!</button>
                    </a>
                </div>
                <div class="col-md-4">
                    <button class="menu-item menu-item-wip">The Goals of Cryptography?</button>
                </div>
            </div>
            <div class="row menu-pos-fix">
                <div class="col-md-4">
                    <button class="menu-item menu-item-wip">Cryptography Timeline!</button>
                </div>
                <div class="col-md-4">
                    <button class="menu-item menu-item-wip">The Future of Cryptography!</button>
                </div>
                <div class="col-md-4">
                    <button class="menu-item menu-item-wip">Cryptography Terminology!</button>
                </div>
            </div>
        </div>
    </section>
    <section class="section-two">
        <div class="container smaller-container text-center">
            <p class="invisible" id="what-is-cryptography?">JUMP TO THIS SECTION</p>
            <div class="section-heading">
                <h1>What is Cryptography?</h1>
            </div>
            <p>In its simpliest form, Cryptography provides a method for securing communcation between authorized parties. In the modern world, 
                information is constantly sent from one location to the next, and securing that information is cruical to ensure that intruders 
                cannot view and manipulate said information. Futhermore, it is also the study of these method in many different situations and scenarios. 
                I aim of this project to help educate you, and help you to prevent or limit issues from occuring - 
                Issues such as <span class="text-bold">Cryptographic Failure</span>, which can be overwhelming at first. But don't be afraid to use this resource 
                to help educate yourself!
            </p>
            <p>You might be asking how does cryptography work? And that would be a fair question! Cryptography is typically implemented using <span class="text-bold">Encryption</span></p>
            <div class="section-subcategory">
                <div class="section-subheading">
                    <h3>So what is Encryption?</h3>
                </div>
                <p>The fundamental idea behind encryption is very similar to that of cryptography – 
                    both with the goal of preventing criminals and outsiders from looking at our private data. 
                    Encryption is just a method of performing cryptography. Within the encryption field, there are many mathematical schemes and algorithms that scramble 
                    and convert our normal readable data – <span class="text-bold">plaintext</span>, into complete gibberish that is completely unrecognizable – <span class="text-bold">ciphertext</span>.
                </p>
            </div>
            <div class="row plaintext-ciphertext-section">
                <div class="col-sm">
                    <div class="plaintext-text">
                        <h4>Plaintext Data</h4>
                    </div>
                    <div class="plaintext-image">
                        <img class="inside-folder" src="../img/plaintext/plaintext-not-hidden.png" alt="">
                    </div>
                </div>
                <div class="col-sm">
                    <div class="ciphertext-text">
                        <h4>Ciphertext Data</h4>
                    </div>
                    <div class="ciphertext-image">
                        <img class="inside-folder" src="../img/ciphertext/ciphertext-not-hidden.png" alt="">
                    </div>
                </div>
                <p class="section-image-text">Hover these folders to look inside!</p>
            </div>
            <div class="section-subcategory">
                <div class="section-subheading">
                    <h3>And what is Decryption?</h3>
                </div>
                <p>This is the process of converting <span class="text-bold"> ciphertext </span> back into <span class="text-bold">plaintext</span>,
                    so it is recognizable and understood by hopefully the desired user. 
                    Using both <span class="text-bold">encryption</span> and <span class="text-bold">decryption</span>,
                     we can reduce the changes of criminals and outsiders from looking at our private data and private information.
                </p>
                <p>To be able to make methods of encryption more safe and more secure,
                    there is a constant evolution of new industry standards that help combat the constant threat opposed by hackers and those alike. 
                    Unfortunately, not matter how complex, all encryption methods are broken if time and compuational power is infinite. 
                    We base our current encryption standards on the unlikelihood of someone breaking them due to the realistic limitions on time and computational power. 
                    But as technology changes and computational resources becomes more readily available, our standards are always being questioned and focused by dangerious attack vectors.
                </p>
            </div>
        </div>
    </section>

    <section class="section-three">
        <div class="container smaller-container text-center">
            <div class="section-heading">
                <p class="invisible" id="types-of-encryption">JUMP TO THIS SECTION</p>
                <h1> How is this possible?</h1>
            </div>
            <p>During the implementation of encryption there are two possible routes, <span class="text-bold">symmetric</span> encryption
                 - which uses a single password, commonly known as a <span class="text-bold">key</span>, and <span class="text-bold">asymmetric</span> encryption
                  - which utilizes both a <span class="text-bold">public key</span> and a <span class="text-bold">private key</span>!</p>
            <div class="section-subcategory">
                <div class="section-subheading">
                    <h3>Symmetric Encryption!</h3>
                    <p>In essence, <span class="text-bold">symmetric</span> encryption - meaning symmetrical, means that there is only one key for both encryption and decryption.</p>
                    <p> At base level, symmetric encryption means that both the encryption and decryption of both 
                        <span class="text-bold">plaintext</span> and <span class="text-bold">ciphertext</span>
                        is managed all via the <span class="text-bold">same key</span>.
                        First, the plaintext is just as is, including all of the desired information and readable to anyone.
                        This plaintext is then <span class="text-bold">encrypted</span> using the key and that desired information is converted into ciphertext - making it unreadable.
                    </p>
                    <p>To be able to <span class="text-bold">decrypted</span> the ciphertext, 
                        anyone that has the key is able revert the process of encryption and decrypt the file back into plaintext - Making it readable once again.
                    </p>
                    <div class="section-single-image">
                        <img src="../img/encryption-resources/symmetric-encryption-diagram.png" alt="[ERROR]symmetric-diagram-not-found">
                    </div> 
                </div>
            </div>
            <div class="section-subcategory">
                <div class="section-subheading">
                    <h3>Asymmetric Encryption!</h3>
                    <p>Asymmetric apposed to symmetric, is an alternative and more common method for <span class="text-bold">encryption</span> and <span class="text-bold">decryption</span>! 
                        For this method, two <span class="text-bold">keys</span> are generated. A <span class="text-bold">public key</span> and a <span class="text-bold">private key</span>. 
                        These keys are linked together such that when a message is encrypted using KEY A,
                        that ciphertext can only be decrypted using KEY B. And also, messages encrypted using KEY B, can only be decrypted using KEY A.
                    </p>
                    <p> To be able to implement asymmetric encryption, a key pair is genearted that includes both KEY A and KEY B.
                        You then have to choose which one is going to be the public key, and which is gonna be the private key. This public key can safety be shared around as this is what is going to be encrypting files.
                        The cruical part is that you keep your private key completely safe and inaccessiblity to anybody else as this gives you the ability to decrypt these encrypted files.
                    </p>
                    <div class="section-single-image">
                        <img src="../img/encryption-resources/asymmetric-encryption-diagram.png" alt="">
                    </div>
                    <br> 
                </div>
            </div>
        </div>
    </section>
</body>
</html>
