<script lang="ts">
    let { label, value = $bindable(), type } = $props();
    let isEditing = $state(false);
    let originalValue = $state("");

    function handleClick() {
        isEditing = true;
        startEdit();
    }

    function startEdit(){
        isEditing = true
        originalValue = value
    }

    function commitEdit(){
        isEditing = false
    }

    function cancelEdit(){
        isEditing = false
        value = originalValue
    }

    function onInputKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" && type !== "textarea") {
        e.preventDefault();
        commitEdit();
        }
        if (e.key === "Escape") {
        e.preventDefault();
        cancelEdit();
        }
    }

</script>

<div class="field">
    <label class="label">{label}</label>

    {#if isEditing}
        {#if type === 'textarea'}
            <textarea class="value" 
            bind:value aria-label={label}
            autofocus
            on:keydown={onInputKeydown}></textarea>
        {:else}
            <input class="value" {type} 
            bind:value aria-label={label}
            autofocus
            on:keydown={onInputKeydown} />
        {/if}
    {:else}
        <button class="value"
        type="button" aria-label={`Edit ${label}`}
        on:click={handleClick}>{value}</button>
    {/if}
</div>

<style>
  .field {
    margin-bottom: 1rem;
  }
  .label {
    font-size: 0.75rem;
    color: #666;
  }
  .value {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
  }
  .value:hover {
    background: #f5f5f5;
  }
  p{
    width: 50%;
    margin: 0 auto
  }
</style>