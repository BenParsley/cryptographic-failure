# Cryptographic Failure Reference & Educational Guide

An interactive, responsive single-page web application designed to educate developers, students, and security enthusiasts on foundational cryptography concepts, common cryptographic failures, and corresponding mitigation strategies.

---

## Table of Contents
- [Features](#features)
- [Vulnerabilities Explained](#vulnerabilities-explained)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Author](#author)
- [License](#license)

---

## Features

- **Interactive Cryptography Overview**: Visual guide comparing **Symmetric** (single key) vs. **Asymmetric** (public/private key pair) encryption with simple, clean flow diagrams.
- **Interactive Visualizers**: Includes interactive folder elements where you can hover to reveal plaintext contents turning into ciphertext.
- **Vulnerability Catalog**: A comprehensive collection of cryptographic weaknesses and vulnerabilities based on common real-world CVEs and CWEs.
- **Mitigation Modals**: Clicking on any vulnerability opens a detailed overlay detailing the root cause and actionable mitigation techniques.
- **Dynamic Term Glossary**: Rich tooltips mapping security jargon to plain-English definitions when hovering or clicking highlighted terms.
- **Local Access & Guest Authentication**: A simulated static login portal and guest access mode (`static-auth.js`) stored locally.
- **Modern User Experience**:
  - Custom SPA-style view routing and smooth scrolling.
  - Sticky scrolling headers and fluid intersection-observer entrance animations.
  - Fully responsive design compatible with desktop and mobile screens.

---

## Technologies Used

- **HTML5 & CSS3**: Core semantic structure and layout styling.
- **Bootstrap 5**: Responsive layout framework, navigation components, and modal interfaces.
- **jQuery**: Simple event delegation, modal logic triggering, and DOM traversal.
- **Font Awesome**: Modern vector icons for buttons and lists.
- **Vanilla JavaScript**: SPA router, IntersectionObserver animations, glossary tooltips, custom scroll behaviors, and static authentication simulation.

---

## Vulnerabilities Explained

This project breaks down several high-profile cryptographic mistakes and security patterns, including:

1. **Weak Encoding for Passwords**: Storing secrets using trivial algorithms like Base64 or URL encoding instead of secure hashes.
2. **Use of Hard-coded Cryptographic Keys**: Shipping static keys in application binaries or repository code.
3. **Cleartext Transmission**: Transmitting security-critical data over unencrypted channels (like plain HTTP).
4. **Key Exchange without Entity Authentication**: Exchanging encryption keys with an unverified party (leaving doors open to Man-in-the-Middle attacks).
5. **Nonce and Key Reuse**: Reusing initialization values, leading to predictable outputs in algorithms like AES-GCM or ChaCha20.
6. **Key Expiration Neglect**: Utilizing cryptographic keys or credentials past their recommended lifetime.
7. **Missing Critical Cryptographic Steps**: Skipping verification phases or padding steps.
8. **Inadequate Encryption Strength**: Employing short keys (e.g., RSA 1024-bit) that can be easily brute-forced.
9. **Use of Broken/Risky Algorithms**: Utilizing obsolete protocols (e.g., MD5, SHA-1, or DES).
10. **Reversible One-Way Hashes**: Using fast or weak hashing functions vulnerable to pre-image or birthday attacks.
11. **Predictable IVs in CBC Mode**: Using static or predictable Initialization Vectors in block ciphers.
12. **Insufficient Entropy**: Generating values using poor random sources that expose patterns.

---

## Getting Started

Since this is a client-side static web application, there are no database or backend servers to configure. You can run it instantly.

### Option 1: Direct Open
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/cryptographic-failure.git
   ```
2. Double-click `index.html` to open the website directly in any modern browser (Chrome, Firefox, Safari, Edge).

---

## File Structure

```text
cryptographic-failure/
├── css/
│   └── style.css            # Custom animations, glossary tooltip styles, and typography
├── img/
│   ├── ciphertext/          # Assets representing encrypted folders
│   ├── encryption-resources/# Diagrams for Symmetric/Asymmetric processes
│   ├── general/             # Backgrounds, banners, and icons
│   └── plaintext/           # Assets representing unencrypted folders
├── js/
│   ├── modern-effects.js    # SPA router, glossary tooltip logic, scroll and reveal handlers
│   ├── nav.js               # Dynamic navbar insertion and state controller
│   ├── static-auth.js       # Simulated auth, login redirection, and guest session manager
│   └── update-modal-information2.js # Detailed database of CVE descriptions and mitigation strategies
├── LICENSE                  # MIT License details
├── README.md                # Project documentation
├── index.html               # Main entry point (SPA views)
└── profile.html             # Profile mockup page
```

---

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
