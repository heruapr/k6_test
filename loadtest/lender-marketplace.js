import { check, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  vus: 1,
  duration: '1s',
  iterations : 1
  // thresholds: {
  //   // fail the test if avg percentile response goes above 500ms
  //   http_req_duration: ['avg<500'],
  //   http_req_failed: ['rate<0.25'],
  // }
  };

  export function setup() {
    const url = 'https://be.invtribe06.xyz/auth/login/frontoffice';
    const body = JSON.stringify({
        email : 'lender@investree.id',
        password : 'Asdf1234',
        captcha : 'qa-bypass-captcha'
    });
    const params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    const res = http.post(url, body, params);
    return { data: res.json().data};
  }

export default function (data) {
    console.log(JSON.stringify(data.data.accessToken));
    const url = 'https://be.invtribe02.xyz/loan/marketplace'
    const params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    const res = http.get(url,params);
    console.log(JSON.stringify(res.json().data));
}

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');
  return {
      './report/report.json': JSON.stringify(data),
  }
}