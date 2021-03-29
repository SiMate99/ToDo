<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Sibak Máté</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
        <link href="stilus.css" rel="stylesheet" type="text/css"/>
        <script src="feldolgoz.js" type="text/javascript"></script>
    </head>
    <body>
        <main>
            <header><h1>Teendők</h1></header>
            <section>
                <h1 id="cim">TODO lista</h1>
                <form id="urlap">
                    <input type="text" id="teendo" value="Tanév vége">
                    <input type="date" id="datum" value="2021.04.30">
                    <input type="button" id="add" value="Add">
                    <input type="button" id="betolt" value="Betölt">
                </form>
                <ul id="lista">
                    
                </ul>
            </section>
            <footer>Sibak Máté</footer>
        </main>
    </body>
</html>
