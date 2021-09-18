const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log("Bot de conversão de moeda");

async function robot() {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const baseMoney = readlineSync.question('Informe a moeda base: ') || 'real';
    const requiredMoney = readlineSync.question('Informe a moeda desejada: ') || 'dolar'
    const url = `https://www.google.com/search?q=${baseMoney}+para+${requiredMoney}&rlz=1C1GCEA_enBR925BR925&oq=${baseMoney}+para+${requiredMoney}&aqs=chrome.0.0i433i512l2j0i512j0i457i512j0i512l6.1356j1j7&sourceid=chrome&ie=UTF-8`

    await page.goto(url);

    const result = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor de 1 ${baseMoney} em ${requiredMoney} é ${result}`);
    await browser.close();
}

robot();    