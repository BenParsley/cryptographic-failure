
/*TEMPLATE*/
/*########################*/
$(document).ready(function () {
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
        $("#modal-body-text").text("This can sometimes occur when passwords are stored in plaintext within an application’s properties or configuration file. Rectifying poor encoding when be done by obscuring the password with a suitable encoding function, such as base-64. But this effect does not adequately protect the password. ")
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Like with many aspects of Cryptographic, there isn't a single solution. However it is good standard to make sure that your passwords isn't in plaintext anywhere within the applicaiton. Futhermore, preventing access to your config.properties file will be beneficial as it may include your passwords in plaintext.");
    })
});


/*Imporper Following of a Certificate's Chain of Trust*/
$(document).ready(function () {
    $('#block-2').click(function(){
        $("#modal-title").text("Improper Following of a Certificate's Chain of Trust")
        $("#modal-subtitle-text").text("The software does not follow, or incorrectly follows, the chain of trust for a certificate back to a trusted root certificate,resulting in incorrect trust of any resource that is associated with that certificate.")
        $("#modal-body-text").text("It is crucial that the certificates that you web application is utilizing are legitimate and are correctly following the chain of trust. The certificates lose all of their usefulness if they cannot be rooted back to the original server. Essentially, to know if you have a legitimate certificate on your website – such as an SSL certificate. There is a link from your website to other servers and will eventually lead back to the root server. If this chain has been tempted with then, all of the certificates should be void as the legitimacy cannot be proven. There are several ways in which the chain of trust might be broken, including but not limited to:")
        $("#modal-body-text-2").text("• Any certificate in the chain is self-signed, unless it is root.");
        $("#modal-body-text-3").text("• Not every intermediate certificate is checked, starting from the original certificate all the way up the root certificate.");
        $("#modal-body-text-4").text("• An intermediate, CA-signed certificate does not have the expected Basic Constraint or other important expensions.");
        $("#modal-body-text-5").text("• The root certificate has been compromised or authorized to the wrong party.");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Its Important to be aware that certificates can be self-signed, and could be communicating with a fake host. Its cruical to make sure that your certificates are being directed to the correct host which can all be checked via the browser, going to more info when clicking on the certificate, and matching up the root authority with that of the desired host. ");
    })
});


/*Imporper Following of a Certificate's Chain of Trust*/
$(document).ready(function () {
    $('#block-3').click(function(){
        $("#modal-title").text("Cryptographic Issues")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("Frequently this deals with the use of encoding techniques, encryption libraries, and hasing algorithms. The weaknesses in this category could lead to a degradation of hte quality data if they are not addressed.")
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
        $("#modal-body-text").text("A possible attack vector for hackers is to sniff data whilst in transit. Which is the idea of looking at data packets and trying to gather information about what they are and what they include. If data is in transit and the information being sent is in plaintext, then you are in theory allowing anybody to view said information. And naturally this is going to be danger if said the information is sensitive.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Unfortunately its not always possible to prevent data sniffing from occuring when certain access many have been gained. That is why it is cruical to encrypt and salt all informaiton sent between parties. Otherwise senstiive information could be visible to anyone. ");
    })
});

/*Use of Hard-coded Cryptographic Key   */
$(document).ready(function () {
    $('#block-5').click(function(){
        $("#modal-title").text("Use of Hard-coded Cryptographic Key")
        $("#modal-subtitle-text").text("Using a hard-coded cryptographic key can and most likely will significantly increase the chances of encrypted data being recovered. Even if you believed its completely safe. ")
        $("#modal-body-text").text("A hard-coded key could very easily be visible to anyone who looks at the backend of a system, and in some cases you don't need anything more than just a browser!")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("For obvious reasons its important to never use hard-coded cryptographic keys, as if hackers or other users found these hard-coded keys then the cryptographic functionality used may be useless, allowing an attack vector for hackers. ");
    })
});

