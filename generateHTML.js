function generateHTML(answers) {

     `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Cogineer Team</title>
    </head>
    
    <body>
        <header>The best team in the world</header>
        <div class="manager">
            <div class="card-body">
                <h4 class="card-title">${data.name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                    <!-- put id card here,email and office number -->
                </p>
                <a href="https://www.github.com" target="_blank" class="card-link">
                   ${data.github}
                </a>
                <a href="${data.email}" class="card-link">
                ${data.email}
             </a>
        </div>
        <div class=engineer>
            <div class="card-body">
                <h4 class="card-title">
                    <!--add with class title-->
                </h4>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                    <!-- put id card here, email and git hub -->
                </p>
                <a href="#!" class="card-link">Card link</a>
                <a href="#!" class="card-link">Another link</a>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                    <!-- put id card here, email and git hub -->
                </p>
                <a href="#!" class="card-link">Card link</a>
                <a href="#!" class="card-link">Another link</a>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                    <!-- put id card here, email and git hub -->
                </p>
                <a href="#!" class="card-link">Card link</a>
                <a href="#!" class="card-link">Another link</a>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                    <!-- put id card here, email and git hub -->
                </p>
                <a href="#!" class="card-link">Card link</a>
                <a href="#!" class="card-link">Another link</a>
            </div>
        </div>
    
    
    </body>
    
    </html>`
};
module.exports = generateHTML;