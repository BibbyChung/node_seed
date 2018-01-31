import * as request from 'request';


const fun = async () => {
  var options = {
    method: 'GET',
    url: 'https://xxxxxxxxxxxxxx.xx.xxx',
    headers:
      {
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Cookie: 'optimizelyEndUserId=oeu1515146446075r0.43537351648476097; optimizelySegments=%7B%225541630458%22%3A%22gc%22%2C%225534121610%22%3A%22referral%22%2C%225537550462%22%3A%22false%22%7D; optimizelyBuckets=%7B%7D; _ga=GA1.3.1963209206.1515146447; __utmc=147059567; __utmz=147059567.1517380783.17.7.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utma=147059567.1963209206.1515146447.1517380783.1517388635.18; __utmt=1; XSRF-TOKEN=eyJpdiI6ImhxUEFyVU5jZEdcL2VJVmJITXVORXlBPT0iLCJ2YWx1ZSI6IlRENGZGWUFydlgyT2xLdkprSlRUSjJBUzFJMXg2aDhtcGVpVm1raG81NDRaV2o3UmdQcm1jS2l5Zm9jbFV6bnFMdXNpZytOZlB3V3Yydk42dkd4dXZ3PT0iLCJtYWMiOiIwNjZkOTJkMjk4ZmQxYTQzYTAxNjEwOTkwM2Q3ZTRlMWFjZTRiNGEwYjFiZGE4YmFhNGExZmE4NTQwNjI5MGNhIn0%3D; ithelp2016_desktop=eyJpdiI6Ilg2ekdLZEo2dzE1SXBwc3hFU282VWc9PSIsInZhbHVlIjoiMEVuWUluN1wvbnd3b2Z4QlBLNkxMb2pDSytJdElGN3h2N1wvU1wvb2hwUjJSN3VsdGRabXU2WHdtU1J1RVJaRVJsYzRWRWZzWlVOd08zQUJrOUtnVDVuUmc9PSIsIm1hYyI6IjE5ODI2MTQyYjM0NTkwMGE5ZWU1MTY1YWFjN2E3MzgxOTc3Y2Q4Yjc4ODZmOTczOGRlMDlkYzQ5YTU5NWM2YTQifQ%3D%3D; __utmb=147059567.3.10.1517388635',
        Referer: '',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
        'Upgrade-Insecure-Requests': '1',
        'Accept-Language': 'en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7,ja;q=0.6,zh-CN;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br'
      }
  };

  delete options.headers['Accept-Encoding'];

  const p = new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      }
      resolve(body);
    });
  });

  const body = await p;

  console.log(body);
}

fun();