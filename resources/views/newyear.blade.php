<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:url"                content="https://mcmactech.me" />
        <meta property="og:type"               content="Portfolio" />
        <meta property="og:title"              content="Happy New Year" />
        <meta property="og:description"        content="Greetings from McMac Tech" />
        <meta property="og:image"              content="{{url('/assets/img/newyear.png')}}" />

        <title>Happy New Year | McMac Tech</title>
        <link rel="icon" href="{{url('/assets/img/MCMACTECH.ico')}}">
        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        @viteReactRefresh
        @vite(['resources/css/app.css','resources/js/app.jsx'])
    </head>
    <body>
        <header id="nav" class="fixed w-screen z-50">
        </header>
        <main class="container-fluid">
      
            
            <section id="newyear" class="min-h-screen flex md:flex-row flex-col items-center"></section>

            
          

        </main>

        <footer id="footer" class="bg-gray-200 text-center lg:text-left">
        </footer>
        

    </body>
</html>
