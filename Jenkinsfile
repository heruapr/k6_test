
def slave = 'automation-test-slave'
podTemplate(
  label: slave,
  containers:[
    containerTemplate(
      name: 'qa-docker', image: 'loadimpact/k6:latest', command: 'cat', ttyEnabled: 'true')],
  volumes:[
    hostPathVolume(
      hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
    persistentVolumeClaim(
      mountPath: '/root', claimName: 'slave-root-home', readOnly: 'false')]
) {
  node(slave) {
  container('qa-docker') {
                echo 'Running K6 performance tests...'
                git  'https://github.com/heruapr/k6_test.git'
                sh   'ls -al'
                sh label: 'run test', script: 'k6 run test.js'
    }
  }
}