<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESTCountries</title>
    <script src="countries.js" defer></script>
    
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


</head>
<body class="w-50 py-5 m-auto">
    <h1 class="text-center">List des pays</h1>
    <div class="container">
        <div class="row">
            <div class="col py-3">
                <div class="py-3">
                    <label>Research par capital : </label>
                    <input class="form-control" type="text" id="search" name="search" value="Input here...">
                </div> 
            </div>
        </div>        
    </div>
    <div class="d-none" id="load">Chargement en cours...</div>
    
</body>
</html>