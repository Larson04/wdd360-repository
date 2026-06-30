<script>
    import { authClient } from "../lib/auth-client.js"; //import the auth client

    let email = $state("");
    let password = $state("");
    let name = $state("");

    async function handleSignUp(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        if(!email.trim() || !password.trim() || !name.trim()) return;

        const { data, error } = await authClient.signUp.email({
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            // image, // User image URL (optional)
            callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
        }, 
        {
            onRequest: (ctx) => {
                //show loading
            },
            onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
        }
    );
}
</script>

<form onsubmit={handleSignUp}>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" bind:value={email} required /> 

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" bind:value={password} required />

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" bind:value={name} required />

    <button type="submit">Sign Up</button>
</form>