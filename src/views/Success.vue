<template>
    <div class="success">
            <div class="d-flex success-checkout align-items-center justify-content-center">
        <div class="col col-lg-4 text-center">
            <img src="img/success-buy.png" alt="" width="294">
            <h3 class="mt-4">
                Sukses Terkirim!
            </h3>
            <p class="mt-2">
                Terima kasih atas masukan yang telah anda berikan.
            </p>
            <router-link to="/"><a  class="primary-btn pd-cart mt-3">Back to Home</a></router-link>
        </div>
    </div>
        
    </div>
</template>

<script>


export default {
    name: 'success'
}
</script>