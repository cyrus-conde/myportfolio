<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>McMac Tech Portfolio</title>
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
            
            <section id="home" class="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black text-white"></section>

            <section id="about" class="min-h-screen flex py-10 md:flex-row flex-col bg-white text-black">
                
            </section>

            <section id="experience" class="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black text-white"></section>
            <section id="projects" class="min-h-screen flex py-10 md:flex-row flex-col items-center bg-white text-black"></section>
           
            <section id="contact" class="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black text-white body-font relative"></section>
            
          

        </main>

        <footer id="footer" class="bg-gray-200 text-center lg:text-left">
        </footer>
        

    </body>
</html>
