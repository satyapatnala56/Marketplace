Basic Overview:
>This application is a marketplace for models that are available in the outside world. It has features to upload a model, view featured models, explore a specific model
>There are filters to filter based on type of model 
>Models can be viewed in two ways which can be changed by clicking the icons in top right in models space
>Users can also switch between light mode and dark mode
>Users can try out the models if the developer who uploaded them gave that feature
>Models can be browsed using the search bar in the header
>Pagination is applied from client side(server side would have been better but no server:( )
>Used MY JSON Server just for fetching data but there is a content limit on it so couldnt request more than 5 objects 

JS Framework:
>ReactJS

Major Packages:
>redux, react-router, swr

Page Load Time
>It takes an average of 1.5 seconds for user to start interacting with the website

Optimisations
>React memo: used react memo to prevent unnecessary re render
>swr : used swr package to enable caching requests so that network time will be decreased on reloads