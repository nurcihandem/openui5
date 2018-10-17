/*global describe,it,element,by,takeScreenshot,expect*/

describe('sap.m.Dialog', function() {
	"use strict";

	it('should open simple dialog', function() {
		element(by.id('simpleDialogButton')).click();
		var simpleDialog = element(by.id('simpleDialog'));
		expect(takeScreenshot(simpleDialog)).toLookAs('simple-dialog');
		element(by.id('simpleDialogCancelButton')).click();
	});

	it('should open dialog without header', function() {
		element(by.id('dialogNoHeaderButton')).click();
		var noHeaderDialog = element(by.id('noHeaderDialog'));
		expect(takeScreenshot(noHeaderDialog)).toLookAs('dialog-no-header');
		element(by.id('dialogNoHeaderCancelButton')).click();
	});

	it('should open dialog with subheader', function() {
		element(by.id('dialogWithSubheaderButton')).click();
		element(by.id('triggerSubheaderButton')).click();
		var subheaderDialog = element(by.id('subheaderDialog'));
		expect(takeScreenshot(subheaderDialog)).toLookAs('dialog-with-subheader');
		element(by.id('dialogWithSubheaderCancelButton')).click();
	});

	it('should open stretched dialog', function() {
		element(by.id('stretchedDialogButton')).click();
		var stretchedDialog = element(by.id('stretchedDialog'));
		expect(takeScreenshot(stretchedDialog)).toLookAs('dialog-stretched');
		element(by.id('stretchedDialogCloseButton')).click();
	});

	it('should open stretched dialog with large contentHeight and contentWidth', function() {
		element(by.id('stretchedDialogWithContentSizeButton')).click();
		var stretchedDialog = element(by.id('stretchedDialogWithContentSize'));
		expect(takeScreenshot(stretchedDialog)).toLookAs('dialog-stretched-with-content-size');
		element(by.id('stretchedDialogWithContentSizeCloseButton')).click();
	});

	it('should open dialog with textarea', function() {
		element(by.id('textareaDialogButton')).click();
		var textAreaDialog = element(by.id('textAreaDialog'));
		expect(takeScreenshot(textAreaDialog)).toLookAs('dialog-with-textarea');
		element(by.id('textareaDialogCloseButton')).click();
	});

	it('should open resizable dialog', function() {
		element(by.id('resizeDialogButton')).click();
		var resizableDialog = element(by.id('resizableDialog'));
		expect(takeScreenshot(resizableDialog)).toLookAs('dialog-with-resize');
		element(by.id('resizeDialogCloseButton')).click();
	});

	it('should open dialog with content with fixed size and no horizontal scrollbar', function() {
		element(by.id('dialogWithFixedSizeContentButton')).click();
		var dialogWithFixedSizeContent = element(by.id('dialogWithFixedSizeContent'));
		expect(takeScreenshot(dialogWithFixedSizeContent)).toLookAs('dialog-with-fixed-size-content');
		element(by.id('dialogWithFixedSizeContentCloseButton')).click();
	});

	it('custom headers should be aligned vertically', function() {
		element(by.id('dialogWithCustomHeadersButton')).click();
		var dialog = element(by.id('dialogWithCustomHeadersDialog'));
		expect(takeScreenshot(dialog)).toLookAs('dialog-with-3-custom-headers');

		element(by.id('dialogWithCustomHeadersDialogToggleButton')).click();
		expect(takeScreenshot(dialog)).toLookAs('dialog-with-3-custom-headers-toggle');

		element(by.id('dialogWithCustomHeadersDialogCloseButton')).click();
	});

	it('should open error state dialog', function() {
		element(by.id('dialogWithErrorStateButton')).click();
		var dialogErrorState = element(by.id('dialogErrorState'));
		expect(takeScreenshot(dialogErrorState)).toLookAs('error-state-dialog');
		element(by.id('oDialogErrorStateOKButton')).click();
	});

	it('should open highlight state dialog', function() {
		element(by.id('dialogWithHighlightStateButton')).click();
		var dialogHighlightState = element(by.id('dialogHighlightState'));
		expect(takeScreenshot(dialogHighlightState)).toLookAs('highlight-state-dialog');
		element(by.id('oDialogHighlightStateOKButton')).click();
	});
});