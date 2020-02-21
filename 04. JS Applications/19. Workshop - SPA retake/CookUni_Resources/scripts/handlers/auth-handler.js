import { get, post, put, del } from '../requester.js';
import { getPartials, setHeaderInfo } from '../shared.js';


function saveAuthInfo(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('fullName', `${userInfo.firstName} ${userInfo.lastName}`);
};

export function getRegister(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials())
        .partial('./templates/auth/register.hbs');
}

export function postRegister(ctx) {
    const { firstName, lastName, username, password, repeatPassword } = ctx.params;

    if (firstName && lastName && username && password && password === repeatPassword) {
        post('user', '', { firstName, lastName, username, password }, 'Basic')
            .then((userInfo) => {
                saveAuthInfo(userInfo);
                ctx.redirect('/login');
            })
            .catch(console.error);
    }
}

export function getLogin(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials())
        .partial('./templates/auth/login.hbs');
}

export function postLogin(ctx) {
    const { username, password } = ctx.params;

    if (username && password) {
        post('user', 'login', { username, password }, 'Basic')
            .then((userInfo) => {
                saveAuthInfo(userInfo);
                ctx.redirect('/');
            })
            .catch(console.error);
    }
}

export function postLogout(ctx) {
    sessionStorage.clear();
    ctx.redirect('/');
}