import { TestCase, TestResult } from '@playwright/test/reporter'
import ListReporter from '@playwright/test/lib/test/reporters/list'

class CustomListReporter extends ListReporter {

  onTestEnd(test: TestCase, result: TestResult) {
    
    result.attachments.forEach(attachment => {
      const contentType = attachment.contentType
      let path = attachment.path
      console.log(`LOG TEST: ${attachment.name}: ${path}`)
    });
  }
}

export default CustomListReporter
