<script lang="ts">
    import InlineField from "./InlineField.svelte";
    import { useInlineEdit } from "./useInlineEdit.svelte.ts";

    const user = {
        name: "Percy",
        email: "pjo@hb.com",
        bio: "dofihwoiefh"
    };

    async function saveProfile(updated) {
        // add a short delay to simulate server latency
        await new Promise((r) => setTimeout(r, 500));
        Object.assign(user, updated);
        console.log("Profile saved:", user);
    }

    const edit = useInlineEdit(user, saveProfile);

</script>

<h2>User Profile</h2>

<InlineField label="Name" bind:value={edit.draft.name} type="text"/>

<InlineField label="Email" bind:value={edit.draft.email} type="email"/>

<InlineField label="Bio" bind:value={edit.draft.bio} type="textarea"/>

{#if !edit.isDirty()}
    <button on:click={edit.save}>Save</button>
    <button on:click={edit.cancel}>Cancel</button>
{/if}