import puppeteer from "puppeteer";
export default async function getRequests(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  const requests = [];
  page.on("request", (request) => {
    requests.push(request.url());
    request.continue();
  });
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await browser.close();
  return requests;
}
