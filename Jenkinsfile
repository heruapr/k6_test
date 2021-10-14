
def slave = 'automation-test-slave'
podTemplate(
  label: slave,
  containers:[
    containerTemplate(
      name: 'node', image: 'node:14.18.1-buster', command: 'cat', ttyEnabled: 'true')],
  volumes:[
    hostPathVolume(
      hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
    persistentVolumeClaim(
      mountPath: '/root', claimName: 'slave-root-home', readOnly: 'false')]
) {
  node(slave) {
  container('node') {
                echo 'Running K6 performance tests...'
                sh   'apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69'
                sh   'echo "deb https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list'
                sh   'apt-get update'
                sh   'apt-get install k6'
                sh   'k6 version'
                url: 'ghttps://github.com/heruapr/k6_test.git'
                checkout scm
                sh('apk add git')
                sh('git --version')
                sh label: 'run test', script: 'k6 run loadtest/test.js'
    }
  }
}