/*  Key Exchange without Entity Authentication  */
$(document).ready(function () {
    $('#block-6').click(function(){
        $("#modal-title").text("Key Exchange without Entity Authentication")
        $("#modal-subtitle-text").text("The Software or Website performs a key exchange with an someone or something without verifying the identity of it.")
        $("#modal-body-text").text("")
        $("#modal-body-text-2").text("In any situation it's risky and potentially very dangerious to exchange private keys with anybody (an actor) without verfying who that person in. Without doing so its fair to assume that you could be giving the key to a criminal who has dangerious intensions.")
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
        $('#modal-mitigation-text').text("Its always worth reverse engineering the generation of nonce values to ensure the same values cannot be genearted. Futhermore, make sure that nonce values are not hard-coded as that would mean it's being used once then once.");
    })
});

/* Use of a Key Past its Expiration date  */
$(document).ready(function () {
    $('#block-8').click(function(){
        $("#modal-title").text("Use of a Key Past its Expiration date")
        $("#modal-subtitle-text").text("Cryptographic keys typically have an expiration date, which diminishes its safety. Using cryptographic keys that have expired will significantly increase the possibilities of being hacked as the time window to break said key is not longer considered safe. ")
        $("#modal-body-text").text("The foundations of cryptographic keys is that it will take a significant amount of crack the algorithms and make the keys redudant. People have roughly worked out how long they predict certain keys and algorithsm will still be valid, its very important to follow these predications and real-world events as if keys can be guessed/worked out, they are useless and your encryption is void.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Never use a key past its expiration date, and make sure to update them before the expiration date is approaching. Futhermore, keep an eye on the standards of certain algorithms and key structures as its unlikely but possible that certain standards change over night. ");
    })
});

/* Missing Required Cryptographic Step */
$(document).ready(function () {
    $('#block-9').click(function(){
        $("#modal-title").text("Missing Required Cryptographic Step")
        $("#modal-subtitle-text").text("When implementing cryptographic algorithms, they are usually accompanied with steps for implementation that should be followed. ")
        $("#modal-body-text").text("All of the steps and maintaince involved in implmentation cryptographic algorithms should be mandatory. Nothing within the documentation should be igored otherwise you may be thinking you have successful implemented an algorithm when in reality you have skipped a step and opened yourself up to a possible attack. Or worst case the algorithm doesn't work at all and can be reverse engineered.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Do not attempt to skip corners no matter what. Follow the documentation down to a t and do not attempt to implement your own algorithms. Without you could be causing more issues for yourself in the long run. ");
    })
});

/* Inadequate Encryption Stength  */
$(document).ready(function () {
    $('#block-10').click(function(){
        $("#modal-title").text("Inadequate Encryption Stength")
        $("#modal-subtitle-text").text("Typically the more private information is, the more secure and strong encryption techniques should be used.")
        $("#modal-body-text").text("The level of encryption used really depends on the type of data being transmitted. Sensitive business-related information should have the highest level of encryption but a public news feed may not need the same level of encryption. Even though a encryption schema is theoretically sound, it may not be suitable or even strong enough for the type of data.")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Before implementing any encryption. Think about the type of data that is being sent between certain channels. If its private and shouldn't be exposed to othersiders as it may damage your system. It may be worth using stronger encryption compared to a news feed for example. ");
    })
});

/* Use of a Broken or Risky cryptographic Algorithm  */
$(document).ready(function () {
    $('#block-11').click(function(){
        $("#modal-title").text(" Use of a Broken or Risky cryptographic Algorithm ")
        $("#modal-subtitle-text").text("The use of a broken or risky cryptographic algorithm is an unnecessary risk that may reuslt in the exposure of sensitive information.")
        $("#modal-body-text").text("Using a broken or risky cryptographic algorithm could potentially be the same as using no algorithm at all. Therefore being pointless. ")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("If something should be encryption. Make sure to use sufficient and strong algorithms as using Broken or Risky onces may be pointless as hackers may be able to penetrate your systems.");
    })
});

/* Reversible One-Way Hash */
$(document).ready(function () {
    $('#block-12').click(function(){
        $("#modal-title").text("Reversible One-Way Hash")
        $("#modal-subtitle-text").text("Having a reversible one-way hash would in theory make the one-way hash redudant.")
        $("#modal-body-text").text("Your system and or website is producing an output value that does not meet security expectations for a hash function. That may allow hackers to determine the original output – a preimage attack. And then find another input that can produce the same hash – second stage preimage attack, or find multiple inputs that equal the same hash – a birthday attack. ")
        $("#modal-body-text-2").text("If your security expections have certain conditions that are not being met, it would urgently be important to either update yoru expectations or the hash functions being used.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Make sure that your security expectations are reasonable, and if your hash functions start to generate values that no longer meet said expectations then its cruical to update the funcitons being used.");
    })
});

