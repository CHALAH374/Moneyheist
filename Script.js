<!-- Inside card-content -->
<button onclick="activateCard(this)">Activate</button>

<script>
  function activateCard(btn) {
    const card = btn.closest('.card');
    card.classList.add('active');
    setTimeout(() => {
      card.classList.remove('active');
    }, 1000); // 1 second animation
  }
</script>

<style>
  .card.active {
    box-shadow: 0 0 20px 5px #00ffcc, 0 0 40px #00ffcc;
    transform: scale(1.1);
    transition: 0.3s ease;
  }
</style>
