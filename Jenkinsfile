
def slave = 'automation-test-slave'
podTemplate(
  label: slave,
  containers:[
    containerTemplate(
      name: 'qa-docker', image: 'loadimpact/k6:latest', command: 'run /test.js', ttyEnabled: 'true')],
  volumes:[
    hostPathVolume(
      hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
    persistentVolumeClaim(
      mountPath: '/root', claimName: 'slave-root-home', readOnly: 'false')]
) {
  node(slave) {
  container('qa-docker') {
        stage('Performance Testing') {
                echo 'Running K6 performance tests...'
                sh label: 'run test', script: 'k6 run test.js'
        }
    }
  }
}