import { get, post, put, del } from './requester.js';
import * as authHandler from './handlers/auth-handler.js';
import * as shared from './shared.js';

const app = Sammy("#rooter", function () {
    this.use('Handlebars', 'hbs');

    this.get('/', function (ctx) {
        shared.setHeaderInfo(ctx);

        if (ctx.isAuth) {
            get('appdata', 'recipes', 'Kinvey')
                .then((recipes) => {
                    ctx.recipes = recipes;

                    this.loadPartials(shared.getPartials())
                        .partial('./templates/home.hbs');
                })
        } else {
            this.loadPartials(shared.getPartials())
                .partial('./templates/home.hbs');
        }
    });

    this.get('/register', authHandler.getRegister);
    this.post('/register', authHandler.postRegister);
    this.get('/login', authHandler.getLogin);
    this.post('/login', authHandler.postLogin);
    this.get('/logout', authHandler.postLogout);

    this.get('/share', function() {
        shared.setHeaderInfo(ctx);
        this.loadPartials(shared.getPartials())
            .partial('./templates/recipes/share.hbs')
    });
});

app.run();