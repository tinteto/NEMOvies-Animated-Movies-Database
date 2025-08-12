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
    this.timeout(10000);


    before(async () => {
        browser = await chromium.launch({ headless : true, slowMo });
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

    it('should show application name', async() => {
        await page.goto(host);
        await page.waitForSelector('#appName');
        const visible = await page.isVisible('#appName');
        expect(visible).to.be.true;
    });

    it.only('should show Home in the header section', async() => {
        await page.goto(host);
        await page.waitForSelector('#home');
        const visible = await page.isVisible('#home');
        expect(visible).to.be.true;
    });

    it.only('should show Movie Catalog in the header section', async() => {
        await page.goto(host);
        await page.waitForSelector('#catalog');
        const visible = await page.isVisible('#catalog');
        expect(visible).to.be.true;
    });

    it.only('should show Search Movies in the header section', async() => {
        await page.goto(host);
        await page.waitForSelector('#search');
        const visible = await page.isVisible('#search');
        expect(visible).to.be.true;
    });


    it('should show welcome message', async() => {
        await page.goto(host);
        await page.waitForSelector('h1');
   
        const content = await page.textContent('h1');
        expect(content).to.include('Welcome to NEMOvies!');

      
    });

    it('should show sub-title message', async() => {
        await page.goto(host);
        await page.waitForSelector('h3');

        const subtitleContent = await page.textContent('h3');
        expect(subtitleContent).to.include('Dive into the limitless world of movie adventures! Enjoy in moderation!');
    
    });

    it('should display Get Started button for guests only', async() => {
        await page.goto(host);
        await page.waitForSelector('._loginBtn_1hi5w_67');
        let visible = await page.isVisible('._loginBtn_1hi5w_67');
        expect(visible).to.be.true;
    });

    it('should display Learn more button for guests only', async() => {
        await page.goto(host);
        await page.waitForSelector('._learnMoreBtn_1hi5w_85');
        let visible = await page.isVisible('._learnMoreBtn_1hi5w_85');
        expect(visible).to.be.true;
    });

    it('should display homepage image', async() => {
        await page.goto(host);

        await page.waitForSelector('._homeImg_1hi5w_101');
        let visible = await page.isVisible('._homeImg_1hi5w_101');
        expect(visible).to.be.true;
    })

    it('should display Latest Movies text', async() => {
        await page.goto(host);

        await page.waitForSelector('._latest_1hi5w_139 h1');
        const h1Content = await page.textContent('._latest_1hi5w_139 h1');
        expect(h1Content).to.include('Latest Movies');
    });

    it('it should show movie list when available', async() => {
        await page.goto(host);

       await page.waitForSelector('._homePage_1hi5w_161 div');

       const movies = await page.$$('._homePage_1hi5w_161 div');
       expect(movies.length).to.be.above(0);
        
    });

    it('it should display No Movies Yet! when catalog is empty', async() => {
        await page.goto(host);

        await page.waitForSelector('h3.noMovies');
        const emptyCatalog = await page.textContent('h3.noMovies');
        expect(emptyCatalog).to.include('No movies yet!');

    });
}
)