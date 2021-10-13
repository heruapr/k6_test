import { check, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  // thresholds: {
  //   // fail the test if 95th percentile response goes above 500ms
  //   http_req_duration: ['p(95)<500'],
  //   // http_req_failed: ['rate>0.01']
  // },
    vus: 1,
    duration: '5s',
  };

export default function () {
  var url = 'https://google.co.id'

 http.get(url);
 var res =  http.get(url);
 check(res, {
        "response code was 200": (res) => res.status == 200
 })
sleep(2)
}