/* Not Using a Random IV with CBC Mode */
$(document).ready(function () {
    $('#block-13').click(function(){
        $("#modal-title").text("Not Using a Random IV with CBC Mode")
        $("#modal-subtitle-text").text("The Product generates and uses a predictable Initiliation Vector (IV) with Cipher Block Chaining (CBC) Mode, which causes algorithm to be susceptible to dictionary attacks when they are encrypted under the same key.")
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
        $("#modal-subtitle-text").text("When using random values, its important that they're unpredictable and as random as they possibly could be.")
        $("#modal-body-text").text("As soon as random values can be predicted and can, they are no longer useful and are not longe random. If these random values are rely upon within your systen. Then you may have huge issues. ")
        $("#modal-body-text-2").text("")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Make sure that any random generation that is used is not cracked and is still considered to be safe. In addition to this, DO NOT attempt to make your own random number generaters unless you are a professional.");
    })
});

/* Insufficient Entropy */
$(document).ready(function () {
    $('#block-15').click(function(){
        $("#modal-title").text("Insufficient Entropy")
        $("#modal-subtitle-text").text("The software uses an algorithm or scheme that produces Insufficient entropy, leaving patterns or clusters of values that are more likely to occur than others. ")
        $("#modal-body-text").text("Entropy is a measurement of the randomess or diversity of a data-generating function. If a function does a poor job at generation random numbers, it will have poor entropy.")
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
        $("#modal-body-text").text("Seeds do not necessarily nmeed to be unique, but reusing seeds may open up attacks if the seed is discovered.");
        $("#modal-body-text-2").text("Management of seeds could be both: ");
        $("#modal-body-text-3").text("Protecting seeds as cryptographic material - such that of a cryptographic key");
        $("#modal-body-text-4").text("Whenever possible, using a uniquely generated seed from a cryptographically secure source.");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("There are many possible mitigation methods. For example, protecting your seeds used within PRNG like they are cryptographic material, and whenever poissible, using a uniquely generated seed from a cryptographically secure source.");
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
        $('#modal-mitigation-text').text("Its quiet simple, try not to reuse the same seeds for generated values via PRNG. As it would generate the same result, making number generation predictable.");
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
        $('#modal-mitigation-text').text("Its quiet simple, try not to use predictable seeds for generated values via PRNG. By using predictable seeds, you would intern generate predictable results via PRNG.");
    })
});

/*Use of Cryptographically Weak Pseudo-Random Number Generation (PRNG) */
$(document).ready(function () {
    $('#block-19').click(function(){
        $("#modal-title").text("Use of Cryptographically Weak Pseudo-Random Number Generation (PRNG)")
        $("#modal-subtitle-text").text("")
        $("#modal-body-text").text("The product uses a Pseudo-Random Number Generator (PRNG) in a security context, but ther PRNG's algorithm is not cryptographically strong.");
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
        $("#modal-body-text").text("Every system is different and performs different actions different ways. As a possible attack vector within a system is genearting predictable numbers and or identifiers.");
        $("#modal-body-text-2").text("If you system is reliant on numbers being unpredictable via some form of randomness, its cruical to make sure that is cannot be guessed and or worked out by looking at patterns of other generated values.  ");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Ensure that when inputs/ouputs need to be random, that they are truely random (as much as possible). Systems that rely on randomness yet use predictable values are in theory unsecure.");
    })
});

