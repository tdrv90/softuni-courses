import { get, post, put, del } from './requester.js';

const app = Sammy("#main", function () {
    this.use('Handlebars', 'hbs');

    this.get('/', function (ctx) {
        setHeaderInfo(ctx);

        if (ctx.isAuth) {
            get('appdata', 'treks', 'Kinvey')
                .then((treks) => {
                    ctx.treks = treks;

                    this.loadPartials(getPartials())
                        .partial('./templates/home.hbs');
                })
        } else {
            this.loadPartials(getPartials())
                .partial('./templates/home.hbs');
        }
    });

    this.get('/register', function (ctx) {
        setHeaderInfo(ctx);

        this.loadPartials(getPartials())
            .partial('./templates/auth/register.hbs');
    });

    this.post('/register', function (ctx) {
        const { username, password, rePassword } = ctx.params;

        if (username && password && rePassword && password === rePassword) {
            post('user', '', { username, password }, 'Basic')
                .then((userInfo) => {
                    saveAuthInfo(userInfo);
                    ctx.redirect('/login');
                });
        }
    });

    this.get('/login', function (ctx) {
        setHeaderInfo(ctx);

        this.loadPartials(getPartials())
            .partial('./templates/auth/login.hbs');
    });

    this.post('/login', function (ctx) {
        const { username, password } = ctx.params;

        if (username && password) {
            post('user', 'login', { username, password }, 'Basic')
                .then((userInfo) => {
                    saveAuthInfo(userInfo);
                    ctx.redirect('/');
                })
                .catch(console.error);
        };
    });

    this.get('/logout', function (ctx) {
        sessionStorage.clear();
        ctx.redirect('/');
    });

    this.get('/create', function (ctx) {
        setHeaderInfo(ctx);

        this.loadPartials(getPartials())
            .partial('./templates/create.hbs');
    });

    this.post('/create', function (ctx) {
        setHeaderInfo(ctx);
        const { location, dateTime, description, imageURL } = ctx.params;

        if (location && dateTime && description && imageURL) {
            post('appdata', 'treks', {
                location,
                dateTime,
                description,
                imageURL,
                likes: 0,
                organizer: ctx.username
            }).then(() => {
                ctx.redirect('/');
            }).catch(console.error);
        }
    });

    this.get('/treks/:id', function (ctx) {
        const id = ctx.params.id;

        setHeaderInfo(ctx);

        get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
                trek.isCreator = sessionStorage.getItem('userId') === trek._acl.creator;
                ctx.trek = trek;

                this.loadPartials(getPartials())
                    .partial('../templates/trek-details.hbs');
            })
            .catch(console.error);
    });

    this.get('/edit/:id', function (ctx) {
        const id = ctx.params.id;
        setHeaderInfo(ctx);

        get('appdata', `treks/${id}`, 'Kinvey')
            .then((trek) => {
                ctx.trek = trek;
                this.loadPartials(getPartials())
                    .partial('../templates/trek-edit.hbs');
            })
            .catch(console.error);
    });

    this.post('/edit/:id', function (ctx) {
        const id = ctx.params.id;
        const { name, dateTime, description, imageURL } = ctx.params;

        put('appdata' `treks/${id}`, { name, dateTime, description, imageURL }, 'Kinvey')
            .then(() => {
                ctx.redirect('/');
            }).catch(console.error);

    });

    this.post('/like/:id', function (ctx) {
        const id = ctx.params.id;
        const { likes } = ctx.params;

        put('appdata', `treks/${id}`, { likes: likes + 1 }, 'Kinvey')
        then(() => {

        })
            .catch(console.error);
    });

    this.post('/delete/:id', function (ctx) {
        const id = ctx.params.id;

        del('appdata', `treks/${id}`, 'Kinvey')
            .then(console.log)
            .then(console.error);
    })


    function getPartials() {
        return {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }
    };

    function setHeaderInfo(ctx) {
        ctx.isAuth = sessionStorage.getItem('authtoken') !== null;
        ctx.username = sessionStorage.getItem('username');
    };

    function saveAuthInfo(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('userId', userInfo._id);
    };
})

app.run();