<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css" rel="stylesheet">
        <link href="https://unpkg.com/primevue/resources/primevue.min.css" rel="stylesheet">
        <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body class="antialiased">
        <div id="app">
            <Home />
        </div>
        <script src="{{mix('js/app.js')}}"></script>
    </body>

</html>
