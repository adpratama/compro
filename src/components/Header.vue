<template>
    <div>
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">

            <h1 class="logo mr-auto"><router-link :to="{ path: '/' }" exact="">pratama.com</router-link></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                <!-- <li class="active"><a href="index.html">Home</a></li> -->
                <li><router-link :to="{ path: '/' }" exact="">Home</router-link></li>
                <li><router-link :to="{ path: '/about' }" exact="">About Us</router-link></li>
                <li><router-link :to="{ path: '/portfolio' }" exact="">Portfolio</router-link></li>
                <li><router-link :to="{ path: '/contact' }" exact="">Contact</router-link></li>

                </ul>
            </nav><!-- .nav-menu -->

            </div>
        </header>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i');
</style>
<script>
export default {
  name: "Header",
};
</script>