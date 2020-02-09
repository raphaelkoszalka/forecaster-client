# Weather Forecaster

This is a micro-frontend with the purpose to show the forecast for each individual city added to back-end microservice database and display it's
next 5 days weather forecast.

## Few Considerations

I have chosen to develop the application  front-end using Angular 8 Framework.
It works as a Single Page Application.

You can also add new cities, if existing on OpenWeatherMap API, to the application and then
select those cities to see their forecast for the next five days.

I know that the user experience is not that good, but I have tried to do my best, considering
that my knowledge is more in a coding way. For example I should use Material Snackbars instead of simple alerts.

## How to run

To run the project you've got to have installed NodeJs, at least version 10 for @angular/cli.
Then just clone the repository, cd into it's folder, run npm install, and then ng serve or ng build --prod and serve it from
your http server of choice such as Nginx or Apache, just don't forget about the .httacces for Apache for example.


```
<IfModule mod_rewrite.c>
    RewriteEngine on
    # Don't rewrite files or directories
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Rewrite everything else to index.html
    # to allow html5 state links
    RewriteRule ^ index.html [L]
</IfModule>
```
## About the webservice

The README.md explaining on how to run the back-end is available at the server repository: [https://github.com/raphaelkoszalka/forecast-webservice]


## Further help or doubts
Just send me an e-mail at rmkoszalka@gmail.com, or via Gupy, or just send me a message at WhatsApp (Cibele knows my number, feel free to ask her).
I am here to help and I hope that the code is up to your expectations.
