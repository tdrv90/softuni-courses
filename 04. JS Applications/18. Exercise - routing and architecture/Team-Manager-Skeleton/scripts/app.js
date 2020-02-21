import { get, post, put, del } from './requester.js';

(() => {
    const partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }

    console.log('hello');
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/', loadHome);
        this.get('#/home', loadHome);

        this.get('#/about', function (ctx) {
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/about/about.hbs');
                })
        });

        this.get('#/login', function (ctx) {
            getSessionInfo(ctx);

            partials['loginForm'] = './templates/login/loginForm.hbs';

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/login/loginPage.hbs');
                });
        });

        this.get('#/register', function (ctx) {
            getSessionInfo(ctx);

            partials['registerForm'] = './templates/register/registerForm.hbs';

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/register/registerPage.hbs');
                })
        });

        this.post('#/register', function (ctx) {
            const { username, password, repeatPassword } = ctx.params;

            if (password === repeatPassword) { }
            post('user', '', { username, password }, 'Basic')
                .then(data => {
                    console.log(data)
                    ctx.redirect('#/login');
                })
                .catch(err => alert(err));
        })

        this.post('#/login', function (ctx) {
            const { username, password } = ctx.params;

            post('user', 'login', { username, password }, 'Basic')
                .then(userInfo => {
                    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
                    sessionStorage.setItem('username', userInfo.username);

                    ctx.redirect('#/');
                })
                .catch(err => alert(err));
        })

        this.get('#/catalog', function (ctx) {
            partials['team'] = './templates/catalog/team.hbs';

            get('appdata', 'teams', 'Kinvey')
                .then((data) => {
                    ctx.teams = data;

                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./templates/catalog/teamCatalog.hbs');
                        });
                })
                .catch(err => alert(err));

        });

        this.get('#/logout', function (ctx) {
            sessionStorage.clear();
            ctx.redirect('#/');
        })

        function loadHome(ctx) {
            getSessionInfo(ctx);

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/home/home.hbs');
                });
        }

        function getSessionInfo(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

        }
    });


    app.run();
})();