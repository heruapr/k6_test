import { check, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  thresholds: {
    // fail the test if avg percentile response goes above 500ms
    http_req_duration: ['avg<500'],
    http_req_failed: ['rate<0.25'],
  }
  };

export default function () {
  var url = 'https://github.com'
 http.get(url);
//  var res =  http.get(url);
//  check(res, {
//         "response code was 200": (res) => res.status == 200
//  })
 sleep(1)
}