/* Improper Verification of Cryptographic Signature */
$(document).ready(function () {
    $('#block-21').click(function(){
        $("#modal-title").text("Improper Verification of Cryptographic Signature")
        $("#modal-subtitle-text").text("When downloading data or information it’s very important to ensure that it is really what it says it is before you download any data. ")
        $("#modal-body-text").text("If a system and or website does not verify, or incorrectly verifies, the cryptographic signature of data, then it may believe a file is legit, when it fact it may not be.");
        $("#modal-body-text-2").text("This can be extremely dangerious as lots of possible attack opportunities are possible once a file is downloaded.");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("A few possbile way to verify the cryptographic signature of a piece of data is to check the public key of the party that signed the data, the digital signature, the data that was signed and also the hash algorithm used by the signer. If ANY of these checks return value then it may not be what it says it is.");
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
        $("#modal-subtitle-text").text("Depending on the type of system and how it is implemented, the required level of encryption should vary and should soley be based upon how sensitive the data is. Its crucial that the correct level of encryption is used and not downgraded")
        $("#modal-body-text").text("By using an incorrect stength of encryption, you may be using a less favoured and potential dangerious level of security, which may leave yourself vulnerably to attack opportunities.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Ensure you follow understand the system and the types of data being sent locally and to other vendors as the sensitivity of the data should dictate the type of algorithm");
    })
});

/* Use of a One-Way Hash without a Salt */
$(document).ready(function () {
    $('#block-24').click(function(){
        $("#modal-title").text("Use of a One-Way Hash without a Salt")
        $("#modal-subtitle-text").text("Using a one-way cryptographic hash against an input that should not be reversible. But it does not also have a salt as part of the input. ")
        $("#modal-body-text").text("This could cause an issue as if a hacker entered the same input into this one-way hash, it would result in the same output. Allowing them to create a rainbow table and gain access to your system.");
        $("#modal-body-text-2").text("A salt is a random string of characters that is appied to add another level of randomness when hashing, by having unique salts with each password (or value) it makes it much harder crack a system.");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Thankfully, this one is quiet simple. When possible apply a salt before using a One-Way Hash and it decreases the possibilties for hackers and criminals to reverise engineer your ensure cryptographic system.");
        
    })
});

/* Use of a One-Way Hash with a Predictable Salt */
$(document).ready(function () {
    $('#block-25').click(function(){
        $("#modal-title").text("Use of a One-Way Hash with a Predictable Salt")
        $("#modal-subtitle-text").text("Using a one-way cryptographic hash against an input that should not be reversible. But it uses a predictable salt as part of the input")
        $("#modal-body-text").text("A hashing function is only secure if the average person doesn't undersand how it works and or the values it is fed, if something such as the salt is predictable then it compeltely removes that level of security and makes it void.");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("Make sure a good level of entrophy is used when creating salts to reduce the changes of them generating useful patterns when generating future salts.");
    })
});

/* Use of RSA Algorithm without OAEP */
$(document).ready(function () {
    $('#block-26').click(function(){
        $("#modal-title").text("Use of RSA Algorithm without OAEP")
        $("#modal-subtitle-text").text("The software uses a RSA algorithm but does not incorporate Optimal Asymmetric Encryption Padding (OAEP), which might weaken the encryption.")
        $("#modal-body-text").text("RSA is a relateivly old yet still used encryption algorithm. To increase its strengthm, a OAEP - AN Optical Asymmetric Encrptyion Padding may be applied.")
        $("#modal-body-text-2").text("Once again this is realted to how important and sensitive the data is that is being encrypted. If its business secrets or very sensitive data then it may be worth implementing OAEP on top of your RSA algorith.")
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Mitigation Methods");
        $('#modal-mitigation-text').text("This really depedning on the type of information that is being stored, RSA is still a secure but it is well understood and like very cryptographioc algorithm it isn't 100% secure. By using OAEP you are potenital decreasing the chances of being hacked. ");
    })
});

/* Use of Password Hash With Insufficient Computational Effort */
$(document).ready(function () {
    $('#block-27').click(function(){
        $("#modal-title").text("Use of Password Hash With Insufficient Computational Effort")
        $("#modal-subtitle-text").text("When Hasing passwords its important to ensure that a sufficient amount of computational effort has been put into the calcualtions otherwise it could be reversed easily.")
        $("#modal-body-text").text("");
        $("#modal-body-text-2").text("");
        $("#modal-body-text-3").text("");
        $("#modal-body-text-4").text("");
        $("#modal-body-text-5").text("");
        $('#modal-mitigation-title').text("Possible Attack Vectors.");
        $('#modal-mitigation-text').text("There are many hash schemes that increase the strenght of its efficiency. Such as the amount of CPU time that has been used to 'stretch' the hash, including a salt with the password, Using a valid and secure hashing funciton that is one-way and making sure that collision between hashing outputs is kept to a minimum.");
    })
});


