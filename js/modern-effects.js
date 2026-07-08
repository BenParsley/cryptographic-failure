(function () {
    var cryptoEntryObserver = null;

    var glossary = {
        "cryptographic failure": "A vulnerability caused by weak or misused cryptography that can expose protected data.",
        "encryption": "The process of converting plaintext into ciphertext using a cryptographic algorithm and key.",
        "decryption": "The process of converting ciphertext back into plaintext with the correct key.",
        "plaintext": "Readable, unencrypted data in its original form.",
        "ciphertext": "Encrypted data that is unreadable without the proper key.",
        "symmetric": "A method where the same key is used for both encryption and decryption.",
        "asymmetric": "A method that uses two keys: a public key and a private key.",
        "key": "A cryptographic value used to encrypt or decrypt information.",
        "keys": "Multiple cryptographic values used across encryption and decryption operations.",
        "same key": "A single shared key used on both sides in symmetric encryption.",
        "public key": "The non-secret key used to encrypt data in asymmetric cryptography.",
        "private key": "The secret key used to decrypt data in asymmetric cryptography.",
        "encrypted": "Data that has already been transformed into ciphertext.",
        "decrypted": "Data converted from ciphertext back into readable plaintext."
    };

    function normalizeTerm(value) {
        return value.toLowerCase().replace(/\s+/g, " ").trim();
    }

    function definitionFor(rawTerm) {
        var term = normalizeTerm(rawTerm);
        if (glossary[term]) {
            return glossary[term];
        }

        if (term.endsWith("s") && glossary[term.slice(0, -1)]) {
            return glossary[term.slice(0, -1)];
        }

        return null;
    }

    function setupGlossary() {
        var terms = document.querySelectorAll(".text-bold");
        if (!terms.length) {
            return;
        }

        // Create a single reusable inline tooltip
        var tooltip = document.createElement("div");
        tooltip.id = "glossary-tooltip";
        tooltip.className = "glossary-tooltip";
        tooltip.setAttribute("aria-live", "polite");
        tooltip.innerHTML = "<strong class='glossary-tooltip-term' id='glossary-tooltip-term'></strong>" +
            "<p class='glossary-tooltip-def' id='glossary-tooltip-def'></p>";
        document.body.appendChild(tooltip);

        var tooltipTerm = document.getElementById("glossary-tooltip-term");
        var tooltipDef  = document.getElementById("glossary-tooltip-def");
        var activeTerm  = null;
        var pinnedByClick = false;

        function positionTooltip(termEl) {
            var rect = termEl.getBoundingClientRect();
            var scrollY = window.pageYOffset;
            var scrollX = window.pageXOffset;
            var tipLeft = 0;
            var tipTop  = rect.bottom + scrollY + 8;

            // Keep tooltip within viewport width
            tooltip.style.left = "0";
            tooltip.style.top  = tipTop + "px";
            tooltip.style.visibility = "hidden";
            tooltip.style.display = "block";
            var tipWidth = tooltip.offsetWidth;
            var termCenter = rect.left + scrollX + (rect.width / 2);
            var maxLeft  = scrollX + window.innerWidth - tipWidth - 12;
            tipLeft = termCenter - (tipWidth / 2);
            tipLeft = Math.max(scrollX + 8, Math.min(tipLeft, maxLeft));
            tooltip.style.left = tipLeft + "px";
            tooltip.style.visibility = "";
        }

        function showTooltip(termEl, persist) {
            var definition = definitionFor(termEl.textContent);
            if (!definition) { return; }

            if (activeTerm && activeTerm !== termEl) {
                activeTerm.classList.remove("is-open");
            }

            tooltipTerm.textContent = termEl.textContent.replace(/\s+/g, " ").trim();
            tooltipDef.textContent  = definition;
            positionTooltip(termEl);
            tooltip.classList.add("is-visible");
            termEl.classList.add("is-open");
            activeTerm = termEl;
            pinnedByClick = !!persist;
        }

        function hideTooltip() {
            tooltip.classList.remove("is-visible");
            if (activeTerm) {
                activeTerm.classList.remove("is-open");
            }
            activeTerm = null;
            pinnedByClick = false;
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") { hideTooltip(); }
        });

        document.addEventListener("click", function (event) {
            if (!tooltip.classList.contains("is-visible")) { return; }
            var clickedTerm = event.target.closest(".text-bold");
            if (!clickedTerm || clickedTerm === activeTerm) {
                hideTooltip();
            }
        });

        window.addEventListener("scroll", function () {
            if (activeTerm && tooltip.classList.contains("is-visible")) {
                positionTooltip(activeTerm);
            }
        }, { passive: true });

        window.addEventListener("resize", function () {
            if (activeTerm && tooltip.classList.contains("is-visible")) {
                positionTooltip(activeTerm);
            }
        });

        terms.forEach(function (term) {
            term.setAttribute("tabindex", "0");
            term.setAttribute("role", "button");
            term.classList.add("glossary-term");

            function handler(event) {
                event.stopPropagation();
                if (activeTerm === term && tooltip.classList.contains("is-visible")) {
                    hideTooltip();
                } else {
                    showTooltip(term, true);
                }
            }

            term.addEventListener("click", handler);
            term.addEventListener("mouseenter", function () {
                if (pinnedByClick && activeTerm && activeTerm !== term) {
                    return;
                }
                showTooltip(term, false);
            });
            term.addEventListener("mouseleave", function () {
                if (!pinnedByClick && activeTerm === term) {
                    hideTooltip();
                }
            });
            term.addEventListener("focus", function () {
                showTooltip(term, false);
            });
            term.addEventListener("blur", function () {
                if (!pinnedByClick && activeTerm === term) {
                    hideTooltip();
                }
            });
            term.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handler(event);
                }
            });
        });
    }

    function setupRevealAnimations() {
        var revealTargets = document.querySelectorAll(
            ".banner-content-area, .section-one, .section-two .section-subcategory, .section-three .section-subcategory, .login-content, .signup-content, .profile-note"
        );

        if (!revealTargets.length || !("IntersectionObserver" in window)) {
            return;
        }

        revealTargets.forEach(function (el) {
            el.classList.add("reveal-item");
        });

        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });

        revealTargets.forEach(function (target) {
            observer.observe(target);
        });
    }

    function setupCryptoEntryVisibility() {
        var entries = document.querySelectorAll(".block-container");
        if (!entries.length) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            entries.forEach(function (entry) {
                entry.classList.add("entry-visible");
            });
            return;
        }

        if (!cryptoEntryObserver) {
            cryptoEntryObserver = new IntersectionObserver(function (entriesList) {
                entriesList.forEach(function (entry) {
                    entry.target.classList.toggle("entry-visible", entry.isIntersecting);
                });
            }, {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
            });
        }

        entries.forEach(function (entry) {
            cryptoEntryObserver.observe(entry);
        });
    }

    function setupStickyHeaderEffect() {
        var header = document.querySelector(".header-section");
        if (!header) {
            return;
        }

        function syncHeaderState() {
            var y = window.scrollY;

            if (y > 35) {
                header.classList.add("menu-fixed");
            } else {
                header.classList.remove("menu-fixed");
            }
        }

        window.addEventListener("scroll", syncHeaderState);
        window.addEventListener("resize", syncHeaderState);
        syncHeaderState();
    }

    function setupSmoothSectionNavigation() {
        var links = document.querySelectorAll("a.smooth-scroll-link[href^='#']");
        if (!links.length) {
            return;
        }

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animatedScrollTo(targetElement, extraOffset) {
            var header = document.querySelector(".header-section");
            var headerOffset = header ? header.offsetHeight : 0;
            var startY = window.pageYOffset;
            var targetY = targetElement.getBoundingClientRect().top + startY - headerOffset - 44 + (extraOffset || 0);
            var distance = targetY - startY;
            var duration = 700;
            var startTime = null;

            function step(currentTime) {
                if (!startTime) {
                    startTime = currentTime;
                }

                var elapsed = currentTime - startTime;
                var progress = Math.min(elapsed / duration, 1);
                var eased = easeInOutCubic(progress);
                window.scrollTo(0, startY + distance * eased);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        }

        links.forEach(function (link) {
            link.addEventListener("click", function (event) {
                var rawTarget = link.getAttribute("href");
                if (!rawTarget || rawTarget.length < 2) {
                    return;
                }

                var targetElement = document.querySelector(rawTarget);
                if (!targetElement) {
                    return;
                }

                event.preventDefault();
                var extraOffset = parseInt(link.getAttribute("data-scroll-offset") || "0", 10);
                animatedScrollTo(targetElement, extraOffset);
            });
        });
    }

    function setupViewSwitching() {
        function updateNavActive(viewId) {
            document.querySelectorAll('.main-menu .nav-item a[data-view]').forEach(function (link) {
                link.parentElement.classList.remove('active');
                if (link.getAttribute('data-view') === viewId) {
                    link.parentElement.classList.add('active');
                }
            });
        }

        function switchView(targetId) {
            var current = document.querySelector('.page-view.is-active');
            var target = document.getElementById(targetId);
            if (!target || (current && current.id === targetId)) { return; }

            if (current) {
                current.style.transition = 'opacity 0.3s ease';
                current.style.opacity = '0';
                window.setTimeout(function () {
                    current.classList.remove('is-active');
                    current.style.opacity = '';
                    current.style.transition = '';

                    target.style.opacity = '0';
                    target.classList.add('is-active');
                    window.scrollTo(0, 0);

                    window.requestAnimationFrame(function () {
                        window.requestAnimationFrame(function () {
                            target.style.transition = 'opacity 0.3s ease';
                            target.style.opacity = '1';
                            window.setTimeout(function () {
                                target.style.opacity = '';
                                target.style.transition = '';
                                // Re-run reveal animations for newly shown view
                                setupRevealAnimations();
                                setupCryptoEntryVisibility();
                            }, 300);
                        });
                    });

                    updateNavActive(targetId);
                }, 300);
            } else {
                target.classList.add('is-active');
                updateNavActive(targetId);
            }
        }

        // Intercept clicks on any [data-view] link — only on the SPA page
        var isSPAPage = !!document.querySelector('.page-view');
        if (isSPAPage) {
            document.addEventListener('click', function (event) {
                var link = event.target.closest('a[data-view]');
                if (!link) { return; }
                event.preventDefault();
                switchView(link.getAttribute('data-view'));
            });
        }

        // On load, honour a hash like index.html#view-cryptographic-failure
        var hash = window.location.hash.replace('#', '');
        if (hash && isSPAPage) {
            var hashTarget = document.getElementById(hash);
            if (hashTarget && hashTarget.classList.contains('page-view')) {
                switchView(hash);
            }
        }

        // Set initial nav active state
        var activeView = document.querySelector('.page-view.is-active');
        if (activeView) { updateNavActive(activeView.id); }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setupGlossary();
        setupRevealAnimations();
        setupCryptoEntryVisibility();
        setupStickyHeaderEffect();
        setupSmoothSectionNavigation();
        setupViewSwitching();
    });
})();
