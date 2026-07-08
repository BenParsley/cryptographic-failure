
/*TEMPLATE*/
/*########################*/
$(document).ready(function () {
    var modalElement = document.getElementById('myModal');
    var modalInstance = null;

    if (modalElement && modalElement.parentElement !== document.body) {
        document.body.appendChild(modalElement);
    }

    if (modalElement && window.bootstrap && window.bootstrap.Modal) {
        modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalElement, {
            backdrop: false,
            keyboard: true,
            focus: true
        });

        // Ensure backdrop clicks close the modal even if earlier handlers interrupted events.
        modalElement.addEventListener('click', function (event) {
            if (event.target === modalElement) {
                modalInstance.hide();
            }
        });

        modalElement.addEventListener('hidden.bs.modal', function () {
            document.body.classList.remove('modal-open');
        });

        // Reset modal scroll position when modal is shown
        modalElement.addEventListener('show.bs.modal', function () {
            var modalBody = document.querySelector('#myModal .modal-body');
            if (modalBody) {
                modalBody.scrollTop = 0;
            }
        });
    }

    $(document).on('click', '.block-container', function (event) {
        var blockAnchor = $(this).find('a.stretched-link[id^="block-"]');
        if (blockAnchor.length) {
            var blockId = blockAnchor.attr('id');
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            // Run the matching content handler without triggering Bootstrap's data API.
            var blockElement = $('#' + blockId);
            if (blockElement.length) {
                blockElement.triggerHandler('click');
            }
            
            // Show the modal
            if (modalInstance) {
                modalInstance.show(this);
            }
        }
    });

    $('#block-zero').click(function(){
        $("#modal-title").text("")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("");
        $('#modal-mitigation-text').text("");
    })
});
/*########################*/
/*  */



/*Weak Encoding for Password*/
$(document).ready(function () {
    $('#block-1').click(function(){
        $("#modal-title").text("Weak Encoding for Password")
        $("#modal-subtitle-text").text("Encoding a password with trivial encoding does not protect the password.")
        $("#modal-body-text").text("This can sometimes occur when passwords are stored in plaintext within an application's properties or configuration file. Rectifying poor encoding can be done by obscuring the password with a suitable encoding function, such as base-64. However, this does not adequately protect the password. ")
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Like many aspects of cryptography, there is not a single solution. However, it is a good standard to make sure that your passwords are not in plaintext anywhere within the application. Furthermore, preventing access to your config.properties file will be beneficial as it may include your passwords in plaintext.");
    })
});


