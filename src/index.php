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
                    <?php include 'inc/left-main/index.html' ?>
                </div>
            </div>
        </main>

        <footer>
            <?php include 'inc/footer.html' ?>
        </footer>

    </div>

</body>

<!-- <script src="../node_modules/jquery/dist/jquery.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../node_modules/chart.js/dist/chart.min.js"></script>
<script src="js/colors.js"></script>
<script src="js/dom-change.js"></script>
<script src="js/charts.js"></script>
<!-- calender -->
<script src="js/plugin/calender/hijri.js"></script>
<script src="js/plugin/calender/jalali.js"></script>
<script src="js/plugin/calender/calender.js"></script>
<!-- todo -->
<script src="js/plugin/todo.js"></script>
<!-- app -->
<script src="js/app.js"></script>
</html>