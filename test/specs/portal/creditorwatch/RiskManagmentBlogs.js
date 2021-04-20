import BlogPage from '../../../pageobjects/BlogPage';
import testData from '../../../resources/testData/RiskManagmentBlog.json';
import App from '../../../actions/App';
import Utilities from '../../../utilities/Utilities';

describe('Risk Management Blogs', () => {  
	const riskManagementCommonLinks =  testData['Risk Management Common Links'];
	const strategiesToReduceData = testData['Strategies to Reduce Supply Chain Risk: Lessons from the Pandemic Blog'];
	let blogToSelect = strategiesToReduceData['Blog To Select'];
	let blogLinks = strategiesToReduceData['Blog Links'];
	let toolUsageLinks = strategiesToReduceData['Tool and Usage Links'];

	it('Navigate via Home Page - Verify links available in Strategies to Reduce Supply Chain Risk: Lessons from the Pandemic Blog', () => {
		App
			.open()
			.clickLink('Blog')
			.selectDropDownOption(BlogPage.categories,'Risk Management',true)
			.clickLink(blogToSelect)
			.verifyLinksInPage(riskManagementCommonLinks)
			.verifyLinksInPage(blogLinks,true)
			.verifyLinksInPage(toolUsageLinks, true);		
	}); 

	it('Navigate via Blog Page - Verify links available in Strategies to Reduce Supply Chain Risk: Lessons from the Pandemic Blog', () => {

		App
			.open('blog')
			.selectDropDownOption(BlogPage.categories,'Risk Management',true)
			.clickLink(blogToSelect)
			.verifyLinksInPage(riskManagementCommonLinks)
			.verifyLinksInPage(blogLinks,true)
			.verifyLinksInPage(toolUsageLinks, true);		
	}); 
});

