
def slave = 'automation-test-slave'
podTemplate(
  label: slave,
  containers:[
    containerTemplate(
      name: 'qa-docker', image: 'docker:latest', command: 'cat', ttyEnabled: 'true')],
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
                sh label: 'installing', script: 'docker pull loadimpact/k6'
                sh label: 'run k6', script: 'docker run -v /k6_test/loadtest:/loadtest -i loadimpact/k6 run /loadtest/test.js'
        }
    }
  }
}