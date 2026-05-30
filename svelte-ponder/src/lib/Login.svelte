<script>

function loginHandler(e) {
    //Remove when done testing
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        e.preventDefault();
        console.log("Error: Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        e.preventDefault();
        console.log("Error:Password must be at least 6 characters long.");
        return;
    }

    console.log("Login successful!");
}

</script>

<form on:submit={loginHandler}>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button type="submit">Login</button>
</form>

