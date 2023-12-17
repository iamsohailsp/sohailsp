post {
    Aalways{
        emailext (
           subject: "Pipeline Status: ${BUILD_NUMBER}",
        body: '''<html>
                   <body>
                     <p>Build Status: $(BUILD_STATUS)</p>
                     <p>Build Number: "$(BUILD_NUMBER)"</p>
                     <p>Check the <a href="$(env.BUILD_URL)">console output</a>.</p>
                    </body>
                </html>'''
        to: 'sohelpathan0033@gmail.com',
        form: 'jenkins@example.com',
        replyTo: 'jenkins@example.com',
        mimeType: 'text/html'
      )
    }
}
