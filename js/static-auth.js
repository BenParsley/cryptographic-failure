(function () {
    var AUTH_MODE_KEY = "staticAuthMode";
    var USERNAME_KEY = "staticUsername";

    function isGuestMode() {
        return localStorage.getItem(AUTH_MODE_KEY) === "guest";
    }

    function setGuestMode(username) {
        localStorage.setItem(AUTH_MODE_KEY, "guest");
        localStorage.setItem(USERNAME_KEY, username || "Guest");
    }

    function clearAuthMode() {
        localStorage.removeItem(AUTH_MODE_KEY);
        localStorage.removeItem(USERNAME_KEY);
    }

    function messageFor(elementId, text, kind) {
        var target = document.getElementById(elementId);
        if (!target) {
            return;
        }

        target.textContent = text;
        target.classList.remove("message-error", "message-success", "message-info");
        target.classList.add(kind || "message-info");
    }

    function updateHeaderActions() {
        var authActions = document.getElementById("auth-actions");
        if (!authActions) {
            return;
        }

        if (isGuestMode()) {
            authActions.innerHTML = "<button type='button' class='btn btn-primary btn-hover' id='logout-btn'>Exit Guest</button>";
            var logoutButton = document.getElementById("logout-btn");
            if (logoutButton) {
                logoutButton.addEventListener("click", function () {
                    clearAuthMode();
                    window.location.href = "index.html";
                });
            }
            return;
        }

        authActions.innerHTML = "<a href='profile.html'><button type='button' class='btn btn-primary btn-hover'>Login</button></a>";
    }

    function setupLoginPage() {
        var loginForm = document.getElementById("login-form");
        var continueButton = document.getElementById("continue-btn");

        if (continueButton) {
            continueButton.addEventListener("click", function () {
                setGuestMode("Guest");
                messageFor("auth-message", "Continuing in local access mode...", "message-success");
                window.setTimeout(function () {
                    window.location.href = "index.html";
                }, 450);
            });
        }

        if (!loginForm) {
            return;
        }

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var uid = loginForm.querySelector("input[name='uid']");
            var pwd = loginForm.querySelector("input[name='pwd']");
            if (!uid || !pwd || !uid.value.trim() || !pwd.value.trim()) {
                messageFor("auth-message", "Please enter a username and password, or choose Continue.", "message-error");
                return;
            }

            setGuestMode(uid.value.trim());
            messageFor("auth-message", "Signed in locally in guest mode. Redirecting...", "message-success");
            window.setTimeout(function () {
                window.location.href = "index.html";
            }, 500);
        });
    }

    function setupSignupPage() {
        var signupForm = document.getElementById("signup-form");
        if (!signupForm) {
            return;
        }

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            messageFor(
                "signup-message",
                "This static build cannot create real accounts. Continue as guest from the login page.",
                "message-info"
            );
        });
    }

    function setupProfilePage() {
        var profileMessage = document.getElementById("profile-message");
        if (!profileMessage) {
            return;
        }

        var username = localStorage.getItem(USERNAME_KEY) || "Guest";
        if (isGuestMode()) {
            profileMessage.textContent = "Hello there " + username;
        } else {
            profileMessage.textContent = "Hello there Guest";
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        updateHeaderActions();
        setupLoginPage();
        setupSignupPage();
        setupProfilePage();
    });
})();
