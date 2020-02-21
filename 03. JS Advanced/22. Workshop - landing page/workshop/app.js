'use strict';

class SpaceShip extends HTMLElement {
    constructor() {
        super();
        console.log('constructed')
    }

    adoptedCallback() {
        console.log('attached');
    }
    connectedCallback() {
        console.log('connected');
    }

    disconnectedCallback() {
        console.log('disconnected');
    }

    static get observedAttributes() {
        this.shadow = this.attachShadow({ mode: 'closed' });
        const style = document.createElement('style');
        const div = document.createElement('div');

        style.textContent = `
        body {
            background: #000;
        }

        .stars {
            z-index: 0;
            background-image: url("/assets/stars-1.png");
            background-repeat: repeat;
            background-position: 0 0;
            background-size: 40%;

            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        .stars+.stars {
            background-image: url("/assets/stars-2.png");
            background-size: 40%;
        }

        .stars+.stars+.stars {
            background-image: url("/assets/stars-3.png");
            background-size: 100%;
        }

        .ship {
            display: block;
            position: absolute;
            height: 210px;
            width: 210px;
            background-repeat: no-repeat;
            background-size: 420px 210px;

            transition-delay: 0s;
            transition-duration: 100ms;
            transition-property: transform;
            transition-timing-function: linear;

            background-image: url(/assets/ship-sprite.gif);

            top: 0;
            left: 0;
            background-position: 0 0;
            transform: rotate(90deg);
        }`;

        this.setAttribute('dir', 'right');
        this.setAttribute('t', '0');
        this.setAttribute('l', '0');
        this.setAttribute('engine', 'off');

        this.shadow.appendChild(style);
        this.shadow.appendChild(div);
    }

    attributeChangedCallback() {
        console.log('asd');
    }

}

window.customElements.define('space-ship', SpaceShip);

document.body.appendChild(new SpaceShip());