<script>
	import LoadingOverlay from "./LoadingOverlay.svelte";
	import {
	  showLoadingOverlay,
	  hideLoadingOverlay,
	  isLoadingOverlayShown,
	  loadingOverlayQueue
	} from "./loading-overlay-queue";

	function addLoadingOverlayRequest() {
	  const id = showLoadingOverlay();

	  setTimeout(() => {
	    hideLoadingOverlay(id);
	  }, 5000);
	}
</script>

<main>
	{#if $isLoadingOverlayShown}
		<LoadingOverlay />
	{/if}

	<div class="info">
		<h3>Number of requests: {$loadingOverlayQueue.length}</h3>
		<button on:click={addLoadingOverlayRequest}>Add overlay</button>
	</div>
</main>


<style>
	.info {
	  position: relative;
	  z-index: 100000;
	}
</style>