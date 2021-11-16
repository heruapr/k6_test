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

export default function () {
  var url = 'https://blazedemo.com/'
//  http.get(url);
 var res =  http.get(url);
 check(res, {
        "response code was 200": (res) => res.status == 200
 })
 console.log(res.status)
}

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');
  return {
      './report/report.json': JSON.stringify(data),
  }
}