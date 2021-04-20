import Utilities from '../utilities/Utilities';
import { expect } from 'chai';
import wdioConf from '../../config/CreditorWatch/wdio.creditorwatch.chrome.conf'

const timeout = 30000;

class App{

	static open(path = ''){
		browser.url(`/${path}`);
		Utilities.addLog(`Access url ${wdioConf.config.baseUrl}/${path}`, `The url ${wdioConf.config.baseUrl}/${path} has been accessed via the browser`);
		return this;
	}

	static scrollOrWait(element, scroll){
		if(scroll){
			element.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
		}else{
			Utilities.waitForElementDisplayed(element, timeout);
		}

		if(!element.isDisplayed()){
			throw new Error(`The element '${element}' could not be found or is not visible.`);
		}
		return this;

	}

	static enterText(element, text, scroll = false){
		this.scrollOrWait(element, scroll);		
		element.clearValue();
		element.setValue(text);
		return this;
	};

	static selectDropDownOption(element, text, scroll = false){
		this.scrollOrWait(element, scroll);
		element.selectByVisibleText(text);
		return this;
	}

	
	static clickLink(linkText, scroll = false){	
		let element = Utilities.getLinkWithText(linkText);
		this.scrollOrWait(element, scroll);
		element.click();
		Utilities.addLog(`Click Link - ${linkText}`, `The link ${linkText} has been clicked`);
		return this;
	};

	static clickButton(buttonText, scroll = false){	
		let element = Utilities.getButtonWithText(buttonText);
		this.scrollOrWait(element, scroll);
		element.click();
		Utilities.addLog(`Click Button - ${buttonText}`, `The button ${buttonText} has been clicked`);
		return this;
	};
	
	
	static verifyLinksInPage(linksToBeVerified, scroll = false){
		let element;
		linksToBeVerified.forEach((link) =>{
			Utilities.addLog(`Verify Link Display - ${link}`, `Verify if ${link} is displayed`);
			element = Utilities.getLinkWithText(link);
			if(scroll){
				if(!element.isDisplayedInViewport()){
					this.scrollOrWait(element, true);
				}	
			}
			expect(element.isDisplayed()).to.be.true;
			Utilities.takeScreenshot();
		});
		
		return this;	
	};
		
}

export default App;