/*Cryptographic Issues*/
$(document).ready(function () {
    $('#block-3').click(function(){
        $("#modal-title").text("Cryptographic Issues")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("Frequently this deals with the use of encoding techniques, encryption libraries, and hashing algorithms. Weaknesses in this category could lead to degraded data quality if they are not addressed.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("");
        $('#modal-mitigation-text').text("");
    })
});

/*Cleartext Transmission of Sensitive Information */
$(document).ready(function () {
    $('#block-4').click(function(){
        $("#modal-title").text("Cleartext Transmission of Sensitive Information")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("A possible attack vector for hackers is to sniff data while it is in transit, which means inspecting packets to gather information about what they contain. If data is in transit and the information being sent is plaintext, then you are effectively allowing anyone to view it. This is especially dangerous if the information is sensitive.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Unfortunately, it is not always possible to prevent data sniffing once certain access has been gained. That is why it is crucial to encrypt and salt all information sent between parties. Otherwise, sensitive information could be visible to anyone. ");
    })
});

/*Use of Hard-coded Cryptographic Key   */
$(document).ready(function () {
    $('#block-5').click(function(){
        $("#modal-title").text("Use of Hard-coded Cryptographic Key")
        $("#modal-subtitle-text").text("Using a hard-coded cryptographic key will most likely increase the chances of encrypted data being recovered, even if you believe it is completely safe. ")
        $("#modal-body-text").text("A hard-coded key could very easily be visible to anyone who looks at the backend of a system, and in some cases you don't need anything more than just a browser!")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("For obvious reasons, it is important to never use hard-coded cryptographic keys, because if hackers or other users find these keys, the cryptographic functionality may become useless and create an attack vector. ");
    })
});

/*  Key Exchange without Entity Authentication  */
$(document).ready(function () {
    $('#block-6').click(function(){
        $("#modal-title").text("Key Exchange without Entity Authentication")
        $("#modal-subtitle-text").text("The software or website performs a key exchange with someone or something without verifying its identity.")
        $("#modal-body-text").text("")
        $("#modal-body-text-2").text("In any situation, it's risky and potentially very dangerous to exchange private keys with anyone (an actor) without verifying who that person is. Without doing so, it's fair to assume that you could be giving the key to a criminal with dangerous intentions.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Always, no matter how many times you have done it, always check who you are sending sensitive data to. Otherwise you could be allowing criminals and hackers into your system.");
    })
});

/*  Reusing a Nonce, Key Pair in Encryption */
$(document).ready(function () {
    $('#block-7').click(function(){
        $("#modal-title").text("Reusing a Nonce, Key Pair in Encryption")
        $("#modal-subtitle-text").text("Nonces should only be used once when used for encryption.")
        $("#modal-body-text").text("")
        $("#modal-body-text-2").text("Nonce values by definition is a number or value that is only used once. Usually nonce values are varied by using a time element to prevent the same value from being used more then once.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("It's always worth reverse engineering the generation of nonce values to ensure the same values cannot be generated. Furthermore, make sure nonce values are not hard-coded, as that would mean the same value could be used repeatedly.");
    })
});

/* Use of a Key Past its Expiration date  */
$(document).ready(function () {
    $('#block-8').click(function(){
        $("#modal-title").text("Use of a Key Past its Expiration date")
        $("#modal-subtitle-text").text("Cryptographic keys typically have an expiration date, which reduces their safety over time. Using expired cryptographic keys will significantly increase the possibility of compromise because the time window to break that key is no longer considered safe. ")
        $("#modal-body-text").text("The foundation of cryptographic keys is that it should take a significant amount of effort to crack the algorithms and make the keys redundant. People have roughly worked out how long certain keys and algorithms will remain valid, so it is very important to follow those predictions and real-world events. If keys can be guessed or worked out, they become useless and your encryption is void.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Never use a key past its expiration date, and make sure to update keys before the expiration date approaches. Furthermore, keep an eye on standards for algorithms and key structures, as it is unlikely but possible for standards to change overnight. ");
    })
});

/* Missing Required Cryptographic Step */
$(document).ready(function () {
    $('#block-9').click(function(){
        $("#modal-title").text("Missing Required Cryptographic Step")
        $("#modal-subtitle-text").text("When implementing cryptographic algorithms, they are usually accompanied with steps for implementation that should be followed. ")
        $("#modal-body-text").text("All of the steps and maintenance involved in implementing cryptographic algorithms should be mandatory. Nothing in the documentation should be ignored, otherwise you may think you have successfully implemented an algorithm when in reality you skipped a step and opened yourself up to an attack. In the worst case, the algorithm does not work at all and can be reverse engineered.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Do not try to cut corners. Follow the documentation to a T and do not try to implement your own algorithms. Otherwise, you could be causing more issues for yourself in the long run. ");
    })
});

/* Inadequate Encryption Strength  */
$(document).ready(function () {
    $('#block-10').click(function(){
        $("#modal-title").text("Inadequate Encryption Strength")
        $("#modal-subtitle-text").text("Typically the more private information is, the more secure and strong encryption techniques should be used.")
        $("#modal-body-text").text("The level of encryption used really depends on the type of data being transmitted. Sensitive business-related information should have the highest level of encryption but a public news feed may not need the same level of encryption. Even though a encryption schema is theoretically sound, it may not be suitable or even strong enough for the type of data.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Before implementing any encryption, think about the type of data being sent between channels. If it is private and should not be exposed to outsiders, it may be worth using stronger encryption than you would use for a public news feed. ");
    })
});

/* Use of a Broken or Risky Cryptographic Algorithm  */
$(document).ready(function () {
    $('#block-11').click(function(){
        $("#modal-title").text("Use of a Broken or Risky Cryptographic Algorithm")
        $("#modal-subtitle-text").text("The use of a broken or risky cryptographic algorithm is an unnecessary risk that may result in the exposure of sensitive information.")
        $("#modal-body-text").text("Using a broken or risky cryptographic algorithm could potentially be the same as using no algorithm at all. Therefore being pointless. ")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("If something should be encrypted, make sure to use sufficient and strong algorithms, as using broken or risky ones may be pointless if hackers can penetrate your systems.");
    })
});

/* Reversible One-Way Hash */
$(document).ready(function () {
    $('#block-12').click(function(){
        $("#modal-title").text("Reversible One-Way Hash")
        $("#modal-subtitle-text").text("Having a reversible one-way hash would, in theory, make the one-way hash redundant.")
        $("#modal-body-text").text("Your system and or website is producing an output value that does not meet security expectations for a hash function. That may allow hackers to determine the original output – a preimage attack. And then find another input that can produce the same hash – second stage preimage attack, or find multiple inputs that equal the same hash – a birthday attack. ")
        $("#modal-body-text-2").text("If your security expectations have conditions that are not being met, it is important to either update your expectations or update the hash functions being used.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Make sure that your security expectations are reasonable, and if your hash functions start to generate values that no longer meet those expectations, then it is crucial to update the functions being used.");
    })
});

/* Not Using a Random IV with CBC Mode */
$(document).ready(function () {
    $('#block-13').click(function(){
        $("#modal-title").text("Not Using a Random IV with CBC Mode")
        $("#modal-subtitle-text").text("The product generates and uses a predictable Initialization Vector (IV) with Cipher Block Chaining (CBC) mode, which causes the algorithm to be susceptible to dictionary attacks when values are encrypted under the same key.")
        $("#modal-body-text").text("")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("");
        $('#modal-mitigation-text').text("");
    })
});

/* Use of Insufficiently Random Values  */
$(document).ready(function () {
    $('#block-14').click(function(){
        $("#modal-title").text("Use of Insufficiently Random Values")
        $("#modal-subtitle-text").text("When using random values, it's important that they are as unpredictable as possible.")
        $("#modal-body-text").text("As soon as random values can be predicted, they are no longer useful and are no longer random. If these random values are relied upon within your system, then you may have major issues. ")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Make sure that any random generation in use is not broken and is still considered safe. In addition to this, do not attempt to make your own random number generators unless you are a professional.");
    })
});

/* Insufficient Entropy */
$(document).ready(function () {
    $('#block-15').click(function(){
        $("#modal-title").text("Insufficient Entropy")
        $("#modal-subtitle-text").text("The software uses an algorithm or scheme that produces Insufficient entropy, leaving patterns or clusters of values that are more likely to occur than others. ")
        $("#modal-body-text").text("Entropy is a measurement of the randomness or diversity of a data-generating function. If a function does a poor job of generating random numbers, it will have poor entropy.")
        $("#modal-body-text-2").text("If a system has high or good entropy, then it means that the data being generated has no meaningful patterns and the next value cannot be predicted from past values.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Ensure that any random generating functions have a high level of entropy. you may not know this so looking at research papers and seeing what the industry standard is at the given time is the best approach. In addition to this, DO NOT create and use your own random number generation functions unless you are a professional. Unless you are completely happy for your work or system to be possibly hacked.");
    })
});

/*  Incorrect Usage of Seeds in Pseudo-Random Number Generation (PRNG) */
$(document).ready(function () {
    $('#block-16').click(function(){
        $("#modal-title").text("Incorrect Usage of Seeds in Pseudo-Random Number Generation (PRNG)")
        $("#modal-subtitle-text").text("PRNG's require a seed as input to generate a stream of numbers that are indistinguishable from random numbers. If this seed is incorrectly used, it may not produce pseudo-random numbers.");
        $("#modal-body-text").text("Seeds do not necessarily need to be unique, but reusing seeds may open up attacks if the seed is discovered.");
        $("#modal-body-text-2").text("Management of seeds could be both: ");
        $("#modal-body-text-3").text("Protecting seeds as cryptographic material - such that of a cryptographic key");
        $("#modal-body-text-4").text("Whenever possible, using a uniquely generated seed from a cryptographically secure source.");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("There are many possible mitigation methods. For example, protect seeds used within PRNG as cryptographic material, and whenever possible, use a uniquely generated seed from a cryptographically secure source.");
    })
});

/* Same Seed in Pseudo-Random Number Generation (PRNG) */
$(document).ready(function () {
    $('#block-17').click(function(){
        $("#modal-title").text("Same Seed in Pseudo-Random Number Generation (PRNG)")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("A Pseudo-Random Number Generator (PRNG) uses the same seed each time the product is initialized.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("It's quite simple: try not to reuse the same seeds for generated values via PRNG, as that would generate the same result and make number generation predictable.");
    })
});

/* Predictable Seed in Pseudo-Random Number Generation (PRNG) */
$(document).ready(function () {
    $('#block-18').click(function(){
        $("#modal-title").text("Predictable Seed in Pseudo-Random Number Generation (PRNG)")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("A Pseudo-Random Number Generator (PRNG) is initialized from a predictable seed, such that the process ID or system time.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("It's quite simple: try not to use predictable seeds for generated values via PRNG. By using predictable seeds, you would in turn generate predictable results via PRNG.");
    })
});

/*Use of Cryptographically Weak Pseudo-Random Number Generation (PRNG) */
$(document).ready(function () {
    $('#block-19').click(function(){
        $("#modal-title").text("Use of Cryptographically Weak Pseudo-Random Number Generation (PRNG)")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("The product uses a Pseudo-Random Number Generator (PRNG) in a security context, but the PRNG's algorithm is not cryptographically strong.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("");
        $('#modal-mitigation-text').text("");
    })
});

/*Generation of Predictable Numbers or Identifier */
$(document).ready(function () {
    $('#block-20').click(function(){
        $("#modal-title").text("Generation of Predictable Numbers or Identifier")
        $("#modal-subtitle-text").text("Depending on the context you may or may not want predictable values, but having predictable values you may be creating possible attack vectors.")
        $("#modal-body-text").text("Every system is different and performs actions in different ways. A possible attack vector within a system is generating predictable numbers and/or identifiers.");
        $("#modal-body-text-2").text("If your system relies on numbers being unpredictable through some form of randomness, it's crucial to make sure they cannot be guessed or worked out by examining patterns in other generated values.  ");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Ensure that when inputs/outputs need to be random, they are truly random (as much as possible). Systems that rely on randomness yet use predictable values are, in theory, insecure.");
    })
});

/* Improper Verification of Cryptographic Signature */
$(document).ready(function () {
    $('#block-21').click(function(){
        $("#modal-title").text("Improper Verification of Cryptographic Signature")
        $("#modal-subtitle-text").text("When downloading data or information it’s very important to ensure that it is really what it says it is before you download any data. ")
        $("#modal-body-text").text("If a system and or website does not verify, or incorrectly verifies, the cryptographic signature of data, then it may believe a file is legit, when it fact it may not be.");
        $("#modal-body-text-2").text("This can be extremely dangerous, as many attack opportunities become possible once a file is downloaded.");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("A few possible ways to verify the cryptographic signature of a piece of data are to check the public key of the party that signed the data, the digital signature, the data that was signed, and the hash algorithm used by the signer. If any of these checks fail, then it may not be what it claims to be.");
    })
});

/* Unprotected Transport of Credentials */
$(document).ready(function () {
    $('#block-22').click(function(){
        $("#modal-title").text("Unprotected Transport of Credentials")
        $("#modal-subtitle-text").text("Whenever data is in transit, it could be a possible attack vector for hackers and criminals.")
        $("#modal-body-text").text("Certain pages - such as Login pages, may not have adequate measures to protect the username and password whilst they are being sent to the server.");
        $("#modal-body-text-2").text("This in practice would allow snoopers to look at both the username and password and login the accounts just by browsing data being sent between the client and the server.");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("There are a few things to check and include within a website that has login functionality - such as a legitimate https certificate and other certifications that ensure that data is encrypted during transit.");
    })
});

/* Selection of Less-Secure Algorithm During Negotiation ('Algorithm Downgrade') */
$(document).ready(function () {
    $('#block-23').click(function(){
        $("#modal-title").text("Selection of Less-Secure Algorithm During Negotiation ('Algorithm Downgrade')")
        $("#modal-subtitle-text").text("Depending on the type of system and how it is implemented, the required level of encryption should vary and should solely be based on how sensitive the data is. It's crucial that the correct level of encryption is used and not downgraded.")
        $("#modal-body-text").text("By using an incorrect strength of encryption, you may be using a less favored and potentially dangerous level of security, which may leave you vulnerable to attacks.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Ensure you fully understand the system and the types of data being sent locally and to other vendors, as data sensitivity should dictate the type of algorithm.");
    })
});

/* Use of a One-Way Hash without a Salt */
$(document).ready(function () {
    $('#block-24').click(function(){
        $("#modal-title").text("Use of a One-Way Hash without a Salt")
        $("#modal-subtitle-text").text("Using a one-way cryptographic hash against an input that should not be reversible. But it does not also have a salt as part of the input. ")
        $("#modal-body-text").text("This could cause an issue as if a hacker entered the same input into this one-way hash, it would result in the same output. Allowing them to create a rainbow table and gain access to your system.");
        $("#modal-body-text-2").text("A salt is a random string of characters that is applied to add another level of randomness when hashing. Having unique salts with each password (or value) makes it much harder to crack a system.");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Thankfully, this one is quite simple. When possible, apply a salt before using a one-way hash, as it decreases the possibilities for hackers and criminals to reverse engineer your cryptographic system.");
        
    })
});

/* Use of a One-Way Hash with a Predictable Salt */
$(document).ready(function () {
    $('#block-25').click(function(){
        $("#modal-title").text("Use of a One-Way Hash with a Predictable Salt")
        $("#modal-subtitle-text").text("Using a one-way cryptographic hash against an input that should not be reversible. But it uses a predictable salt as part of the input")
        $("#modal-body-text").text("A hashing function is only secure if the average person does not understand how it works and/or the values it is fed. If something such as the salt is predictable, then it completely removes that level of security and makes it void.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Make sure a good level of entropy is used when creating salts to reduce the chances of generating useful patterns in future salts.");
    })
});

/* Use of RSA Algorithm without OAEP */
$(document).ready(function () {
    $('#block-26').click(function(){
        $("#modal-title").text("Use of RSA Algorithm without OAEP")
        $("#modal-subtitle-text").text("The software uses an RSA algorithm but does not incorporate Optimal Asymmetric Encryption Padding (OAEP), which might weaken the encryption.")
        $("#modal-body-text").text("RSA is a relatively old yet still used encryption algorithm. To increase its strength, OAEP (Optimal Asymmetric Encryption Padding) may be applied.")
        $("#modal-body-text-2").text("Once again, this is related to how important and sensitive the encrypted data is. If it includes business secrets or very sensitive data, then it may be worth implementing OAEP on top of your RSA algorithm.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("This really depends on the type of information being stored. RSA is still secure, but it is well understood and, like every cryptographic algorithm, it is not 100% secure. By using OAEP, you are potentially decreasing the chances of being hacked. ");
    })
});

/* Use of Password Hash With Insufficient Computational Effort */
$(document).ready(function () {
    $('#block-27').click(function(){
        $("#modal-title").text("Use of Password Hash With Insufficient Computational Effort")
        $("#modal-subtitle-text").text("When hashing passwords, it's important to ensure that a sufficient amount of computational effort has been put into the calculations; otherwise, it could be reversed more easily.")
        $("#modal-body-text").text("");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Attack Vectors.");
        $('#modal-mitigation-text').text("There are many hash schemes that increase resistance to attack, such as increasing the amount of CPU time used to 'stretch' the hash, including a salt with the password, using a valid and secure one-way hashing function, and making sure collisions between hash outputs are kept to a minimum.");
    })
});


