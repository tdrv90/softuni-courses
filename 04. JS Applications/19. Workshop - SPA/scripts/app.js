import { get, post, put, del } from './requester.js';

(() => {
    const app = Sammy('#rooter', function () {
        this.use('Handlebars', 'hbs');

        this.get('/', function (ctx) {
            this.loadPartials(getPartials())
                .partial('./views/home.hbs');
        });

        this.get('/register', function (ctg) {
            this.loadPartials(getPartials())
                .partial('./views/auth/register.hbs');
        });

        this.post('/register', function (ctg) {
            const { firstName, lastName, username, password, repeatPassword } = ctx.params;

            if (firstName && lastName && username && password && repeatPassword) {
                post('user', '', { firstName, lastName, username, password }, 'Basic')
                    .then((userInfo) => {
                        console.log(userInfo);
                        ctx.redirect('/login');
                    })
                    .catch(console.error);
            }
        });

        this.get('/login', function (ctg) {
            this.loadPartials(getPartials())
                .partial('./views/auth/login.hbs')
        });
        this.post('/login', function (ctg) {

        });


        function getPartials() {
            return {
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }
        }
    });

    app.run();
})()