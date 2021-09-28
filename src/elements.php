<?php include 'inc/head.html' ?>

<body>

    <div class="right-side">
        <?php include 'inc/sidebar.html' ?>
    </div>

    <div class="left-side">

        <div class="mobile-bg-cover"></div>

        <header>
            <div class="container-fluid ">
                <div class="row header">
                    <?php include 'inc/left-header.html' ?>
                </div>
            </div>
        </header>

        <main>
            <div class="container-fluid">
                <div class="left-main">
                    <?php include 'inc/left-main/elements.html' ?>
                </div>
            </div>
        </main>

        <footer>
            <?php include 'inc/footer.html' ?>
        </footer>

    </div>

</body>

<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<!-- components -->
<script src="js/components/accordion.js"></script>
<script src="js/components/modal.js"></script>
<script src="js/components/toast.js"></script>
<!-- - -->
<script src="js/app.js"></script>
<script src="js/colors.js"></script>
<script src="js/dom-change.js"></script>
<!-- <script src="js/charts.js"></script> -->

</html>