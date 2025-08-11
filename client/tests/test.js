import { chromium } from 'playwright-chromium';
import { expect } from 'chai';
import { after, afterEach, before, beforeEach, describe, it } from 'mocha';

let browser;
let page;

const userApplicationHttpPort = "3003";

const host = "http://localhost:" + userApplicationHttpPort; // Application host (NOT service host - that can be anything)
const interval = 200;
const DEBUG = false;

const slowMo = 500;


// const endpoints = {
//     register: "/users/register",
//     login: "/users/login",
//     logout: "/users/logout",
//     catalog: "/data/characters?sortBy=_createdOn%20desc",
//     create: "/data/characters",
//     search: (query) => `/data/characters?where=name%20LIKE%20%22${query}%22`,
//     details: (id) => `/data/characters/${id}`,
//     delete: (id) => `/data/characters/${id}`,
//     own: (characterId, userId) => `/data/characters?where=_id%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
//     like: '/data/useful',
//     totalLikes: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
//     userLikes: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
// };

describe('Homepage', function() {
    this.timeout(5000);


    before(async () => {
        browser = await chromium.launch({ headless : false, slowMo });
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });


    it('should show welcome message', async() => {
        await page.goto(host);
        await page.waitForSelector('h1');
   
        const content = await page.textContent('h1');
        expect(content).to.include('Welcome to NEMOvies!');

      
    });

}
)