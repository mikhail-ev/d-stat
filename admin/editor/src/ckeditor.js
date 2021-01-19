import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import './highcharts'

import icon from './icon.svg'

class MyPlugin extends Plugin {
	init() {
		const editor = this.editor;

		highed.dom.ap(document.head, highed.dom.cr('style', '', '.cke_button__highcharts_icon{background-image:url(\'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="logo-highcharts" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16" height="16" viewBox="0 0 225 225" xml:space="preserve"><g id="symbol" transform="translate(10,13.41400146484375) scale(3)"><polygon fill="#8087E8" points="41.53900146484375,0 30.315000534057617,26.209999084472656 15.566999435424805,60.650997161865234 49.85900115966797,46.16499710083008 68.02299499511719,38.49300003051758 " id="svg_2" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon><polygon fill="#30426B" points="47.25799560546875,31.729999542236328 49.86000061035156,46.16499710083008 68.02400207519531,38.49300003051758 " id="svg_3" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon><polygon fill="#6699A1" points="41.53900146484375,0 47.25799560546875,31.730998992919922 68.02299499511719,38.49300003051758 " id="svg_4" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon><polygon fill="#78758C" points="47.25799560546875,31.729999542236328 68.02400207519531,38.49300003051758 30.31599998474121,26.208999633789062 15.566999435424805,60.650997161865234 49.86000061035156,46.16499710083008 " id="svg_5" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon>                      <polygon fill="#A3EDBA" points="15.566999435424805,60.650997161865234 30.315000534057617,26.209999084472656 0,16.334999084472656 " id="svg_6" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon><polygon fill="#6699A1" points="49.86000061035156,46.16499710083008 53.185997009277344,64.6099967956543 68.02400207519531,38.49300003051758 " id="svg_7" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon><polygon fill="#8087E8" points="41.53900146484375,0 30.315000534057617,26.209999084472656 47.25799560546875,31.730998992919922 " id="svg_8" stroke-width="0" stroke="#383836" fill-opacity="1" stroke-linejoin="round"></polygon></g></svg>') + "') !important;}"));

		const modal = highed.ModalEditor(false, {
				features: 'data templates customize',
				allowDone: true
			}, function (chart) {
				const html = chart.export.html(true);
				const content = '<div contenteditable="false">' + html + '</div><p></p>';
				editor.execute( 'insertHtmlEmbed' );
				editor.execute( 'updateHtmlEmbed', content);
			});

		editor.ui.componentFactory.add('highcharts', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Highcharts',
				icon: icon,
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				modal.show();
				modal.resize();
			} );

			return view;
		} );
	}
}

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	MyPlugin,
	HtmlEmbed
];

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'highcharts',
			'htmlEmbed'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	htmlEmbed: {
		showPreviews: true,
	},
	language: 'en'
};
