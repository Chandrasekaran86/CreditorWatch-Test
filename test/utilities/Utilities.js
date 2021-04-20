import allureReporter from '@wdio/allure-reporter';

class Utilities{
	static takeScreenshot(){
		browser.takeScreenshot();
	}


	static getLinkWithText(linkText){
		return $(`//a[contains(text(), "${linkText}")]`);
	}

	static getButtonWithText(buttonText){
		return $(`//button[contains(text(), "${buttonText}")]`);
	}


	static waitForElement(element, maxTry, timeout){
		var count = 0;
		if(!element.isDisplayed() && count<maxTry){
			sleep(timeout);
			waitForElement(element, maxTry, timeout);
			count++;
		}else if(count >= maxTry){
			throw new Error(`The element '${element}' could not be found or is not visible.`);
		}
	}

	static waitForElementDisplayed(element, timeout){
		element.waitForDisplayed({timeout: timeout});
	}

	static waitForElementNotDisplayed(element, timeout){
		element.waitForDisplayed({timeout: timeout, reverse: true});
	}

	static addLog(name, content, type='text/plain'){
		allureReporter.addAttachment(name, content, type);
	}

	static addStep(title){
		allureReporter.addStep(title);
	}

	static addLogandScreenshotForElements(element, name, content, screenshot=true){
		this.addLog(name, content);
		if(screenshot){element.takeScreenshot();}
	}
}

export default Utilities;