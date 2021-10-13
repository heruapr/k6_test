/*
 * This Jenkinsfile controls qa-backend-mocha docker image
 * Version 0.0.1
 * Maintained by: Investree QA
 */

def slave = 'automation-test-slave'
podTemplate(
  label: slave,
  containers:[
    containerTemplate(
      name: 'qa-docker', image: 'node:14.16.0-alpine', command: 'cat', ttyEnabled: 'true')],
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
                sh 'k6 run test.js'
        }
    }
  }
}