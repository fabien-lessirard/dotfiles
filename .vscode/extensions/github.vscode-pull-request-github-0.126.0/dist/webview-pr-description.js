var ic=Object.defineProperty;var o=(ql,hi)=>ic(ql,"name",{value:hi,configurable:!0});(()=>{var ql={2410:(M,_,j)=>{"use strict";j.d(_,{A:o(()=>D,"A")});var K=j(1601),V=j.n(K),L=j(6314),C=j.n(L),h=C()(V());h.push([M.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

body a {
	text-decoration: var(--text-link-decoration);
}

h3 {
	display: unset;
	font-size: unset;
	margin-block-start: unset;
	margin-block-end: unset;
	margin-inline-start: unset;
	margin-inline-end: unset;
	font-weight: unset;
}

body a:hover {
	text-decoration: underline;
}

button,
input[type='submit'] {
	color: var(--vscode-button-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
	border: 1px solid transparent;
	padding: 4px 12px;
	font-size: 13px;
	line-height: 18px;
	white-space: nowrap;
	user-select: none;
}

button:not(.icon-button):not(.danger):not(.secondary),
input[type='submit'] {
	background-color: var(--vscode-button-background);
}

input.select-left {
	border-radius: 2px 0 0 2px;
}

button.select-right {
	border-radius: 0 2px 2px 0;
	width: 24px;
	position: relative;
}

button.select-right span {
	position: absolute;
	top: 2px;
	right: 4px;
}

button:focus,
input[type='submit']:focus {
	outline-color: var(--vscode-focusBorder);
	outline-style: solid;
	outline-width: 1px;
	outline-offset: 2px;
}

button:hover:enabled,
button:focus:enabled,
input[type='submit']:focus:enabled,
input[type='submit']:hover:enabled {
	background-color: var(--vscode-button-hoverBackground);
	cursor: pointer;
}

button.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	color: var(--vscode-button-secondaryForeground);
	border-color: var(--vscode-button-border, transparent);
}

button.secondary:hover:enabled,
button.secondary:focus:enabled,
input[type='submit'].secondary:focus:enabled,
input[type='submit'].secondary:hover:enabled {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

textarea,
input[type='text'] {
	display: block;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
	resize: vertical;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-input-background);
	color: var(--vscode-input-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
}

textarea::placeholder,
input[type='text']::placeholder {
	color: var(--vscode-input-placeholderForeground);
}

select {
	display: block;
	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 2px;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-dropdown-background);
	color: var(--vscode-dropdown-foreground);
}

textarea:focus,
input[type='text']:focus,
input[type='checkbox']:focus,
select:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

input[type='checkbox'] {
	outline-offset: 1px;
}

.vscode-high-contrast input[type='checkbox'] {
	outline: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input[type='checkbox']:focus {
	outline: 1px solid var(--vscode-contrastActiveBorder);
}

:not(.copilot-icon) > svg path,
.copilot-icon svg path:first-of-type {
	fill: var(--vscode-foreground);
}

body button:disabled,
input[type='submit']:disabled {
	opacity: 0.4;
	border: 1px solid var(--vscode-button-border, transparent) !important;
}

body .hidden {
	display: none !important;
}

body img.avatar,
body span.avatar-icon svg {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

body img.avatar {
	vertical-align: middle;
}

.avatar-link {
	flex-shrink: 0;
}

.icon-button {
	display: flex;
	padding: 2px;
	background: transparent;
	border-radius: 4px;
	line-height: 0;
}

.icon-button:hover,
.title .icon-button:hover,
.title .icon-button:focus,
.section .icon-button:hover,
.section .icon-button:focus {
	background-color: var(--vscode-toolbar-hoverBackground);
	cursor: pointer;
}

.icon-button:focus,
.title .icon-button:focus,
.section .icon-button:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: 1px;
}

.label .icon-button:hover,
.label .icon-button:focus {
	background-color: transparent;
}

.section-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-item .avatar-link {
	margin-right: 8px;
}

.section-item .avatar-container {
	flex-shrink: 0;
}

.section-item .login {
	width: 129px;
	flex-shrink: 0;
}

.section-item img.avatar {
	width: 20px;
	height: 20px;
}

.section-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
}

.section-icon.changes svg path {
	fill: var(--vscode-list-errorForeground);
}

.section-icon.commented svg path,
.section-icon.requested svg path {
	fill: var(--vscode-list-warningForeground);
}

.section-icon.approved svg path {
	fill: var(--vscode-issues-open);
}

.reviewer-icons {
	display: flex;
	gap: 4px;
}

.reviewer-icons [role='alert'] {
	position: absolute;
	width: 0;
	height: 0;
	overflow: hidden;
}

.push-right {
	margin-left: auto;
}

.avatar-with-author {
	display: flex;
	align-items: center;
}

.author-link {
	font-weight: 600;
	color: var(--vscode-editor-foreground);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.status-item button {
	margin-left: auto;
	margin-right: 0;
}

.automerge-section {
	display: flex;
}

.automerge-section,
.status-section {
	flex-wrap: wrap;
}

#status-checks .automerge-section {
	align-items: center;
	padding: 16px;
	background: var(--vscode-editorHoverWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.automerge-section .merge-select-container {
	margin-left: 8px;
}

.automerge-checkbox-wrapper,
.automerge-checkbox-label {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.automerge-checkbox-label {
	min-width: 80px;
}

.merge-queue-title .merge-queue-pending {
	color: var(--vscode-list-warningForeground);
}

.merge-queue-title .merge-queue-blocked {
	color: var(--vscode-list-errorForeground);
}

.merge-queue-title {
	font-weight: bold;
	font-size: larger;
}

/** Theming */

.vscode-high-contrast button:not(.secondary):not(.icon-button) {
	background: var(--vscode-button-background);
}


.vscode-high-contrast input {
	outline: none;
	background: var(--vscode-input-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast button:focus {
	border: 1px solid var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast button:hover {
	border: 1px dotted var(--vscode-contrastActiveBorder);
}

::-webkit-scrollbar-corner {
	display: none;
}

.labels-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.label {
	display: flex;
	justify-content: normal;
	padding: 0 8px;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
}

/* split button */

.primary-split-button {
	display: flex;
	flex-grow: 1;
	min-width: 0;
	max-width: 260px;
}

button.split-left {
	border-radius: 2px 0 0 2px;
	flex-grow: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: flex;
	border: 1px solid var(--vscode-button-border, transparent);
	border-right: none;
}

.split {
	background-color: var(--vscode-button-background);
	border-top: 1px solid var(--vscode-button-border);
	border-bottom: 1px solid var(--vscode-button-border);
	padding: 4px 0;
}

.split .separator {
	height: 100%;
	width: 1px;
	background-color: var(--vscode-button-separator);
}

.split.disabled {
	opacity: 0.4;
}

.split.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	border-top: 1px solid var(--vscode-button-secondaryBorder);
	border-bottom: 1px solid var(--vscode-button-secondaryBorder);
}

button.split-right {
	border-radius: 0 2px 2px 0;
	cursor: pointer;
	width: 24px;
	position: relative;
	border: 1px solid var(--vscode-button-border, transparent);
	border-left: none;
}
button.split-right:disabled {
	cursor: default;
}

button.split-right .icon {
	pointer-events: none;
	position: absolute;
	top: 4px;
	right: 4px;
}

button.split-right .icon svg path {
	fill: unset;
}

button.input-box {
	display: block;
	height: 24px;
	margin-top: -4px;
	padding-top: 2px;
	padding-left: 8px;
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--vscode-input-foreground) !important;
	background-color: var(--vscode-input-background) !important;
}

button.input-box:active,
button.input-box:focus {
	color: var(--vscode-inputOption-activeForeground) !important;
	background-color: var(--vscode-inputOption-activeBackground) !important;
}

button.input-box:hover:not(:disabled) {
	background-color: var(--vscode-inputOption-hoverBackground) !important;
}

button.input-box:focus {
	border-color: var(--vscode-focusBorder) !important;
}

.dropdown-container {
	display: flex;
	min-width: 0;
	margin: 0;
}

.dropdown-container.spreadable {
	flex-grow: 1;
	width: 100%;
}

button.inlined-dropdown {
	width: 100%;
	max-width: 150px;
	margin-right: 8px;
	display: inline-block;
	text-align: center;
}

button.inlined-dropdown:last-child {
	margin-right: 0;
}

.spinner {
	margin-top: 5px;
	margin-left: 5px;
}

.commit-spinner-inline {
	margin-left: 8px;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	grid-column: none;
}

.commit-spinner-before {
	margin-right: 6px;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
}

.loading {
	animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}`,""]);const D=h},3554:(M,_,j)=>{"use strict";j.d(_,{A:o(()=>D,"A")});var K=j(1601),V=j.n(K),L=j(6314),C=j.n(L),h=C()(V());h.push([M.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#app {
	display: grid;
	grid-template-columns: 1fr minmax(200px, 300px);
	column-gap: 32px;
}

#title {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row: 1;
}

#main {
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

#sidebar {
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 2;
	grid-row: 2;
}

#project a {
	cursor: pointer;
}

a:focus,
input:focus,
select:focus,
textarea:focus,
.title-text:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.title-text {
	margin-right: 5px;
}

.title {
	display: flex;
	align-items: flex-start;
	margin: 20px 0 24px;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-list-inactiveSelectionBackground);
	background: var(--vscode-editor-background);
}

.title .details {
	flex: 1;
}

.title .pr-number {
	margin-left: 5px;
}

.loading-indicator {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.loading-button {
	display: inline-flex;
	align-items: center;
	margin-right: 4px;
}

.comment-body li div {
	display: inline;
}

.comment-body li div.Box,
.comment-body li div.Box div {
	display: block;
}

.comment-body code,
.comment-body a,
span.lineContent {
	overflow-wrap: anywhere;
}

.comment-reactions {
	display: flex;
	flex-direction: row;
}

.comment-reactions div {
	font-size: 1.1em;
	cursor: pointer;
	user-select: none;
}

.comment-reactions .reaction-label {
	border-radius: 5px;
	border: 1px solid var(--vscode-panel-border);
	width: 14px;
}

#title:empty {
	border: none;
}

h2 {
	margin: 0;
}

body hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	padding: 0;
}

body .comment-container .avatar-container {
	margin-right: 12px;
}

body .comment-container .avatar-container a {
	display: flex;
}

body .comment-container .avatar-container img.avatar,
body .comment-container .avatar-container .avatar-icon svg {
	margin-right: 0;
}

.vscode-light .avatar-icon {
	filter: invert(100%);
}

body a.avatar-link:focus {
	outline-offset: 2px;
}

body .comment-container.comment,
body .comment-container.review {
	background-color: var(--vscode-editor-background);
}

.review-comment-container {
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	position: relative;
}

body #main .comment-container>.review-comment-container>.review-comment-header:not(:nth-last-child(2)) {
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

body .comment-container .review-comment-header {
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	color: var(--vscode-foreground);
	align-items: center;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.review-comment-header.no-details {
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.description-header {
	float: right;
	height: 32px;
}

.review-comment-header .comment-actions {
	margin-left: auto;
}

.review-comment-header .pending {
	color: inherit;
	font-style: italic;
}

.comment-actions button {
	background-color: transparent;
	padding: 0;
	line-height: normal;
	font-size: 11px;
}

.comment-actions button svg {
	margin-right: 0;
	height: 14px;
}

.comment-actions .icon-button {
	padding-left: 2px;
	padding-top: 2px;
}

.status-scroll {
	max-height: 220px;
	overflow-y: auto;
}

.status-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-check-details {
	display: flex;
	align-items: center;
	gap: 8px;
}

.status-check > div:not(.status-check-details) {
	display: flex;
}

#merge-on-github {
	margin-top: 10px;
}

.status-item {
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-item:first-of-type {
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.status-item,
.form-actions,
.ready-for-review-text-wrapper {
	display: flex;
	gap: 8px;
	align-items: center;
}

.status-item .button-container {
	margin-left: auto;
	margin-right: 0;
}

.commit-association {
	display: flex;
	font-style: italic;
	flex-direction: row-reverse;
	padding-top: 7px;
}

.commit-association span {
	flex-direction: row;
}

.email {
	font-weight: bold;
}

button.input-box {
	float: right;
}

.status-item-detail-text {
	display: flex;
	gap: 8px;
}

.status-check-detail-text {
	margin-right: 8px;
}

.status-section p {
	margin: 0;
}

.status-section .check svg path {
	fill: var(--vscode-issues-open);
}

.status-section .close svg path {
	fill: var(--vscode-errorForeground);
}

.status-section .pending svg path,
.status-section .skip svg path {
	fill: var(--vscode-list-warningForeground);
}

.merge-queue-container,
.ready-for-review-container {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.ready-for-review-container .button-container {
	flex-direction: row;
	display: flex;
	align-items: center;
}

.ready-for-review-icon {
	width: 16px;
	height: 16px;
}

.ready-for-review-heading {
	font-weight: 600;
}

.ready-for-review-meta {
	font-size: 0.9;
}

#status-checks {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 4px;
}

#status-checks .label {
	display: inline-flex;
	margin-right: 16px;
}

#status-checks a {
	cursor: pointer;
}

#status-checks summary {
	display: flex;
	align-items: center;
}

#status-checks-display-button {
	margin-left: auto;
}

#status-checks .avatar-link svg {
	width: 24px;
	margin-right: 0px;
	vertical-align: middle;
}

.status-check .avatar-link .avatar-icon {
	margin-right: 0px;
}

#status-checks .merge-select-container {
	display: flex;
	align-items: center;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

#status-checks .merge-select-container>* {
	margin-right: 5px;
}

#status-checks .merge-select-container>select {
	margin-left: 5px;
}

#status-checks .branch-status-container {
	display: inline-block;
}

#status-checks .branch-status-message {
	display: inline-block;
	line-height: 100%;
	padding: 16px;
}

body .comment-container .review-comment-header>span,
body .comment-container .review-comment-header>a,
body .merged .merged-message>a {
	margin-right: 6px;
}

body .commit .commit-message>a {
	margin-right: 3px;
}

body .comment-container .review-comment-container .pending-label,
body .resolved-container .outdatedLabel {
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	font-weight: 600;
	border-radius: 20px;
	padding: 4px 8px;
	margin-left: 6px;
}

body .resolved-container .unresolvedLabel {
	font-style: italic;
	margin-left: 5px;
}

body .diff .diffPath {
	margin-right: 4px;
}

.comment-container form,
#merge-comment-form {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
}

body .comment-container .comment-body,
.review-body {
	padding: 16px;
	border-top: none;
}

body .comment-container .review-comment-container .review-comment-body {
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: none;
}

body .comment-container .comment-body>p,
body .comment-container .comment-body>div>p,
body .comment-container .comment-body>div>ul,
.comment-container .review-body>p {
	margin-top: 0;
	line-height: 1.5em;
}

body .comment-container .comment-body>p:last-child,
body .comment-container .comment-body>div>p:last-child,
.comment-container .review-body>p:last-child {
	margin-bottom: 0;
}

body {
	margin: auto;
	width: 100%;
	max-width: 1280px;
	padding: 0 32px;
	box-sizing: border-box;
}

body .hidden-focusable {
	height: 0 !important;
	overflow: hidden;
}

.comment-actions button:hover:enabled,
.comment-actions button:focus:enabled {
	background-color: transparent;
}

body button.checkedOut {
	color: var(--vscode-foreground);
	opacity: 1 !important;
	background-color: transparent;
}

body button .icon {
	width: 16px;
	height: 16px;
}

.prIcon {
	display: flex;
	border-radius: 10px;
	margin-right: 5px;
	margin-top: 18px;
}

.overview-title {
	display: flex;
	align-items: center;
}

.overview-title h2 {
	font-size: 32px;
	margin-right: 6px;
}

.overview-title textarea {
	min-height: 50px;
}

.title-container {
	width: 100%;
}

.subtitle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 12px;
}

.subtitle .avatar,
.subtitle .avatar-icon svg {
	margin-right: 6px;
}

.subtitle .author {
	display: flex;
	align-items: center;
}

.merge-branches {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-wrap: wrap;
}

.branch-tag {
	margin-top: 0;
	padding: 4px;
	background: var(--vscode-editorInlayHint-background);
	color: var(--vscode-editorInlayHint-foreground);
	border-radius: 4px;
}

.subtitle .created-at {
	margin-left: auto;
	white-space: nowrap;
}

.button-group {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
	align-items: flex-start;
}

small-button {
	display: flex;
	font-size: 11px;
	padding: 0 5px;
}

.header-actions {
	display: flex;
	gap: 8px;
	padding-top: 4px;
	align-items: center;
}

.header-actions>div:first-of-type {
	flex: 1;
}

button.secondary.change-base {
	background-color: transparent;
	padding: unset;
	border-radius: 4px;
	margin-top: 2px;
}

.change-base code {
	display: flex;
	align-items: center;
	padding: 2px 4px;
}

.change-base .icon {
	margin-left: 4px;
}

:not(.status-item)>.small-button {
	font-weight: 600;
}

#status {
	box-sizing: border-box;
	line-height: 18px;
	color: var(--vscode-button-foreground);
	border-radius: 18px;
	padding: 4px 12px;
	margin-right: 10px;
	font-weight: 600;
	display: flex;
	gap: 4px;
}

#status svg path {
	fill: var(--vscode-button-foreground);
}

.vscode-high-contrast #status {
	border: 1px solid var(--vscode-contrastBorder);
	background-color: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
}

.vscode-high-contrast #status svg path {
	fill: var(--vscode-badge-foreground);
}

.status-badge-merged {
	background-color: var(--vscode-pullRequests-merged);
}

.status-badge-open {
	background-color: var(--vscode-pullRequests-open);
}

.status-badge-closed {
	background-color: var(--vscode-pullRequests-closed);
}

.status-badge-draft {
	background-color: var(--vscode-pullRequests-draft);
}

.section {
	padding-bottom: 16px;
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.section:last-of-type {
	padding-bottom: 0px;
	border-bottom: none;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.section-header.clickable {
	cursor: pointer;
}

.section-header .section-title {
	font-weight: 600;
}

.section-placeholder {
	color: var(--vscode-descriptionForeground);
}

.assign-yourself:hover {
	cursor: pointer;
}

.section svg {
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 0;
}

.section .icon-button,
.section .icon-button .icon {
	color: currentColor;
}

.icon-button-group {
	display: flex;
	flex-direction: row;
}

.section svg path {
	fill: currentColor;
}

.commit svg {
	width: 16px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.comment-container.commit {
	border: none;
	padding: 4px 16px;
}

.comment-container.commit,
.comment-container.merged {
	box-sizing: border-box;
}

.commit,
.review,
.merged {
	display: flex;
	width: 100%;
	border: none;
	color: var(--vscode-foreground);
}

.review {
	margin: 0px 8px;
	padding: 4px 0;
}

.commit .commit-message,
.commit .timeline-with-detail,
.merged .merged-message {
	align-items: center;
	overflow: hidden;
	flex-grow: 1;
}

.commit .commit-message,
.merged .merged-message {
	display: flex;
}

.commit .timeline-with-detail {
	display: block;
}

.commit-message-detail {
	margin-left: 20px;
}

.commit .commit-message .avatar-container,
.merged .merged-message .avatar-container {
	margin-right: 4px;
	flex-shrink: 0;
}

.commit-message .icon {
	padding-top: 2px;
}

.commit .avatar-container .avatar,
.commit .avatar-container .avatar-icon,
.commit .avatar-container .avatar-icon svg,
.merged .avatar-container .avatar,
.merged .avatar-container .avatar-icon,
.merged .avatar-container .avatar-icon svg {
	width: 18px;
	height: 18px;
}

.message-container {
	display: inline-grid;
}

.commit .commit-message .message,
.merged .merged-message .message {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.commit .commit-message a.message {
	cursor: pointer;
}

.timeline-detail {
	display: flex;
	align-items: center;
	gap: 8px;
}

.commit .sha {
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	margin-bottom: -2px;
	cursor: pointer;
}

.merged .merged-message .message,
.merged .inline-sha {
	margin: 0 4px 0 0;
}

.merged svg {
	width: 14px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.details {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

#description .comment-container {
	padding-top: 0px;
}

.comment-container {
	position: relative;
	width: 100%;
	display: flex;
	margin: 0;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.comment-container[data-type='commit'] {
	padding: 8px 0;
	border: none;
}

.comment-container[data-type='commit']+.comment-container[data-type='commit'] {
	border-top: none;
}

.comment-body .review-comment {
	box-sizing: border-box;
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.resolve-comment-row {
	display: flex;
	align-items: center;
	padding: 16px;
	background-color: var(--vscode-editorHoverWidget-background);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.review-comment-container .review-comment .review-comment-header {
	padding: 16px 16px 8px 16px;
	border: none;
	background: none;
}

.review-comment-container .review-comment .comment-body {
	border: none;
	padding: 0px 16px 8px 16px;
}

.review-comment-container .review-comment .comment-body:last-of-type {
	padding: 0px 16px 16px 16px;
}

.comment-body .line {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

body .comment-form {
	padding: 20px 0 10px;
}

.review-comment-container .comment-form {
	margin: 0 0 0 36px;
	padding: 10px 0;
}

.task-list-item {
	list-style-type: none;
}

#status-checks textarea {
	margin-top: 10px;
}

textarea {
	min-height: 100px;
	max-height: 500px;
}

.textarea-wrapper {
	position: relative;
	display: flex;
	width: 100%;
}

.textarea-wrapper textarea {
	flex: 1;
	padding-right: 40px;
}

.textarea-wrapper .title-action {
	position: absolute;
	top: 6px;
	right: 5px;
	border: none;
	background: none;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
}

.textarea-wrapper .title-action:hover {
	outline-style: none;
	cursor: pointer;
	background-color: var(--vscode-toolbar-hoverBackground);
}

.textarea-wrapper .title-action:focus {
	outline-style: none;
}

.textarea-wrapper .title-action:focus-visible {
	outline-width: 1px;
	outline-style: solid;
	outline-offset: -1px;
	outline-color: var(--vscode-focusBorder);
	background: unset;
}

.textarea-wrapper .title-action svg {
	padding: 2px;
}

.editing-form {
	padding: 5px 0;
	display: flex;
	flex-direction: row;
	min-width: 300px;
}

.editing-form .form-actions {
	display: flex;
	gap: 8px;
	justify-content: flex-end;
}

.comment-form .form-actions>button,
.comment-form .form-actions>input[type='submit'] {
	margin-right: 0;
	margin-left: 0;
}

.primary-split-button {
	flex-grow: unset;
}

:not(.button-group) .dropdown-container {
	justify-content: right;
}

:not(.title-editing-form)>.form-actions {
	justify-content: flex-end;
	padding-top: 10px;
}

#rebase-actions {
	flex-direction: row-reverse;
}

.main-comment-form>.form-actions {
	margin-bottom: 10px;
}

.details .comment-body {
	padding: 19px 0;
}

blockquote {
	display: block;
	flex-direction: column;
	margin: 8px 0;
	padding: 8px 12px;
	border-left-width: 5px;
	border-left-style: solid;
}

blockquote p {
	margin: 8px 0;
}

blockquote p:first-child {
	margin-top: 0;
}

blockquote p:last-child {
	margin-bottom: 0;
}

.comment-body a:focus,
.comment-body input:focus,
.comment-body select:focus,
.comment-body textarea:focus {
	outline-offset: -1px;
}

.comment-body hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

.comment-body h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.comment-body h1,
h2,
h3 {
	font-weight: normal;
}

.comment-body h1 code,
.comment-body h2 code,
.comment-body h3 code,
.comment-body h4 code,
.comment-body h5 code,
.comment-body h6 code {
	font-size: inherit;
	line-height: auto;
}

.comment-body table {
	border-collapse: collapse;
}

.comment-body table>thead>tr>th {
	text-align: left;
	border-bottom: 1px solid;
}

.comment-body table>thead>tr>th,
.comment-body table>thead>tr>td,
.comment-body table>tbody>tr>th,
.comment-body table>tbody>tr>td {
	padding: 5px 10px;
}

.comment-body table>tbody>tr+tr>td {
	border-top: 1px solid;
}

code {
	font-family: var(--vscode-editor-font-family), Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
}

.comment-body .snippet-clipboard-content {
	display: grid;
}

.comment-body video {
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border);
	border-radius: 4px;
}

.comment-body summary {
	margin-bottom: 8px;
}

.comment-body details summary::marker {
	display: flex;
}

.comment-body details summary svg {
	margin-left: 8px;
}

.comment-body body.wordWrap pre {
	white-space: pre-wrap;
}

.comment-body .mac code {
	font-size: 12px;
	line-height: 18px;
}

.comment-body pre:not(.hljs),
.comment-body pre.hljs code>div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

.timestamp,
.timestamp:hover {
	color: var(--vscode-descriptionForeground);
	white-space: nowrap;
}

.timestamp {
	overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 8px;
}

/** Theming */

.comment-body pre code {
	color: var(--vscode-editor-foreground);
}

.vscode-light .comment-body pre:not(.hljs),
.vscode-light .comment-body code>div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark .comment-body pre:not(.hljs),
.vscode-dark .comment-body code>div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast .comment-body pre:not(.hljs),
.vscode-high-contrast .comment-body code>div {
	background-color: var(--vscode-editor-background);
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-body h1 {
	border: 1px solid rgb(0, 0, 0);
}

.vscode-high-contrast .comment-container .review-comment-header,
.vscode-high-contrast #status-checks {
	background: none;
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-container .comment-body,
.vscode-high-contrast .review-comment-container .review-body {
	border: 1px solid var(--vscode-panel-border);
}

.vscode-light .comment-body table>thead>tr>th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark .comment-body table>thead>tr>th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light .comment-body h1,
.vscode-light .comment-body hr,
.vscode-light .comment-body table>tbody>tr+tr>td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark .comment-body h1,
.vscode-dark .comment-body hr,
.vscode-dark .comment-body table>tbody>tr+tr>td {
	border-color: rgba(255, 255, 255, 0.18);
}

.review-comment-body .diff-container {
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.review-comment-body .diff-container .review-comment-container .comment-container {
	padding-top: 0;
}

.review-comment-body .diff-container .comment-container {
	border: none;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar-container {
	margin-right: 4px;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar {
	width: 18px;
	height: 18px;
}

.review-comment-body .diff-container .diff {
	border-top: 1px solid var(--vscode-editorWidget-border);
	overflow: scroll;
}

.resolved-container {
	padding: 6px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.resolved-container .diffPath:hover {
	text-decoration: underline;
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.diff .diffLine {
	display: flex;
	font-size: 12px;
	line-height: 20px;
}

.win32 .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Consolas, Inconsolata, 'Courier New', monospace;
}

.darwin .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Monaco, Menlo, Inconsolata, 'Courier New', monospace;
}

.linux .diff .diffLine {
	font-family: var(--vscode-editor-font-family), 'Droid Sans Mono', Inconsolata, 'Courier New', monospace, 'Droid Sans Fallback';
}

.diff .diffLine.add {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.diff .diffLine.delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.diff .diffLine .diffTypeSign {
	user-select: none;
	padding-right: 5px;
}

.diff .diffLine .lineNumber {
	width: 1%;
	min-width: 50px;
	padding-right: 10px;
	padding-left: 10px;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	box-sizing: border-box;
	display: block;
	user-select: none;
	font-family: var(--vscode-editor-font-family);
}

.github-checkbox {
	pointer-events: none;
}

.github-checkbox input {
	color: rgb(84, 84, 84);
	opacity: 0.6;
}

/* High Contrast Mode */

.vscode-high-contrast a:focus {
	outline-color: var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast .title {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .title.stuck::after {
	box-shadow: none;
}

.vscode-high-contrast .diff .diffLine {
	background: none;
}

.vscode-high-contrast .resolved-container {
	background: none;
}

.vscode-high-contrast .diff-container {
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine.add {
	border: 1px dashed var(--vscode-diffEditor-insertedTextBorder);
}

.vscode-high-contrast .diff .diffLine.delete {
	border: 1px dashed var(--vscode-diffEditor-removedTextBorder);
}

@media (max-width: 768px) {
	.title {
		border-bottom: none;
		padding-bottom: 0px;
	}

	.title.stuck .overview-title h2 {
		font-size: 16px;
	}

	#app {
		display: block;
	}

	#sidebar {
		display: grid;
		column-gap: 20px;
		row-gap: 12px;
		grid-template-columns: calc(50% - 10px) calc(50% - 10px);
		padding: 0;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
	}

	.section-item {
		display: flex;
	}

	body .hidden-focusable {
		height: initial;
		overflow: initial;
	}

	.section-header button {
		display: flex;
	}

	.section-item .login {
		width: auto;
		margin-right: 4px;
	}

	/* Hides bottom borders on bottom two sections */
	.section:nth-last-child(-n + 2) {
		border-bottom: none;
	}
}

.icon {
	width: 16px;
	height: 16px;
	font-size: 16px;
	display: flex;
}

.icon.copilot-icon {
	margin-right: 6px;
}

.action-bar {
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	top: 9px;
	right: 9px;
}

.flex-action-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	margin-left: 9px;
	min-width: 42px;
}

.action-bar>button,
.flex-action-bar>button {
	margin-left: 4px;
	margin-right: 4px;
}

.title-editing-form {
	flex-grow: 1;
}

.title-editing-form>.form-actions {
	margin-left: 8px;
}

/* permalinks */
.comment-body .Box p {
	margin-block-start: 0px;
	margin-block-end: 0px;
}

.comment-body .Box {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .Box-header {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-disabledForeground);
	border-bottom-style: solid;
	border-bottom-width: 1px;
	padding: 8px 16px;
	border-bottom-color: var(--vscode-editorHoverWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.comment-body .blob-num {
	word-wrap: break-word;
	box-sizing: border-box;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	color: var(--vscode-editorLineNumber-foreground);
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	cursor: pointer;
	user-select: none;
}

.comment-body .blob-num::before {
	content: attr(data-line-number);
}

.comment-body .blob-code-inner {
	tab-size: 8;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	line-height: 20px;
	vertical-align: top;
	display: table-cell;
	overflow: visible;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	word-wrap: anywhere;
	text-indent: 0;
	white-space: pre-wrap;
}

.comment-body .commit-tease-sha {
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
}

/* Suggestion */
.comment-body .blob-wrapper.data.file .d-table {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-collapse: unset;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .js-suggested-changes-blob {
	border-collapse: collapse;
}

.blob-code-deletion,
.blob-num-deletion {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-removedLineBackground);
}

.blob-code-addition,
.blob-num-addition {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-insertedLineBackground);
}

.blob-code-marker-addition::before {
	content: "+ ";
}

.blob-code-marker-deletion::before {
	content: "- ";
}

.markdown-alert.markdown-alert-warning {
	border-left: .25em solid var(--vscode-editorWarning-foreground);
}

.markdown-alert.markdown-alert-warning .markdown-alert-title {
	color: var(--vscode-editorWarning-foreground);
}

.markdown-alert.markdown-alert-note {
	border-left: .25em solid var(--vscode-editorInfo-foreground);
}

.markdown-alert.markdown-alert-note .markdown-alert-title {
	color: var(--vscode-editorInfo-foreground);
}

.markdown-alert.markdown-alert-tip {
	border-left: .25em solid var(--vscode-testing-iconPassed);
}

.markdown-alert.markdown-alert-tip .markdown-alert-title {
	color: var(--vscode-testing-iconPassed);
}

.markdown-alert.markdown-alert-important {
	border-left: .25em solid var(--vscode-statusBar-debuggingBackground);
}

.markdown-alert.markdown-alert-important .markdown-alert-title {
	color: var(--vscode-statusBar-debuggingBackground);
}

.markdown-alert.markdown-alert-caution {
	border-left: .25em solid var(--vscode-editorError-foreground);
}

.markdown-alert.markdown-alert-caution .markdown-alert-title {
	color: var(--vscode-editorError-foreground);
}

.markdown-alert {
	padding: .5rem .5rem;
	margin-bottom: 1rem;
	color: inherit;
}

.markdown-alert .markdown-alert-title {
	display: flex;
	align-items: center;
	line-height: 1;
}

.markdown-alert-title svg {
	padding-right: 3px;
}

.markdown-alert>:first-child {
	margin-top: 0;
}

svg.octicon path {
	display: inline-block;
	overflow: visible !important;
	vertical-align: text-bottom;
	fill: currentColor;
}

.collapsible-sidebar {
	border-top: 1px solid var(--vscode-editorWidget-border);
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	margin-bottom: 24px;
}

.collapsible-sidebar-header {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 16px 0px 8px;
	user-select: none;
	outline: none;
}

.collapsible-sidebar-header.expanded {
	padding: 8px 0px;
}

.collapsible-sidebar-header:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.collapsible-sidebar-title {
	font-size: 13px;
	width: 100%;
}

.collapsible-sidebar-content {
	padding-bottom: 16px;
}

.collapsed-label {
	gap: 8px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 8px 20px;
}

.collapsed-section {
	gap: 8px;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	overflow: hidden;
	height: 22px;
}

.collapsed-section-label {
	padding-right: 4px;
	font-weight: 600;
	flex-shrink: 0;
}

.collapsed-section-count {
	color: var(--vscode-descriptionForeground);
}

.pill-container {
	display: flex;
	align-items: center;
	min-width: 0;
	flex: 1;
	flex-wrap: nowrap;
	overflow: hidden;
}

.pill-item {
	flex-shrink: 0;
	white-space: nowrap;
	border-radius: 20px;
	margin-right: 2px;
	border-style: none;
	text-overflow: ellipsis;
	max-width: -webkit-fill-available;
	overflow: hidden;
	display: inline-block;
}

.pill-overflow {
	color: var(--vscode-descriptionForeground);
	font-size: 13px;
	margin-left: 4px;
	flex-shrink: 0;
	white-space: nowrap;
}

.collapsed-section .stacked-avatar {
	position: absolute;
}

.avatar-stack {
	position: relative;
	height: 22px;
}

.collapsible-label-see-more {
	padding-bottom: 16px;
	display: block;
	font-size: 13px;
	cursor: pointer;
}`,""]);const D=h},6314:M=>{"use strict";M.exports=function(_){var j=[];return j.toString=o(function(){return this.map(function(V){var L="",C=typeof V[5]!="undefined";return V[4]&&(L+="@supports (".concat(V[4],") {")),V[2]&&(L+="@media ".concat(V[2]," {")),C&&(L+="@layer".concat(V[5].length>0?" ".concat(V[5]):""," {")),L+=_(V),C&&(L+="}"),V[2]&&(L+="}"),V[4]&&(L+="}"),L}).join("")},"toString"),j.i=o(function(V,L,C,h,D){typeof V=="string"&&(V=[[null,V,void 0]]);var A={};if(C)for(var $=0;$<this.length;$++){var H=this[$][0];H!=null&&(A[H]=!0)}for(var G=0;G<V.length;G++){var Y=[].concat(V[G]);C&&A[Y[0]]||(typeof D!="undefined"&&(typeof Y[5]=="undefined"||(Y[1]="@layer".concat(Y[5].length>0?" ".concat(Y[5]):""," {").concat(Y[1],"}")),Y[5]=D),L&&(Y[2]&&(Y[1]="@media ".concat(Y[2]," {").concat(Y[1],"}")),Y[2]=L),h&&(Y[4]?(Y[1]="@supports (".concat(Y[4],") {").concat(Y[1],"}"),Y[4]=h):Y[4]="".concat(h)),j.push(Y))}},"i"),j}},1601:M=>{"use strict";M.exports=function(_){return _[1]}},4353:function(M){(function(_,j){M.exports=j()})(this,function(){"use strict";var _="millisecond",j="second",K="minute",V="hour",L="day",C="week",h="month",D="quarter",A="year",$="date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Pe=o(function(Q,O,F){var oe=String(Q);return!oe||oe.length>=O?Q:""+Array(O+1-oe.length).join(F)+Q},"$"),He={s:Pe,z:o(function(Q){var O=-Q.utcOffset(),F=Math.abs(O),oe=Math.floor(F/60),X=F%60;return(O<=0?"+":"-")+Pe(oe,2,"0")+":"+Pe(X,2,"0")},"z"),m:o(function Q(O,F){if(O.date()<F.date())return-Q(F,O);var oe=12*(F.year()-O.year())+(F.month()-O.month()),X=O.clone().add(oe,h),ce=F-X<0,ge=O.clone().add(oe+(ce?-1:1),h);return+(-(oe+(F-X)/(ce?X-ge:ge-X))||0)},"t"),a:o(function(Q){return Q<0?Math.ceil(Q)||0:Math.floor(Q)},"a"),p:o(function(Q){return{M:h,y:A,w:C,d:L,D:$,h:V,m:K,s:j,ms:_,Q:D}[Q]||String(Q||"").toLowerCase().replace(/s$/,"")},"p"),u:o(function(Q){return Q===void 0},"u")},he="en",Oe={};Oe[he]=Y;var at=o(function(Q){return Q instanceof le},"m"),U=o(function(Q,O,F){var oe;if(!Q)return he;if(typeof Q=="string")Oe[Q]&&(oe=Q),O&&(Oe[Q]=O,oe=Q);else{var X=Q.name;Oe[X]=Q,oe=X}return!F&&oe&&(he=oe),oe||!F&&he},"D"),R=o(function(Q,O){if(at(Q))return Q.clone();var F=typeof O=="object"?O:{};return F.date=Q,F.args=arguments,new le(F)},"v"),l=He;l.l=U,l.i=at,l.w=function(Q,O){return R(Q,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var le=function(){function Q(F){this.$L=U(F.locale,null,!0),this.parse(F)}o(Q,"d");var O=Q.prototype;return O.parse=function(F){this.$d=function(oe){var X=oe.date,ce=oe.utc;if(X===null)return new Date(NaN);if(l.u(X))return new Date;if(X instanceof Date)return new Date(X);if(typeof X=="string"&&!/Z$/i.test(X)){var ge=X.match(H);if(ge){var de=ge[2]-1||0,xe=(ge[7]||"0").substring(0,3);return ce?new Date(Date.UTC(ge[1],de,ge[3]||1,ge[4]||0,ge[5]||0,ge[6]||0,xe)):new Date(ge[1],de,ge[3]||1,ge[4]||0,ge[5]||0,ge[6]||0,xe)}}return new Date(X)}(F),this.$x=F.x||{},this.init()},O.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},O.$utils=function(){return l},O.isValid=function(){return this.$d.toString()!=="Invalid Date"},O.isSame=function(F,oe){var X=R(F);return this.startOf(oe)<=X&&X<=this.endOf(oe)},O.isAfter=function(F,oe){return R(F)<this.startOf(oe)},O.isBefore=function(F,oe){return this.endOf(oe)<R(F)},O.$g=function(F,oe,X){return l.u(F)?this[oe]:this.set(X,F)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(F,oe){var X=this,ce=!!l.u(oe)||oe,ge=l.p(F),de=o(function(Nt,je){var B=l.w(X.$u?Date.UTC(X.$y,je,Nt):new Date(X.$y,je,Nt),X);return ce?B:B.endOf(L)},"$"),xe=o(function(Nt,je){return l.w(X.toDate()[Nt].apply(X.toDate("s"),(ce?[0,0,0,0]:[23,59,59,999]).slice(je)),X)},"l"),De=this.$W,Ve=this.$M,Xe=this.$D,tt="set"+(this.$u?"UTC":"");switch(ge){case A:return ce?de(1,0):de(31,11);case h:return ce?de(1,Ve):de(0,Ve+1);case C:var vt=this.$locale().weekStart||0,Ct=(De<vt?De+7:De)-vt;return de(ce?Xe-Ct:Xe+(6-Ct),Ve);case L:case $:return xe(tt+"Hours",0);case V:return xe(tt+"Minutes",1);case K:return xe(tt+"Seconds",2);case j:return xe(tt+"Milliseconds",3);default:return this.clone()}},O.endOf=function(F){return this.startOf(F,!1)},O.$set=function(F,oe){var X,ce=l.p(F),ge="set"+(this.$u?"UTC":""),de=(X={},X[L]=ge+"Date",X[$]=ge+"Date",X[h]=ge+"Month",X[A]=ge+"FullYear",X[V]=ge+"Hours",X[K]=ge+"Minutes",X[j]=ge+"Seconds",X[_]=ge+"Milliseconds",X)[ce],xe=ce===L?this.$D+(oe-this.$W):oe;if(ce===h||ce===A){var De=this.clone().set($,1);De.$d[de](xe),De.init(),this.$d=De.set($,Math.min(this.$D,De.daysInMonth())).$d}else de&&this.$d[de](xe);return this.init(),this},O.set=function(F,oe){return this.clone().$set(F,oe)},O.get=function(F){return this[l.p(F)]()},O.add=function(F,oe){var X,ce=this;F=Number(F);var ge=l.p(oe),de=o(function(Ve){var Xe=R(ce);return l.w(Xe.date(Xe.date()+Math.round(Ve*F)),ce)},"d");if(ge===h)return this.set(h,this.$M+F);if(ge===A)return this.set(A,this.$y+F);if(ge===L)return de(1);if(ge===C)return de(7);var xe=(X={},X[K]=6e4,X[V]=36e5,X[j]=1e3,X)[ge]||1,De=this.$d.getTime()+F*xe;return l.w(De,this)},O.subtract=function(F,oe){return this.add(-1*F,oe)},O.format=function(F){var oe=this;if(!this.isValid())return"Invalid Date";var X=F||"YYYY-MM-DDTHH:mm:ssZ",ce=l.z(this),ge=this.$locale(),de=this.$H,xe=this.$m,De=this.$M,Ve=ge.weekdays,Xe=ge.months,tt=o(function(je,B,ne,_e){return je&&(je[B]||je(oe,X))||ne[B].substr(0,_e)},"h"),vt=o(function(je){return l.s(de%12||12,je,"0")},"d"),Ct=ge.meridiem||function(je,B,ne){var _e=je<12?"AM":"PM";return ne?_e.toLowerCase():_e},Nt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:De+1,MM:l.s(De+1,2,"0"),MMM:tt(ge.monthsShort,De,Xe,3),MMMM:tt(Xe,De),D:this.$D,DD:l.s(this.$D,2,"0"),d:String(this.$W),dd:tt(ge.weekdaysMin,this.$W,Ve,2),ddd:tt(ge.weekdaysShort,this.$W,Ve,3),dddd:Ve[this.$W],H:String(de),HH:l.s(de,2,"0"),h:vt(1),hh:vt(2),a:Ct(de,xe,!0),A:Ct(de,xe,!1),m:String(xe),mm:l.s(xe,2,"0"),s:String(this.$s),ss:l.s(this.$s,2,"0"),SSS:l.s(this.$ms,3,"0"),Z:ce};return X.replace(G,function(je,B){return B||Nt[je]||ce.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(F,oe,X){var ce,ge=l.p(oe),de=R(F),xe=6e4*(de.utcOffset()-this.utcOffset()),De=this-de,Ve=l.m(this,de);return Ve=(ce={},ce[A]=Ve/12,ce[h]=Ve,ce[D]=Ve/3,ce[C]=(De-xe)/6048e5,ce[L]=(De-xe)/864e5,ce[V]=De/36e5,ce[K]=De/6e4,ce[j]=De/1e3,ce)[ge]||De,X?Ve:l.a(Ve)},O.daysInMonth=function(){return this.endOf(h).$D},O.$locale=function(){return Oe[this.$L]},O.locale=function(F,oe){if(!F)return this.$L;var X=this.clone(),ce=U(F,oe,!0);return ce&&(X.$L=ce),X},O.clone=function(){return l.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},Q}(),I=le.prototype;return R.prototype=I,[["$ms",_],["$s",j],["$m",K],["$H",V],["$W",L],["$M",h],["$y",A],["$D",$]].forEach(function(Q){I[Q[1]]=function(O){return this.$g(O,Q[0],Q[1])}}),R.extend=function(Q,O){return Q.$i||(Q(O,le,R),Q.$i=!0),R},R.locale=U,R.isDayjs=at,R.unix=function(Q){return R(1e3*Q)},R.en=Oe[he],R.Ls=Oe,R.p={},R})},6279:function(M){(function(_,j){M.exports=j()})(this,function(){"use strict";return function(_,j,K){_=_||{};var V=j.prototype,L={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function C(D,A,$,H){return V.fromToBase(D,A,$,H)}o(C,"i"),K.en.relativeTime=L,V.fromToBase=function(D,A,$,H,G){for(var Y,Pe,He,he=$.$locale().relativeTime||L,Oe=_.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],at=Oe.length,U=0;U<at;U+=1){var R=Oe[U];R.d&&(Y=H?K(D).diff($,R.d,!0):$.diff(D,R.d,!0));var l=(_.rounding||Math.round)(Math.abs(Y));if(He=Y>0,l<=R.r||!R.r){l<=1&&U>0&&(R=Oe[U-1]);var le=he[R.l];G&&(l=G(""+l)),Pe=typeof le=="string"?le.replace("%d",l):le(l,A,R.l,He);break}}if(A)return Pe;var I=He?he.future:he.past;return typeof I=="function"?I(Pe):I.replace("%s",Pe)},V.to=function(D,A){return C(D,A,this,!0)},V.from=function(D,A){return C(D,A,this)};var h=o(function(D){return D.$u?K.utc():K()},"d");V.toNow=function(D){return this.to(h(this),D)},V.fromNow=function(D){return this.from(h(this),D)}}})},3581:function(M){(function(_,j){M.exports=j()})(this,function(){"use strict";return function(_,j,K){K.updateLocale=function(V,L){var C=K.Ls[V];if(C)return(L?Object.keys(L):[]).forEach(function(h){C[h]=L[h]}),C}}})},7334:M=>{function _(j,K,V){var L,C,h,D,A;K==null&&(K=100);function $(){var G=Date.now()-D;G<K&&G>=0?L=setTimeout($,K-G):(L=null,V||(A=j.apply(h,C),h=C=null))}o($,"later");var H=o(function(){h=this,C=arguments,D=Date.now();var G=V&&!L;return L||(L=setTimeout($,K)),G&&(A=j.apply(h,C),h=C=null),A},"debounced");return H.clear=function(){L&&(clearTimeout(L),L=null)},H.flush=function(){L&&(A=j.apply(h,C),h=C=null,clearTimeout(L),L=null)},H}o(_,"debounce"),_.debounce=_,M.exports=_},7007:M=>{"use strict";var _=typeof Reflect=="object"?Reflect:null,j=_&&typeof _.apply=="function"?_.apply:o(function(R,l,le){return Function.prototype.apply.call(R,l,le)},"ReflectApply"),K;_&&typeof _.ownKeys=="function"?K=_.ownKeys:Object.getOwnPropertySymbols?K=o(function(R){return Object.getOwnPropertyNames(R).concat(Object.getOwnPropertySymbols(R))},"ReflectOwnKeys"):K=o(function(R){return Object.getOwnPropertyNames(R)},"ReflectOwnKeys");function V(U){console&&console.warn&&console.warn(U)}o(V,"ProcessEmitWarning");var L=Number.isNaN||o(function(R){return R!==R},"NumberIsNaN");function C(){C.init.call(this)}o(C,"EventEmitter"),M.exports=C,M.exports.once=at,C.EventEmitter=C,C.prototype._events=void 0,C.prototype._eventsCount=0,C.prototype._maxListeners=void 0;var h=10;function D(U){if(typeof U!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof U)}o(D,"checkListener"),Object.defineProperty(C,"defaultMaxListeners",{enumerable:!0,get:o(function(){return h},"get"),set:o(function(U){if(typeof U!="number"||U<0||L(U))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+U+".");h=U},"set")}),C.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},C.prototype.setMaxListeners=o(function(R){if(typeof R!="number"||R<0||L(R))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+R+".");return this._maxListeners=R,this},"setMaxListeners");function A(U){return U._maxListeners===void 0?C.defaultMaxListeners:U._maxListeners}o(A,"_getMaxListeners"),C.prototype.getMaxListeners=o(function(){return A(this)},"getMaxListeners"),C.prototype.emit=o(function(R){for(var l=[],le=1;le<arguments.length;le++)l.push(arguments[le]);var I=R==="error",Q=this._events;if(Q!==void 0)I=I&&Q.error===void 0;else if(!I)return!1;if(I){var O;if(l.length>0&&(O=l[0]),O instanceof Error)throw O;var F=new Error("Unhandled error."+(O?" ("+O.message+")":""));throw F.context=O,F}var oe=Q[R];if(oe===void 0)return!1;if(typeof oe=="function")j(oe,this,l);else for(var X=oe.length,ce=He(oe,X),le=0;le<X;++le)j(ce[le],this,l);return!0},"emit");function $(U,R,l,le){var I,Q,O;if(D(l),Q=U._events,Q===void 0?(Q=U._events=Object.create(null),U._eventsCount=0):(Q.newListener!==void 0&&(U.emit("newListener",R,l.listener?l.listener:l),Q=U._events),O=Q[R]),O===void 0)O=Q[R]=l,++U._eventsCount;else if(typeof O=="function"?O=Q[R]=le?[l,O]:[O,l]:le?O.unshift(l):O.push(l),I=A(U),I>0&&O.length>I&&!O.warned){O.warned=!0;var F=new Error("Possible EventEmitter memory leak detected. "+O.length+" "+String(R)+" listeners added. Use emitter.setMaxListeners() to increase limit");F.name="MaxListenersExceededWarning",F.emitter=U,F.type=R,F.count=O.length,V(F)}return U}o($,"_addListener"),C.prototype.addListener=o(function(R,l){return $(this,R,l,!1)},"addListener"),C.prototype.on=C.prototype.addListener,C.prototype.prependListener=o(function(R,l){return $(this,R,l,!0)},"prependListener");function H(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}o(H,"onceWrapper");function G(U,R,l){var le={fired:!1,wrapFn:void 0,target:U,type:R,listener:l},I=H.bind(le);return I.listener=l,le.wrapFn=I,I}o(G,"_onceWrap"),C.prototype.once=o(function(R,l){return D(l),this.on(R,G(this,R,l)),this},"once"),C.prototype.prependOnceListener=o(function(R,l){return D(l),this.prependListener(R,G(this,R,l)),this},"prependOnceListener"),C.prototype.removeListener=o(function(R,l){var le,I,Q,O,F;if(D(l),I=this._events,I===void 0)return this;if(le=I[R],le===void 0)return this;if(le===l||le.listener===l)--this._eventsCount===0?this._events=Object.create(null):(delete I[R],I.removeListener&&this.emit("removeListener",R,le.listener||l));else if(typeof le!="function"){for(Q=-1,O=le.length-1;O>=0;O--)if(le[O]===l||le[O].listener===l){F=le[O].listener,Q=O;break}if(Q<0)return this;Q===0?le.shift():he(le,Q),le.length===1&&(I[R]=le[0]),I.removeListener!==void 0&&this.emit("removeListener",R,F||l)}return this},"removeListener"),C.prototype.off=C.prototype.removeListener,C.prototype.removeAllListeners=o(function(R){var l,le,I;if(le=this._events,le===void 0)return this;if(le.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):le[R]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete le[R]),this;if(arguments.length===0){var Q=Object.keys(le),O;for(I=0;I<Q.length;++I)O=Q[I],O!=="removeListener"&&this.removeAllListeners(O);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(l=le[R],typeof l=="function")this.removeListener(R,l);else if(l!==void 0)for(I=l.length-1;I>=0;I--)this.removeListener(R,l[I]);return this},"removeAllListeners");function Y(U,R,l){var le=U._events;if(le===void 0)return[];var I=le[R];return I===void 0?[]:typeof I=="function"?l?[I.listener||I]:[I]:l?Oe(I):He(I,I.length)}o(Y,"_listeners"),C.prototype.listeners=o(function(R){return Y(this,R,!0)},"listeners"),C.prototype.rawListeners=o(function(R){return Y(this,R,!1)},"rawListeners"),C.listenerCount=function(U,R){return typeof U.listenerCount=="function"?U.listenerCount(R):Pe.call(U,R)},C.prototype.listenerCount=Pe;function Pe(U){var R=this._events;if(R!==void 0){var l=R[U];if(typeof l=="function")return 1;if(l!==void 0)return l.length}return 0}o(Pe,"listenerCount"),C.prototype.eventNames=o(function(){return this._eventsCount>0?K(this._events):[]},"eventNames");function He(U,R){for(var l=new Array(R),le=0;le<R;++le)l[le]=U[le];return l}o(He,"arrayClone");function he(U,R){for(;R+1<U.length;R++)U[R]=U[R+1];U.pop()}o(he,"spliceOne");function Oe(U){for(var R=new Array(U.length),l=0;l<R.length;++l)R[l]=U[l].listener||U[l];return R}o(Oe,"unwrapListeners");function at(U,R){return new Promise(function(l,le){function I(){Q!==void 0&&U.removeListener("error",Q),l([].slice.call(arguments))}o(I,"eventListener");var Q;R!=="error"&&(Q=o(function(F){U.removeListener(R,I),le(F)},"errorListener"),U.once("error",Q)),U.once(R,I)})}o(at,"once")},5228:M=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;function V(C){if(C==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(C)}o(V,"toObject");function L(){try{if(!Object.assign)return!1;var C=new String("abc");if(C[5]="de",Object.getOwnPropertyNames(C)[0]==="5")return!1;for(var h={},D=0;D<10;D++)h["_"+String.fromCharCode(D)]=D;var A=Object.getOwnPropertyNames(h).map(function(H){return h[H]});if(A.join("")!=="0123456789")return!1;var $={};return"abcdefghijklmnopqrst".split("").forEach(function(H){$[H]=H}),Object.keys(Object.assign({},$)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}o(L,"shouldUseNative"),M.exports=L()?Object.assign:function(C,h){for(var D,A=V(C),$,H=1;H<arguments.length;H++){D=Object(arguments[H]);for(var G in D)j.call(D,G)&&(A[G]=D[G]);if(_){$=_(D);for(var Y=0;Y<$.length;Y++)K.call(D,$[Y])&&(A[$[Y]]=D[$[Y]])}}return A}},7975:M=>{"use strict";function _(L){if(typeof L!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(L))}o(_,"assertPath");function j(L,C){for(var h="",D=0,A=-1,$=0,H,G=0;G<=L.length;++G){if(G<L.length)H=L.charCodeAt(G);else{if(H===47)break;H=47}if(H===47){if(!(A===G-1||$===1))if(A!==G-1&&$===2){if(h.length<2||D!==2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){var Y=h.lastIndexOf("/");if(Y!==h.length-1){Y===-1?(h="",D=0):(h=h.slice(0,Y),D=h.length-1-h.lastIndexOf("/")),A=G,$=0;continue}}else if(h.length===2||h.length===1){h="",D=0,A=G,$=0;continue}}C&&(h.length>0?h+="/..":h="..",D=2)}else h.length>0?h+="/"+L.slice(A+1,G):h=L.slice(A+1,G),D=G-A-1;A=G,$=0}else H===46&&$!==-1?++$:$=-1}return h}o(j,"normalizeStringPosix");function K(L,C){var h=C.dir||C.root,D=C.base||(C.name||"")+(C.ext||"");return h?h===C.root?h+D:h+L+D:D}o(K,"_format");var V={resolve:o(function(){for(var C="",h=!1,D,A=arguments.length-1;A>=-1&&!h;A--){var $;A>=0?$=arguments[A]:(D===void 0&&(D=process.cwd()),$=D),_($),$.length!==0&&(C=$+"/"+C,h=$.charCodeAt(0)===47)}return C=j(C,!h),h?C.length>0?"/"+C:"/":C.length>0?C:"."},"resolve"),normalize:o(function(C){if(_(C),C.length===0)return".";var h=C.charCodeAt(0)===47,D=C.charCodeAt(C.length-1)===47;return C=j(C,!h),C.length===0&&!h&&(C="."),C.length>0&&D&&(C+="/"),h?"/"+C:C},"normalize"),isAbsolute:o(function(C){return _(C),C.length>0&&C.charCodeAt(0)===47},"isAbsolute"),join:o(function(){if(arguments.length===0)return".";for(var C,h=0;h<arguments.length;++h){var D=arguments[h];_(D),D.length>0&&(C===void 0?C=D:C+="/"+D)}return C===void 0?".":V.normalize(C)},"join"),relative:o(function(C,h){if(_(C),_(h),C===h||(C=V.resolve(C),h=V.resolve(h),C===h))return"";for(var D=1;D<C.length&&C.charCodeAt(D)===47;++D);for(var A=C.length,$=A-D,H=1;H<h.length&&h.charCodeAt(H)===47;++H);for(var G=h.length,Y=G-H,Pe=$<Y?$:Y,He=-1,he=0;he<=Pe;++he){if(he===Pe){if(Y>Pe){if(h.charCodeAt(H+he)===47)return h.slice(H+he+1);if(he===0)return h.slice(H+he)}else $>Pe&&(C.charCodeAt(D+he)===47?He=he:he===0&&(He=0));break}var Oe=C.charCodeAt(D+he),at=h.charCodeAt(H+he);if(Oe!==at)break;Oe===47&&(He=he)}var U="";for(he=D+He+1;he<=A;++he)(he===A||C.charCodeAt(he)===47)&&(U.length===0?U+="..":U+="/..");return U.length>0?U+h.slice(H+He):(H+=He,h.charCodeAt(H)===47&&++H,h.slice(H))},"relative"),_makeLong:o(function(C){return C},"_makeLong"),dirname:o(function(C){if(_(C),C.length===0)return".";for(var h=C.charCodeAt(0),D=h===47,A=-1,$=!0,H=C.length-1;H>=1;--H)if(h=C.charCodeAt(H),h===47){if(!$){A=H;break}}else $=!1;return A===-1?D?"/":".":D&&A===1?"//":C.slice(0,A)},"dirname"),basename:o(function(C,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');_(C);var D=0,A=-1,$=!0,H;if(h!==void 0&&h.length>0&&h.length<=C.length){if(h.length===C.length&&h===C)return"";var G=h.length-1,Y=-1;for(H=C.length-1;H>=0;--H){var Pe=C.charCodeAt(H);if(Pe===47){if(!$){D=H+1;break}}else Y===-1&&($=!1,Y=H+1),G>=0&&(Pe===h.charCodeAt(G)?--G===-1&&(A=H):(G=-1,A=Y))}return D===A?A=Y:A===-1&&(A=C.length),C.slice(D,A)}else{for(H=C.length-1;H>=0;--H)if(C.charCodeAt(H)===47){if(!$){D=H+1;break}}else A===-1&&($=!1,A=H+1);return A===-1?"":C.slice(D,A)}},"basename"),extname:o(function(C){_(C);for(var h=-1,D=0,A=-1,$=!0,H=0,G=C.length-1;G>=0;--G){var Y=C.charCodeAt(G);if(Y===47){if(!$){D=G+1;break}continue}A===-1&&($=!1,A=G+1),Y===46?h===-1?h=G:H!==1&&(H=1):h!==-1&&(H=-1)}return h===-1||A===-1||H===0||H===1&&h===A-1&&h===D+1?"":C.slice(h,A)},"extname"),format:o(function(C){if(C===null||typeof C!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof C);return K("/",C)},"format"),parse:o(function(C){_(C);var h={root:"",dir:"",base:"",ext:"",name:""};if(C.length===0)return h;var D=C.charCodeAt(0),A=D===47,$;A?(h.root="/",$=1):$=0;for(var H=-1,G=0,Y=-1,Pe=!0,He=C.length-1,he=0;He>=$;--He){if(D=C.charCodeAt(He),D===47){if(!Pe){G=He+1;break}continue}Y===-1&&(Pe=!1,Y=He+1),D===46?H===-1?H=He:he!==1&&(he=1):H!==-1&&(he=-1)}return H===-1||Y===-1||he===0||he===1&&H===Y-1&&H===G+1?Y!==-1&&(G===0&&A?h.base=h.name=C.slice(1,Y):h.base=h.name=C.slice(G,Y)):(G===0&&A?(h.name=C.slice(1,H),h.base=C.slice(1,Y)):(h.name=C.slice(G,H),h.base=C.slice(G,Y)),h.ext=C.slice(H,Y)),G>0?h.dir=C.slice(0,G-1):A&&(h.dir="/"),h},"parse"),sep:"/",delimiter:":",win32:null,posix:null};V.posix=V,M.exports=V},2551:(M,_,j)=>{"use strict";var K;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=j(6540),L=j(5228),C=j(9982);function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(o(h,"u"),!V)throw Error(h(227));function D(e,t,n,i,s,f,m,g,T){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(re){this.onError(re)}}o(D,"ba");var A=!1,$=null,H=!1,G=null,Y={onError:o(function(e){A=!0,$=e},"onError")};function Pe(e,t,n,i,s,f,m,g,T){A=!1,$=null,D.apply(Y,arguments)}o(Pe,"ja");function He(e,t,n,i,s,f,m,g,T){if(Pe.apply(this,arguments),A){if(A){var S=$;A=!1,$=null}else throw Error(h(198));H||(H=!0,G=S)}}o(He,"ka");var he=null,Oe=null,at=null;function U(e,t,n){var i=e.type||"unknown-event";e.currentTarget=at(n),He(i,t,void 0,e),e.currentTarget=null}o(U,"oa");var R=null,l={};function le(){if(R)for(var e in l){var t=l[e],n=R.indexOf(e);if(!(-1<n))throw Error(h(96,e));if(!Q[n]){if(!t.extractEvents)throw Error(h(97,e));Q[n]=t,n=t.eventTypes;for(var i in n){var s=void 0,f=n[i],m=t,g=i;if(O.hasOwnProperty(g))throw Error(h(99,g));O[g]=f;var T=f.phasedRegistrationNames;if(T){for(s in T)T.hasOwnProperty(s)&&I(T[s],m,g);s=!0}else f.registrationName?(I(f.registrationName,m,g),s=!0):s=!1;if(!s)throw Error(h(98,i,e))}}}}o(le,"ra");function I(e,t,n){if(F[e])throw Error(h(100,e));F[e]=t,oe[e]=t.eventTypes[n].dependencies}o(I,"ua");var Q=[],O={},F={},oe={};function X(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(!l.hasOwnProperty(n)||l[n]!==i){if(l[n])throw Error(h(102,n));l[n]=i,t=!0}}t&&le()}o(X,"xa");var ce=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ge=null,de=null,xe=null;function De(e){if(e=Oe(e)){if(typeof ge!="function")throw Error(h(280));var t=e.stateNode;t&&(t=he(t),ge(e.stateNode,e.type,t))}}o(De,"Ca");function Ve(e){de?xe?xe.push(e):xe=[e]:de=e}o(Ve,"Da");function Xe(){if(de){var e=de,t=xe;if(xe=de=null,De(e),t)for(e=0;e<t.length;e++)De(t[e])}}o(Xe,"Ea");function tt(e,t){return e(t)}o(tt,"Fa");function vt(e,t,n,i,s){return e(t,n,i,s)}o(vt,"Ga");function Ct(){}o(Ct,"Ha");var Nt=tt,je=!1,B=!1;function ne(){(de!==null||xe!==null)&&(Ct(),Xe())}o(ne,"La");function _e(e,t,n){if(B)return e(t,n);B=!0;try{return Nt(e,t,n)}finally{B=!1,ne()}}o(_e,"Ma");var x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P=Object.prototype.hasOwnProperty,we={},Le={};function Te(e){return P.call(Le,e)?!0:P.call(we,e)?!1:x.test(e)?Le[e]=!0:(we[e]=!0,!1)}o(Te,"Ra");function We(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}o(We,"Sa");function wt(e,t,n,i){if(t===null||typeof t=="undefined"||We(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}o(wt,"Ta");function Se(e,t,n,i,s,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=f}o(Se,"v");var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Se(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Se(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Se(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Se(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Se(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Se(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){Ae[e]=new Se(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){Ae[e]=new Se(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){Ae[e]=new Se(e,5,!1,e.toLowerCase(),null,!1)});var Rt=/[\-:]([a-z])/g;function go(e){return e[1].toUpperCase()}o(go,"Va"),"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rt,go);Ae[t]=new Se(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rt,go);Ae[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rt,go);Ae[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Se(e,1,!1,e.toLowerCase(),null,!1)}),Ae.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){Ae[e]=new Se(e,1,!1,e.toLowerCase(),null,!0)});var It=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;It.hasOwnProperty("ReactCurrentDispatcher")||(It.ReactCurrentDispatcher={current:null}),It.hasOwnProperty("ReactCurrentBatchConfig")||(It.ReactCurrentBatchConfig={suspense:null});function gi(e,t,n,i){var s=Ae.hasOwnProperty(t)?Ae[t]:null,f=s!==null?s.type===0:i?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");f||(wt(t,n,s,i)&&(n=null),i||s===null?Te(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}o(gi,"Xa");var Ql=/^(.*)[\\\/]/,xt=typeof Symbol=="function"&&Symbol.for,Sr=xt?Symbol.for("react.element"):60103,vn=xt?Symbol.for("react.portal"):60106,Tn=xt?Symbol.for("react.fragment"):60107,vi=xt?Symbol.for("react.strict_mode"):60108,Lr=xt?Symbol.for("react.profiler"):60114,Ci=xt?Symbol.for("react.provider"):60109,yi=xt?Symbol.for("react.context"):60110,Kl=xt?Symbol.for("react.concurrent_mode"):60111,Sn=xt?Symbol.for("react.forward_ref"):60112,lt=xt?Symbol.for("react.suspense"):60113,vo=xt?Symbol.for("react.suspense_list"):60120,wi=xt?Symbol.for("react.memo"):60115,xi=xt?Symbol.for("react.lazy"):60116,Qn=xt?Symbol.for("react.block"):60121,Ei=typeof Symbol=="function"&&Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Ei&&e[Ei]||e["@@iterator"],typeof e=="function"?e:null)}o(Kn,"nb");function Yl(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}o(Yl,"ob");function Wt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case vn:return"Portal";case Lr:return"Profiler";case vi:return"StrictMode";case lt:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yi:return"Context.Consumer";case Ci:return"Context.Provider";case Sn:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case wi:return Wt(e.type);case Qn:return Wt(e.render);case xi:if(e=e._status===1?e._result:null)return Wt(e)}return null}o(Wt,"pb");function Co(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var i=e._debugOwner,s=e._debugSource,f=Wt(e.type);n=null,i&&(n=Wt(i.type)),i=f,f="",s?f=" (at "+s.fileName.replace(Ql,"")+":"+s.lineNumber+")":n&&(f=" (created by "+n+")"),n=`
    in `+(i||"Unknown")+f}t+=n,e=e.return}while(e);return t}o(Co,"qb");function en(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}o(en,"rb");function yo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}o(yo,"sb");function Gl(e){var t=yo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:o(function(){return s.call(this)},"get"),set:o(function(m){i=""+m,f.call(this,m)},"set")}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:o(function(){return i},"getValue"),setValue:o(function(m){i=""+m},"setValue"),stopTracking:o(function(){e._valueTracker=null,delete e[t]},"stopTracking")}}}o(Gl,"tb");function wo(e){e._valueTracker||(e._valueTracker=Gl(e))}o(wo,"xb");function xo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=yo(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}o(xo,"yb");function bi(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}o(bi,"zb");function Eo(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}o(Eo,"Ab");function ki(e,t){t=t.checked,t!=null&&gi(e,"checked",t,!1)}o(ki,"Bb");function bo(e,t){ki(e,t);var n=en(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_i(e,t.type,n):t.hasOwnProperty("defaultValue")&&_i(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}o(bo,"Cb");function nt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}o(nt,"Eb");function _i(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}o(_i,"Db");function Sa(e){var t="";return V.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}o(Sa,"Fb");function Mi(e,t){return e=L({children:void 0},t),(t=Sa(t.children))&&(e.children=t),e}o(Mi,"Gb");function Yn(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}o(Yn,"Hb");function ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}o(ko,"Ib");function Xl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}o(Xl,"Jb");function _o(e,t){var n=en(t.value),i=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}o(_o,"Kb");function Nr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}o(Nr,"Lb");var Ti={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Si(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}o(Si,"Nb");function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Si(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}o(Li,"Ob");var Mo,Jl=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,s)})}:e}(function(e,t){if(e.namespaceURI!==Ti.svg||"innerHTML"in e)e.innerHTML=t;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}o(tn,"Rb");function qt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}o(qt,"Sb");var Cn={animationend:qt("Animation","AnimationEnd"),animationiteration:qt("Animation","AnimationIteration"),animationstart:qt("Animation","AnimationStart"),transitionend:qt("Transition","TransitionEnd")},Rr={},Ni={};ce&&(Ni=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Gn(e){if(Rr[e])return Rr[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ni)return Rr[e]=t[n];return e}o(Gn,"Wb");var Ri=Gn("animationend"),Pi=Gn("animationiteration"),To=Gn("animationstart"),Pr=Gn("transitionend"),Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Or=new(typeof WeakMap=="function"?WeakMap:Map);function Dr(e){var t=Or.get(e);return t===void 0&&(t=new Map,Or.set(e,t)),t}o(Dr,"cc");function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}o(nn,"dc");function Ar(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}o(Ar,"ec");function Ir(e){if(nn(e)!==e)throw Error(h(188))}o(Ir,"fc");function Hr(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var f=s.alternate;if(f===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===f.child){for(f=s.child;f;){if(f===n)return Ir(s),e;if(f===i)return Ir(s),t;f=f.sibling}throw Error(h(188))}if(n.return!==i.return)n=s,i=f;else{for(var m=!1,g=s.child;g;){if(g===n){m=!0,n=s,i=f;break}if(g===i){m=!0,i=s,n=f;break}g=g.sibling}if(!m){for(g=f.child;g;){if(g===n){m=!0,n=f,i=s;break}if(g===i){m=!0,i=f,n=s;break}g=g.sibling}if(!m)throw Error(h(189))}}if(n.alternate!==i)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}o(Hr,"gc");function Oi(e){if(e=Hr(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}o(Oi,"hc");function rn(e,t){if(t==null)throw Error(h(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}o(rn,"ic");function Di(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}o(Di,"jc");var zt=null;function Ai(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var i=0;i<t.length&&!e.isPropagationStopped();i++)U(e,t[i],n[i]);else t&&U(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}o(Ai,"lc");function So(e){if(e!==null&&(zt=rn(zt,e)),e=zt,zt=null,e){if(Di(e,Ai),zt)throw Error(h(95));if(H)throw e=G,H=!1,G=null,e}}o(So,"mc");function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}o(Ii,"nc");function es(e){if(!ce)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}o(es,"oc");var Lo=[];function ts(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Lo.length&&Lo.push(e)}o(ts,"qc");function Pt(e,t,n,i){if(Lo.length){var s=Lo.pop();return s.topLevelType=e,s.eventSystemFlags=i,s.nativeEvent=t,s.targetInst=n,s}return{topLevelType:e,eventSystemFlags:i,nativeEvent:t,targetInst:n,ancestors:[]}}o(Pt,"rc");function ns(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var i=n;if(i.tag===3)i=i.stateNode.containerInfo;else{for(;i.return;)i=i.return;i=i.tag!==3?null:i.stateNode.containerInfo}if(!i)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=lr(i)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var s=Ii(e.nativeEvent);i=e.topLevelType;var f=e.nativeEvent,m=e.eventSystemFlags;n===0&&(m|=64);for(var g=null,T=0;T<Q.length;T++){var S=Q[T];S&&(S=S.extractEvents(i,t,f,s,m))&&(g=rn(g,S))}So(g)}}o(ns,"sc");function No(e,t,n){if(!n.has(e)){switch(e){case"scroll":Br(t,"scroll",!0);break;case"focus":case"blur":Br(t,"focus",!0),Br(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":es(e)&&Br(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Ln.indexOf(e)===-1&&Je(e,t)}n.set(e,null)}}o(No,"uc");var Hi,mt,Et,on=!1,Dt=[],yn=null,Qt=null,jt=null,ln=new Map,Fr=new Map,Xn=[],Qe="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Fi="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function bt(e,t){var n=Dr(t);Qe.forEach(function(i){No(i,t,n)}),Fi.forEach(function(i){No(i,t,n)})}o(bt,"Jc");function ct(e,t,n,i,s){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:s,container:i}}o(ct,"Kc");function Ue(e,t){switch(e){case"focus":case"blur":yn=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}o(Ue,"Lc");function $e(e,t,n,i,s,f){return e===null||e.nativeEvent!==f?(e=ct(t,n,i,s,f),t!==null&&(t=sr(t),t!==null&&mt(t)),e):(e.eventSystemFlags|=i,e)}o($e,"Mc");function rs(e,t,n,i,s){switch(t){case"focus":return yn=$e(yn,e,t,n,i,s),!0;case"dragenter":return Qt=$e(Qt,e,t,n,i,s),!0;case"mouseover":return jt=$e(jt,e,t,n,i,s),!0;case"pointerover":var f=s.pointerId;return ln.set(f,$e(ln.get(f)||null,e,t,n,i,s)),!0;case"gotpointercapture":return f=s.pointerId,Fr.set(f,$e(Fr.get(f)||null,e,t,n,i,s)),!0}return!1}o(rs,"Oc");function Vi(e){var t=lr(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ar(n),t!==null){e.blockedOn=t,C.unstable_runWithPriority(e.priority,function(){Et(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}o(Vi,"Pc");function Nn(e){if(e.blockedOn!==null)return!1;var t=tr(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=sr(t);return n!==null&&mt(n),e.blockedOn=t,!1}return!0}o(Nn,"Qc");function $i(e,t,n){Nn(e)&&n.delete(t)}o($i,"Sc");function os(){for(on=!1;0<Dt.length;){var e=Dt[0];if(e.blockedOn!==null){e=sr(e.blockedOn),e!==null&&Hi(e);break}var t=tr(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:Dt.shift()}yn!==null&&Nn(yn)&&(yn=null),Qt!==null&&Nn(Qt)&&(Qt=null),jt!==null&&Nn(jt)&&(jt=null),ln.forEach($i),Fr.forEach($i)}o(os,"Tc");function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,on||(on=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,os)))}o(Jn,"Uc");function Vr(e){function t(s){return Jn(s,e)}if(o(t,"b"),0<Dt.length){Jn(Dt[0],e);for(var n=1;n<Dt.length;n++){var i=Dt[n];i.blockedOn===e&&(i.blockedOn=null)}}for(yn!==null&&Jn(yn,e),Qt!==null&&Jn(Qt,e),jt!==null&&Jn(jt,e),ln.forEach(t),Fr.forEach(t),n=0;n<Xn.length;n++)i=Xn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)Vi(n),n.blockedOn===null&&Xn.shift()}o(Vr,"Vc");var Rn={},$r=new Map,Ro=new Map,Po=["abort","abort",Ri,"animationEnd",Pi,"animationIteration",To,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Pr,"transitionEnd","waiting","waiting"];function Oo(e,t){for(var n=0;n<e.length;n+=2){var i=e[n],s=e[n+1],f="on"+(s[0].toUpperCase()+s.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[i],eventPriority:t},Ro.set(i,t),$r.set(i,f),Rn[s]=f}}o(Oo,"ad"),Oo("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Oo("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Oo(Po,2);for(var Bi="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Do=0;Do<Bi.length;Do++)Ro.set(Bi[Do],0);var is=C.unstable_UserBlockingPriority,pe=C.unstable_runWithPriority,Pn=!0;function Je(e,t){Br(t,e,!1)}o(Je,"F");function Br(e,t,n){var i=Ro.get(t);switch(i===void 0?2:i){case 0:i=Fe.bind(null,t,1,e);break;case 1:i=ls.bind(null,t,1,e);break;default:i=er.bind(null,t,1,e)}n?e.addEventListener(t,i,!0):e.addEventListener(t,i,!1)}o(Br,"vc");function Fe(e,t,n,i){je||Ct();var s=er,f=je;je=!0;try{vt(s,e,t,n,i)}finally{(je=f)||ne()}}o(Fe,"gd");function ls(e,t,n,i){pe(is,er.bind(null,e,t,n,i))}o(ls,"hd");function er(e,t,n,i){if(Pn)if(0<Dt.length&&-1<Qe.indexOf(e))e=ct(null,e,t,n,i),Dt.push(e);else{var s=tr(e,t,n,i);if(s===null)Ue(e,i);else if(-1<Qe.indexOf(e))e=ct(s,e,t,n,i),Dt.push(e);else if(!rs(s,e,t,n,i)){Ue(e,i),e=Pt(e,i,null,t);try{_e(ns,e)}finally{ts(e)}}}}o(er,"id");function tr(e,t,n,i){if(n=Ii(i),n=lr(n),n!==null){var s=nn(n);if(s===null)n=null;else{var f=s.tag;if(f===13){if(n=Ar(s),n!==null)return n;n=null}else if(f===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}e=Pt(e,i,n,t);try{_e(ns,e)}finally{ts(e)}return null}o(tr,"Rc");var nr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zr=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){zr.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function rr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}o(rr,"ld");function zi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=rr(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}o(zi,"md");var ss=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(ss[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62,""))}}o(Ao,"od");function jr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}o(jr,"pd");var ji=Ti.html;function Kt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=Dr(e);t=oe[t];for(var i=0;i<t.length;i++)No(t[i],e,n)}o(Kt,"rd");function Ur(){}o(Ur,"sd");function Io(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}o(Io,"td");function Ho(e){for(;e&&e.firstChild;)e=e.firstChild;return e}o(Ho,"ud");function Fo(e,t){var n=Ho(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ho(n)}}o(Fo,"vd");function Zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}o(Zr,"wd");function Vo(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}o(Vo,"xd");function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}o(Ui,"yd");var $o="$",Zi="/$",Wi="$?",Wr="$!",Bo=null,qr=null;function as(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}o(as,"Fd");function wn(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}o(wn,"Gd");var or=typeof setTimeout=="function"?setTimeout:void 0,us=typeof clearTimeout=="function"?clearTimeout:void 0;function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}o(On,"Jd");function qi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===$o||n===Wr||n===Wi){if(t===0)return e;t--}else n===Zi&&t++}e=e.previousSibling}return null}o(qi,"Kd");var zo=Math.random().toString(36).slice(2),sn="__reactInternalInstance$"+zo,Qr="__reactEventHandlers$"+zo,ir="__reactContainere$"+zo;function lr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ir]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qi(e);e!==null;){if(n=e[sn])return n;e=qi(e)}return t}e=n,n=e.parentNode}return null}o(lr,"tc");function sr(e){return e=e[sn]||e[ir],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}o(sr,"Nc");function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}o(xn,"Pd");function jo(e){return e[Qr]||null}o(jo,"Qd");function Yt(e){do e=e.return;while(e&&e.tag!==5);return e||null}o(Yt,"Rd");function ar(e,t){var n=e.stateNode;if(!n)return null;var i=he(n);if(!i)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}o(ar,"Sd");function Qi(e,t,n){(t=ar(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rn(n._dispatchListeners,t),n._dispatchInstances=rn(n._dispatchInstances,e))}o(Qi,"Td");function cs(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Yt(t);for(t=n.length;0<t--;)Qi(n[t],"captured",e);for(t=0;t<n.length;t++)Qi(n[t],"bubbled",e)}}o(cs,"Ud");function Uo(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=ar(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rn(n._dispatchListeners,t),n._dispatchInstances=rn(n._dispatchInstances,e))}o(Uo,"Vd");function ds(e){e&&e.dispatchConfig.registrationName&&Uo(e._targetInst,null,e)}o(ds,"Wd");function Dn(e){Di(e,cs)}o(Dn,"Xd");var Ke=null,ur=null,Kr=null;function Ki(){if(Kr)return Kr;var e,t=ur,n=t.length,i,s="value"in Ke?Ke.value:Ke.textContent,f=s.length;for(e=0;e<n&&t[e]===s[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===s[f-i];i++);return Kr=s.slice(e,1<i?1-i:void 0)}o(Ki,"ae");function Yr(){return!0}o(Yr,"be");function Gr(){return!1}o(Gr,"ce");function Ot(e,t,n,i){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var s in e)e.hasOwnProperty(s)&&((t=e[s])?this[s]=t(n):s==="target"?this.target=i:this[s]=n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Yr:Gr,this.isPropagationStopped=Gr,this}o(Ot,"G"),L(Ot.prototype,{preventDefault:o(function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Yr)},"preventDefault"),stopPropagation:o(function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Yr)},"stopPropagation"),persist:o(function(){this.isPersistent=Yr},"persist"),isPersistent:Gr,destructor:o(function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Gr,this._dispatchInstances=this._dispatchListeners=null},"destructor")}),Ot.Interface={type:null,target:null,currentTarget:o(function(){return null},"currentTarget"),eventPhase:null,bubbles:null,cancelable:null,timeStamp:o(function(e){return e.timeStamp||Date.now()},"timeStamp"),defaultPrevented:null,isTrusted:null},Ot.extend=function(e){function t(){}o(t,"b");function n(){return i.apply(this,arguments)}o(n,"c");var i=this;t.prototype=i.prototype;var s=new t;return L(s,n.prototype),n.prototype=s,n.prototype.constructor=n,n.Interface=L({},i.Interface,e),n.extend=i.extend,Zo(n),n},Zo(Ot);function fs(e,t,n,i){if(this.eventPool.length){var s=this.eventPool.pop();return this.call(s,e,t,n,i),s}return new this(e,t,n,i)}o(fs,"ee");function ms(e){if(!(e instanceof this))throw Error(h(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}o(ms,"fe");function Zo(e){e.eventPool=[],e.getPooled=fs,e.release=ms}o(Zo,"de");var ps=Ot.extend({data:null}),hs=Ot.extend({data:null}),gs=[9,13,27,32],Wo=ce&&"CompositionEvent"in window,cr=null;ce&&"documentMode"in document&&(cr=document.documentMode);var vs=ce&&"TextEvent"in window&&!cr,Yi=ce&&(!Wo||cr&&8<cr&&11>=cr),Gi=" ",an={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Xi=!1;function Ji(e,t){switch(e){case"keyup":return gs.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}o(Ji,"qe");function el(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}o(el,"re");var An=!1;function Cs(e,t){switch(e){case"compositionend":return el(t);case"keypress":return t.which!==32?null:(Xi=!0,Gi);case"textInput":return e=t.data,e===Gi&&Xi?null:e;default:return null}}o(Cs,"te");function La(e,t){if(An)return e==="compositionend"||!Wo&&Ji(e,t)?(e=Ki(),Kr=ur=Ke=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yi&&t.locale!=="ko"?null:t.data;default:return null}}o(La,"ue");var ys={eventTypes:an,extractEvents:o(function(e,t,n,i){var s;if(Wo)e:{switch(e){case"compositionstart":var f=an.compositionStart;break e;case"compositionend":f=an.compositionEnd;break e;case"compositionupdate":f=an.compositionUpdate;break e}f=void 0}else An?Ji(e,n)&&(f=an.compositionEnd):e==="keydown"&&n.keyCode===229&&(f=an.compositionStart);return f?(Yi&&n.locale!=="ko"&&(An||f!==an.compositionStart?f===an.compositionEnd&&An&&(s=Ki()):(Ke=i,ur="value"in Ke?Ke.value:Ke.textContent,An=!0)),f=ps.getPooled(f,t,n,i),s?f.data=s:(s=el(n),s!==null&&(f.data=s)),Dn(f),s=f):s=null,(e=vs?Cs(e,n):La(e,n))?(t=hs.getPooled(an.beforeInput,t,n,i),t.data=e,Dn(t)):t=null,s===null?t:t===null?s:[s,t]},"extractEvents")},ws={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ws[e.type]:t==="textarea"}o(tl,"xe");var nl={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function rl(e,t,n){return e=Ot.getPooled(nl.change,e,t,n),e.type="change",Ve(n),Dn(e),e}o(rl,"ze");var un=null,In=null;function ol(e){So(e)}o(ol,"Ce");function Xr(e){var t=xn(e);if(xo(t))return e}o(Xr,"De");function xs(e,t){if(e==="change")return t}o(xs,"Ee");var Jr=!1;ce&&(Jr=es("input")&&(!document.documentMode||9<document.documentMode));function il(){un&&(un.detachEvent("onpropertychange",ll),In=un=null)}o(il,"Ge");function ll(e){if(e.propertyName==="value"&&Xr(In))if(e=rl(In,e,Ii(e)),je)So(e);else{je=!0;try{tt(ol,e)}finally{je=!1,ne()}}}o(ll,"He");function Es(e,t,n){e==="focus"?(il(),un=t,In=n,un.attachEvent("onpropertychange",ll)):e==="blur"&&il()}o(Es,"Ie");function Na(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(In)}o(Na,"Je");function dr(e,t){if(e==="click")return Xr(t)}o(dr,"Ke");function sl(e,t){if(e==="input"||e==="change")return Xr(t)}o(sl,"Le");var bs={eventTypes:nl,_isInputEventSupported:Jr,extractEvents:o(function(e,t,n,i){var s=t?xn(t):window,f=s.nodeName&&s.nodeName.toLowerCase();if(f==="select"||f==="input"&&s.type==="file")var m=xs;else if(tl(s))if(Jr)m=sl;else{m=Na;var g=Es}else(f=s.nodeName)&&f.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(m=dr);if(m&&(m=m(e,t)))return rl(m,n,i);g&&g(e,s,t),e==="blur"&&(e=s._wrapperState)&&e.controlled&&s.type==="number"&&_i(s,"number",s.value)},"extractEvents")},fr=Ot.extend({view:null,detail:null}),ks={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _s(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ks[e])?!!t[e]:!1}o(_s,"Pe");function qo(){return _s}o(qo,"Qe");var al=0,Qo=0,Ko=!1,ul=!1,mr=fr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:qo,button:null,buttons:null,relatedTarget:o(function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},"relatedTarget"),movementX:o(function(e){if("movementX"in e)return e.movementX;var t=al;return al=e.screenX,Ko?e.type==="mousemove"?e.screenX-t:0:(Ko=!0,0)},"movementX"),movementY:o(function(e){if("movementY"in e)return e.movementY;var t=Qo;return Qo=e.screenY,ul?e.type==="mousemove"?e.screenY-t:0:(ul=!0,0)},"movementY")}),cl=mr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Hn={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},eo={eventTypes:Hn,extractEvents:o(function(e,t,n,i,s){var f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout";if(f&&!(s&32)&&(n.relatedTarget||n.fromElement)||!m&&!f)return null;if(f=i.window===i?i:(f=i.ownerDocument)?f.defaultView||f.parentWindow:window,m){if(m=t,t=(t=n.relatedTarget||n.toElement)?lr(t):null,t!==null){var g=nn(t);(t!==g||t.tag!==5&&t.tag!==6)&&(t=null)}}else m=null;if(m===t)return null;if(e==="mouseout"||e==="mouseover")var T=mr,S=Hn.mouseLeave,re=Hn.mouseEnter,ae="mouse";else(e==="pointerout"||e==="pointerover")&&(T=cl,S=Hn.pointerLeave,re=Hn.pointerEnter,ae="pointer");if(e=m==null?f:xn(m),f=t==null?f:xn(t),S=T.getPooled(S,m,n,i),S.type=ae+"leave",S.target=e,S.relatedTarget=f,n=T.getPooled(re,t,n,i),n.type=ae+"enter",n.target=f,n.relatedTarget=e,i=m,ae=t,i&&ae)e:{for(T=i,re=ae,m=0,e=T;e;e=Yt(e))m++;for(e=0,t=re;t;t=Yt(t))e++;for(;0<m-e;)T=Yt(T),m--;for(;0<e-m;)re=Yt(re),e--;for(;m--;){if(T===re||T===re.alternate)break e;T=Yt(T),re=Yt(re)}T=null}else T=null;for(re=T,T=[];i&&i!==re&&(m=i.alternate,!(m!==null&&m===re));)T.push(i),i=Yt(i);for(i=[];ae&&ae!==re&&(m=ae.alternate,!(m!==null&&m===re));)i.push(ae),ae=Yt(ae);for(ae=0;ae<T.length;ae++)Uo(T[ae],"bubbled",S);for(ae=i.length;0<ae--;)Uo(i[ae],"captured",n);return s&64?[S,n]:[S]},"extractEvents")};function Ms(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}o(Ms,"Ze");var Gt=typeof Object.is=="function"?Object.is:Ms,dl=Object.prototype.hasOwnProperty;function pr(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++)if(!dl.call(t,n[i])||!Gt(e[n[i]],t[n[i]]))return!1;return!0}o(pr,"bf");var Ts=ce&&"documentMode"in document&&11>=document.documentMode,Yo={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Fn=null,fl=null,to=null,Go=!1;function Ss(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return Go||Fn==null||Fn!==Io(n)?null:(n=Fn,"selectionStart"in n&&Ui(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),to&&pr(to,n)?null:(to=n,e=Ot.getPooled(Yo.select,fl,e,t),e.type="select",e.target=Fn,Dn(e),e))}o(Ss,"jf");var Ls={eventTypes:Yo,extractEvents:o(function(e,t,n,i,s,f){if(s=f||(i.window===i?i.document:i.nodeType===9?i:i.ownerDocument),!(f=!s)){e:{s=Dr(s),f=oe.onSelect;for(var m=0;m<f.length;m++)if(!s.has(f[m])){s=!1;break e}s=!0}f=!s}if(f)return null;switch(s=t?xn(t):window,e){case"focus":(tl(s)||s.contentEditable==="true")&&(Fn=s,fl=t,to=null);break;case"blur":to=fl=Fn=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":return Go=!1,Ss(n,i);case"selectionchange":if(Ts)break;case"keydown":case"keyup":return Ss(n,i)}return null},"extractEvents")},Ns=Ot.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Rs=Ot.extend({clipboardData:o(function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData},"clipboardData")}),Ps=fr.extend({relatedTarget:null});function hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}o(hr,"of");var Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ml={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ds=fr.extend({key:o(function(e){if(e.key){var t=Os[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ml[e.keyCode]||"Unidentified":""},"key"),location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:qo,charCode:o(function(e){return e.type==="keypress"?hr(e):0},"charCode"),keyCode:o(function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},"keyCode"),which:o(function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0},"which")}),Ra=mr.extend({dataTransfer:null}),As=fr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:qo}),Is=Ot.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Hs=mr.extend({deltaX:o(function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},"deltaX"),deltaY:o(function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},"deltaY"),deltaZ:null,deltaMode:null}),Fs={eventTypes:Rn,extractEvents:o(function(e,t,n,i){var s=$r.get(e);if(!s)return null;switch(e){case"keypress":if(hr(n)===0)return null;case"keydown":case"keyup":e=Ds;break;case"blur":case"focus":e=Ps;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Ra;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=As;break;case Ri:case Pi:case To:e=Ns;break;case Pr:e=Is;break;case"scroll":e=fr;break;case"wheel":e=Hs;break;case"copy":case"cut":case"paste":e=Rs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=cl;break;default:e=Ot}return t=e.getPooled(s,t,n,i),Dn(t),t},"extractEvents")};if(R)throw Error(h(101));R=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),le();var Vs=sr;he=jo,Oe=Vs,at=xn,X({SimpleEventPlugin:Fs,EnterLeaveEventPlugin:eo,ChangeEventPlugin:bs,SelectEventPlugin:Ls,BeforeInputEventPlugin:ys});var Xo=[],Vn=-1;function Ye(e){0>Vn||(e.current=Xo[Vn],Xo[Vn]=null,Vn--)}o(Ye,"H");function rt(e,t){Vn++,Xo[Vn]=e.current,e.current=t}o(rt,"I");var cn={},pt={current:cn},kt={current:!1},dn=cn;function En(e,t){var n=e.type.contextTypes;if(!n)return cn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},f;for(f in n)s[f]=t[f];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}o(En,"Cf");function _t(e){return e=e.childContextTypes,e!=null}o(_t,"L");function no(){Ye(kt),Ye(pt)}o(no,"Df");function pl(e,t,n){if(pt.current!==cn)throw Error(h(168));rt(pt,t),rt(kt,n)}o(pl,"Ef");function hl(e,t,n){var i=e.stateNode;if(e=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(h(108,Wt(t)||"Unknown",s));return L({},n,{},i)}o(hl,"Ff");function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,dn=pt.current,rt(pt,e),rt(kt,kt.current),!0}o(ro,"Gf");function gl(e,t,n){var i=e.stateNode;if(!i)throw Error(h(169));n?(e=hl(e,t,dn),i.__reactInternalMemoizedMergedChildContext=e,Ye(kt),Ye(pt),rt(pt,e)):Ye(kt),rt(kt,n)}o(gl,"Hf");var $s=C.unstable_runWithPriority,Jo=C.unstable_scheduleCallback,ei=C.unstable_cancelCallback,vl=C.unstable_requestPaint,ti=C.unstable_now,ni=C.unstable_getCurrentPriorityLevel,$n=C.unstable_ImmediatePriority,oo=C.unstable_UserBlockingPriority,io=C.unstable_NormalPriority,lo=C.unstable_LowPriority,so=C.unstable_IdlePriority,ao={},bn=C.unstable_shouldYield,ri=vl!==void 0?vl:function(){},Mt=null,Bn=null,gr=!1,uo=ti(),Tt=1e4>uo?ti:function(){return ti()-uo};function r(){switch(ni()){case $n:return 99;case oo:return 98;case io:return 97;case lo:return 96;case so:return 95;default:throw Error(h(332))}}o(r,"ag");function a(e){switch(e){case 99:return $n;case 98:return oo;case 97:return io;case 96:return lo;case 95:return so;default:throw Error(h(332))}}o(a,"bg");function u(e,t){return e=a(e),$s(e,t)}o(u,"cg");function d(e,t,n){return e=a(e),Jo(e,t,n)}o(d,"dg");function c(e){return Mt===null?(Mt=[e],Bn=Jo($n,v)):Mt.push(e),ao}o(c,"eg");function p(){if(Bn!==null){var e=Bn;Bn=null,ei(e)}v()}o(p,"gg");function v(){if(!gr&&Mt!==null){gr=!0;var e=0;try{var t=Mt;u(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Mt=null}catch(n){throw Mt!==null&&(Mt=Mt.slice(e+1)),Jo($n,p),n}finally{gr=!1}}}o(v,"fg");function y(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}o(y,"hg");function w(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}o(w,"ig");var k={current:null},z=null,Z=null,te=null;function ie(){te=Z=z=null}o(ie,"ng");function q(e){var t=k.current;Ye(k),e.type._context._currentValue=t}o(q,"og");function Ce(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}o(Ce,"pg");function se(e,t){z=e,te=Z=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(mn=!0),e.firstContext=null)}o(se,"qg");function Ee(e,t){if(te!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(te=e,t=1073741823),t={context:e,observedBits:t,next:null},Z===null){if(z===null)throw Error(h(308));Z=t,z.dependencies={expirationTime:0,firstContext:t,responders:null}}else Z=Z.next=t;return e._currentValue}o(Ee,"sg");var ve=!1;function fe(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}o(fe,"ug");function ke(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}o(ke,"vg");function qe(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}o(qe,"wg");function et(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}o(et,"xg");function ut(e,t){var n=e.alternate;n!==null&&ke(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}o(ut,"yg");function dt(e,t,n,i){var s=e.updateQueue;ve=!1;var f=s.baseQueue,m=s.shared.pending;if(m!==null){if(f!==null){var g=f.next;f.next=m.next,m.next=g}f=m,s.shared.pending=null,g=e.alternate,g!==null&&(g=g.updateQueue,g!==null&&(g.baseQueue=m))}if(f!==null){g=f.next;var T=s.baseState,S=0,re=null,ae=null,Ie=null;if(g!==null){var Ze=g;do{if(m=Ze.expirationTime,m<i){var Zt={expirationTime:Ze.expirationTime,suspenseConfig:Ze.suspenseConfig,tag:Ze.tag,payload:Ze.payload,callback:Ze.callback,next:null};Ie===null?(ae=Ie=Zt,re=T):Ie=Ie.next=Zt,m>S&&(S=m)}else{Ie!==null&&(Ie=Ie.next={expirationTime:1073741823,suspenseConfig:Ze.suspenseConfig,tag:Ze.tag,payload:Ze.payload,callback:Ze.callback,next:null}),Eu(m,Ze.suspenseConfig);e:{var yt=e,b=Ze;switch(m=t,Zt=n,b.tag){case 1:if(yt=b.payload,typeof yt=="function"){T=yt.call(Zt,T,m);break e}T=yt;break e;case 3:yt.effectTag=yt.effectTag&-4097|64;case 0:if(yt=b.payload,m=typeof yt=="function"?yt.call(Zt,T,m):yt,m==null)break e;T=L({},T,m);break e;case 2:ve=!0}}Ze.callback!==null&&(e.effectTag|=32,m=s.effects,m===null?s.effects=[Ze]:m.push(Ze))}if(Ze=Ze.next,Ze===null||Ze===g){if(m=s.shared.pending,m===null)break;Ze=f.next=m.next,m.next=g,s.baseQueue=f=m,s.shared.pending=null}}while(!0)}Ie===null?re=T:Ie.next=ae,s.baseState=re,s.baseQueue=Ie,jl(S),e.expirationTime=S,e.memoizedState=T}}o(dt,"zg");function Xt(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=s,s=n,typeof i!="function")throw Error(h(191,i));i.call(s)}}}o(Xt,"Cg");var ot=It.ReactCurrentBatchConfig,ye=new V.Component().refs;function Ge(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}o(Ge,"Fg");var Be={isMounted:o(function(e){return(e=e._reactInternalFiber)?nn(e)===e:!1},"isMounted"),enqueueSetState:o(function(e,t,n){e=e._reactInternalFiber;var i=hn(),s=ot.suspense;i=Er(i,e,s),s=qe(i,s),s.payload=t,n!=null&&(s.callback=n),et(e,s),Zn(e,i)},"enqueueSetState"),enqueueReplaceState:o(function(e,t,n){e=e._reactInternalFiber;var i=hn(),s=ot.suspense;i=Er(i,e,s),s=qe(i,s),s.tag=1,s.payload=t,n!=null&&(s.callback=n),et(e,s),Zn(e,i)},"enqueueReplaceState"),enqueueForceUpdate:o(function(e,t){e=e._reactInternalFiber;var n=hn(),i=ot.suspense;n=Er(n,e,i),i=qe(n,i),i.tag=2,t!=null&&(i.callback=t),et(e,i),Zn(e,n)},"enqueueForceUpdate")};function Ht(e,t,n,i,s,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,f,m):t.prototype&&t.prototype.isPureReactComponent?!pr(n,i)||!pr(s,f):!0}o(Ht,"Kg");function oi(e,t,n){var i=!1,s=cn,f=t.contextType;return typeof f=="object"&&f!==null?f=Ee(f):(s=_t(t)?dn:pt.current,i=t.contextTypes,f=(i=i!=null)?En(e,s):cn),t=new t(n,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Be,e.stateNode=t,t._reactInternalFiber=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=f),t}o(oi,"Lg");function Cl(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Be.enqueueReplaceState(t,t.state,null)}o(Cl,"Mg");function Bs(e,t,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=ye,fe(e);var f=t.contextType;typeof f=="object"&&f!==null?s.context=Ee(f):(f=_t(t)?dn:pt.current,s.context=En(e,f)),dt(e,n,s,i),s.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(Ge(e,t,f,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Be.enqueueReplaceState(s,s.state,null),dt(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.effectTag|=4)}o(Bs,"Ng");var yl=Array.isArray;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var i=n.stateNode}if(!i)throw Error(h(147,e));var s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=o(function(f){var m=i.refs;m===ye&&(m=i.refs={}),f===null?delete m[s]:m[s]=f},"b"),t._stringRef=s,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}o(ii,"Pg");function wl(e,t){if(e.type!=="textarea")throw Error(h(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}o(wl,"Qg");function Pa(e){function t(b,E){if(e){var N=b.lastEffect;N!==null?(N.nextEffect=E,b.lastEffect=E):b.firstEffect=b.lastEffect=E,E.nextEffect=null,E.effectTag=8}}o(t,"b");function n(b,E){if(!e)return null;for(;E!==null;)t(b,E),E=E.sibling;return null}o(n,"c");function i(b,E){for(b=new Map;E!==null;)E.key!==null?b.set(E.key,E):b.set(E.index,E),E=E.sibling;return b}o(i,"d");function s(b,E){return b=Mr(b,E),b.index=0,b.sibling=null,b}o(s,"e");function f(b,E,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<E?(b.effectTag=2,E):N):(b.effectTag=2,E)):E}o(f,"f");function m(b){return e&&b.alternate===null&&(b.effectTag=2),b}o(m,"g");function g(b,E,N,W){return E===null||E.tag!==6?(E=Ea(N,b.mode,W),E.return=b,E):(E=s(E,N),E.return=b,E)}o(g,"h");function T(b,E,N,W){return E!==null&&E.elementType===N.type?(W=s(E,N.props),W.ref=ii(b,E,N),W.return=b,W):(W=Ul(N.type,N.key,N.props,null,b.mode,W),W.ref=ii(b,E,N),W.return=b,W)}o(T,"k");function S(b,E,N,W){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=ba(N,b.mode,W),E.return=b,E):(E=s(E,N.children||[]),E.return=b,E)}o(S,"l");function re(b,E,N,W,J){return E===null||E.tag!==7?(E=Wn(N,b.mode,W,J),E.return=b,E):(E=s(E,N),E.return=b,E)}o(re,"m");function ae(b,E,N){if(typeof E=="string"||typeof E=="number")return E=Ea(""+E,b.mode,N),E.return=b,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sr:return N=Ul(E.type,E.key,E.props,null,b.mode,N),N.ref=ii(b,null,E),N.return=b,N;case vn:return E=ba(E,b.mode,N),E.return=b,E}if(yl(E)||Kn(E))return E=Wn(E,b.mode,N,null),E.return=b,E;wl(b,E)}return null}o(ae,"p");function Ie(b,E,N,W){var J=E!==null?E.key:null;if(typeof N=="string"||typeof N=="number")return J!==null?null:g(b,E,""+N,W);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Sr:return N.key===J?N.type===Tn?re(b,E,N.props.children,W,J):T(b,E,N,W):null;case vn:return N.key===J?S(b,E,N,W):null}if(yl(N)||Kn(N))return J!==null?null:re(b,E,N,W,null);wl(b,N)}return null}o(Ie,"x");function Ze(b,E,N,W,J){if(typeof W=="string"||typeof W=="number")return b=b.get(N)||null,g(E,b,""+W,J);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Sr:return b=b.get(W.key===null?N:W.key)||null,W.type===Tn?re(E,b,W.props.children,J,W.key):T(E,b,W,J);case vn:return b=b.get(W.key===null?N:W.key)||null,S(E,b,W,J)}if(yl(W)||Kn(W))return b=b.get(N)||null,re(E,b,W,J,null);wl(E,W)}return null}o(Ze,"z");function Zt(b,E,N,W){for(var J=null,ue=null,be=E,ze=E=0,it=null;be!==null&&ze<N.length;ze++){be.index>ze?(it=be,be=null):it=be.sibling;var Re=Ie(b,be,N[ze],W);if(Re===null){be===null&&(be=it);break}e&&be&&Re.alternate===null&&t(b,be),E=f(Re,E,ze),ue===null?J=Re:ue.sibling=Re,ue=Re,be=it}if(ze===N.length)return n(b,be),J;if(be===null){for(;ze<N.length;ze++)be=ae(b,N[ze],W),be!==null&&(E=f(be,E,ze),ue===null?J=be:ue.sibling=be,ue=be);return J}for(be=i(b,be);ze<N.length;ze++)it=Ze(be,b,ze,N[ze],W),it!==null&&(e&&it.alternate!==null&&be.delete(it.key===null?ze:it.key),E=f(it,E,ze),ue===null?J=it:ue.sibling=it,ue=it);return e&&be.forEach(function(qn){return t(b,qn)}),J}o(Zt,"ca");function yt(b,E,N,W){var J=Kn(N);if(typeof J!="function")throw Error(h(150));if(N=J.call(N),N==null)throw Error(h(151));for(var ue=J=null,be=E,ze=E=0,it=null,Re=N.next();be!==null&&!Re.done;ze++,Re=N.next()){be.index>ze?(it=be,be=null):it=be.sibling;var qn=Ie(b,be,Re.value,W);if(qn===null){be===null&&(be=it);break}e&&be&&qn.alternate===null&&t(b,be),E=f(qn,E,ze),ue===null?J=qn:ue.sibling=qn,ue=qn,be=it}if(Re.done)return n(b,be),J;if(be===null){for(;!Re.done;ze++,Re=N.next())Re=ae(b,Re.value,W),Re!==null&&(E=f(Re,E,ze),ue===null?J=Re:ue.sibling=Re,ue=Re);return J}for(be=i(b,be);!Re.done;ze++,Re=N.next())Re=Ze(be,b,ze,Re.value,W),Re!==null&&(e&&Re.alternate!==null&&be.delete(Re.key===null?ze:Re.key),E=f(Re,E,ze),ue===null?J=Re:ue.sibling=Re,ue=Re);return e&&be.forEach(function(oc){return t(b,oc)}),J}return o(yt,"D"),function(b,E,N,W){var J=typeof N=="object"&&N!==null&&N.type===Tn&&N.key===null;J&&(N=N.props.children);var ue=typeof N=="object"&&N!==null;if(ue)switch(N.$$typeof){case Sr:e:{for(ue=N.key,J=E;J!==null;){if(J.key===ue){switch(J.tag){case 7:if(N.type===Tn){n(b,J.sibling),E=s(J,N.props.children),E.return=b,b=E;break e}break;default:if(J.elementType===N.type){n(b,J.sibling),E=s(J,N.props),E.ref=ii(b,J,N),E.return=b,b=E;break e}}n(b,J);break}else t(b,J);J=J.sibling}N.type===Tn?(E=Wn(N.props.children,b.mode,W,N.key),E.return=b,b=E):(W=Ul(N.type,N.key,N.props,null,b.mode,W),W.ref=ii(b,E,N),W.return=b,b=W)}return m(b);case vn:e:{for(J=N.key;E!==null;){if(E.key===J)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){n(b,E.sibling),E=s(E,N.children||[]),E.return=b,b=E;break e}else{n(b,E);break}else t(b,E);E=E.sibling}E=ba(N,b.mode,W),E.return=b,b=E}return m(b)}if(typeof N=="string"||typeof N=="number")return N=""+N,E!==null&&E.tag===6?(n(b,E.sibling),E=s(E,N),E.return=b,b=E):(n(b,E),E=Ea(N,b.mode,W),E.return=b,b=E),m(b);if(yl(N))return Zt(b,E,N,W);if(Kn(N))return yt(b,E,N,W);if(ue&&wl(b,N),typeof N=="undefined"&&!J)switch(b.tag){case 1:case 0:throw b=b.type,Error(h(152,b.displayName||b.name||"Component"))}return n(b,E)}}o(Pa,"Rg");var co=Pa(!0),zs=Pa(!1),li={},fn={current:li},si={current:li},ai={current:li};function vr(e){if(e===li)throw Error(h(174));return e}o(vr,"ch");function js(e,t){switch(rt(ai,t),rt(si,e),rt(fn,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}Ye(fn),rt(fn,t)}o(js,"dh");function fo(){Ye(fn),Ye(si),Ye(ai)}o(fo,"eh");function Oa(e){vr(ai.current);var t=vr(fn.current),n=Li(t,e.type);t!==n&&(rt(si,e),rt(fn,n))}o(Oa,"fh");function Us(e){si.current===e&&(Ye(fn),Ye(si))}o(Us,"gh");var st={current:0};function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Wi||n.data===Wr))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}o(xl,"hh");function Zs(e,t){return{responder:e,props:t}}o(Zs,"ih");var El=It.ReactCurrentDispatcher,Ut=It.ReactCurrentBatchConfig,zn=0,ft=null,St=null,Lt=null,bl=!1;function Ft(){throw Error(h(321))}o(Ft,"Q");function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}o(Ws,"nh");function qs(e,t,n,i,s,f){if(zn=f,ft=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,El.current=e===null||e.memoizedState===null?Ru:Pu,e=n(i,s),t.expirationTime===zn){f=0;do{if(t.expirationTime=0,!(25>f))throw Error(h(301));f+=1,Lt=St=null,t.updateQueue=null,El.current=Ou,e=n(i,s)}while(t.expirationTime===zn)}if(El.current=Sl,t=St!==null&&St.next!==null,zn=0,Lt=St=ft=null,bl=!1,t)throw Error(h(300));return e}o(qs,"oh");function mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=e:Lt=Lt.next=e,Lt}o(mo,"th");function po(){if(St===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Lt===null?ft.memoizedState:Lt.next;if(t!==null)Lt=t,St=e;else{if(e===null)throw Error(h(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Lt===null?ft.memoizedState=Lt=e:Lt=Lt.next=e}return Lt}o(po,"uh");function Cr(e,t){return typeof t=="function"?t(e):t}o(Cr,"vh");function kl(e){var t=po(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var i=St,s=i.baseQueue,f=n.pending;if(f!==null){if(s!==null){var m=s.next;s.next=f.next,f.next=m}i.baseQueue=s=f,n.pending=null}if(s!==null){s=s.next,i=i.baseState;var g=m=f=null,T=s;do{var S=T.expirationTime;if(S<zn){var re={expirationTime:T.expirationTime,suspenseConfig:T.suspenseConfig,action:T.action,eagerReducer:T.eagerReducer,eagerState:T.eagerState,next:null};g===null?(m=g=re,f=i):g=g.next=re,S>ft.expirationTime&&(ft.expirationTime=S,jl(S))}else g!==null&&(g=g.next={expirationTime:1073741823,suspenseConfig:T.suspenseConfig,action:T.action,eagerReducer:T.eagerReducer,eagerState:T.eagerState,next:null}),Eu(S,T.suspenseConfig),i=T.eagerReducer===e?T.eagerState:e(i,T.action);T=T.next}while(T!==null&&T!==s);g===null?f=i:g.next=m,Gt(i,t.memoizedState)||(mn=!0),t.memoizedState=i,t.baseState=f,t.baseQueue=g,n.lastRenderedState=i}return[t.memoizedState,n.dispatch]}o(kl,"wh");function _l(e){var t=po(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,f=t.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do f=e(f,m.action),m=m.next;while(m!==s);Gt(f,t.memoizedState)||(mn=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,i]}o(_l,"xh");function Qs(e){var t=mo();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},e=e.dispatch=Ba.bind(null,ft,e),[t.memoizedState,e]}o(Qs,"yh");function Ks(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ft.updateQueue,t===null?(t={lastEffect:null},ft.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}o(Ks,"Ah");function Da(){return po().memoizedState}o(Da,"Bh");function Ys(e,t,n,i){var s=mo();ft.effectTag|=e,s.memoizedState=Ks(1|t,n,void 0,i===void 0?null:i)}o(Ys,"Ch");function Gs(e,t,n,i){var s=po();i=i===void 0?null:i;var f=void 0;if(St!==null){var m=St.memoizedState;if(f=m.destroy,i!==null&&Ws(i,m.deps)){Ks(t,n,f,i);return}}ft.effectTag|=e,s.memoizedState=Ks(1|t,n,f,i)}o(Gs,"Dh");function Aa(e,t){return Ys(516,4,e,t)}o(Aa,"Eh");function Ml(e,t){return Gs(516,4,e,t)}o(Ml,"Fh");function Ia(e,t){return Gs(4,2,e,t)}o(Ia,"Gh");function Ha(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}o(Ha,"Hh");function Fa(e,t,n){return n=n!=null?n.concat([e]):null,Gs(4,2,Ha.bind(null,t,e),n)}o(Fa,"Ih");function Xs(){}o(Xs,"Jh");function Va(e,t){return mo().memoizedState=[e,t===void 0?null:t],e}o(Va,"Kh");function Tl(e,t){var n=po();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ws(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}o(Tl,"Lh");function $a(e,t){var n=po();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ws(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}o($a,"Mh");function Js(e,t,n){var i=r();u(98>i?98:i,function(){e(!0)}),u(97<i?97:i,function(){var s=Ut.suspense;Ut.suspense=t===void 0?null:t;try{e(!1),n()}finally{Ut.suspense=s}})}o(Js,"Nh");function Ba(e,t,n){var i=hn(),s=ot.suspense;i=Er(i,e,s),s={expirationTime:i,suspenseConfig:s,action:n,eagerReducer:null,eagerState:null,next:null};var f=t.pending;if(f===null?s.next=s:(s.next=f.next,f.next=s),t.pending=s,f=e.alternate,e===ft||f!==null&&f===ft)bl=!0,s.expirationTime=zn,ft.expirationTime=zn;else{if(e.expirationTime===0&&(f===null||f.expirationTime===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,g=f(m,n);if(s.eagerReducer=f,s.eagerState=g,Gt(g,m))return}catch{}finally{}Zn(e,i)}}o(Ba,"zh");var Sl={readContext:Ee,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useResponder:Ft,useDeferredValue:Ft,useTransition:Ft},Ru={readContext:Ee,useCallback:Va,useContext:Ee,useEffect:Aa,useImperativeHandle:o(function(e,t,n){return n=n!=null?n.concat([e]):null,Ys(4,2,Ha.bind(null,t,e),n)},"useImperativeHandle"),useLayoutEffect:o(function(e,t){return Ys(4,2,e,t)},"useLayoutEffect"),useMemo:o(function(e,t){var n=mo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},"useMemo"),useReducer:o(function(e,t,n){var i=mo();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e=i.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ba.bind(null,ft,e),[i.memoizedState,e]},"useReducer"),useRef:o(function(e){var t=mo();return e={current:e},t.memoizedState=e},"useRef"),useState:Qs,useDebugValue:Xs,useResponder:Zs,useDeferredValue:o(function(e,t){var n=Qs(e),i=n[0],s=n[1];return Aa(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),i},"useDeferredValue"),useTransition:o(function(e){var t=Qs(!1),n=t[0];return t=t[1],[Va(Js.bind(null,t,e),[t,e]),n]},"useTransition")},Pu={readContext:Ee,useCallback:Tl,useContext:Ee,useEffect:Ml,useImperativeHandle:Fa,useLayoutEffect:Ia,useMemo:$a,useReducer:kl,useRef:Da,useState:o(function(){return kl(Cr)},"useState"),useDebugValue:Xs,useResponder:Zs,useDeferredValue:o(function(e,t){var n=kl(Cr),i=n[0],s=n[1];return Ml(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),i},"useDeferredValue"),useTransition:o(function(e){var t=kl(Cr),n=t[0];return t=t[1],[Tl(Js.bind(null,t,e),[t,e]),n]},"useTransition")},Ou={readContext:Ee,useCallback:Tl,useContext:Ee,useEffect:Ml,useImperativeHandle:Fa,useLayoutEffect:Ia,useMemo:$a,useReducer:_l,useRef:Da,useState:o(function(){return _l(Cr)},"useState"),useDebugValue:Xs,useResponder:Zs,useDeferredValue:o(function(e,t){var n=_l(Cr),i=n[0],s=n[1];return Ml(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),i},"useDeferredValue"),useTransition:o(function(e){var t=_l(Cr),n=t[0];return t=t[1],[Tl(Js.bind(null,t,e),[t,e]),n]},"useTransition")},kn=null,jn=null,yr=!1;function za(e,t){var n=gn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}o(za,"Rh");function ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}o(ja,"Th");function ea(e){if(yr){var t=jn;if(t){var n=t;if(!ja(e,t)){if(t=On(n.nextSibling),!t||!ja(e,t)){e.effectTag=e.effectTag&-1025|2,yr=!1,kn=e;return}za(kn,n)}kn=e,jn=On(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,yr=!1,kn=e}}o(ea,"Uh");function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kn=e}o(Ua,"Vh");function Ll(e){if(e!==kn)return!1;if(!yr)return Ua(e),yr=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!wn(t,e.memoizedProps))for(t=jn;t;)za(e,t),t=On(t.nextSibling);if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Zi){if(t===0){jn=On(e.nextSibling);break e}t--}else n!==$o&&n!==Wr&&n!==Wi||t++}e=e.nextSibling}jn=null}}else jn=kn?On(e.stateNode.nextSibling):null;return!0}o(Ll,"Wh");function ta(){jn=kn=null,yr=!1}o(ta,"Xh");var Du=It.ReactCurrentOwner,mn=!1;function Vt(e,t,n,i){t.child=e===null?zs(t,null,n,i):co(t,e.child,n,i)}o(Vt,"R");function Za(e,t,n,i,s){n=n.render;var f=t.ref;return se(t,s),i=qs(e,t,n,i,f,s),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),_n(e,t,s)):(t.effectTag|=1,Vt(e,t,i,s),t.child)}o(Za,"Zh");function Wa(e,t,n,i,s,f){if(e===null){var m=n.type;return typeof m=="function"&&!xa(m)&&m.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=m,qa(e,t,m,i,s,f)):(e=Ul(n.type,null,i,null,t.mode,f),e.ref=t.ref,e.return=t,t.child=e)}return m=e.child,s<f&&(s=m.memoizedProps,n=n.compare,n=n!==null?n:pr,n(s,i)&&e.ref===t.ref)?_n(e,t,f):(t.effectTag|=1,e=Mr(m,i),e.ref=t.ref,e.return=t,t.child=e)}o(Wa,"ai");function qa(e,t,n,i,s,f){return e!==null&&pr(e.memoizedProps,i)&&e.ref===t.ref&&(mn=!1,s<f)?(t.expirationTime=e.expirationTime,_n(e,t,f)):na(e,t,n,i,f)}o(qa,"ci");function Qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}o(Qa,"ei");function na(e,t,n,i,s){var f=_t(n)?dn:pt.current;return f=En(t,f),se(t,s),n=qs(e,t,n,i,f,s),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),_n(e,t,s)):(t.effectTag|=1,Vt(e,t,n,s),t.child)}o(na,"di");function Ka(e,t,n,i,s){if(_t(n)){var f=!0;ro(t)}else f=!1;if(se(t,s),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),oi(t,n,i),Bs(t,n,i,s),i=!0;else if(e===null){var m=t.stateNode,g=t.memoizedProps;m.props=g;var T=m.context,S=n.contextType;typeof S=="object"&&S!==null?S=Ee(S):(S=_t(n)?dn:pt.current,S=En(t,S));var re=n.getDerivedStateFromProps,ae=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function";ae||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==i||T!==S)&&Cl(t,m,i,S),ve=!1;var Ie=t.memoizedState;m.state=Ie,dt(t,i,m,s),T=t.memoizedState,g!==i||Ie!==T||kt.current||ve?(typeof re=="function"&&(Ge(t,n,re,i),T=t.memoizedState),(g=ve||Ht(t,n,g,i,Ie,T,S))?(ae||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.effectTag|=4)):(typeof m.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=i,t.memoizedState=T),m.props=i,m.state=T,m.context=S,i=g):(typeof m.componentDidMount=="function"&&(t.effectTag|=4),i=!1)}else m=t.stateNode,ke(e,t),g=t.memoizedProps,m.props=t.type===t.elementType?g:w(t.type,g),T=m.context,S=n.contextType,typeof S=="object"&&S!==null?S=Ee(S):(S=_t(n)?dn:pt.current,S=En(t,S)),re=n.getDerivedStateFromProps,(ae=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==i||T!==S)&&Cl(t,m,i,S),ve=!1,T=t.memoizedState,m.state=T,dt(t,i,m,s),Ie=t.memoizedState,g!==i||T!==Ie||kt.current||ve?(typeof re=="function"&&(Ge(t,n,re,i),Ie=t.memoizedState),(re=ve||Ht(t,n,g,i,T,Ie,S))?(ae||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,Ie,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,Ie,S)),typeof m.componentDidUpdate=="function"&&(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.effectTag|=256),t.memoizedProps=i,t.memoizedState=Ie),m.props=i,m.state=Ie,m.context=S,i=re):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.effectTag|=256),i=!1);return ra(e,t,n,i,f,s)}o(Ka,"fi");function ra(e,t,n,i,s,f){Qa(e,t);var m=(t.effectTag&64)!==0;if(!i&&!m)return s&&gl(t,n,!1),_n(e,t,f);i=t.stateNode,Du.current=t;var g=m&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.effectTag|=1,e!==null&&m?(t.child=co(t,e.child,null,f),t.child=co(t,null,g,f)):Vt(e,t,g,f),t.memoizedState=i.state,s&&gl(t,n,!0),t.child}o(ra,"gi");function Ya(e){var t=e.stateNode;t.pendingContext?pl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pl(e,t.context,!1),js(e,t.containerInfo)}o(Ya,"hi");var oa={dehydrated:null,retryTime:0};function Ga(e,t,n){var i=t.mode,s=t.pendingProps,f=st.current,m=!1,g;if((g=(t.effectTag&64)!==0)||(g=(f&2)!==0&&(e===null||e.memoizedState!==null)),g?(m=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||s.fallback===void 0||s.unstable_avoidThisFallback===!0||(f|=1),rt(st,f&1),e===null){if(s.fallback!==void 0&&ea(t),m){if(m=s.fallback,s=Wn(null,i,0,null),s.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=Wn(m,i,n,null),n.return=t,s.sibling=n,t.memoizedState=oa,t.child=s,n}return i=s.children,t.memoizedState=null,t.child=zs(t,null,i,n)}if(e.memoizedState!==null){if(e=e.child,i=e.sibling,m){if(s=s.fallback,n=Mr(e,e.pendingProps),n.return=t,!(t.mode&2)&&(m=t.memoizedState!==null?t.child.child:t.child,m!==e.child))for(n.child=m;m!==null;)m.return=n,m=m.sibling;return i=Mr(i,s),i.return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=oa,t.child=n,i}return n=co(t,e.child,s.children,n),t.memoizedState=null,t.child=n}if(e=e.child,m){if(m=s.fallback,s=Wn(null,i,0,null),s.return=t,s.child=e,e!==null&&(e.return=s),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=Wn(m,i,n,null),n.return=t,s.sibling=n,n.effectTag|=2,s.childExpirationTime=0,t.memoizedState=oa,t.child=s,n}return t.memoizedState=null,t.child=co(t,e,s.children,n)}o(Ga,"ji");function Xa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Ce(e.return,t)}o(Xa,"ki");function ia(e,t,n,i,s,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailExpiration:0,tailMode:s,lastEffect:f}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailExpiration=0,m.tailMode=s,m.lastEffect=f)}o(ia,"li");function Ja(e,t,n){var i=t.pendingProps,s=i.revealOrder,f=i.tail;if(Vt(e,t,i.children,n),i=st.current,i&2)i=i&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n);else if(e.tag===19)Xa(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(rt(st,i),!(t.mode&2))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ia(t,!1,s,n,f,t.lastEffect);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&xl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ia(t,!0,n,null,f,t.lastEffect);break;case"together":ia(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}o(Ja,"mi");function _n(e,t,n){e!==null&&(t.dependencies=e.dependencies);var i=t.expirationTime;if(i!==0&&jl(i),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}o(_n,"$h");var eu,la,tu,nu;eu=o(function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},"ni"),la=o(function(){},"oi"),tu=o(function(e,t,n,i,s){var f=e.memoizedProps;if(f!==i){var m=t.stateNode;switch(vr(fn.current),e=null,n){case"input":f=bi(m,f),i=bi(m,i),e=[];break;case"option":f=Mi(m,f),i=Mi(m,i),e=[];break;case"select":f=L({},f,{value:void 0}),i=L({},i,{value:void 0}),e=[];break;case"textarea":f=ko(m,f),i=ko(m,i),e=[];break;default:typeof f.onClick!="function"&&typeof i.onClick=="function"&&(m.onclick=Ur)}Ao(n,i);var g,T;n=null;for(g in f)if(!i.hasOwnProperty(g)&&f.hasOwnProperty(g)&&f[g]!=null)if(g==="style")for(T in m=f[g],m)m.hasOwnProperty(T)&&(n||(n={}),n[T]="");else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(F.hasOwnProperty(g)?e||(e=[]):(e=e||[]).push(g,null));for(g in i){var S=i[g];if(m=f!=null?f[g]:void 0,i.hasOwnProperty(g)&&S!==m&&(S!=null||m!=null))if(g==="style")if(m){for(T in m)!m.hasOwnProperty(T)||S&&S.hasOwnProperty(T)||(n||(n={}),n[T]="");for(T in S)S.hasOwnProperty(T)&&m[T]!==S[T]&&(n||(n={}),n[T]=S[T])}else n||(e||(e=[]),e.push(g,n)),n=S;else g==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,m=m?m.__html:void 0,S!=null&&m!==S&&(e=e||[]).push(g,S)):g==="children"?m===S||typeof S!="string"&&typeof S!="number"||(e=e||[]).push(g,""+S):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(F.hasOwnProperty(g)?(S!=null&&Kt(s,g),e||m===S||(e=[])):(e=e||[]).push(g,S))}n&&(e=e||[]).push("style",n),s=e,(t.updateQueue=s)&&(t.effectTag|=4)}},"pi"),nu=o(function(e,t,n,i){n!==i&&(t.effectTag|=4)},"qi");function Nl(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}o(Nl,"ri");function Au(e,t,n){var i=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return _t(t.type)&&no(),null;case 3:return fo(),Ye(kt),Ye(pt),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Ll(t)||(t.effectTag|=4),la(t),null;case 5:Us(t),n=vr(ai.current);var s=t.type;if(e!==null&&t.stateNode!=null)tu(e,t,s,i,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!i){if(t.stateNode===null)throw Error(h(166));return null}if(e=vr(fn.current),Ll(t)){i=t.stateNode,s=t.type;var f=t.memoizedProps;switch(i[sn]=t,i[Qr]=f,s){case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(e=0;e<Ln.length;e++)Je(Ln[e],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"form":Je("reset",i),Je("submit",i);break;case"details":Je("toggle",i);break;case"input":Eo(i,f),Je("invalid",i),Kt(n,"onChange");break;case"select":i._wrapperState={wasMultiple:!!f.multiple},Je("invalid",i),Kt(n,"onChange");break;case"textarea":Xl(i,f),Je("invalid",i),Kt(n,"onChange")}Ao(s,f),e=null;for(var m in f)if(f.hasOwnProperty(m)){var g=f[m];m==="children"?typeof g=="string"?i.textContent!==g&&(e=["children",g]):typeof g=="number"&&i.textContent!==""+g&&(e=["children",""+g]):F.hasOwnProperty(m)&&g!=null&&Kt(n,m)}switch(s){case"input":wo(i),nt(i,f,!0);break;case"textarea":wo(i),Nr(i);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(i.onclick=Ur)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(m=n.nodeType===9?n:n.ownerDocument,e===ji&&(e=Si(s)),e===ji?s==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(s,{is:i.is}):(e=m.createElement(s),s==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,s),e[sn]=t,e[Qr]=i,eu(e,t,!1,!1),t.stateNode=e,m=jr(s,i),s){case"iframe":case"object":case"embed":Je("load",e),g=i;break;case"video":case"audio":for(g=0;g<Ln.length;g++)Je(Ln[g],e);g=i;break;case"source":Je("error",e),g=i;break;case"img":case"image":case"link":Je("error",e),Je("load",e),g=i;break;case"form":Je("reset",e),Je("submit",e),g=i;break;case"details":Je("toggle",e),g=i;break;case"input":Eo(e,i),g=bi(e,i),Je("invalid",e),Kt(n,"onChange");break;case"option":g=Mi(e,i);break;case"select":e._wrapperState={wasMultiple:!!i.multiple},g=L({},i,{value:void 0}),Je("invalid",e),Kt(n,"onChange");break;case"textarea":Xl(e,i),g=ko(e,i),Je("invalid",e),Kt(n,"onChange");break;default:g=i}Ao(s,g);var T=g;for(f in T)if(T.hasOwnProperty(f)){var S=T[f];f==="style"?zi(e,S):f==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Jl(e,S)):f==="children"?typeof S=="string"?(s!=="textarea"||S!=="")&&tn(e,S):typeof S=="number"&&tn(e,""+S):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(F.hasOwnProperty(f)?S!=null&&Kt(n,f):S!=null&&gi(e,f,S,m))}switch(s){case"input":wo(e),nt(e,i,!1);break;case"textarea":wo(e),Nr(e);break;case"option":i.value!=null&&e.setAttribute("value",""+en(i.value));break;case"select":e.multiple=!!i.multiple,n=i.value,n!=null?Yn(e,!!i.multiple,n,!1):i.defaultValue!=null&&Yn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof g.onClick=="function"&&(e.onclick=Ur)}as(s,i)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(h(166));n=vr(ai.current),vr(fn.current),Ll(t)?(n=t.stateNode,i=t.memoizedProps,n[sn]=t,n.nodeValue!==i&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),n[sn]=t,t.stateNode=n)}return null;case 13:return Ye(st),i=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=i!==null,i=!1,e===null?t.memoizedProps.fallback!==void 0&&Ll(t):(s=e.memoizedState,i=s!==null,n||s===null||(s=e.child.sibling,s!==null&&(f=t.firstEffect,f!==null?(t.firstEffect=s,s.nextEffect=f):(t.firstEffect=t.lastEffect=s,s.nextEffect=null),s.effectTag=8))),n&&!i&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||st.current&1?gt===wr&&(gt=Ol):((gt===wr||gt===Ol)&&(gt=Dl),ci!==0&&$t!==null&&(Tr($t,At),Su($t,ci)))),(n||i)&&(t.effectTag|=4),null);case 4:return fo(),la(t),null;case 10:return q(t),null;case 17:return _t(t.type)&&no(),null;case 19:if(Ye(st),i=t.memoizedState,i===null)return null;if(s=(t.effectTag&64)!==0,f=i.rendering,f===null){if(s)Nl(i,!1);else if(gt!==wr||e!==null&&e.effectTag&64)for(f=t.child;f!==null;){if(e=xl(f),e!==null){for(t.effectTag|=64,Nl(i,!1),s=e.updateQueue,s!==null&&(t.updateQueue=s,t.effectTag|=4),i.lastEffect===null&&(t.firstEffect=null),t.lastEffect=i.lastEffect,i=t.child;i!==null;)s=i,f=n,s.effectTag&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,e=s.alternate,e===null?(s.childExpirationTime=0,s.expirationTime=f,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null):(s.childExpirationTime=e.childExpirationTime,s.expirationTime=e.expirationTime,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,f=e.dependencies,s.dependencies=f===null?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),i=i.sibling;return rt(st,st.current&1|2),t.child}f=f.sibling}}else{if(!s)if(e=xl(f),e!==null){if(t.effectTag|=64,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Nl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!f.alternate)return t=t.lastEffect=i.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Tt()-i.renderingStartTime>i.tailExpiration&&1<n&&(t.effectTag|=64,s=!0,Nl(i,!1),t.expirationTime=t.childExpirationTime=n-1);i.isBackwards?(f.sibling=t.child,t.child=f):(n=i.last,n!==null?n.sibling=f:t.child=f,i.last=f)}return i.tail!==null?(i.tailExpiration===0&&(i.tailExpiration=Tt()+500),n=i.tail,i.rendering=n,i.tail=n.sibling,i.lastEffect=t.lastEffect,i.renderingStartTime=Tt(),n.sibling=null,t=st.current,rt(st,s?t&1|2:t&1),n):null}throw Error(h(156,t.tag))}o(Au,"si");function Iu(e){switch(e.tag){case 1:_t(e.type)&&no();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(fo(),Ye(kt),Ye(pt),t=e.effectTag,t&64)throw Error(h(285));return e.effectTag=t&-4097|64,e;case 5:return Us(e),null;case 13:return Ye(st),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return Ye(st),null;case 4:return fo(),null;case 10:return q(e),null;default:return null}}o(Iu,"zi");function sa(e,t){return{value:e,source:t,stack:Co(t)}}o(sa,"Ai");var Hu=typeof WeakSet=="function"?WeakSet:Set;function aa(e,t){var n=t.source,i=t.stack;i===null&&n!==null&&(i=Co(n)),n!==null&&Wt(n.type),t=t.value,e!==null&&e.tag===1&&Wt(e.type);try{console.error(t)}catch(s){setTimeout(function(){throw s})}}o(aa,"Ci");function Fu(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){_r(e,n)}}o(Fu,"Di");function ru(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){_r(e,n)}else t.current=null}o(ru,"Fi");function Vu(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,i=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:w(t.type,n),i),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(h(163))}o(Vu,"Gi");function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&i()}n=n.next}while(n!==t)}}o(ou,"Hi");function iu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}o(iu,"Ii");function $u(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:iu(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:w(n.type,t.memoizedProps);e.componentDidUpdate(i,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&Xt(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Xt(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&as(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Vr(n))));return;case 19:case 17:case 20:case 21:return}throw Error(h(163))}o($u,"Ji");function lu(e,t,n){switch(typeof wa=="function"&&wa(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var i=e.next;u(97<n?97:n,function(){var s=i;do{var f=s.destroy;if(f!==void 0){var m=t;try{f()}catch(g){_r(m,g)}}s=s.next}while(s!==i)})}break;case 1:ru(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Fu(t,n);break;case 5:ru(t);break;case 4:cu(e,t,n)}}o(lu,"Ki");function su(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&su(t)}o(su,"Ni");function au(e){return e.tag===5||e.tag===3||e.tag===4}o(au,"Oi");function uu(e){e:{for(var t=e.return;t!==null;){if(au(t)){var n=t;break e}t=t.return}throw Error(h(160))}switch(t=n.stateNode,n.tag){case 5:var i=!1;break;case 3:t=t.containerInfo,i=!0;break;case 4:t=t.containerInfo,i=!0;break;default:throw Error(h(161))}n.effectTag&16&&(tn(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||au(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}i?ua(e,n,t):ca(e,n,t)}o(uu,"Pi");function ua(e,t,n){var i=e.tag,s=i===5||i===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(i!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}o(ua,"Qi");function ca(e,t,n){var i=e.tag,s=i===5||i===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}o(ca,"Ri");function cu(e,t,n){for(var i=t,s=!1,f,m;;){if(!s){s=i.return;e:for(;;){if(s===null)throw Error(h(160));switch(f=s.stateNode,s.tag){case 5:m=!1;break e;case 3:f=f.containerInfo,m=!0;break e;case 4:f=f.containerInfo,m=!0;break e}s=s.return}s=!0}if(i.tag===5||i.tag===6){e:for(var g=e,T=i,S=n,re=T;;)if(lu(g,re,S),re.child!==null&&re.tag!==4)re.child.return=re,re=re.child;else{if(re===T)break e;for(;re.sibling===null;){if(re.return===null||re.return===T)break e;re=re.return}re.sibling.return=re.return,re=re.sibling}m?(g=f,T=i.stateNode,g.nodeType===8?g.parentNode.removeChild(T):g.removeChild(T)):f.removeChild(i.stateNode)}else if(i.tag===4){if(i.child!==null){f=i.stateNode.containerInfo,m=!0,i.child.return=i,i=i.child;continue}}else if(lu(e,i,n),i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return,i.tag===4&&(s=!1)}i.sibling.return=i.return,i=i.sibling}}o(cu,"Mi");function da(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:ou(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var i=t.memoizedProps,s=e!==null?e.memoizedProps:i;e=t.type;var f=t.updateQueue;if(t.updateQueue=null,f!==null){for(n[Qr]=i,e==="input"&&i.type==="radio"&&i.name!=null&&ki(n,i),jr(e,s),t=jr(e,i),s=0;s<f.length;s+=2){var m=f[s],g=f[s+1];m==="style"?zi(n,g):m==="dangerouslySetInnerHTML"?Jl(n,g):m==="children"?tn(n,g):gi(n,m,g,t)}switch(e){case"input":bo(n,i);break;case"textarea":_o(n,i);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,e=i.value,e!=null?Yn(n,!!i.multiple,e,!1):t!==!!i.multiple&&(i.defaultValue!=null?Yn(n,!!i.multiple,i.defaultValue,!0):Yn(n,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(h(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Vr(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?i=!1:(i=!0,n=t.child,pa=Tt()),n!==null)e:for(e=n;;){if(e.tag===5)f=e.stateNode,i?(f=f.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(f=e.stateNode,s=e.memoizedProps.style,s=s!=null&&s.hasOwnProperty("display")?s.display:null,f.style.display=rr("display",s));else if(e.tag===6)e.stateNode.nodeValue=i?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){f=e.child.sibling,f.return=e,e=f;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}du(t);return;case 19:du(t);return;case 17:return}throw Error(h(163))}o(da,"Si");function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hu),t.forEach(function(i){var s=Yu.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}o(du,"Ui");var Bu=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,n){n=qe(n,null),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Fl||(Fl=!0,ha=i),aa(e,t)},n}o(fu,"Xi");function mu(e,t,n){n=qe(n,null),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;n.payload=function(){return aa(e,t),i(s)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(n.callback=function(){typeof i!="function"&&(Un===null?Un=new Set([this]):Un.add(this),aa(e,t));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}o(mu,"$i");var zu=Math.ceil,Rl=It.ReactCurrentDispatcher,pu=It.ReactCurrentOwner,ht=0,fa=8,Jt=16,pn=32,wr=0,Pl=1,hu=2,Ol=3,Dl=4,ma=5,Me=ht,$t=null,Ne=null,At=0,gt=wr,Al=null,Mn=1073741823,ui=1073741823,Il=null,ci=0,Hl=!1,pa=0,gu=500,me=null,Fl=!1,ha=null,Un=null,Vl=!1,di=null,fi=90,xr=null,mi=0,ga=null,$l=0;function hn(){return(Me&(Jt|pn))!==ht?1073741821-(Tt()/10|0):$l!==0?$l:$l=1073741821-(Tt()/10|0)}o(hn,"Gg");function Er(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var i=r();if(!(t&4))return i===99?1073741823:1073741822;if((Me&Jt)!==ht)return At;if(n!==null)e=y(e,n.timeoutMs|0||5e3,250);else switch(i){case 99:e=1073741823;break;case 98:e=y(e,150,100);break;case 97:case 96:e=y(e,5e3,250);break;case 95:e=2;break;default:throw Error(h(326))}return $t!==null&&e===At&&--e,e}o(Er,"Hg");function Zn(e,t){if(50<mi)throw mi=0,ga=null,Error(h(185));if(e=Bl(e,t),e!==null){var n=r();t===1073741823?(Me&fa)!==ht&&(Me&(Jt|pn))===ht?va(e):(Bt(e),Me===ht&&p()):Bt(e),(Me&4)===ht||n!==98&&n!==99||(xr===null?xr=new Map([[e,t]]):(n=xr.get(e),(n===void 0||n>t)&&xr.set(e,t)))}}o(Zn,"Ig");function Bl(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var i=e.return,s=null;if(i===null&&e.tag===3)s=e.stateNode;else for(;i!==null;){if(n=i.alternate,i.childExpirationTime<t&&(i.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),i.return===null&&i.tag===3){s=i.stateNode;break}i=i.return}return s!==null&&($t===s&&(jl(t),gt===Dl&&Tr(s,At)),Su(s,t)),s}o(Bl,"xj");function zl(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!Tu(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}o(zl,"zj");function Bt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=c(va.bind(null,e));else{var t=zl(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var i=hn();if(t===1073741823?i=99:t===1||t===2?i=95:(i=10*(1073741821-t)-10*(1073741821-i),i=0>=i?99:250>=i?98:5250>=i?97:95),n!==null){var s=e.callbackPriority;if(e.callbackExpirationTime===t&&s>=i)return;n!==ao&&ei(n)}e.callbackExpirationTime=t,e.callbackPriority=i,t=t===1073741823?c(va.bind(null,e)):d(i,vu.bind(null,e),{timeout:10*(1073741821-t)-Tt()}),e.callbackNode=t}}}o(Bt,"Z");function vu(e,t){if($l=0,t)return t=hn(),ka(e,t),Bt(e),null;var n=zl(e);if(n!==0){if(t=e.callbackNode,(Me&(Jt|pn))!==ht)throw Error(h(327));if(ho(),e===$t&&n===At||br(e,n),Ne!==null){var i=Me;Me|=Jt;var s=xu();do try{Zu();break}catch(g){wu(e,g)}while(!0);if(ie(),Me=i,Rl.current=s,gt===Pl)throw t=Al,br(e,n),Tr(e,n),Bt(e),t;if(Ne===null)switch(s=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,i=gt,$t=null,i){case wr:case Pl:throw Error(h(345));case hu:ka(e,2<n?2:n);break;case Ol:if(Tr(e,n),i=e.lastSuspendedTime,n===i&&(e.nextKnownPendingLevel=Ca(s)),Mn===1073741823&&(s=pa+gu-Tt(),10<s)){if(Hl){var f=e.lastPingedTime;if(f===0||f>=n){e.lastPingedTime=n,br(e,n);break}}if(f=zl(e),f!==0&&f!==n)break;if(i!==0&&i!==n){e.lastPingedTime=i;break}e.timeoutHandle=or(kr.bind(null,e),s);break}kr(e);break;case Dl:if(Tr(e,n),i=e.lastSuspendedTime,n===i&&(e.nextKnownPendingLevel=Ca(s)),Hl&&(s=e.lastPingedTime,s===0||s>=n)){e.lastPingedTime=n,br(e,n);break}if(s=zl(e),s!==0&&s!==n)break;if(i!==0&&i!==n){e.lastPingedTime=i;break}if(ui!==1073741823?i=10*(1073741821-ui)-Tt():Mn===1073741823?i=0:(i=10*(1073741821-Mn)-5e3,s=Tt(),n=10*(1073741821-n)-s,i=s-i,0>i&&(i=0),i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zu(i/1960))-i,n<i&&(i=n)),10<i){e.timeoutHandle=or(kr.bind(null,e),i);break}kr(e);break;case ma:if(Mn!==1073741823&&Il!==null){f=Mn;var m=Il;if(i=m.busyMinDurationMs|0,0>=i?i=0:(s=m.busyDelayMs|0,f=Tt()-(10*(1073741821-f)-(m.timeoutMs|0||5e3)),i=f<=s?0:s+i-f),10<i){Tr(e,n),e.timeoutHandle=or(kr.bind(null,e),i);break}}kr(e);break;default:throw Error(h(329))}if(Bt(e),e.callbackNode===t)return vu.bind(null,e)}}return null}o(vu,"Bj");function va(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(Me&(Jt|pn))!==ht)throw Error(h(327));if(ho(),e===$t&&t===At||br(e,t),Ne!==null){var n=Me;Me|=Jt;var i=xu();do try{Uu();break}catch(s){wu(e,s)}while(!0);if(ie(),Me=n,Rl.current=i,gt===Pl)throw n=Al,br(e,t),Tr(e,t),Bt(e),n;if(Ne!==null)throw Error(h(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,$t=null,kr(e),Bt(e)}return null}o(va,"yj");function ju(){if(xr!==null){var e=xr;xr=null,e.forEach(function(t,n){ka(n,t),Bt(n)}),p()}}o(ju,"Lj");function Cu(e,t){var n=Me;Me|=1;try{return e(t)}finally{Me=n,Me===ht&&p()}}o(Cu,"Mj");function yu(e,t){var n=Me;Me&=-2,Me|=fa;try{return e(t)}finally{Me=n,Me===ht&&p()}}o(yu,"Nj");function br(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,us(n)),Ne!==null)for(n=Ne.return;n!==null;){var i=n;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&no();break;case 3:fo(),Ye(kt),Ye(pt);break;case 5:Us(i);break;case 4:fo();break;case 13:Ye(st);break;case 19:Ye(st);break;case 10:q(i)}n=n.return}$t=e,Ne=Mr(e.current,null),At=t,gt=wr,Al=null,ui=Mn=1073741823,Il=null,ci=0,Hl=!1}o(br,"Ej");function wu(e,t){do{try{if(ie(),El.current=Sl,bl)for(var n=ft.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}if(zn=0,Lt=St=ft=null,bl=!1,Ne===null||Ne.return===null)return gt=Pl,Al=t,Ne=null;e:{var s=e,f=Ne.return,m=Ne,g=t;if(t=At,m.effectTag|=2048,m.firstEffect=m.lastEffect=null,g!==null&&typeof g=="object"&&typeof g.then=="function"){var T=g;if(!(m.mode&2)){var S=m.alternate;S?(m.updateQueue=S.updateQueue,m.memoizedState=S.memoizedState,m.expirationTime=S.expirationTime):(m.updateQueue=null,m.memoizedState=null)}var re=(st.current&1)!==0,ae=f;do{var Ie;if(Ie=ae.tag===13){var Ze=ae.memoizedState;if(Ze!==null)Ie=Ze.dehydrated!==null;else{var Zt=ae.memoizedProps;Ie=Zt.fallback===void 0?!1:Zt.unstable_avoidThisFallback!==!0?!0:!re}}if(Ie){var yt=ae.updateQueue;if(yt===null){var b=new Set;b.add(T),ae.updateQueue=b}else yt.add(T);if(!(ae.mode&2)){if(ae.effectTag|=64,m.effectTag&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var E=qe(1073741823,null);E.tag=2,et(m,E)}m.expirationTime=1073741823;break e}g=void 0,m=t;var N=s.pingCache;if(N===null?(N=s.pingCache=new Bu,g=new Set,N.set(T,g)):(g=N.get(T),g===void 0&&(g=new Set,N.set(T,g))),!g.has(m)){g.add(m);var W=Ku.bind(null,s,T,m);T.then(W,W)}ae.effectTag|=4096,ae.expirationTime=t;break e}ae=ae.return}while(ae!==null);g=Error((Wt(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Co(m))}gt!==ma&&(gt=hu),g=sa(g,m),ae=f;do{switch(ae.tag){case 3:T=g,ae.effectTag|=4096,ae.expirationTime=t;var J=fu(ae,T,t);ut(ae,J);break e;case 1:T=g;var ue=ae.type,be=ae.stateNode;if(!(ae.effectTag&64)&&(typeof ue.getDerivedStateFromError=="function"||be!==null&&typeof be.componentDidCatch=="function"&&(Un===null||!Un.has(be)))){ae.effectTag|=4096,ae.expirationTime=t;var ze=mu(ae,T,t);ut(ae,ze);break e}}ae=ae.return}while(ae!==null)}Ne=ku(Ne)}catch(it){t=it;continue}break}while(!0)}o(wu,"Hj");function xu(){var e=Rl.current;return Rl.current=Sl,e===null?Sl:e}o(xu,"Fj");function Eu(e,t){e<Mn&&2<e&&(Mn=e),t!==null&&e<ui&&2<e&&(ui=e,Il=t)}o(Eu,"Ag");function jl(e){e>ci&&(ci=e)}o(jl,"Bg");function Uu(){for(;Ne!==null;)Ne=bu(Ne)}o(Uu,"Kj");function Zu(){for(;Ne!==null&&!bn();)Ne=bu(Ne)}o(Zu,"Gj");function bu(e){var t=Mu(e.alternate,e,At);return e.memoizedProps=e.pendingProps,t===null&&(t=ku(e)),pu.current=null,t}o(bu,"Qj");function ku(e){Ne=e;do{var t=Ne.alternate;if(e=Ne.return,Ne.effectTag&2048){if(t=Iu(Ne),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=Au(t,Ne,At),At===1||Ne.childExpirationTime!==1){for(var n=0,i=Ne.child;i!==null;){var s=i.expirationTime,f=i.childExpirationTime;s>n&&(n=s),f>n&&(n=f),i=i.sibling}Ne.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=Ne.firstEffect),Ne.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=Ne.firstEffect),e.lastEffect=Ne.lastEffect),1<Ne.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=Ne:e.firstEffect=Ne,e.lastEffect=Ne))}if(t=Ne.sibling,t!==null)return t;Ne=e}while(Ne!==null);return gt===wr&&(gt=ma),null}o(ku,"Pj");function Ca(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}o(Ca,"Ij");function kr(e){var t=r();return u(99,Wu.bind(null,e,t)),null}o(kr,"Jj");function Wu(e,t){do ho();while(di!==null);if((Me&(Jt|pn))!==ht)throw Error(h(327));var n=e.finishedWork,i=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var s=Ca(n);if(e.firstPendingTime=s,i<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:i<=e.firstSuspendedTime&&(e.firstSuspendedTime=i-1),i<=e.lastPingedTime&&(e.lastPingedTime=0),i<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===$t&&(Ne=$t=null,At=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,s=n.firstEffect):s=n:s=n.firstEffect,s!==null){var f=Me;Me|=pn,pu.current=null,Bo=Pn;var m=Vo();if(Ui(m)){if("selectionStart"in m)var g={start:m.selectionStart,end:m.selectionEnd};else e:{g=(g=m.ownerDocument)&&g.defaultView||window;var T=g.getSelection&&g.getSelection();if(T&&T.rangeCount!==0){g=T.anchorNode;var S=T.anchorOffset,re=T.focusNode;T=T.focusOffset;try{g.nodeType,re.nodeType}catch{g=null;break e}var ae=0,Ie=-1,Ze=-1,Zt=0,yt=0,b=m,E=null;t:for(;;){for(var N;b!==g||S!==0&&b.nodeType!==3||(Ie=ae+S),b!==re||T!==0&&b.nodeType!==3||(Ze=ae+T),b.nodeType===3&&(ae+=b.nodeValue.length),(N=b.firstChild)!==null;)E=b,b=N;for(;;){if(b===m)break t;if(E===g&&++Zt===S&&(Ie=ae),E===re&&++yt===T&&(Ze=ae),(N=b.nextSibling)!==null)break;b=E,E=b.parentNode}b=N}g=Ie===-1||Ze===-1?null:{start:Ie,end:Ze}}else g=null}g=g||{start:0,end:0}}else g=null;qr={activeElementDetached:null,focusedElem:m,selectionRange:g},Pn=!1,me=s;do try{qu()}catch(Re){if(me===null)throw Error(h(330));_r(me,Re),me=me.nextEffect}while(me!==null);me=s;do try{for(m=e,g=t;me!==null;){var W=me.effectTag;if(W&16&&tn(me.stateNode,""),W&128){var J=me.alternate;if(J!==null){var ue=J.ref;ue!==null&&(typeof ue=="function"?ue(null):ue.current=null)}}switch(W&1038){case 2:uu(me),me.effectTag&=-3;break;case 6:uu(me),me.effectTag&=-3,da(me.alternate,me);break;case 1024:me.effectTag&=-1025;break;case 1028:me.effectTag&=-1025,da(me.alternate,me);break;case 4:da(me.alternate,me);break;case 8:S=me,cu(m,S,g),su(S)}me=me.nextEffect}}catch(Re){if(me===null)throw Error(h(330));_r(me,Re),me=me.nextEffect}while(me!==null);if(ue=qr,J=Vo(),W=ue.focusedElem,g=ue.selectionRange,J!==W&&W&&W.ownerDocument&&Zr(W.ownerDocument.documentElement,W)){for(g!==null&&Ui(W)&&(J=g.start,ue=g.end,ue===void 0&&(ue=J),"selectionStart"in W?(W.selectionStart=J,W.selectionEnd=Math.min(ue,W.value.length)):(ue=(J=W.ownerDocument||document)&&J.defaultView||window,ue.getSelection&&(ue=ue.getSelection(),S=W.textContent.length,m=Math.min(g.start,S),g=g.end===void 0?m:Math.min(g.end,S),!ue.extend&&m>g&&(S=g,g=m,m=S),S=Fo(W,m),re=Fo(W,g),S&&re&&(ue.rangeCount!==1||ue.anchorNode!==S.node||ue.anchorOffset!==S.offset||ue.focusNode!==re.node||ue.focusOffset!==re.offset)&&(J=J.createRange(),J.setStart(S.node,S.offset),ue.removeAllRanges(),m>g?(ue.addRange(J),ue.extend(re.node,re.offset)):(J.setEnd(re.node,re.offset),ue.addRange(J)))))),J=[],ue=W;ue=ue.parentNode;)ue.nodeType===1&&J.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof W.focus=="function"&&W.focus(),W=0;W<J.length;W++)ue=J[W],ue.element.scrollLeft=ue.left,ue.element.scrollTop=ue.top}Pn=!!Bo,qr=Bo=null,e.current=n,me=s;do try{for(W=e;me!==null;){var be=me.effectTag;if(be&36&&$u(W,me.alternate,me),be&128){J=void 0;var ze=me.ref;if(ze!==null){var it=me.stateNode;switch(me.tag){case 5:J=it;break;default:J=it}typeof ze=="function"?ze(J):ze.current=J}}me=me.nextEffect}}catch(Re){if(me===null)throw Error(h(330));_r(me,Re),me=me.nextEffect}while(me!==null);me=null,ri(),Me=f}else e.current=n;if(Vl)Vl=!1,di=e,fi=t;else for(me=s;me!==null;)t=me.nextEffect,me.nextEffect=null,me=t;if(t=e.firstPendingTime,t===0&&(Un=null),t===1073741823?e===ga?mi++:(mi=0,ga=e):mi=0,typeof ya=="function"&&ya(n.stateNode,i),Bt(e),Fl)throw Fl=!1,e=ha,ha=null,e;return(Me&fa)!==ht||p(),null}o(Wu,"Sj");function qu(){for(;me!==null;){var e=me.effectTag;e&256&&Vu(me.alternate,me),!(e&512)||Vl||(Vl=!0,d(97,function(){return ho(),null})),me=me.nextEffect}}o(qu,"Tj");function ho(){if(fi!==90){var e=97<fi?97:fi;return fi=90,u(e,Qu)}}o(ho,"Dj");function Qu(){if(di===null)return!1;var e=di;if(di=null,(Me&(Jt|pn))!==ht)throw Error(h(331));var t=Me;for(Me|=pn,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:ou(5,n),iu(5,n)}}catch(i){if(e===null)throw Error(h(330));_r(e,i)}n=e.nextEffect,e.nextEffect=null,e=n}return Me=t,p(),!0}o(Qu,"Vj");function _u(e,t,n){t=sa(n,t),t=fu(e,t,1073741823),et(e,t),e=Bl(e,1073741823),e!==null&&Bt(e)}o(_u,"Wj");function _r(e,t){if(e.tag===3)_u(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){_u(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Un===null||!Un.has(i))){e=sa(t,e),e=mu(n,e,1073741823),et(n,e),n=Bl(n,1073741823),n!==null&&Bt(n);break}}n=n.return}}o(_r,"Ei");function Ku(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),$t===e&&At===n?gt===Dl||gt===Ol&&Mn===1073741823&&Tt()-pa<gu?br(e,At):Hl=!0:Tu(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,Bt(e)))}o(Ku,"Oj");function Yu(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=hn(),t=Er(t,e,null)),e=Bl(e,t),e!==null&&Bt(e)}o(Yu,"Vi");var Mu;Mu=o(function(e,t,n){var i=t.expirationTime;if(e!==null){var s=t.pendingProps;if(e.memoizedProps!==s||kt.current)mn=!0;else{if(i<n){switch(mn=!1,t.tag){case 3:Ya(t),ta();break;case 5:if(Oa(t),t.mode&4&&n!==1&&s.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:_t(t.type)&&ro(t);break;case 4:js(t,t.stateNode.containerInfo);break;case 10:i=t.memoizedProps.value,s=t.type._context,rt(k,s._currentValue),s._currentValue=i;break;case 13:if(t.memoizedState!==null)return i=t.child.childExpirationTime,i!==0&&i>=n?Ga(e,t,n):(rt(st,st.current&1),t=_n(e,t,n),t!==null?t.sibling:null);rt(st,st.current&1);break;case 19:if(i=t.childExpirationTime>=n,e.effectTag&64){if(i)return Ja(e,t,n);t.effectTag|=64}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null),rt(st,st.current),!i)return null}return _n(e,t,n)}mn=!1}}else mn=!1;switch(t.expirationTime=0,t.tag){case 2:if(i=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,s=En(t,pt.current),se(t,n),s=qs(null,t,i,e,s,n),t.effectTag|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(i)){var f=!0;ro(t)}else f=!1;t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fe(t);var m=i.getDerivedStateFromProps;typeof m=="function"&&Ge(t,i,m,e),s.updater=Be,t.stateNode=s,s._reactInternalFiber=t,Bs(t,i,e,n),t=ra(null,t,i,!0,f,n)}else t.tag=0,Vt(null,t,s,n),t=t.child;return t;case 16:e:{if(s=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Yl(s),s._status!==1)throw s._result;switch(s=s._result,t.type=s,f=t.tag=Ju(s),e=w(s,e),f){case 0:t=na(null,t,s,e,n);break e;case 1:t=Ka(null,t,s,e,n);break e;case 11:t=Za(null,t,s,e,n);break e;case 14:t=Wa(null,t,s,w(s.type,e),i,n);break e}throw Error(h(306,s,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:w(i,s),na(e,t,i,s,n);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:w(i,s),Ka(e,t,i,s,n);case 3:if(Ya(t),i=t.updateQueue,e===null||i===null)throw Error(h(282));if(i=t.pendingProps,s=t.memoizedState,s=s!==null?s.element:null,ke(e,t),dt(t,i,null,n),i=t.memoizedState.element,i===s)ta(),t=_n(e,t,n);else{if((s=t.stateNode.hydrate)&&(jn=On(t.stateNode.containerInfo.firstChild),kn=t,s=yr=!0),s)for(n=zs(t,null,i,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Vt(e,t,i,n),ta();t=t.child}return t;case 5:return Oa(t),e===null&&ea(t),i=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,m=s.children,wn(i,s)?m=null:f!==null&&wn(i,f)&&(t.effectTag|=16),Qa(e,t),t.mode&4&&n!==1&&s.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Vt(e,t,m,n),t=t.child),t;case 6:return e===null&&ea(t),null;case 13:return Ga(e,t,n);case 4:return js(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=co(t,null,i,n):Vt(e,t,i,n),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:w(i,s),Za(e,t,i,s,n);case 7:return Vt(e,t,t.pendingProps,n),t.child;case 8:return Vt(e,t,t.pendingProps.children,n),t.child;case 12:return Vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{i=t.type._context,s=t.pendingProps,m=t.memoizedProps,f=s.value;var g=t.type._context;if(rt(k,g._currentValue),g._currentValue=f,m!==null)if(g=m.value,f=Gt(g,f)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(g,f):1073741823)|0,f===0){if(m.children===s.children&&!kt.current){t=_n(e,t,n);break e}}else for(g=t.child,g!==null&&(g.return=t);g!==null;){var T=g.dependencies;if(T!==null){m=g.child;for(var S=T.firstContext;S!==null;){if(S.context===i&&S.observedBits&f){g.tag===1&&(S=qe(n,null),S.tag=2,et(g,S)),g.expirationTime<n&&(g.expirationTime=n),S=g.alternate,S!==null&&S.expirationTime<n&&(S.expirationTime=n),Ce(g.return,n),T.expirationTime<n&&(T.expirationTime=n);break}S=S.next}}else m=g.tag===10&&g.type===t.type?null:g.child;if(m!==null)m.return=g;else for(m=g;m!==null;){if(m===t){m=null;break}if(g=m.sibling,g!==null){g.return=m.return,m=g;break}m=m.return}g=m}Vt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,f=t.pendingProps,i=f.children,se(t,n),s=Ee(s,f.unstable_observedBits),i=i(s),t.effectTag|=1,Vt(e,t,i,n),t.child;case 14:return s=t.type,f=w(s,t.pendingProps),f=w(s.type,f),Wa(e,t,s,f,i,n);case 15:return qa(e,t,t.type,t.pendingProps,i,n);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:w(i,s),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,_t(i)?(e=!0,ro(t)):e=!1,se(t,n),oi(t,i,s),Bs(t,i,s,n),ra(null,t,i,!0,e,n);case 19:return Ja(e,t,n)}throw Error(h(156,t.tag))},"Rj");var ya=null,wa=null;function Gu(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);ya=o(function(i){try{t.onCommitFiberRoot(n,i,void 0,(i.current.effectTag&64)===64)}catch{}},"Uj"),wa=o(function(i){try{t.onCommitFiberUnmount(n,i)}catch{}},"Li")}catch{}return!0}o(Gu,"Yj");function Xu(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}o(Xu,"Zj");function gn(e,t,n,i){return new Xu(e,t,n,i)}o(gn,"Sh");function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}o(xa,"bi");function Ju(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sn)return 11;if(e===wi)return 14}return 2}o(Ju,"Xj");function Mr(e,t){var n=e.alternate;return n===null?(n=gn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}o(Mr,"Sg");function Ul(e,t,n,i,s,f){var m=2;if(i=e,typeof e=="function")xa(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case Tn:return Wn(n.children,s,f,t);case Kl:m=8,s|=7;break;case vi:m=8,s|=1;break;case Lr:return e=gn(12,n,t,s|8),e.elementType=Lr,e.type=Lr,e.expirationTime=f,e;case lt:return e=gn(13,n,t,s),e.type=lt,e.elementType=lt,e.expirationTime=f,e;case vo:return e=gn(19,n,t,s),e.elementType=vo,e.expirationTime=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ci:m=10;break e;case yi:m=9;break e;case Sn:m=11;break e;case wi:m=14;break e;case xi:m=16,i=null;break e;case Qn:m=22;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=gn(m,n,t,s),t.elementType=e,t.type=i,t.expirationTime=f,t}o(Ul,"Ug");function Wn(e,t,n,i){return e=gn(7,e,i,t),e.expirationTime=n,e}o(Wn,"Wg");function Ea(e,t,n){return e=gn(6,e,null,t),e.expirationTime=n,e}o(Ea,"Tg");function ba(e,t,n){return t=gn(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}o(ba,"Vg");function ec(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}o(ec,"ak");function Tu(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}o(Tu,"Aj");function Tr(e,t){var n=e.firstSuspendedTime,i=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(i>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}o(Tr,"xi");function Su(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}o(Su,"yi");function ka(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}o(ka,"Cj");function Zl(e,t,n,i){var s=t.current,f=hn(),m=ot.suspense;f=Er(f,s,m);e:if(n){n=n._reactInternalFiber;t:{if(nn(n)!==n||n.tag!==1)throw Error(h(170));var g=n;do{switch(g.tag){case 3:g=g.stateNode.context;break t;case 1:if(_t(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break t}}g=g.return}while(g!==null);throw Error(h(171))}if(n.tag===1){var T=n.type;if(_t(T)){n=hl(n,T,g);break e}}n=g}else n=cn;return t.context===null?t.context=n:t.pendingContext=n,t=qe(f,m),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),et(s,t),Zn(s,f),f}o(Zl,"bk");function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}o(_a,"ck");function Lu(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}o(Lu,"dk");function Ma(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}o(Ma,"ek");function Ta(e,t,n){n=n!=null&&n.hydrate===!0;var i=new ec(e,t,n),s=gn(3,null,null,t===2?7:t===1?3:0);i.current=s,s.stateNode=i,fe(s),e[ir]=i.current,n&&t!==0&&bt(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=i}o(Ta,"fk"),Ta.prototype.render=function(e){Zl(e,this._internalRoot,null,null)},Ta.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Zl(null,e,null,function(){t[ir]=null})};function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}o(pi,"gk");function tc(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Ta(e,0,t?{hydrate:!0}:void 0)}o(tc,"hk");function Wl(e,t,n,i,s){var f=n._reactRootContainer;if(f){var m=f._internalRoot;if(typeof s=="function"){var g=s;s=o(function(){var S=_a(m);g.call(S)},"e")}Zl(t,m,e,s)}else{if(f=n._reactRootContainer=tc(n,i),m=f._internalRoot,typeof s=="function"){var T=s;s=o(function(){var S=_a(m);T.call(S)},"e")}yu(function(){Zl(t,m,e,s)})}return _a(m)}o(Wl,"ik");function nc(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}o(nc,"jk"),Hi=o(function(e){if(e.tag===13){var t=y(hn(),150,100);Zn(e,t),Ma(e,t)}},"wc"),mt=o(function(e){e.tag===13&&(Zn(e,3),Ma(e,3))},"xc"),Et=o(function(e){if(e.tag===13){var t=hn();t=Er(t,e,null),Zn(e,t),Ma(e,t)}},"yc"),ge=o(function(e,t,n){switch(t){case"input":if(bo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=jo(i);if(!s)throw Error(h(90));xo(i),bo(i,s)}}}break;case"textarea":_o(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}},"za"),tt=Cu,vt=o(function(e,t,n,i,s){var f=Me;Me|=4;try{return u(98,e.bind(null,t,n,i,s))}finally{Me=f,Me===ht&&p()}},"Ga"),Ct=o(function(){(Me&(1|Jt|pn))===ht&&(ju(),ho())},"Ha"),Nt=o(function(e,t){var n=Me;Me|=2;try{return e(t)}finally{Me=n,Me===ht&&p()}},"Ia");function Nu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pi(t))throw Error(h(200));return nc(e,t,null,n)}o(Nu,"kk");var rc={Events:[sr,xn,jo,X,O,Dn,function(e){Di(e,ds)},Ve,Xe,er,So,ho,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Gu(L({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:o(function(n){return n=Oi(n),n===null?null:n.stateNode},"findHostInstanceByFiber"),findFiberByHostInstance:o(function(n){return t?t(n):null},"findFiberByHostInstance"),findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:lr,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),K=rc,K=Nu,K=o(function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):Error(h(268,Object.keys(e)));return e=Oi(t),e=e===null?null:e.stateNode,e},"__webpack_unused_export__"),K=o(function(e,t){if((Me&(Jt|pn))!==ht)throw Error(h(187));var n=Me;Me|=1;try{return u(99,e.bind(null,t))}finally{Me=n,p()}},"__webpack_unused_export__"),K=o(function(e,t,n){if(!pi(t))throw Error(h(200));return Wl(null,e,t,!0,n)},"__webpack_unused_export__"),_.render=function(e,t,n){if(!pi(t))throw Error(h(200));return Wl(null,e,t,!1,n)},K=o(function(e){if(!pi(e))throw Error(h(40));return e._reactRootContainer?(yu(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[ir]=null})}),!0):!1},"__webpack_unused_export__"),K=Cu,K=o(function(e,t){return Nu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},"__webpack_unused_export__"),K=o(function(e,t,n,i){if(!pi(n))throw Error(h(200));if(e==null||e._reactInternalFiber===void 0)throw Error(h(38));return Wl(e,t,n,!1,i)},"__webpack_unused_export__"),K="16.14.0"},961:(M,_,j)=>{"use strict";function K(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K)}catch(V){console.error(V)}}o(K,"checkDCE"),K(),M.exports=j(2551)},5287:(M,_,j)=>{"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K=j(5228),V=typeof Symbol=="function"&&Symbol.for,L=V?Symbol.for("react.element"):60103,C=V?Symbol.for("react.portal"):60106,h=V?Symbol.for("react.fragment"):60107,D=V?Symbol.for("react.strict_mode"):60108,A=V?Symbol.for("react.profiler"):60114,$=V?Symbol.for("react.provider"):60109,H=V?Symbol.for("react.context"):60110,G=V?Symbol.for("react.forward_ref"):60112,Y=V?Symbol.for("react.suspense"):60113,Pe=V?Symbol.for("react.memo"):60115,He=V?Symbol.for("react.lazy"):60116,he=typeof Symbol=="function"&&Symbol.iterator;function Oe(x){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+x,we=1;we<arguments.length;we++)P+="&args[]="+encodeURIComponent(arguments[we]);return"Minified React error #"+x+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}o(Oe,"C");var at={isMounted:o(function(){return!1},"isMounted"),enqueueForceUpdate:o(function(){},"enqueueForceUpdate"),enqueueReplaceState:o(function(){},"enqueueReplaceState"),enqueueSetState:o(function(){},"enqueueSetState")},U={};function R(x,P,we){this.props=x,this.context=P,this.refs=U,this.updater=we||at}o(R,"F"),R.prototype.isReactComponent={},R.prototype.setState=function(x,P){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error(Oe(85));this.updater.enqueueSetState(this,x,P,"setState")},R.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function l(){}o(l,"G"),l.prototype=R.prototype;function le(x,P,we){this.props=x,this.context=P,this.refs=U,this.updater=we||at}o(le,"H");var I=le.prototype=new l;I.constructor=le,K(I,R.prototype),I.isPureReactComponent=!0;var Q={current:null},O=Object.prototype.hasOwnProperty,F={key:!0,ref:!0,__self:!0,__source:!0};function oe(x,P,we){var Le,Te={},We=null,wt=null;if(P!=null)for(Le in P.ref!==void 0&&(wt=P.ref),P.key!==void 0&&(We=""+P.key),P)O.call(P,Le)&&!F.hasOwnProperty(Le)&&(Te[Le]=P[Le]);var Se=arguments.length-2;if(Se===1)Te.children=we;else if(1<Se){for(var Ae=Array(Se),Rt=0;Rt<Se;Rt++)Ae[Rt]=arguments[Rt+2];Te.children=Ae}if(x&&x.defaultProps)for(Le in Se=x.defaultProps,Se)Te[Le]===void 0&&(Te[Le]=Se[Le]);return{$$typeof:L,type:x,key:We,ref:wt,props:Te,_owner:Q.current}}o(oe,"M");function X(x,P){return{$$typeof:L,type:x.type,key:P,ref:x.ref,props:x.props,_owner:x._owner}}o(X,"N");function ce(x){return typeof x=="object"&&x!==null&&x.$$typeof===L}o(ce,"O");function ge(x){var P={"=":"=0",":":"=2"};return"$"+(""+x).replace(/[=:]/g,function(we){return P[we]})}o(ge,"escape");var de=/\/+/g,xe=[];function De(x,P,we,Le){if(xe.length){var Te=xe.pop();return Te.result=x,Te.keyPrefix=P,Te.func=we,Te.context=Le,Te.count=0,Te}return{result:x,keyPrefix:P,func:we,context:Le,count:0}}o(De,"R");function Ve(x){x.result=null,x.keyPrefix=null,x.func=null,x.context=null,x.count=0,10>xe.length&&xe.push(x)}o(Ve,"S");function Xe(x,P,we,Le){var Te=typeof x;(Te==="undefined"||Te==="boolean")&&(x=null);var We=!1;if(x===null)We=!0;else switch(Te){case"string":case"number":We=!0;break;case"object":switch(x.$$typeof){case L:case C:We=!0}}if(We)return we(Le,x,P===""?"."+vt(x,0):P),1;if(We=0,P=P===""?".":P+":",Array.isArray(x))for(var wt=0;wt<x.length;wt++){Te=x[wt];var Se=P+vt(Te,wt);We+=Xe(Te,Se,we,Le)}else if(x===null||typeof x!="object"?Se=null:(Se=he&&x[he]||x["@@iterator"],Se=typeof Se=="function"?Se:null),typeof Se=="function")for(x=Se.call(x),wt=0;!(Te=x.next()).done;)Te=Te.value,Se=P+vt(Te,wt++),We+=Xe(Te,Se,we,Le);else if(Te==="object")throw we=""+x,Error(Oe(31,we==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":we,""));return We}o(Xe,"T");function tt(x,P,we){return x==null?0:Xe(x,"",P,we)}o(tt,"V");function vt(x,P){return typeof x=="object"&&x!==null&&x.key!=null?ge(x.key):P.toString(36)}o(vt,"U");function Ct(x,P){x.func.call(x.context,P,x.count++)}o(Ct,"W");function Nt(x,P,we){var Le=x.result,Te=x.keyPrefix;x=x.func.call(x.context,P,x.count++),Array.isArray(x)?je(x,Le,we,function(We){return We}):x!=null&&(ce(x)&&(x=X(x,Te+(!x.key||P&&P.key===x.key?"":(""+x.key).replace(de,"$&/")+"/")+we)),Le.push(x))}o(Nt,"aa");function je(x,P,we,Le,Te){var We="";we!=null&&(We=(""+we).replace(de,"$&/")+"/"),P=De(P,We,Le,Te),tt(x,Nt,P),Ve(P)}o(je,"X");var B={current:null};function ne(){var x=B.current;if(x===null)throw Error(Oe(321));return x}o(ne,"Z");var _e={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:Q,IsSomeRendererActing:{current:!1},assign:K};_.Children={map:o(function(x,P,we){if(x==null)return x;var Le=[];return je(x,Le,null,P,we),Le},"map"),forEach:o(function(x,P,we){if(x==null)return x;P=De(null,null,P,we),tt(x,Ct,P),Ve(P)},"forEach"),count:o(function(x){return tt(x,function(){return null},null)},"count"),toArray:o(function(x){var P=[];return je(x,P,null,function(we){return we}),P},"toArray"),only:o(function(x){if(!ce(x))throw Error(Oe(143));return x},"only")},_.Component=R,_.Fragment=h,_.Profiler=A,_.PureComponent=le,_.StrictMode=D,_.Suspense=Y,_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,_.cloneElement=function(x,P,we){if(x==null)throw Error(Oe(267,x));var Le=K({},x.props),Te=x.key,We=x.ref,wt=x._owner;if(P!=null){if(P.ref!==void 0&&(We=P.ref,wt=Q.current),P.key!==void 0&&(Te=""+P.key),x.type&&x.type.defaultProps)var Se=x.type.defaultProps;for(Ae in P)O.call(P,Ae)&&!F.hasOwnProperty(Ae)&&(Le[Ae]=P[Ae]===void 0&&Se!==void 0?Se[Ae]:P[Ae])}var Ae=arguments.length-2;if(Ae===1)Le.children=we;else if(1<Ae){Se=Array(Ae);for(var Rt=0;Rt<Ae;Rt++)Se[Rt]=arguments[Rt+2];Le.children=Se}return{$$typeof:L,type:x.type,key:Te,ref:We,props:Le,_owner:wt}},_.createContext=function(x,P){return P===void 0&&(P=null),x={$$typeof:H,_calculateChangedBits:P,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider={$$typeof:$,_context:x},x.Consumer=x},_.createElement=oe,_.createFactory=function(x){var P=oe.bind(null,x);return P.type=x,P},_.createRef=function(){return{current:null}},_.forwardRef=function(x){return{$$typeof:G,render:x}},_.isValidElement=ce,_.lazy=function(x){return{$$typeof:He,_ctor:x,_status:-1,_result:null}},_.memo=function(x,P){return{$$typeof:Pe,type:x,compare:P===void 0?null:P}},_.useCallback=function(x,P){return ne().useCallback(x,P)},_.useContext=function(x,P){return ne().useContext(x,P)},_.useDebugValue=function(){},_.useEffect=function(x,P){return ne().useEffect(x,P)},_.useImperativeHandle=function(x,P,we){return ne().useImperativeHandle(x,P,we)},_.useLayoutEffect=function(x,P){return ne().useLayoutEffect(x,P)},_.useMemo=function(x,P){return ne().useMemo(x,P)},_.useReducer=function(x,P,we){return ne().useReducer(x,P,we)},_.useRef=function(x){return ne().useRef(x)},_.useState=function(x){return ne().useState(x)},_.version="16.14.0"},6540:(M,_,j)=>{"use strict";M.exports=j(5287)},7463:(M,_)=>{"use strict";/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j,K,V,L,C;if(typeof window=="undefined"||typeof MessageChannel!="function"){var h=null,D=null,A=o(function(){if(h!==null)try{var B=_.unstable_now();h(!0,B),h=null}catch(ne){throw setTimeout(A,0),ne}},"t"),$=Date.now();_.unstable_now=function(){return Date.now()-$},j=o(function(B){h!==null?setTimeout(j,0,B):(h=B,setTimeout(A,0))},"f"),K=o(function(B,ne){D=setTimeout(B,ne)},"g"),V=o(function(){clearTimeout(D)},"h"),L=o(function(){return!1},"k"),C=_.unstable_forceFrameRate=function(){}}else{var H=window.performance,G=window.Date,Y=window.setTimeout,Pe=window.clearTimeout;if(typeof console!="undefined"){var He=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof He!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof H=="object"&&typeof H.now=="function")_.unstable_now=function(){return H.now()};else{var he=G.now();_.unstable_now=function(){return G.now()-he}}var Oe=!1,at=null,U=-1,R=5,l=0;L=o(function(){return _.unstable_now()>=l},"k"),C=o(function(){},"l"),_.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):R=0<B?Math.floor(1e3/B):5};var le=new MessageChannel,I=le.port2;le.port1.onmessage=function(){if(at!==null){var B=_.unstable_now();l=B+R;try{at(!0,B)?I.postMessage(null):(Oe=!1,at=null)}catch(ne){throw I.postMessage(null),ne}}else Oe=!1},j=o(function(B){at=B,Oe||(Oe=!0,I.postMessage(null))},"f"),K=o(function(B,ne){U=Y(function(){B(_.unstable_now())},ne)},"g"),V=o(function(){Pe(U),U=-1},"h")}function Q(B,ne){var _e=B.length;B.push(ne);e:for(;;){var x=_e-1>>>1,P=B[x];if(P!==void 0&&0<oe(P,ne))B[x]=ne,B[_e]=P,_e=x;else break e}}o(Q,"J");function O(B){return B=B[0],B===void 0?null:B}o(O,"L");function F(B){var ne=B[0];if(ne!==void 0){var _e=B.pop();if(_e!==ne){B[0]=_e;e:for(var x=0,P=B.length;x<P;){var we=2*(x+1)-1,Le=B[we],Te=we+1,We=B[Te];if(Le!==void 0&&0>oe(Le,_e))We!==void 0&&0>oe(We,Le)?(B[x]=We,B[Te]=_e,x=Te):(B[x]=Le,B[we]=_e,x=we);else if(We!==void 0&&0>oe(We,_e))B[x]=We,B[Te]=_e,x=Te;else break e}}return ne}return null}o(F,"M");function oe(B,ne){var _e=B.sortIndex-ne.sortIndex;return _e!==0?_e:B.id-ne.id}o(oe,"K");var X=[],ce=[],ge=1,de=null,xe=3,De=!1,Ve=!1,Xe=!1;function tt(B){for(var ne=O(ce);ne!==null;){if(ne.callback===null)F(ce);else if(ne.startTime<=B)F(ce),ne.sortIndex=ne.expirationTime,Q(X,ne);else break;ne=O(ce)}}o(tt,"V");function vt(B){if(Xe=!1,tt(B),!Ve)if(O(X)!==null)Ve=!0,j(Ct);else{var ne=O(ce);ne!==null&&K(vt,ne.startTime-B)}}o(vt,"W");function Ct(B,ne){Ve=!1,Xe&&(Xe=!1,V()),De=!0;var _e=xe;try{for(tt(ne),de=O(X);de!==null&&(!(de.expirationTime>ne)||B&&!L());){var x=de.callback;if(x!==null){de.callback=null,xe=de.priorityLevel;var P=x(de.expirationTime<=ne);ne=_.unstable_now(),typeof P=="function"?de.callback=P:de===O(X)&&F(X),tt(ne)}else F(X);de=O(X)}if(de!==null)var we=!0;else{var Le=O(ce);Le!==null&&K(vt,Le.startTime-ne),we=!1}return we}finally{de=null,xe=_e,De=!1}}o(Ct,"X");function Nt(B){switch(B){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}o(Nt,"Y");var je=C;_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(B){B.callback=null},_.unstable_continueExecution=function(){Ve||De||(Ve=!0,j(Ct))},_.unstable_getCurrentPriorityLevel=function(){return xe},_.unstable_getFirstCallbackNode=function(){return O(X)},_.unstable_next=function(B){switch(xe){case 1:case 2:case 3:var ne=3;break;default:ne=xe}var _e=xe;xe=ne;try{return B()}finally{xe=_e}},_.unstable_pauseExecution=function(){},_.unstable_requestPaint=je,_.unstable_runWithPriority=function(B,ne){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var _e=xe;xe=B;try{return ne()}finally{xe=_e}},_.unstable_scheduleCallback=function(B,ne,_e){var x=_.unstable_now();if(typeof _e=="object"&&_e!==null){var P=_e.delay;P=typeof P=="number"&&0<P?x+P:x,_e=typeof _e.timeout=="number"?_e.timeout:Nt(B)}else _e=Nt(B),P=x;return _e=P+_e,B={id:ge++,callback:ne,priorityLevel:B,startTime:P,expirationTime:_e,sortIndex:-1},P>x?(B.sortIndex=P,Q(ce,B),O(X)===null&&B===O(ce)&&(Xe?V():Xe=!0,K(vt,P-x))):(B.sortIndex=_e,Q(X,B),Ve||De||(Ve=!0,j(Ct))),B},_.unstable_shouldYield=function(){var B=_.unstable_now();tt(B);var ne=O(X);return ne!==de&&de!==null&&ne!==null&&ne.callback!==null&&ne.startTime<=B&&ne.expirationTime<de.expirationTime||L()},_.unstable_wrapCallback=function(B){var ne=xe;return function(){var _e=xe;xe=ne;try{return B.apply(this,arguments)}finally{xe=_e}}}},9982:(M,_,j)=>{"use strict";M.exports=j(7463)},5072:M=>{"use strict";var _=[];function j(L){for(var C=-1,h=0;h<_.length;h++)if(_[h].identifier===L){C=h;break}return C}o(j,"getIndexByIdentifier");function K(L,C){for(var h={},D=[],A=0;A<L.length;A++){var $=L[A],H=C.base?$[0]+C.base:$[0],G=h[H]||0,Y="".concat(H," ").concat(G);h[H]=G+1;var Pe=j(Y),He={css:$[1],media:$[2],sourceMap:$[3],supports:$[4],layer:$[5]};if(Pe!==-1)_[Pe].references++,_[Pe].updater(He);else{var he=V(He,C);C.byIndex=A,_.splice(A,0,{identifier:Y,updater:he,references:1})}D.push(Y)}return D}o(K,"modulesToDom");function V(L,C){var h=C.domAPI(C);h.update(L);var D=o(function($){if($){if($.css===L.css&&$.media===L.media&&$.sourceMap===L.sourceMap&&$.supports===L.supports&&$.layer===L.layer)return;h.update(L=$)}else h.remove()},"updater");return D}o(V,"addElementStyle"),M.exports=function(L,C){C=C||{},L=L||[];var h=K(L,C);return o(function(A){A=A||[];for(var $=0;$<h.length;$++){var H=h[$],G=j(H);_[G].references--}for(var Y=K(A,C),Pe=0;Pe<h.length;Pe++){var He=h[Pe],he=j(He);_[he].references===0&&(_[he].updater(),_.splice(he,1))}h=Y},"update")}},7659:M=>{"use strict";var _={};function j(V){if(typeof _[V]=="undefined"){var L=document.querySelector(V);if(window.HTMLIFrameElement&&L instanceof window.HTMLIFrameElement)try{L=L.contentDocument.head}catch{L=null}_[V]=L}return _[V]}o(j,"getTarget");function K(V,L){var C=j(V);if(!C)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");C.appendChild(L)}o(K,"insertBySelector"),M.exports=K},540:M=>{"use strict";function _(j){var K=document.createElement("style");return j.setAttributes(K,j.attributes),j.insert(K,j.options),K}o(_,"insertStyleElement"),M.exports=_},5056:(M,_,j)=>{"use strict";function K(V){var L=j.nc;L&&V.setAttribute("nonce",L)}o(K,"setAttributesWithoutAttributes"),M.exports=K},7825:M=>{"use strict";function _(V,L,C){var h="";C.supports&&(h+="@supports (".concat(C.supports,") {")),C.media&&(h+="@media ".concat(C.media," {"));var D=typeof C.layer!="undefined";D&&(h+="@layer".concat(C.layer.length>0?" ".concat(C.layer):""," {")),h+=C.css,D&&(h+="}"),C.media&&(h+="}"),C.supports&&(h+="}");var A=C.sourceMap;A&&typeof btoa!="undefined"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),L.styleTagTransform(h,V,L.options)}o(_,"apply");function j(V){if(V.parentNode===null)return!1;V.parentNode.removeChild(V)}o(j,"removeStyleElement");function K(V){if(typeof document=="undefined")return{update:o(function(){},"update"),remove:o(function(){},"remove")};var L=V.insertStyleElement(V);return{update:o(function(h){_(L,V,h)},"update"),remove:o(function(){j(L)},"remove")}}o(K,"domAPI"),M.exports=K},1113:M=>{"use strict";function _(j,K){if(K.styleSheet)K.styleSheet.cssText=j;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(j))}}o(_,"styleTagTransform"),M.exports=_},7290:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2ZM1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8ZM8 12.25C9.933 12.25 11.5 11.036 11.5 9.214C11.5 8.543 10.956 8 10.286 8H5.715C5.044 8 4.501 8.544 4.501 9.214C4.501 11.035 6.068 12.25 8.001 12.25H8ZM8 7.25C9.036 7.25 9.875 6.411 9.875 5.375C9.875 4.339 9.036 3.5 8 3.5C6.964 3.5 6.125 4.339 6.125 5.375C6.125 6.411 6.964 7.25 8 7.25Z"></path></svg>'},5898:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1.5C8 1.22386 7.77614 1 7.5 1C7.22386 1 7 1.22386 7 1.5V7H1.5C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H7V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H8V1.5Z"></path></svg>'},8945:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.354 3.646C12.159 3.451 11.842 3.451 11.647 3.646L6.70798 8.585L7.41498 9.292L12.354 4.353C12.549 4.158 12.549 3.841 12.354 3.646ZM1.85398 8.146C1.65898 7.951 1.34198 7.951 1.14698 8.146C0.951982 8.341 0.951982 8.658 1.14698 8.853L4.14698 11.853C4.24498 11.951 4.37298 11.999 4.50098 11.999C4.62898 11.999 4.75698 11.95 4.85498 11.853L5.20898 11.499L4.50198 10.792L1.85598 8.146H1.85398ZM7.49998 12C7.37198 12 7.24398 11.951 7.14598 11.854L4.14598 8.854C3.95098 8.659 3.95098 8.342 4.14598 8.147C4.34098 7.952 4.65798 7.952 4.85298 8.147L7.49898 10.793L14.645 3.647C14.84 3.452 15.157 3.452 15.352 3.647C15.547 3.842 15.547 4.159 15.352 4.354L7.85198 11.854C7.75398 11.952 7.62598 12 7.49798 12H7.49998Z"></path></svg>'},2631:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.6572 3.13573C13.8583 2.9465 14.175 2.95614 14.3643 3.15722C14.5535 3.35831 14.5438 3.675 14.3428 3.86425L5.84277 11.8642C5.64597 12.0494 5.33756 12.0446 5.14648 11.8535L1.64648 8.35351C1.45121 8.15824 1.45121 7.84174 1.64648 7.64647C1.84174 7.45121 2.15825 7.45121 2.35351 7.64647L5.50976 10.8027L13.6572 3.13573Z"></path></svg>'},8251:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z"></path></svg>'},8674:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 4C8.36719 4 8.72135 4.04818 9.0625 4.14453C9.40365 4.23828 9.72135 4.3724 10.0156 4.54688C10.3125 4.72135 10.582 4.93099 10.8242 5.17578C11.069 5.41797 11.2786 5.6875 11.4531 5.98438C11.6276 6.27865 11.7617 6.59635 11.8555 6.9375C11.9518 7.27865 12 7.63281 12 8C12 8.36719 11.9518 8.72135 11.8555 9.0625C11.7617 9.40365 11.6276 9.72266 11.4531 10.0195C11.2786 10.3138 11.069 10.5833 10.8242 10.8281C10.582 11.0703 10.3125 11.2786 10.0156 11.4531C9.72135 11.6276 9.40365 11.763 9.0625 11.8594C8.72135 11.9531 8.36719 12 8 12C7.63281 12 7.27865 11.9531 6.9375 11.8594C6.59635 11.763 6.27734 11.6276 5.98047 11.4531C5.6862 11.2786 5.41667 11.0703 5.17188 10.8281C4.92969 10.5833 4.72135 10.3138 4.54688 10.0195C4.3724 9.72266 4.23698 9.40365 4.14062 9.0625C4.04688 8.72135 4 8.36719 4 8C4 7.63281 4.04688 7.27865 4.14062 6.9375C4.23698 6.59635 4.3724 6.27865 4.54688 5.98438C4.72135 5.6875 4.92969 5.41797 5.17188 5.17578C5.41667 4.93099 5.6862 4.72135 5.98047 4.54688C6.27734 4.3724 6.59635 4.23828 6.9375 4.14453C7.27865 4.04818 7.63281 4 8 4Z"></path></svg>'},1019:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8.70701 8.00001L12.353 4.35401C12.548 4.15901 12.548 3.84201 12.353 3.64701C12.158 3.45201 11.841 3.45201 11.646 3.64701L8.00001 7.29301L4.35401 3.64701C4.15901 3.45201 3.84201 3.45201 3.64701 3.64701C3.45201 3.84201 3.45201 4.15901 3.64701 4.35401L7.29301 8.00001L3.64701 11.646C3.45201 11.841 3.45201 12.158 3.64701 12.353C3.74501 12.451 3.87301 12.499 4.00101 12.499C4.12901 12.499 4.25701 12.45 4.35501 12.353L8.00101 8.70701L11.647 12.353C11.745 12.451 11.873 12.499 12.001 12.499C12.129 12.499 12.257 12.45 12.355 12.353C12.55 12.158 12.55 11.841 12.355 11.646L8.70901 8.00001H8.70701Z"></path></svg>'},7548:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 4.5C1 3.11929 2.11929 2 3.5 2H12.5C13.8807 2 15 3.11929 15 4.5V9.5C15 10.8807 13.8807 12 12.5 12H8.68787L5.62533 14.6797C4.99168 15.2342 4 14.7842 4 13.9422V12H3.5C2.11929 12 1 10.8807 1 9.5V4.5ZM3.5 3C2.67157 3 2 3.67157 2 4.5V9.5C2 10.3284 2.67157 11 3.5 11H5V13.8981L8.31213 11H12.5C13.3284 11 14 10.3284 14 9.5V4.5C14 3.67157 13.3284 3 12.5 3H3.5Z"></path></svg>'},5787:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6.25 9.03699C6.664 9.03699 6.99999 9.373 7 9.78699V11.288C7 11.702 6.664 12.038 6.25 12.038C5.836 12.038 5.5 11.702 5.5 11.288V9.78699C5.50001 9.373 5.836 9.03699 6.25 9.03699Z"></path><path d="M9.75 9.03699C10.164 9.03699 10.5 9.373 10.5 9.78699V11.288C10.5 11.702 10.164 12.038 9.75 12.038C9.336 12.038 9 11.702 9 11.288V9.78699C9.00001 9.373 9.336 9.03699 9.75 9.03699Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.13867 1.80652C8.82067 1.07559 9.87705 0.907879 11.083 1.04187C12.3128 1.17885 13.2276 1.56987 13.8066 2.30261C14.3726 3.01761 14.5 3.91699 14.5 4.78699C14.5 5.35899 14.4471 5.93524 14.2461 6.44324C14.312 6.67097 14.3441 6.87174 14.3721 7.05457C14.3841 7.13057 14.3962 7.20332 14.4092 7.27332C15.333 7.65842 15.931 8.74411 16 9.36804V11.2401C15.9996 12.0063 12.6487 15.035 7.99805 15.035C3.43611 15.035 0.125083 12.1211 0 11.286V9.33777C0.0850941 8.7098 0.67711 7.65235 1.58789 7.27332C1.60089 7.20332 1.61202 7.12957 1.62402 7.05457C1.65299 6.87174 1.6841 6.67097 1.75 6.44324C1.549 5.93524 1.49609 5.35899 1.49609 4.78699C1.49609 3.91699 1.62445 3.01761 2.18945 2.30261C2.76847 1.5699 3.68333 1.17884 4.91309 1.04187C6.11903 0.907894 7.17544 1.07557 7.85742 1.80652C7.90736 1.85945 7.95314 1.91464 7.99609 1.97156C8.04004 1.91467 8.08976 1.85943 8.13867 1.80652ZM8 6.30261C7.85503 6.57456 7.672 6.82481 7.45605 7.04578C6.80607 7.70976 5.89305 8.03697 4.74609 8.03699C4.09409 8.03699 3.50955 7.95597 3.01855 7.74597L2.99609 7.86219V12.1171C3.41537 12.4402 5.71823 13.5497 7.99805 13.5497C10.278 13.5497 12.5819 12.4401 13 12.1171V7.86219L12.9766 7.74597C12.4866 7.95586 11.9018 8.03699 11.25 8.03699C10.104 8.03699 9.19104 7.70978 8.54004 7.04578C8.32508 6.8248 8.14398 6.57458 8 6.30261ZM6.76172 2.82996C6.56865 2.62401 6.12477 2.41713 5.08008 2.53308C4.06108 2.64608 3.60119 2.93728 3.36719 3.23328C3.12024 3.54528 2.99805 4.02207 2.99805 4.78699C2.99805 5.57984 3.12672 5.95806 3.30566 6.15808C3.46766 6.33908 3.82505 6.53699 4.74805 6.53699C5.60091 6.53698 6.08674 6.30189 6.38574 5.99695C6.70071 5.67499 6.91291 5.17009 7.00293 4.44422C7.11993 3.50922 6.96572 3.04896 6.76172 2.82996ZM10.917 2.53308C9.87329 2.41712 9.42942 2.62402 9.23633 2.82996C9.03233 3.04896 8.87714 3.50922 8.99414 4.44422C9.08516 5.17008 9.29734 5.67499 9.6123 5.99695C9.91132 6.30188 10.3961 6.53699 11.25 6.53699C12.172 6.53699 12.5304 6.33908 12.6924 6.15808C12.8713 5.95805 13 5.57981 13 4.78699C13 4.02209 12.8768 3.54528 12.6299 3.23328C12.3969 2.93728 11.937 2.64608 10.917 2.53308Z"></path></svg>'},6270:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 5V12.73C2.4 12.38 2 11.74 2 11V5C2 2.79 3.79 1 6 1H9C9.74 1 10.38 1.4 10.73 2H6C4.35 2 3 3.35 3 5ZM11 15H6C4.897 15 4 14.103 4 13V5C4 3.897 4.897 3 6 3H11C12.103 3 13 3.897 13 5V13C13 14.103 12.103 15 11 15ZM12 5C12 4.448 11.552 4 11 4H6C5.448 4 5 4.448 5 5V13C5 13.552 5.448 14 6 14H11C11.552 14 12 13.552 12 13V5Z"></path></svg>'},4837:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.236 1.76386C13.2123 0.740172 11.5525 0.740171 10.5289 1.76386L2.65722 9.63549C2.28304 10.0097 2.01623 10.4775 1.88467 10.99L1.01571 14.3755C0.971767 14.5467 1.02148 14.7284 1.14646 14.8534C1.27144 14.9783 1.45312 15.028 1.62432 14.9841L5.00978 14.1151C5.52234 13.9836 5.99015 13.7168 6.36433 13.3426L14.236 5.47097C15.2596 4.44728 15.2596 2.78755 14.236 1.76386ZM11.236 2.47097C11.8691 1.8378 12.8957 1.8378 13.5288 2.47097C14.162 3.10413 14.162 4.1307 13.5288 4.76386L12.75 5.54269L10.4571 3.24979L11.236 2.47097ZM9.75002 3.9569L12.0429 6.24979L5.65722 12.6355C5.40969 12.883 5.10023 13.0595 4.76117 13.1465L2.19447 13.8053L2.85327 11.2386C2.9403 10.8996 3.1168 10.5901 3.36433 10.3426L9.75002 3.9569Z"></path></svg>'},5473:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1C4.14 1 1 4.14 1 8C1 11.86 4.14 15 8 15C11.86 15 15 11.86 15 8C15 4.14 11.86 1 8 1ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14ZM10.854 5.854L8.708 8L10.854 10.146C11.049 10.341 11.049 10.658 10.854 10.853C10.756 10.951 10.628 10.999 10.5 10.999C10.372 10.999 10.244 10.95 10.146 10.853L8 8.707L5.854 10.853C5.756 10.951 5.628 10.999 5.5 10.999C5.372 10.999 5.244 10.95 5.146 10.853C4.951 10.658 4.951 10.341 5.146 10.146L7.292 8L5.146 5.854C4.951 5.659 4.951 5.342 5.146 5.147C5.341 4.952 5.658 4.952 5.853 5.147L7.999 7.293L10.145 5.147C10.34 4.952 10.657 4.952 10.852 5.147C11.047 5.342 11.047 5.659 10.852 5.854H10.854Z"></path></svg>'},1456:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.5 1C8.67157 1 8 1.67157 8 2.5V4.5C8 5.15293 8.41717 5.70842 8.99951 5.91447V7C8.99951 7.19401 9.11174 7.3705 9.28743 7.45279C9.46313 7.53508 9.67056 7.50831 9.8196 7.38411L11.4805 6H13.5C14.3284 6 15 5.32843 15 4.5V2.5C15 1.67157 14.3284 1 13.5 1H9.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H13.5C13.7761 2 14 2.22386 14 2.5V4.5C14 4.77614 13.7761 5 13.5 5H11.2995C11.1825 5 11.0693 5.04101 10.9794 5.11589L9.99951 5.93248V5.5C9.99951 5.22395 9.7758 5.00013 9.49975 5C9.22373 4.99987 9 4.77606 9 4.5V2.5ZM3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6ZM5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5ZM2.49998 9L7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.6161 8.54103 12.5103 7.78785 13.1148C7.04658 13.7098 6.05308 14 5 14C3.94692 14 2.95342 13.7098 2.21215 13.1148C1.45897 12.5103 1 11.6161 1 10.5C1 9.67161 1.67156 9 2.49998 9ZM7.5 10L2.49998 10C2.22387 10 2 10.2239 2 10.5C2 11.3169 2.32453 11.9227 2.8381 12.3349C3.36358 12.7567 4.12008 13 5 13C5.87992 13 6.63642 12.7567 7.1619 12.3349C7.67547 11.9227 8 11.3169 8 10.5C8 10.2239 7.77614 10 7.5 10Z"></path></svg>'},979:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 8C11.5 6.24 10.194 4.779 8.5 4.536V1.5C8.5 1.224 8.276 1 8 1C7.724 1 7.5 1.224 7.5 1.5V4.536C5.806 4.779 4.5 6.24 4.5 8C4.5 9.76 5.806 11.221 7.5 11.464V14.5C7.5 14.776 7.724 15 8 15C8.276 15 8.5 14.776 8.5 14.5V11.464C10.194 11.221 11.5 9.76 11.5 8ZM8 10.5C6.621 10.5 5.5 9.378 5.5 8C5.5 6.622 6.621 5.5 8 5.5C9.379 5.5 10.5 6.622 10.5 8C10.5 9.378 9.379 10.5 8 10.5Z"></path></svg>'},425:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.14645 5.85355C9.34171 6.04882 9.65829 6.04882 9.85355 5.85355C10.0488 5.65829 10.0488 5.34171 9.85355 5.14645L8.70711 4H10.5C11.3284 4 12 4.67157 12 5.5V10.05C10.8589 10.2816 10 11.2905 10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.2905 14.1411 10.2816 13 10.05V5.5C13 4.11929 11.8807 3 10.5 3H8.70711L9.85355 1.85355C10.0488 1.65829 10.0488 1.34171 9.85355 1.14645C9.65829 0.951184 9.34171 0.951184 9.14645 1.14645L7.14645 3.14645C6.95118 3.34171 6.95118 3.65829 7.14645 3.85355L9.14645 5.85355ZM14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5ZM6 3.5C6 4.70948 5.14112 5.71836 4 5.94999V10.5C4 11.3284 4.67157 12 5.5 12H7.29289L6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464C6.34171 9.95118 6.65829 9.95118 6.85355 10.1464L8.85355 12.1464C9.04882 12.3417 9.04882 12.6583 8.85355 12.8536L6.85355 14.8536C6.65829 15.0488 6.34171 15.0488 6.14645 14.8536C5.95118 14.6583 5.95118 14.3417 6.14645 14.1464L7.29289 13H5.5C4.11929 13 3 11.8807 3 10.5V5.94999C1.85888 5.71836 1 4.70948 1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5ZM5 3.5C5 2.67157 4.32843 2 3.5 2C2.67157 2 2 2.67157 2 3.5C2 4.32843 2.67157 5 3.5 5C4.32843 5 5 4.32843 5 3.5Z"></path></svg>'},2400:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 5.99998C10.9265 6.00006 10.3704 6.19736 9.92505 6.55877C9.47971 6.92018 9.17217 7.42373 9.05402 7.98498C7.17202 7.85998 5.46602 6.96298 5.08102 5.93098C5.67998 5.78724 6.20478 5.42744 6.55479 4.92058C6.9048 4.41373 7.05538 3.7955 6.97763 3.18446C6.89989 2.57343 6.5993 2.0126 6.13352 1.60954C5.66774 1.20648 5.06956 0.989562 4.45369 1.00039C3.83782 1.01121 3.24763 1.24902 2.7963 1.6682C2.34497 2.08738 2.06428 2.65842 2.00806 3.27181C1.95184 3.8852 2.12404 4.49776 2.49165 4.992C2.85925 5.48624 3.39638 5.82737 4.00002 5.94998V10.05C3.393 10.1739 2.85361 10.5188 2.48642 11.0178C2.11923 11.5168 1.95041 12.1343 2.01268 12.7507C2.07495 13.3671 2.36387 13.9385 2.82344 14.3539C3.28301 14.7694 3.88048 14.9995 4.50002 14.9995C5.11956 14.9995 5.71703 14.7694 6.1766 14.3539C6.63616 13.9385 6.92509 13.3671 6.98736 12.7507C7.04963 12.1343 6.88081 11.5168 6.51362 11.0178C6.14643 10.5188 5.60704 10.1739 5.00002 10.05V7.46598C6.15462 8.38805 7.57188 8.92022 9.04802 8.98598C9.1401 9.4506 9.36227 9.8795 9.68867 10.2227C10.0151 10.566 10.4323 10.8094 10.8917 10.9248C11.3511 11.0401 11.8338 11.0225 12.2836 10.8741C12.7334 10.7257 13.1318 10.4526 13.4324 10.0865C13.733 9.72047 13.9234 9.27655 13.9815 8.80647C14.0395 8.33639 13.9629 7.85948 13.7604 7.43128C13.5579 7.00308 13.238 6.64122 12.8378 6.38782C12.4376 6.13442 11.9737 5.99992 11.5 5.99998ZM3.00002 3.49998C3.00002 3.20331 3.08799 2.9133 3.25282 2.66662C3.41764 2.41995 3.65191 2.22769 3.92599 2.11416C4.20008 2.00063 4.50168 1.97092 4.79265 2.0288C5.08363 2.08668 5.3509 2.22954 5.56068 2.43932C5.77046 2.6491 5.91332 2.91637 5.9712 3.20734C6.02908 3.49831 5.99937 3.79991 5.88584 4.074C5.77231 4.34809 5.58005 4.58236 5.33337 4.74718C5.0867 4.912 4.79669 4.99998 4.50002 4.99998C4.10219 4.99998 3.72066 4.84194 3.43936 4.56064C3.15805 4.27933 3.00002 3.8978 3.00002 3.49998ZM6.00002 12.5C6.00002 12.7966 5.91205 13.0867 5.74722 13.3333C5.5824 13.58 5.34813 13.7723 5.07404 13.8858C4.79996 13.9993 4.49836 14.029 4.20738 13.9712C3.91641 13.9133 3.64914 13.7704 3.43936 13.5606C3.22958 13.3509 3.08672 13.0836 3.02884 12.7926C2.97096 12.5016 3.00067 12.2 3.1142 11.926C3.22773 11.6519 3.41999 11.4176 3.66666 11.2528C3.91334 11.088 4.20335 11 4.50002 11C4.89784 11 5.27938 11.158 5.56068 11.4393C5.84198 11.7206 6.00002 12.1022 6.00002 12.5ZM11.5 9.99998C11.2033 9.99998 10.9133 9.91201 10.6667 9.74718C10.42 9.58236 10.2277 9.34809 10.1142 9.074C10.0007 8.79991 9.97096 8.49831 10.0288 8.20734C10.0867 7.91637 10.2296 7.6491 10.4394 7.43932C10.6491 7.22954 10.9164 7.08668 11.2074 7.0288C11.4984 6.97092 11.8 7.00063 12.074 7.11416C12.3481 7.22769 12.5824 7.41995 12.7472 7.66662C12.912 7.9133 13 8.20331 13 8.49998C13 8.8978 12.842 9.27933 12.5607 9.56064C12.2794 9.84194 11.8978 9.99998 11.5 9.99998Z"></path></svg>'},9494:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 10.05V7.5C13 7.224 12.776 7 12.5 7C12.224 7 12 7.224 12 7.5V10.05C10.86 10.282 10 11.292 10 12.5C10 13.879 11.122 15 12.5 15C13.878 15 15 13.879 15 12.5C15 11.292 14.14 10.283 13 10.05ZM12.5 14C11.673 14 11 13.327 11 12.5C11 11.673 11.673 11 12.5 11C13.327 11 14 11.673 14 12.5C14 13.327 13.327 14 12.5 14ZM6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM10.646 4.646L11.792 3.5L10.646 2.354C10.451 2.159 10.451 1.842 10.646 1.647C10.841 1.452 11.158 1.452 11.353 1.647L12.499 2.793L13.645 1.647C13.84 1.452 14.157 1.452 14.352 1.647C14.547 1.842 14.547 2.159 14.352 2.354L13.206 3.5L14.352 4.646C14.547 4.841 14.547 5.158 14.352 5.353C14.254 5.451 14.126 5.499 13.998 5.499C13.87 5.499 13.742 5.45 13.644 5.353L12.498 4.207L11.352 5.353C11.254 5.451 11.126 5.499 10.998 5.499C10.87 5.499 10.742 5.45 10.644 5.353C10.449 5.158 10.449 4.841 10.644 4.646H10.646Z"></path></svg>'},4551:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM12.5 10C11.122 10 10 11.121 10 12.5C10 13.879 11.122 15 12.5 15C13.878 15 15 13.879 15 12.5C15 11.121 13.878 10 12.5 10ZM12.5 14C11.673 14 11 13.327 11 12.5C11 11.673 11.673 11 12.5 11C13.327 11 14 11.673 14 12.5C14 13.327 13.327 14 12.5 14ZM11.5 7.5C11.5 6.948 11.948 6.5 12.5 6.5C13.052 6.5 13.5 6.948 13.5 7.5C13.5 8.052 13.052 8.5 12.5 8.5C11.948 8.5 11.5 8.052 11.5 7.5ZM11.5 3.5C11.5 2.948 11.948 2.5 12.5 2.5C13.052 2.5 13.5 2.948 13.5 3.5C13.5 4.052 13.052 4.5 12.5 4.5C11.948 4.5 11.5 4.052 11.5 3.5Z"></path></svg>'},9301:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 10.05V5.5C13 4.12 11.88 3 10.5 3H8.71L9.85 1.85C10.05 1.66 10.05 1.34 9.85 1.15C9.66 0.95 9.34 0.95 9.15 1.15L7.15 3.15C6.95 3.34 6.95 3.66 7.15 3.85L9.15 5.85C9.34 6.05 9.66 6.05 9.85 5.85C10.05 5.66 10.05 5.34 9.85 5.15L8.71 4H10.5C11.33 4 12 4.67 12 5.5V10.05C10.86 10.28 10 11.29 10 12.5C10 13.88 11.12 15 12.5 15C13.88 15 15 13.88 15 12.5C15 11.29 14.14 10.28 13 10.05ZM12.5 14C11.67 14 11 13.33 11 12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5C14 13.33 13.33 14 12.5 14ZM6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5C2.67 5 2 4.33 2 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5Z"></path></svg>'},4468:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 2H4.5C3.119 2 2 3.119 2 4.5V11.5C2 12.881 3.119 14 4.5 14H11.5C12.881 14 14 12.881 14 11.5V4.5C14 3.119 12.881 2 11.5 2ZM3 4.5C3 3.672 3.672 3 4.5 3H6V6H3V4.5ZM4.5 13C3.672 13 3 12.328 3 11.5V7H6V13H4.5ZM13 11.5C13 12.328 12.328 13 11.5 13H7V7H13V11.5ZM13 6H7V3H11.5C12.328 3 13 3.672 13 4.5V6Z"></path></svg>'},4593:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 11.859 4.14 15 8 15C11.86 15 15 11.859 15 8C15 4.141 11.86 1 8 1C4.14 1 1 4.141 1 8ZM2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8Z"></path></svg>'},2775:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.5 8.5C13.224 8.5 13 8.276 13 8C13 5.243 10.757 3 8 3C5.243 3 3 5.243 3 8C3 8.276 2.776 8.5 2.5 8.5C2.224 8.5 2 8.276 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 8.276 13.776 8.5 13.5 8.5Z"></path></svg>'},7907:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.1472 0.146372C7.3422 -0.0486279 7.65923 -0.0486279 7.85423 0.146372L11.3542 3.64637C11.5489 3.8414 11.5491 4.15852 11.3542 4.3534C11.1593 4.54823 10.8422 4.54804 10.6472 4.3534L8.00071 1.70692V6.49989C8.00071 9.99981 9.99987 10.9998 13.4997 10.9999C13.7757 10.9999 13.9997 11.2239 13.9997 11.4999C13.9997 11.7759 13.7748 11.9999 13.4988 11.9999C10.9978 11.9999 9.08321 11.4131 7.99974 9.995V14.4999C7.99974 14.776 7.77588 14.9999 7.49974 14.9999C7.22371 14.9998 6.99974 14.7759 6.99974 14.4999V1.70692L4.35423 4.3534C4.15934 4.54823 3.84221 4.54804 3.6472 4.3534C3.45222 4.15842 3.45226 3.84138 3.6472 3.64637L7.1472 0.146372Z"></path></svg>'},3689:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.854 6.146L12.147 4.439C11.864 4.156 11.487 4 11.086 4H9V3C9 1.897 8.103 1 7 1C5.897 1 5 1.897 5 3V4H3.5C2.673 4 2 4.673 2 5.5V7.5C2 8.327 2.673 9 3.5 9H5V14C5 14.551 5.449 15 6 15H8C8.551 15 9 14.551 9 14V9H11.086C11.486 9 11.863 8.844 12.147 8.561L13.854 6.854C14.049 6.659 14.049 6.341 13.854 6.146ZM6 3C6 2.449 6.449 2 7 2C7.551 2 8 2.449 8 3V4H6V3ZM8 14H6V9H8V14ZM11.439 7.854C11.346 7.947 11.217 8 11.085 8H3.5C3.224 8 3 7.776 3 7.5V5.5C3 5.224 3.224 5 3.5 5H11.086C11.217 5 11.346 5.053 11.44 5.146L12.794 6.5L11.439 7.854Z"></path></svg>'},4069:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 1.5C4 1.776 3.776 2 3.5 2H3C2.449 2 2 2.449 2 3V3.5C2 3.776 1.776 4 1.5 4C1.224 4 1 3.776 1 3.5V3C1 1.897 1.897 1 3 1H3.5C3.776 1 4 1.224 4 1.5ZM1.5 8C1.776 8 2 7.776 2 7.5V5.5C2 5.224 1.776 5 1.5 5C1.224 5 1 5.224 1 5.5V7.5C1 7.776 1.224 8 1.5 8ZM1.5 12C1.776 12 2 11.776 2 11.5V9.5C2 9.224 1.776 9 1.5 9C1.224 9 1 9.224 1 9.5V11.5C1 11.776 1.224 12 1.5 12ZM3.5 15H3C2.449 15 2 14.551 2 14V13.5C2 13.224 1.776 13 1.5 13C1.224 13 1 13.224 1 13.5V14C1 15.103 1.897 16 3 16H3.5C3.776 16 4 15.776 4 15.5C4 15.224 3.776 15 3.5 15ZM10.5 2H11C11.551 2 12 2.449 12 3V3.5C12 3.776 12.224 4 12.5 4C12.776 4 13 3.776 13 3.5V3C13 1.897 12.103 1 11 1H10.5C10.224 1 10 1.224 10 1.5C10 1.776 10.224 2 10.5 2ZM5.5 2H8.5C8.776 2 9 1.776 9 1.5C9 1.224 8.776 1 8.5 1H5.5C5.224 1 5 1.224 5 1.5C5 1.776 5.224 2 5.5 2ZM14 7V14C14 15.103 13.103 16 12 16H7C5.897 16 5 15.103 5 14V7C5 5.897 5.897 5 7 5H12C13.103 5 14 5.897 14 7ZM13 7C13 6.449 12.551 6 12 6H7C6.449 6 6 6.449 6 7V14C6 14.551 6.449 15 7 15H12C12.551 15 13 14.551 13 14V7ZM11.5 8H7.5C7.224 8 7 8.224 7 8.5C7 8.776 7.224 9 7.5 9H11.5C11.776 9 12 8.776 12 8.5C12 8.224 11.776 8 11.5 8ZM15.5 7H15V9H15.5C15.776 9 16 8.776 16 8.5V7.5C16 7.224 15.776 7 15.5 7ZM15.5 10H15V12H15.5C15.776 12 16 11.776 16 11.5V10.5C16 10.224 15.776 10 15.5 10ZM15.5 13H15V15H15.5C15.776 15 16 14.776 16 14.5V13.5C16 13.224 15.776 13 15.5 13Z"></path></svg>'},4826:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M10.6484 5.64648C10.8434 5.45148 11.1605 5.45148 11.3555 5.64648C11.5498 5.84137 11.5499 6.15766 11.3555 6.35254L7.35547 10.3525C7.25747 10.4495 7.12898 10.499 7.00098 10.499C6.87299 10.499 6.74545 10.4505 6.64746 10.3525L4.64746 8.35254C4.45247 8.15754 4.45248 7.84148 4.64746 7.64648C4.84246 7.45148 5.15949 7.45148 5.35449 7.64648L7 9.29199L10.6465 5.64648H10.6484Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1ZM8 2C4.691 2 2 4.691 2 8C2 11.309 4.691 14 8 14C11.309 14 14 11.309 14 8C14 4.691 11.309 2 8 2Z"></path></svg>'},4759:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.99902 2.99902C6.55101 2.99904 6.99902 3.44703 6.99902 3.99902V4.99902C6.99902 7.59102 6.47153 9.73354 4.35254 11.8525C4.15754 12.0475 3.84148 12.0475 3.64648 11.8525C3.45148 11.6575 3.45148 11.3415 3.64648 11.1465C5.03348 9.76049 5.65377 8.38594 5.88477 6.79395C5.61781 6.9259 5.31794 7 5 7H4C3.448 7 3 6.552 3 6V4C3.00001 3.44801 3.44801 3 4 3H6L5.99902 2.99902Z"></path><path d="M11.999 2.99902C12.551 2.99904 12.999 3.44703 12.999 3.99902V4.99902C12.999 7.59102 12.4715 9.73354 10.3525 11.8525C10.1575 12.0475 9.84148 12.0475 9.64648 11.8525C9.45148 11.6575 9.45148 11.3415 9.64648 11.1465C11.0335 9.76049 11.6538 8.38594 11.8848 6.79395C11.6178 6.9259 11.3179 7 11 7H10C9.448 7 9 6.552 9 6V4C9.00001 3.44801 9.44801 3 10 3H12L11.999 2.99902Z"></path></svg>'},6276:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.561 4.35398L9.647 1.43998C9.368 1.16098 8.981 1.00098 8.586 1.00098H4C2.897 1.00098 2 1.89798 2 3.00098V13.001C2 14.104 2.897 15.001 4 15.001H11C12.103 15.001 13 14.104 13 13.001V5.41498C13 5.01998 12.84 4.63398 12.561 4.35398ZM12 13C12 13.552 11.552 14 11 14H4C3.448 14 3 13.552 3 13V2.99998C3 2.44798 3.448 1.99998 4 1.99998H8.586C8.718 1.99998 8.847 2.05398 8.94 2.14598L11.854 5.05998C11.947 5.15298 12 5.28198 12 5.41398V13ZM10 6.49998C10 6.77598 9.776 6.99998 9.5 6.99998H8V8.49998C8 8.77598 7.776 8.99998 7.5 8.99998C7.224 8.99998 7 8.77598 7 8.49998V6.99998H5.5C5.224 6.99998 5 6.77598 5 6.49998C5 6.22398 5.224 5.99998 5.5 5.99998H7V4.49998C7 4.22398 7.224 3.99998 7.5 3.99998C7.776 3.99998 8 4.22398 8 4.49998V5.99998H9.5C9.776 5.99998 10 6.22398 10 6.49998ZM10 11.5C10 11.776 9.776 12 9.5 12H5.5C5.224 12 5 11.776 5 11.5C5 11.224 5.224 11 5.5 11H9.5C9.776 11 10 11.224 10 11.5Z"></path></svg>'},7830:M=>{M.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 9C10.3425 9 9.00002 10.3425 9.00002 12C9.00002 13.6575 10.3425 15 12 15C13.6575 15 15 13.6575 15 12C15 10.3425 13.6575 9 12 9ZM12 13.5C11.172 13.5 10.5 12.828 10.5 12C10.5 11.172 11.172 10.5 12 10.5C12.828 10.5 13.5 11.172 13.5 12C13.5 12.828 12.828 13.5 12 13.5ZM21.8475 14.5725L19.9185 12.942C19.8675 12.8985 19.8195 12.8505 19.776 12.7995C19.332 12.279 19.3965 11.5005 19.9185 11.058L21.8475 9.4275C22.0395 9.2655 22.113 9.0045 22.0365 8.766C21.579 7.3545 20.823 6.06 19.8285 4.962C19.7085 4.83 19.5405 4.758 19.368 4.758C19.2975 4.758 19.227 4.77 19.1595 4.794L16.779 5.6415C16.716 5.664 16.65 5.682 16.584 5.694C16.509 5.7075 16.434 5.715 16.3605 5.715C15.7725 5.715 15.2505 5.298 15.141 4.701L14.6865 2.223C14.6415 1.977 14.451 1.782 14.205 1.7295C13.485 1.5765 12.7485 1.5 12.0015 1.5C11.2545 1.5 10.5165 1.578 9.79652 1.7295C9.55052 1.782 9.36002 1.977 9.31502 2.223L8.86202 4.701C8.85002 4.767 8.83202 4.8315 8.80952 4.8945C8.62802 5.4 8.15102 5.715 7.64102 5.715C7.50302 5.715 7.36202 5.691 7.22402 5.643L4.84352 4.7955C4.77602 4.7715 4.70402 4.7595 4.63502 4.7595C4.46252 4.7595 4.29452 4.8315 4.17452 4.9635C3.17852 6.0615 2.42402 7.356 1.96502 8.7675C1.88702 9.006 1.96202 9.267 2.15402 9.429L4.08302 11.0595C4.13402 11.103 4.18202 11.151 4.22552 11.202C4.66952 11.7225 4.60502 12.501 4.08302 12.9435L2.15402 14.574C1.96202 14.736 1.88852 14.997 1.96502 15.2355C2.42252 16.647 3.17852 17.9415 4.17452 19.0395C4.29452 19.1715 4.46252 19.2435 4.63502 19.2435C4.70552 19.2435 4.77602 19.2315 4.84352 19.2075L7.22402 18.36C7.28702 18.3375 7.35302 18.3195 7.41902 18.3075C7.49402 18.294 7.56902 18.288 7.64252 18.288C8.23052 18.288 8.75252 18.705 8.86202 19.302L9.31502 21.78C9.36002 22.026 9.55052 22.221 9.79652 22.2735C10.5165 22.4265 11.2545 22.503 12.0015 22.503C12.7485 22.503 13.4865 22.425 14.205 22.2735C14.451 22.221 14.6415 22.026 14.6865 21.78L15.141 19.302C15.153 19.236 15.171 19.1715 15.1935 19.1085C15.375 18.603 15.852 18.288 16.362 18.288C16.5 18.288 16.641 18.312 16.779 18.36L19.158 19.2075C19.227 19.2315 19.2975 19.2435 19.3665 19.2435C19.539 19.2435 19.707 19.1715 19.827 19.0395C20.823 17.9415 21.5775 16.647 22.035 15.2355C22.113 14.997 22.038 14.736 21.846 14.574L21.8475 14.5725ZM19.092 17.589L17.2815 16.944C16.9845 16.839 16.6755 16.785 16.362 16.785C15.2085 16.785 14.1705 17.514 13.782 18.5985C13.731 18.738 13.6935 18.882 13.6665 19.029L13.3215 20.9055C12.8865 20.9685 12.444 21 12.0015 21C11.559 21 11.1165 20.9685 10.68 20.904L10.3365 19.0275C10.098 17.727 8.96552 16.7835 7.64252 16.7835C7.48052 16.7835 7.31552 16.7985 7.14902 16.8285C7.00352 16.8555 6.86102 16.893 6.72002 16.9425L4.90952 17.5875C4.35752 16.896 3.91652 16.1385 3.59102 15.321L5.05202 14.0865C5.61152 13.614 5.95202 12.951 6.01202 12.222C6.07202 11.493 5.84252 10.785 5.36702 10.227C5.27102 10.1145 5.16452 10.008 5.05202 9.912L3.59102 8.6775C3.91652 7.86 4.35752 7.101 4.90952 6.411L6.72002 7.056C7.01702 7.161 7.32602 7.215 7.64102 7.215C8.79452 7.215 9.83252 6.486 10.221 5.4015C10.272 5.2605 10.3095 5.1165 10.3365 4.971L10.68 3.0945C11.1165 3.0315 11.559 2.9985 12.0015 2.9985C12.444 2.9985 12.8865 3.03 13.3215 3.093L13.665 4.9695C13.9035 6.27 15.036 7.2135 16.359 7.2135C16.521 7.2135 16.686 7.1985 16.851 7.1685C16.9965 7.1415 17.1405 7.104 17.2815 7.0545L19.092 6.4095C19.644 7.0995 20.085 7.8585 20.4105 8.676L18.951 9.9105C18.3915 10.383 18.0495 11.046 17.991 11.775C17.931 12.504 18.1605 13.2135 18.636 13.77C18.7335 13.884 18.8385 13.989 18.9525 14.085L20.4135 15.3195C20.088 16.137 19.647 16.896 19.095 17.586L19.092 17.589Z"></path></svg>'},3072:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1C4.14 1 1 4.14 1 8C1 11.86 4.14 15 8 15C11.86 15 15 11.86 15 8C15 4.14 11.86 1 8 1ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14ZM10.854 5.146C11.049 5.341 11.049 5.658 10.854 5.853L5.854 10.853C5.756 10.951 5.628 10.999 5.5 10.999C5.372 10.999 5.244 10.95 5.146 10.853C4.951 10.658 4.951 10.341 5.146 10.146L10.146 5.146C10.341 4.951 10.658 4.951 10.853 5.146H10.854Z"></path></svg>'},6193:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.46524 9.82962C5.62134 9.94037 5.80806 9.99974 5.99946 9.99948C6.19151 10.0003 6.37897 9.94082 6.53546 9.82948C6.69223 9.71378 6.81095 9.55398 6.87646 9.37048L7.22346 8.30348C7.3077 8.05191 7.44906 7.82327 7.63646 7.63548C7.82305 7.44851 8.05078 7.30776 8.30146 7.22448L9.38746 6.87148C9.56665 6.80759 9.72173 6.68989 9.83146 6.53448C9.94145 6.37908 10.0005 6.19337 10.0005 6.00298C10.0005 5.81259 9.94145 5.62689 9.83146 5.47148C9.71293 5.30613 9.54426 5.18339 9.35046 5.12148L8.28146 4.77548C8.02989 4.69238 7.80123 4.55163 7.61371 4.36447C7.4262 4.1773 7.28503 3.9489 7.20146 3.69748L6.84846 2.61348C6.78519 2.43423 6.66777 2.27908 6.51246 2.16948C6.35557 2.06133 6.16951 2.00342 5.97896 2.00342C5.78841 2.00342 5.60235 2.06133 5.44546 2.16948C5.28572 2.28196 5.16594 2.44237 5.10346 2.62748L4.74846 3.71748C4.66476 3.96155 4.52691 4.18351 4.34524 4.36673C4.16358 4.54996 3.9428 4.6897 3.69946 4.77548L2.61546 5.12648C2.43437 5.19048 2.27775 5.30937 2.16743 5.4666C2.05712 5.62383 1.99859 5.81155 2.00003 6.00361C2.00146 6.19568 2.06277 6.38251 2.17541 6.53808C2.28806 6.69364 2.44643 6.81019 2.62846 6.87148L3.69546 7.21848C3.94767 7.30297 4.17673 7.44506 4.36446 7.63348C4.41519 7.6837 4.46262 7.73715 4.50646 7.79348C4.62481 7.94615 4.71614 8.11797 4.77646 8.30148L5.12846 9.38148C5.19143 9.56222 5.30914 9.71886 5.46524 9.82962ZM4.00746 6.26448L3.15246 5.99948L4.01646 5.71848C4.41071 5.58184 4.76826 5.35637 5.06146 5.05948C5.35281 4.76039 5.57294 4.39943 5.70546 4.00348L5.97046 3.14448L6.25046 4.00648C6.38349 4.40638 6.60809 4.76969 6.90636 5.06744C7.20463 5.36519 7.56833 5.58915 7.96846 5.72148L8.84846 5.99048L7.98746 6.27048C7.58707 6.40272 7.22321 6.62691 6.92505 6.92507C6.62689 7.22324 6.4027 7.58709 6.27046 7.98748L6.00546 8.84448L5.72646 7.98548C5.63026 7.69329 5.48483 7.41968 5.29646 7.17648C5.22699 7.08766 5.15254 7.00286 5.07346 6.92248C4.7738 6.62366 4.4089 6.39842 4.00746 6.26448ZM10.5344 13.8515C10.6703 13.9477 10.8328 13.9994 10.9994 13.9995C11.1642 13.998 11.3245 13.9456 11.4584 13.8495C11.5979 13.751 11.7029 13.611 11.7584 13.4495L12.0064 12.6875C12.0595 12.529 12.1485 12.385 12.2664 12.2665C12.3837 12.148 12.5277 12.0592 12.6864 12.0075L13.4584 11.7555C13.6161 11.701 13.7528 11.5985 13.8494 11.4625C13.9227 11.3595 13.9706 11.2405 13.9891 11.1154C14.0076 10.9903 13.9962 10.8626 13.9558 10.7428C13.9154 10.623 13.8472 10.5144 13.7567 10.4261C13.6662 10.3377 13.5561 10.272 13.4354 10.2345L12.6714 9.98548C12.5132 9.93291 12.3695 9.8443 12.2514 9.72663C12.1334 9.60896 12.0444 9.46547 11.9914 9.30748L11.7394 8.53348C11.685 8.37623 11.5825 8.24011 11.4464 8.14448C11.3443 8.07153 11.2266 8.02359 11.1026 8.00453C10.9787 7.98547 10.8519 7.99582 10.7327 8.03475C10.6135 8.07369 10.5051 8.1401 10.4163 8.22865C10.3274 8.31719 10.2607 8.42538 10.2214 8.54448L9.97435 9.30648C9.92207 9.46413 9.83452 9.60777 9.71835 9.72648C9.60382 9.84272 9.46428 9.9313 9.31035 9.98548L8.53435 10.2385C8.41689 10.2793 8.31057 10.347 8.22382 10.4361C8.13708 10.5252 8.0723 10.6333 8.03464 10.7518C7.99698 10.8704 7.98746 10.996 8.00686 11.1189C8.02625 11.2417 8.07401 11.3583 8.14635 11.4595C8.24456 11.5993 8.38462 11.7044 8.54635 11.7595L9.30935 12.0065C9.46821 12.0599 9.61262 12.1492 9.73135 12.2675C9.84958 12.3857 9.93801 12.5304 9.98935 12.6895L10.2424 13.4635C10.2971 13.6199 10.3992 13.7555 10.5344 13.8515ZM9.62035 11.0585L9.44235 10.9995L9.62635 10.9355C9.92811 10.8305 10.2018 10.6578 10.4264 10.4305C10.6528 10.2015 10.8238 9.92374 10.9264 9.61848L10.9844 9.44048L11.0434 9.62148C11.1453 9.92819 11.3175 10.2069 11.5461 10.4353C11.7748 10.6638 12.0536 10.8357 12.3604 10.9375L12.5554 11.0005L12.3754 11.0595C12.068 11.1617 11.7888 11.3344 11.5601 11.5637C11.3314 11.7931 11.1596 12.0728 11.0584 12.3805L10.9994 12.5615L10.9414 12.3805C10.84 12.0721 10.6676 11.7919 10.4382 11.5623C10.2088 11.3326 9.92863 11.1601 9.62035 11.0585Z"></path></svg>'},6670:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 5C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5H6ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"></path></svg>'},3884:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path shape-rendering="optimizeQuality" d="M7.14645 0.646447C7.34171 0.451184 7.65829 0.451184 7.85355 0.646447L9.35355 2.14645C9.54882 2.34171 9.54882 2.65829 9.35355 2.85355L7.85355 4.35355C7.65829 4.54882 7.34171 4.54882 7.14645 4.35355C6.95118 4.15829 6.95118 3.84171 7.14645 3.64645L7.7885 3.00439C5.12517 3.11522 3 5.30943 3 8C3 9.56799 3.72118 10.9672 4.85185 11.8847C5.06627 12.0587 5.09904 12.3736 4.92503 12.588C4.75103 12.8024 4.43615 12.8352 4.22172 12.6612C2.86712 11.5619 2 9.88205 2 8C2 4.75447 4.57689 2.1108 7.79629 2.00339L7.14645 1.35355C6.95118 1.15829 6.95118 0.841709 7.14645 0.646447ZM11.075 3.41199C11.249 3.19756 11.5639 3.1648 11.7783 3.3388C13.1329 4.43806 14 6.11795 14 8C14 11.2455 11.4231 13.8892 8.20371 13.9966L8.85355 14.6464C9.04882 14.8417 9.04882 15.1583 8.85355 15.3536C8.65829 15.5488 8.34171 15.5488 8.14645 15.3536L6.64645 13.8536C6.55268 13.7598 6.5 13.6326 6.5 13.5C6.5 13.3674 6.55268 13.2402 6.64645 13.1464L8.14645 11.6464C8.34171 11.4512 8.65829 11.4512 8.85355 11.6464C9.04882 11.8417 9.04882 12.1583 8.85355 12.3536L8.2115 12.9956C10.8748 12.8848 13 10.6906 13 8C13 6.43201 12.2788 5.03283 11.1482 4.1153C10.9337 3.94129 10.901 3.62641 11.075 3.41199Z"></path></svg>'},4147:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 6C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6ZM2.58722 10.1357C1.80426 9.3566 1.80426 8.0934 2.58722 7.31428L7.32688 2.59785C7.70082 2.22574 8.20735 2.01572 8.73617 2.01353L11.9867 2.00002C13.1029 1.99538 14.008 2.89877 13.9999 4.00947L13.9755 7.3725C13.9717 7.89662 13.7608 8.3982 13.3884 8.76882L8.71865 13.4157C7.93569 14.1948 6.66627 14.1948 5.88331 13.4157L2.58722 10.1357ZM3.29605 8.01964C2.90458 8.4092 2.90458 9.0408 3.29606 9.43036L6.59214 12.7103C6.98362 13.0999 7.61834 13.0999 8.00982 12.7103L12.6795 8.06346C12.8658 7.87815 12.9712 7.62736 12.9731 7.3653L12.9975 4.00227C13.0016 3.44692 12.549 2.99522 11.9909 2.99754L8.74036 3.01105C8.47595 3.01215 8.22268 3.11716 8.03571 3.30321L3.29605 8.01964Z"></path></svg>'},7858:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.85401 2.14649C5.04901 2.34149 5.04901 2.65849 4.85401 2.85349L2.85401 4.85349C2.65901 5.04849 2.34201 5.04849 2.14701 4.85349L1.14701 3.85349C0.952013 3.65849 0.952013 3.34149 1.14701 3.14649C1.34201 2.95149 1.65901 2.95149 1.85401 3.14649L2.50001 3.79249L4.14601 2.14649C4.34101 1.95149 4.65901 1.95149 4.85401 2.14649ZM14.5 4.00049H6.50001C6.22401 4.00049 6.00001 3.77649 6.00001 3.50049C6.00001 3.22449 6.22401 3.00049 6.50001 3.00049H14.5C14.776 3.00049 15 3.22449 15 3.50049C15 3.77649 14.776 4.00049 14.5 4.00049ZM4.85401 11.1465C5.04901 11.3415 5.04901 11.6585 4.85401 11.8535L2.85401 13.8535C2.65901 14.0485 2.34201 14.0485 2.14701 13.8535L1.14701 12.8535C0.952013 12.6585 0.952013 12.3415 1.14701 12.1465C1.34201 11.9515 1.65901 11.9515 1.85401 12.1465L2.50001 12.7925L4.14601 11.1465C4.34101 10.9515 4.65901 10.9515 4.85401 11.1465ZM14.5 13.0005H6.50001C6.22401 13.0005 6.00001 12.7765 6.00001 12.5005C6.00001 12.2245 6.22401 12.0005 6.50001 12.0005H14.5C14.776 12.0005 15 12.2245 15 12.5005C15 12.7765 14.776 13.0005 14.5 13.0005ZM4.85401 6.64649C5.04901 6.84149 5.04901 7.15849 4.85401 7.35349L2.85401 9.35349C2.65901 9.54849 2.34201 9.54849 2.14701 9.35349L1.14701 8.35349C0.952013 8.15849 0.952013 7.84149 1.14701 7.64649C1.34201 7.45149 1.65901 7.45149 1.85401 7.64649L2.50001 8.29249L4.14601 6.64649C4.34101 6.45149 4.65901 6.45149 4.85401 6.64649ZM14.5 8.50049H6.50001C6.22401 8.50049 6.00001 8.27649 6.00001 8.00049C6.00001 7.72449 6.22401 7.50049 6.50001 7.50049H14.5C14.776 7.50049 15 7.72449 15 8.00049C15 8.27649 14.776 8.50049 14.5 8.50049Z"></path></svg>'},8314:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 3.50049C2 3.22435 2.22386 3.00049 2.5 3.00049H13.5C13.7761 3.00049 14 3.22435 14 3.50049C14 3.77663 13.7761 4.00049 13.5 4.00049H2.5C2.22386 4.00049 2 3.77663 2 3.50049ZM2 7.50049C2 7.22435 2.22386 7.00049 2.5 7.00049H13.5C13.7761 7.00049 14 7.22435 14 7.50049C14 7.77663 13.7761 8.00049 13.5 8.00049H2.5C2.22386 8.00049 2 7.77663 2 7.50049ZM2 11.5005C2 11.2243 2.22386 11.0005 2.5 11.0005H13.5C13.7761 11.0005 14 11.2243 14 11.5005C14 11.7766 13.7761 12.0005 13.5 12.0005H2.5C2.22386 12.0005 2 11.7766 2 11.5005Z"></path></svg>'},3685:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 2H10C10 0.897 9.103 0 8 0C6.897 0 6 0.897 6 2H2C1.724 2 1.5 2.224 1.5 2.5C1.5 2.776 1.724 3 2 3H2.54L3.349 12.708C3.456 13.994 4.55 15 5.84 15H10.159C11.449 15 12.543 13.993 12.65 12.708L13.459 3H13.999C14.275 3 14.499 2.776 14.499 2.5C14.499 2.224 14.275 2 13.999 2H14ZM8 1C8.551 1 9 1.449 9 2H7C7 1.449 7.449 1 8 1ZM11.655 12.625C11.591 13.396 10.934 14 10.16 14H5.841C5.067 14 4.41 13.396 4.346 12.625L3.544 3H12.458L11.656 12.625H11.655ZM7 5.5V11.5C7 11.776 6.776 12 6.5 12C6.224 12 6 11.776 6 11.5V5.5C6 5.224 6.224 5 6.5 5C6.776 5 7 5.224 7 5.5ZM10 5.5V11.5C10 11.776 9.776 12 9.5 12C9.224 12 9 11.776 9 11.5V5.5C9 5.224 9.224 5 9.5 5C9.776 5 10 5.224 10 5.5Z"></path></svg>'},663:M=>{M.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.831 11.965L9.206 1.714C8.965 1.274 8.503 1 8 1C7.497 1 7.035 1.274 6.794 1.714L1.169 11.965C1.059 12.167 1 12.395 1 12.625C1 13.383 1.617 14 2.375 14H13.625C14.383 14 15 13.383 15 12.625C15 12.395 14.941 12.167 14.831 11.965ZM13.625 13H2.375C2.168 13 2 12.832 2 12.625C2 12.561 2.016 12.5 2.046 12.445L7.671 2.195C7.736 2.075 7.863 2 8 2C8.137 2 8.264 2.075 8.329 2.195L13.954 12.445C13.984 12.501 14 12.561 14 12.625C14 12.832 13.832 13 13.625 13ZM8.75 11.25C8.75 11.664 8.414 12 8 12C7.586 12 7.25 11.664 7.25 11.25C7.25 10.836 7.586 10.5 8 10.5C8.414 10.5 8.75 10.836 8.75 11.25ZM7.5 9V5.5C7.5 5.224 7.724 5 8 5C8.276 5 8.5 5.224 8.5 5.5V9C8.5 9.276 8.276 9.5 8 9.5C7.724 9.5 7.5 9.276 7.5 9Z"></path></svg>'},4339:M=>{M.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM13.854 13.146L13.147 13.853L11.501 12.207L9.855 13.853L9.148 13.146L10.794 11.5L9.148 9.854L9.855 9.147L11.501 10.793L13.147 9.147L13.854 9.854L12.208 11.5L13.854 13.146Z" fill="var(--vscode-list-errorForeground, currentColor)"></path></svg>'},8726:M=>{M.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM11.5 14.25C10.963 14.25 10.445 14.105 10 13.844V14.5H9V12.5L9.5 12H11.5V13H10.536C10.823 13.16 11.155 13.25 11.5 13.25C12.177 13.25 12.805 12.907 13.137 12.354L13.994 12.87C13.481 13.722 12.525 14.25 11.5 14.25ZM14 10.5L13.5 11H11.5V10H12.464C12.177 9.84 11.845 9.75 11.5 9.75C10.823 9.75 10.195 10.093 9.863 10.646L9.006 10.13C9.519 9.278 10.475 8.75 11.5 8.75C12.037 8.75 12.555 8.895 13 9.156V8.5H14V10.5Z" fill="var(--vscode-editorWarning-foreground, currentColor)"></path></svg>'},9336:M=>{M.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM11.393 13.309L10.7 13.401L8.7 11.901L9.3 11.1L10.909 12.307L13.357 9.192L14.143 9.809L11.393 13.309Z" fill="var(--vscode-notebookStatusSuccessIcon-foreground, currentColor)"></path></svg>'},8440:M=>{M.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:#FFFFFF;fill-opacity:1;" d="M 14 0 C 6.265625 0 0 6.265625 0 14 C 0 20.195312 4.007812 25.425781 9.574219 27.285156 C 10.273438 27.402344 10.535156 26.984375 10.535156 26.617188 C 10.535156 26.285156 10.515625 25.183594 10.515625 24.011719 C 7 24.660156 6.089844 23.152344 5.808594 22.363281 C 5.652344 21.960938 4.972656 20.722656 4.375 20.386719 C 3.886719 20.125 3.183594 19.476562 4.359375 19.460938 C 5.460938 19.441406 6.246094 20.476562 6.511719 20.894531 C 7.769531 23.011719 9.785156 22.417969 10.585938 22.050781 C 10.710938 21.140625 11.078125 20.527344 11.480469 20.175781 C 8.363281 19.828125 5.109375 18.621094 5.109375 13.265625 C 5.109375 11.742188 5.652344 10.484375 6.546875 9.503906 C 6.402344 9.152344 5.914062 7.714844 6.683594 5.792969 C 6.683594 5.792969 7.859375 5.425781 10.535156 7.226562 C 11.652344 6.914062 12.847656 6.753906 14.035156 6.753906 C 15.226562 6.753906 16.414062 6.914062 17.535156 7.226562 C 20.210938 5.410156 21.386719 5.792969 21.386719 5.792969 C 22.152344 7.714844 21.664062 9.152344 21.523438 9.503906 C 22.417969 10.484375 22.960938 11.726562 22.960938 13.265625 C 22.960938 18.636719 19.6875 19.828125 16.574219 20.175781 C 17.078125 20.613281 17.515625 21.453125 17.515625 22.765625 C 17.515625 24.640625 17.5 26.144531 17.5 26.617188 C 17.5 26.984375 17.761719 27.421875 18.460938 27.285156 C 24.160156 25.359375 27.996094 20.015625 28 14 C 28 6.265625 21.734375 0 14 0 Z M 14 0 "></path></g></svg>'}},hi={};function ee(M){var _=hi[M];if(_!==void 0)return _.exports;var j=hi[M]={id:M,exports:{}};return ql[M].call(j.exports,j,j.exports,ee),j.exports}o(ee,"__webpack_require__"),ee.n=M=>{var _=M&&M.__esModule?()=>M.default:()=>M;return ee.d(_,{a:_}),_},ee.d=(M,_)=>{for(var j in _)ee.o(_,j)&&!ee.o(M,j)&&Object.defineProperty(M,j,{enumerable:!0,get:_[j]})},ee.o=(M,_)=>Object.prototype.hasOwnProperty.call(M,_),ee.nc=void 0;var lc={};(()=>{"use strict";var Mt;var M=ee(5072),_=ee.n(M),j=ee(7825),K=ee.n(j),V=ee(7659),L=ee.n(V),C=ee(5056),h=ee.n(C),D=ee(540),A=ee.n(D),$=ee(1113),H=ee.n($),G=ee(2410),Y={};Y.styleTagTransform=H(),Y.setAttributes=h(),Y.insert=L().bind(null,"head"),Y.domAPI=K(),Y.insertStyleElement=A();var Pe=_()(G.A,Y);const He=G.A&&G.A.locals?G.A.locals:void 0;var he=ee(3554),Oe={};Oe.styleTagTransform=H(),Oe.setAttributes=h(),Oe.insert=L().bind(null,"head"),Oe.domAPI=K(),Oe.insertStyleElement=A();var at=_()(he.A,Oe);const U=he.A&&he.A.locals?he.A.locals:void 0;var R=ee(7334),l=ee(6540),le=ee(961);const I=o(({className:r="",src:a,title:u})=>l.createElement("span",{className:`icon ${r}`,title:u,dangerouslySetInnerHTML:{__html:a}}),"Icon"),Q=null,O=l.createElement(I,{src:ee(7290)}),F=l.createElement(I,{src:ee(5898)}),oe=l.createElement(I,{src:ee(2631),className:"check"}),X=l.createElement(I,{src:ee(8945)}),ce=l.createElement(I,{src:ee(8251)}),ge=l.createElement(I,{src:ee(8674),className:"pending"}),de=l.createElement(I,{src:ee(1019),className:"close"}),xe=l.createElement(I,{src:ee(7548)}),De=l.createElement(I,{src:ee(5787)}),Ve=l.createElement(I,{src:ee(6270)}),Xe=l.createElement(I,{src:ee(4837)}),tt=l.createElement(I,{src:ee(5473)}),vt=l.createElement(I,{src:ee(1456)}),Ct=l.createElement(I,{src:ee(979)}),Nt=l.createElement(I,{src:ee(425)}),je=l.createElement(I,{src:ee(2400)}),B=l.createElement(I,{src:ee(9494)}),ne=l.createElement(I,{src:ee(4551)}),_e=l.createElement(I,{src:ee(9301)}),x=l.createElement(I,{src:ee(4593)}),P=l.createElement(I,{className:"loading",src:ee(2775)}),we=l.createElement(I,{src:ee(3689)}),Le=l.createElement(I,{src:ee(4069)}),Te=l.createElement(I,{src:ee(4826)}),We=l.createElement(I,{src:ee(4468)}),wt=l.createElement(I,{src:ee(4759)}),Se=l.createElement(I,{src:ee(6276)}),Ae=l.createElement(I,{src:ee(7830)}),Rt=l.createElement(I,{src:ee(6193)}),go=l.createElement(I,{src:ee(6670)}),It=l.createElement(I,{src:ee(3884)}),gi=l.createElement(I,{src:ee(4147)}),Ql=l.createElement(I,{src:ee(7858)}),xt=l.createElement(I,{src:ee(8314)}),Sr=l.createElement(I,{src:ee(3685)}),vn=l.createElement(I,{src:ee(663)}),Tn=l.createElement(I,{src:ee(7907)}),vi=l.createElement(I,{src:ee(3072),className:"skip"}),Lr=l.createElement(I,{className:"copilot-icon",src:ee(4339)}),Ci=l.createElement(I,{className:"copilot-icon",src:ee(8726)}),yi=l.createElement(I,{className:"copilot-icon",src:ee(9336)});function Kl(){const[r,a]=(0,l.useState)([0,0]);return(0,l.useLayoutEffect)(()=>{function u(){a([window.innerWidth,window.innerHeight])}return o(u,"updateSize"),window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),r}o(Kl,"useWindowSize");const Sn=o(({optionsContext:r,defaultOptionLabel:a,defaultOptionValue:u,defaultAction:d,allOptions:c,optionsTitle:p,disabled:v,hasSingleAction:y,spreadable:w,isSecondary:k,primaryOptionValue:z})=>{const[Z,te]=(0,l.useState)(!1),ie=o(Ce=>{Ce.target instanceof HTMLElement&&Ce.target.classList.contains("split-right")||te(!1)},"onHideAction");(0,l.useEffect)(()=>{const Ce=o(se=>ie(se),"onClickOrKey");Z?(document.addEventListener("click",Ce),document.addEventListener("keydown",Ce)):(document.removeEventListener("click",Ce),document.removeEventListener("keydown",Ce))},[Z,te]);const q=(0,l.useRef)();return Kl(),l.createElement("div",{className:`dropdown-container${w?" spreadable":""}`,ref:q},q.current&&w&&q.current.clientWidth>375&&c&&!y?c().map(({label:Ce,value:se,action:Ee,optionDisabled:ve})=>{const fe=z&&se===z;return l.createElement("button",{className:`inlined-dropdown${fe?"":" secondary"}`,key:se,title:Ce,disabled:ve||v,onClick:Ee,value:se},Ce)}):l.createElement("div",{className:"primary-split-button"},l.createElement("button",{className:`split-left${k?" secondary":""}`,disabled:v,onClick:d,value:u(),title:typeof a()=="string"?a():p},a()),y?null:l.createElement("div",{className:`split${k?" secondary":""}${v?" disabled":""}`},l.createElement("div",{className:`separator${v?" disabled":""}`})),y?null:l.createElement("button",{className:`split-right${k?" secondary":""}`,title:p,disabled:v,"aria-expanded":Z,onClick:o(Ce=>{Ce.preventDefault();const se=Ce.target.getBoundingClientRect(),Ee=se.left,ve=se.bottom;Ce.target.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,clientX:Ee,clientY:ve})),Ce.stopPropagation()},"onClick"),onMouseDown:o(()=>te(!0),"onMouseDown"),onKeyDown:o(Ce=>{(Ce.key==="Enter"||Ce.key===" ")&&te(!0)},"onKeyDown"),"data-vscode-context":r()},ce)))},"contextDropdown_ContextDropdown"),lt="\xA0",vo=o(({children:r})=>{const a=l.Children.count(r);return l.createElement(l.Fragment,{children:l.Children.map(r,(u,d)=>typeof u=="string"?`${d>0?lt:""}${u}${d<a-1&&typeof r[d+1]!="string"?lt:""}`:u)})},"Spaced");var wi=ee(7975),xi=ee(4353),Qn=ee.n(xi),Ei=ee(6279),Kn=ee.n(Ei),Yl=ee(3581),Wt=ee.n(Yl),Co=Object.defineProperty,en=o((r,a,u)=>a in r?Co(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"__defNormalProp"),yo=o((r,a,u)=>en(r,typeof a!="symbol"?a+"":a,u),"__publicField");function Gl(r){return{dispose:r}}o(Gl,"toDisposable");function wo(r){return Gl(()=>xo(r))}o(wo,"lifecycle_combinedDisposable");function xo(r){for(;r.length;){const a=r.pop();a==null||a.dispose()}}o(xo,"disposeAll");function bi(r,a){return a.push(r),r}o(bi,"addDisposable");const ni=class ni{constructor(){yo(this,"_isDisposed",!1),yo(this,"_disposables",[])}dispose(){this._isDisposed||(this._isDisposed=!0,xo(this._disposables),this._disposables=[])}_register(a){return this._isDisposed?a.dispose():this._disposables.push(a),a}get isDisposed(){return this._isDisposed}};o(ni,"Disposable");let Eo=ni;var ki=Object.defineProperty,bo=o((r,a,u)=>a in r?ki(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"utils_defNormalProp"),nt=o((r,a,u)=>bo(r,typeof a!="symbol"?a+"":a,u),"utils_publicField");Qn().extend(Kn(),{thresholds:[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:6,d:"day"},{l:"w",r:7},{l:"ww",r:3,d:"week"},{l:"M",r:4},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}]}),Qn().extend(Wt()),Qn().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});function _i(r,a){const u=Object.create(null);return r.filter(d=>{const c=a(d);return u[c]?!1:(u[c]=!0,!0)})}o(_i,"uniqBy");function Sa(...r){return(a,u=null,d)=>{const c=combinedDisposable(r.map(p=>p(v=>a.call(u,v))));return d&&d.push(c),c}}o(Sa,"anyEvent");function Mi(r,a){return(u,d=null,c)=>r(p=>a(p)&&u.call(d,p),null,c)}o(Mi,"filterEvent");function Yn(r){return(a,u=null,d)=>{const c=r(p=>(c.dispose(),a.call(u,p)),null,d);return c}}o(Yn,"onceEvent");function ko(r){return/^[a-zA-Z]:\\/.test(r)}o(ko,"isWindowsPath");function Xl(r,a,u=!1,d=sep){return(ko(r)||u)&&(r=r.toLowerCase(),a=a.toLowerCase()),r===a?!0:(r.charAt(r.length-1)!==d&&(r+=d),a.startsWith(r))}o(Xl,"isDescendant");function _o(r,a){return r.reduce((u,d)=>{const c=a(d);return u[c]=[...u[c]||[],d],u},Object.create(null))}o(_o,"groupBy");const $n=class $n extends Error{constructor(a){super(`Unreachable case: ${a}`)}};o($n,"UnreachableCaseError");let Nr=$n;function Ti(r){return!!r.errors}o(Ti,"isHookError");function Si(r){let a=!0;if(r.errors&&Array.isArray(r.errors)){for(const u of r.errors)if(!u.field||!u.value||!u.status){a=!1;break}}else a=!1;return a}o(Si,"hasFieldErrors");function Li(r){if(!(r instanceof Error))return typeof r=="string"?r:r.gitErrorCode?`${r.message}. Please check git output for more details`:r.stderr?`${r.stderr}. Please check git output for more details`:"Error";let a=r.message,u;if(r.message==="Validation Failed"&&Si(r))u=r.errors.map(d=>`Value "${d.value}" cannot be set for field ${d.field} (code: ${d.status})`).join(", ");else{if(r.message.startsWith("Validation Failed:"))return r.message;if(Ti(r)&&r.errors)return r.errors.map(d=>typeof d=="string"?d:d.message).join(", ")}return u&&(a=`${a}: ${u}`),a}o(Li,"formatError");async function Mo(r){return new Promise(a=>{const u=r(d=>{u.dispose(),a(d)})})}o(Mo,"asPromise");async function Jl(r,a){return Promise.race([r,new Promise(u=>{setTimeout(()=>u(void 0),a)})])}o(Jl,"promiseWithTimeout");function tn(r){const a=Qn()(r),u=Date.now();return a.diff(u,"month"),a.diff(u,"month")<1?a.fromNow():a.diff(u,"year")<1?`on ${a.format("MMM D")}`:`on ${a.format("MMM D, YYYY")}`}o(tn,"dateFromNow");function qt(r,a,u=!1){r.startsWith("#")&&(r=r.substring(1));const d=Rr(r);if(a){const c=Ni(d.r,d.g,d.b),p=.6,v=.18,y=.3,w=(d.r*.2126+d.g*.7152+d.b*.0722)/255,k=Math.max(0,Math.min((w-p)*-1e3,1)),z=(p-w)*100*k,Z=Rr(Gn(c.h,c.s,c.l+z)),te=`#${Gn(c.h,c.s,c.l+z)}`,ie=u?`#${Cn({...d,a:v})}`:`rgba(${d.r},${d.g},${d.b},${v})`,q=u?`#${Cn({...Z,a:y})}`:`rgba(${Z.r},${Z.g},${Z.b},${y})`;return{textColor:te,backgroundColor:ie,borderColor:q}}else return{textColor:`#${Ri(d)}`,backgroundColor:`#${r}`,borderColor:`#${r}`}}o(qt,"utils_gitHubLabelColor");const Cn=o(r=>{const a=[r.r,r.g,r.b];return r.a&&a.push(Math.floor(r.a*255)),a.map(u=>u.toString(16).padStart(2,"0")).join("")},"rgbToHex");function Rr(r){const a=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}o(Rr,"hexToRgb");function Ni(r,a,u){r/=255,a/=255,u/=255;let d=Math.min(r,a,u),c=Math.max(r,a,u),p=c-d,v=0,y=0,w=0;return p==0?v=0:c==r?v=(a-u)/p%6:c==a?v=(u-r)/p+2:v=(r-a)/p+4,v=Math.round(v*60),v<0&&(v+=360),w=(c+d)/2,y=p==0?0:p/(1-Math.abs(2*w-1)),y=+(y*100).toFixed(1),w=+(w*100).toFixed(1),{h:v,s:y,l:w}}o(Ni,"rgbToHsl");function Gn(r,a,u){const d=u/100,c=a*Math.min(d,1-d)/100,p=o(v=>{const y=(v+r/30)%12,w=d-c*Math.max(Math.min(y-3,9-y,1),-1);return Math.round(255*w).toString(16).padStart(2,"0")},"f");return`${p(0)}${p(8)}${p(4)}`}o(Gn,"hslToHex");function Ri(r){return(.299*r.r+.587*r.g+.114*r.b)/255>.5?"000000":"ffffff"}o(Ri,"contrastColor");var Pi=(r=>(r[r.Period=46]="Period",r[r.Slash=47]="Slash",r[r.A=65]="A",r[r.Z=90]="Z",r[r.Backslash=92]="Backslash",r[r.a=97]="a",r[r.z=122]="z",r))(Pi||{});function To(r,a){return r<a?-1:r>a?1:0}o(To,"compare");function Pr(r,a,u=0,d=r.length,c=0,p=a.length){for(;u<d&&c<p;u++,c++){const w=r.charCodeAt(u),k=a.charCodeAt(c);if(w<k)return-1;if(w>k)return 1}const v=d-u,y=p-c;return v<y?-1:v>y?1:0}o(Pr,"compareSubstring");function Ln(r,a){return Or(r,a,0,r.length,0,a.length)}o(Ln,"compareIgnoreCase");function Or(r,a,u=0,d=r.length,c=0,p=a.length){for(;u<d&&c<p;u++,c++){let w=r.charCodeAt(u),k=a.charCodeAt(c);if(w===k)continue;const z=w-k;if(!(z===32&&nn(k))&&!(z===-32&&nn(w)))return Dr(w)&&Dr(k)?z:Pr(r.toLowerCase(),a.toLowerCase(),u,d,c,p)}const v=d-u,y=p-c;return v<y?-1:v>y?1:0}o(Or,"compareSubstringIgnoreCase");function Dr(r){return r>=97&&r<=122}o(Dr,"isLowerAsciiLetter");function nn(r){return r>=65&&r<=90}o(nn,"isUpperAsciiLetter");const oo=class oo{constructor(){nt(this,"_value",""),nt(this,"_pos",0)}reset(a){return this._value=a,this._pos=0,this}next(){return this._pos+=1,this}hasNext(){return this._pos<this._value.length-1}cmp(a){const u=a.charCodeAt(0),d=this._value.charCodeAt(this._pos);return u-d}value(){return this._value[this._pos]}};o(oo,"StringIterator");let Ar=oo;const io=class io{constructor(a=!0){this._caseSensitive=a,nt(this,"_value"),nt(this,"_from"),nt(this,"_to")}reset(a){return this._value=a,this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++)if(this._value.charCodeAt(this._to)===46)if(a)this._from++;else break;else a=!1;return this}cmp(a){return this._caseSensitive?Pr(a,this._value,0,a.length,this._from,this._to):Or(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}};o(io,"ConfigKeysIterator");let Ir=io;const lo=class lo{constructor(a=!0,u=!0){this._splitOnBackslash=a,this._caseSensitive=u,nt(this,"_value"),nt(this,"_from"),nt(this,"_to")}reset(a){return this._value=a.replace(/\\$|\/$/,""),this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++){const u=this._value.charCodeAt(this._to);if(u===47||this._splitOnBackslash&&u===92)if(a)this._from++;else break;else a=!1}return this}cmp(a){return this._caseSensitive?Pr(a,this._value,0,a.length,this._from,this._to):Or(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}};o(lo,"PathIterator");let Hr=lo;var Oi=(r=>(r[r.Scheme=1]="Scheme",r[r.Authority=2]="Authority",r[r.Path=3]="Path",r[r.Query=4]="Query",r[r.Fragment=5]="Fragment",r))(Oi||{});const so=class so{constructor(a){this._ignorePathCasing=a,nt(this,"_pathIterator"),nt(this,"_value"),nt(this,"_states",[]),nt(this,"_stateIdx",0)}reset(a){return this._value=a,this._states=[],this._value.scheme&&this._states.push(1),this._value.authority&&this._states.push(2),this._value.path&&(this._pathIterator=new Hr(!1,!this._ignorePathCasing(a)),this._pathIterator.reset(a.path),this._pathIterator.value()&&this._states.push(3)),this._value.query&&this._states.push(4),this._value.fragment&&this._states.push(5),this._stateIdx=0,this}next(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1,this}hasNext(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1}cmp(a){if(this._states[this._stateIdx]===1)return Ln(a,this._value.scheme);if(this._states[this._stateIdx]===2)return Ln(a,this._value.authority);if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(a);if(this._states[this._stateIdx]===4)return To(a,this._value.query);if(this._states[this._stateIdx]===5)return To(a,this._value.fragment);throw new Error}value(){if(this._states[this._stateIdx]===1)return this._value.scheme;if(this._states[this._stateIdx]===2)return this._value.authority;if(this._states[this._stateIdx]===3)return this._pathIterator.value();if(this._states[this._stateIdx]===4)return this._value.query;if(this._states[this._stateIdx]===5)return this._value.fragment;throw new Error}};o(so,"UriIterator");let rn=so;function Di(r){const u=r.extensionUri.path,d=u.lastIndexOf(".");return d===-1?!1:u.substr(d+1).length>1}o(Di,"isPreRelease");const ao=class ao{constructor(){nt(this,"segment"),nt(this,"value"),nt(this,"key"),nt(this,"left"),nt(this,"mid"),nt(this,"right")}isEmpty(){return!this.left&&!this.mid&&!this.right&&!this.value}};o(ao,"TernarySearchTreeNode");let zt=ao;const bn=class bn{constructor(a){nt(this,"_iter"),nt(this,"_root"),this._iter=a}static forUris(a=()=>!1){return new bn(new rn(a))}static forPaths(){return new bn(new Hr)}static forStrings(){return new bn(new Ar)}static forConfigKeys(){return new bn(new Ir)}clear(){this._root=void 0}set(a,u){const d=this._iter.reset(a);let c;for(this._root||(this._root=new zt,this._root.segment=d.value()),c=this._root;;){const v=d.cmp(c.segment);if(v>0)c.left||(c.left=new zt,c.left.segment=d.value()),c=c.left;else if(v<0)c.right||(c.right=new zt,c.right.segment=d.value()),c=c.right;else if(d.hasNext())d.next(),c.mid||(c.mid=new zt,c.mid.segment=d.value()),c=c.mid;else break}const p=c.value;return c.value=u,c.key=a,p}get(a){var u;return(u=this._getNode(a))==null?void 0:u.value}_getNode(a){const u=this._iter.reset(a);let d=this._root;for(;d;){const c=u.cmp(d.segment);if(c>0)d=d.left;else if(c<0)d=d.right;else if(u.hasNext())u.next(),d=d.mid;else break}return d}has(a){const u=this._getNode(a);return!((u==null?void 0:u.value)===void 0&&(u==null?void 0:u.mid)===void 0)}delete(a){return this._delete(a,!1)}deleteSuperstr(a){return this._delete(a,!0)}_delete(a,u){const d=this._iter.reset(a),c=[];let p=this._root;for(;p;){const v=d.cmp(p.segment);if(v>0)c.push([1,p]),p=p.left;else if(v<0)c.push([-1,p]),p=p.right;else if(d.hasNext())d.next(),c.push([0,p]),p=p.mid;else{for(u?(p.left=void 0,p.mid=void 0,p.right=void 0):p.value=void 0;c.length>0&&p.isEmpty();){let[y,w]=c.pop();switch(y){case 1:w.left=void 0;break;case 0:w.mid=void 0;break;case-1:w.right=void 0;break}p=w}break}}}findSubstr(a){const u=this._iter.reset(a);let d=this._root,c;for(;d;){const p=u.cmp(d.segment);if(p>0)d=d.left;else if(p<0)d=d.right;else if(u.hasNext())u.next(),c=d.value||c,d=d.mid;else break}return d&&d.value||c}findSuperstr(a){const u=this._iter.reset(a);let d=this._root;for(;d;){const c=u.cmp(d.segment);if(c>0)d=d.left;else if(c<0)d=d.right;else if(u.hasNext())u.next(),d=d.mid;else return d.mid?this._entries(d.mid):void 0}}forEach(a){for(const[u,d]of this)a(d,u)}*[Symbol.iterator](){yield*this._entries(this._root)}*_entries(a){a&&(yield*this._entries(a.left),a.value&&(yield[a.key,a.value]),yield*this._entries(a.mid),yield*this._entries(a.right))}};o(bn,"TernarySearchTree");let Ai=bn;async function So(r,a,u){const d=[];r.replace(a,(v,...y)=>{const w=u(v,...y);return d.push(w),""});const c=await Promise.all(d);let p=0;return r.replace(a,()=>c[p++])}o(So,"stringReplaceAsync");async function Ii(r,a){for(let u=0;u<r.length;u++)if(await a(r[u],u,r))return u;return-1}o(Ii,"arrayFindIndexAsync");async function es(r,a,u){const d=Math.ceil(r.length/a);for(let c=0;c<d;c++){const p=r.slice(c*a,(c+1)*a);await Promise.all(p.map(u))}}o(es,"batchPromiseAll");function Lo(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}o(Lo,"escapeRegExp");function ts(r,a,u="..."){return r.length<=a?r:`${r.substr(0,a)}${u}`}o(ts,"truncate");const Pt=o(({date:r,href:a})=>{const[u,d]=(0,l.useState)(tn(r)),c=typeof r=="string"?new Date(r).toLocaleString():r.toLocaleString();return(0,l.useEffect)(()=>{d(tn(r));const v=o(()=>{const Z=Date.now(),te=typeof r=="string"?new Date(r).getTime():r.getTime(),ie=(Z-te)/(1e3*60);return ie<1?2e4:ie<60?2*6e4:ie<60*24?10*6e4:null},"getUpdateInterval")();if(v===null)return;let y;const w=o(()=>{document.visibilityState==="visible"&&d(tn(r))},"updateTimeString"),k=o(()=>{y=window.setInterval(w,v)},"startInterval"),z=o(()=>{document.visibilityState==="visible"?(d(tn(r)),y&&clearInterval(y),k()):y&&clearInterval(y)},"handleVisibilityChange");return k(),document.addEventListener("visibilitychange",z),()=>{y&&clearInterval(y),document.removeEventListener("visibilitychange",z)}},[r]),a?l.createElement("a",{href:a,className:"timestamp",title:c},u):l.createElement("div",{className:"timestamp",title:c},u)},"Timestamp"),ns=null;var No=(r=>(r[r.Query=0]="Query",r[r.All=1]="All",r[r.LocalPullRequest=2]="LocalPullRequest",r))(No||{}),Hi=(r=>(r.Approve="APPROVE",r.RequestChanges="REQUEST_CHANGES",r.Comment="COMMENT",r))(Hi||{}),mt=(r=>(r.Open="OPEN",r.Merged="MERGED",r.Closed="CLOSED",r))(mt||{}),Et=(r=>(r[r.Mergeable=0]="Mergeable",r[r.NotMergeable=1]="NotMergeable",r[r.Conflict=2]="Conflict",r[r.Unknown=3]="Unknown",r[r.Behind=4]="Behind",r))(Et||{}),on=(r=>(r[r.AwaitingChecks=0]="AwaitingChecks",r[r.Locked=1]="Locked",r[r.Mergeable=2]="Mergeable",r[r.Queued=3]="Queued",r[r.Unmergeable=4]="Unmergeable",r))(on||{}),Dt=(r=>(r.User="User",r.Organization="Organization",r.Mannequin="Mannequin",r.Bot="Bot",r))(Dt||{});function yn(r){switch(r){case"Organization":return"Organization";case"Mannequin":return"Mannequin";case"Bot":return"Bot";default:return"User"}}o(yn,"toAccountType");function Qt(r){var a;return ln(r)?r.id:(a=r.specialDisplayName)!=null?a:r.login}o(Qt,"reviewerId");function jt(r){var a,u,d;return ln(r)?(u=(a=r.name)!=null?a:r.slug)!=null?u:r.id:(d=r.specialDisplayName)!=null?d:r.login}o(jt,"reviewerLabel");function ln(r){return!!r.org}o(ln,"isITeam");function Fr(r){const a=r;return!!a.isAuthor&&!!a.isCommenter}o(Fr,"isISuggestedReviewer");var Xn=(r=>(r.Issue="Issue",r.PullRequest="PullRequest",r))(Xn||{}),Qe=(r=>(r.Success="success",r.Failure="failure",r.Neutral="neutral",r.Pending="pending",r.Unknown="unknown",r))(Qe||{});const Fi=o(({for:r})=>l.createElement(l.Fragment,null,r.avatarUrl&&r.avatarUrl.includes("githubusercontent.com")?l.createElement("img",{className:"avatar",src:r.avatarUrl,alt:"",role:"presentation","aria-hidden":"true"}):l.createElement(I,{className:"avatar-icon",src:ee(8440)})),"InnerAvatar"),bt=o(({for:r,link:a=!0,substituteIcon:u})=>a?l.createElement("a",{className:"avatar-link",href:r.url,title:r.url,"aria-hidden":"true"},u!=null?u:l.createElement(Fi,{for:r})):u!=null?u:l.createElement(Fi,{for:r}),"Avatar"),ct=o(({for:r,text:a=jt(r)})=>l.createElement("a",{className:"author-link",href:r.url,"aria-label":a,title:r.url},a),"AuthorLink");var Ue=(r=>(r[r.Committed=0]="Committed",r[r.Mentioned=1]="Mentioned",r[r.Subscribed=2]="Subscribed",r[r.Commented=3]="Commented",r[r.Reviewed=4]="Reviewed",r[r.NewCommitsSinceReview=5]="NewCommitsSinceReview",r[r.Labeled=6]="Labeled",r[r.Milestoned=7]="Milestoned",r[r.Assigned=8]="Assigned",r[r.Unassigned=9]="Unassigned",r[r.HeadRefDeleted=10]="HeadRefDeleted",r[r.Merged=11]="Merged",r[r.CrossReferenced=12]="CrossReferenced",r[r.Closed=13]="Closed",r[r.Reopened=14]="Reopened",r[r.BaseRefChanged=15]="BaseRefChanged",r[r.CopilotStarted=16]="CopilotStarted",r[r.CopilotFinished=17]="CopilotFinished",r[r.CopilotFinishedError=18]="CopilotFinishedError",r[r.Other=19]="Other",r))(Ue||{}),$e=(r=>(r.Comment="comment",r.Approve="approve",r.RequestChanges="requestChanges",r))($e||{}),rs=(r=>(r[r.None=0]="None",r[r.Available=1]="Available",r[r.ReviewedWithComments=2]="ReviewedWithComments",r[r.ReviewedWithoutComments=3]="ReviewedWithoutComments",r))(rs||{});function Vi(r){var a,u;const d=(a=r.submittedAt)!=null?a:r.createdAt,c=d&&Date.now()-new Date(d).getTime()<1e3*60,p=(u=r.state)!=null?u:r.event===Ue.Commented?"COMMENTED":void 0;let v="";if(c)switch(p){case"APPROVED":v="Pull request approved";break;case"CHANGES_REQUESTED":v="Changes requested on pull request";break;case"COMMENTED":v="Commented on pull request";break}return v}o(Vi,"ariaAnnouncementForReview");const Nn="comment-textarea",$i="edit-title-button";var os=Object.defineProperty,Jn=o((r,a,u)=>a in r?os(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"message_defNormalProp"),Vr=o((r,a,u)=>Jn(r,typeof a!="symbol"?a+"":a,u),"message_publicField");const Rn=acquireVsCodeApi(),ri=class ri{constructor(a){Vr(this,"_commandHandler"),Vr(this,"lastSentReq"),Vr(this,"pendingReplies"),this._commandHandler=a,this.lastSentReq=0,this.pendingReplies=Object.create(null),window.addEventListener("message",this.handleMessage.bind(this))}registerCommandHandler(a){this._commandHandler=a}async postMessage(a){const u=String(++this.lastSentReq);return new Promise((d,c)=>{this.pendingReplies[u]={resolve:d,reject:c},a=Object.assign(a,{req:u}),Rn.postMessage(a)})}handleMessage(a){const u=a.data;if(u.seq){const d=this.pendingReplies[u.seq];if(d){u.err?d.reject(u.err):d.resolve(u.res);return}}this._commandHandler&&this._commandHandler(u.res)}};o(ri,"MessageHandler");let $r=ri;function Ro(r){return new $r(r)}o(Ro,"getMessageHandler");function Po(){return Rn.getState()}o(Po,"getState");function Oo(r){const a=Po();a&&a.number&&a.number===(r==null?void 0:r.number)&&(r.pendingCommentText=a.pendingCommentText),r&&Rn.setState(r)}o(Oo,"setState");function Bi(r){const a=Rn.getState();Rn.setState(Object.assign(a,r))}o(Bi,"updateState");var Do=Object.defineProperty,is=o((r,a,u)=>a in r?Do(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"context_defNormalProp"),pe=o((r,a,u)=>is(r,typeof a!="symbol"?a+"":a,u),"context_publicField");const Pn=(Mt=class{constructor(a=Po(),u=null,d=null){this.pr=a,this.onchange=u,this._handler=d,pe(this,"setTitle",async c=>{const p=await this.postMessage({command:"pr.edit-title",args:{text:c}});this.updatePR({titleHTML:p.titleHTML})}),pe(this,"setDescription",c=>this.postMessage({command:"pr.edit-description",args:{text:c}})),pe(this,"checkout",()=>this.postMessage({command:"pr.checkout"})),pe(this,"openChanges",c=>this.postMessage({command:"pr.open-changes",args:{openToTheSide:c}})),pe(this,"copyPrLink",()=>this.postMessage({command:"pr.copy-prlink"})),pe(this,"copyVscodeDevLink",()=>this.postMessage({command:"pr.copy-vscodedevlink"})),pe(this,"cancelCodingAgent",c=>this.postMessage({command:"pr.cancel-coding-agent",args:c})),pe(this,"exitReviewMode",async()=>{if(this.pr)return this.postMessage({command:"pr.checkout-default-branch",args:this.pr.repositoryDefaultBranch})}),pe(this,"gotoChangesSinceReview",()=>this.postMessage({command:"pr.gotoChangesSinceReview"})),pe(this,"refresh",async()=>{this.pr&&(this.pr.busy=!0),this.updatePR(this.pr),await this.postMessage({command:"pr.refresh"}),this.pr&&(this.pr.busy=!1),this.updatePR(this.pr)}),pe(this,"checkMergeability",()=>this.postMessage({command:"pr.checkMergeability"})),pe(this,"changeEmail",async c=>{const p=await this.postMessage({command:"pr.change-email",args:c});this.updatePR({emailForCommit:p})}),pe(this,"merge",async c=>await this.postMessage({command:"pr.merge",args:c})),pe(this,"openOnGitHub",()=>this.postMessage({command:"pr.openOnGitHub"})),pe(this,"deleteBranch",()=>this.postMessage({command:"pr.deleteBranch"})),pe(this,"revert",async()=>{this.updatePR({busy:!0});const c=await this.postMessage({command:"pr.revert"});this.updatePR({busy:!1,...c})}),pe(this,"readyForReview",()=>this.postMessage({command:"pr.readyForReview"})),pe(this,"readyForReviewAndMerge",c=>this.postMessage({command:"pr.readyForReviewAndMerge",args:c})),pe(this,"convertToDraft",()=>this.postMessage({command:"pr.convertToDraft"})),pe(this,"addReviewers",()=>this.postMessage({command:"pr.change-reviewers"})),pe(this,"addReviewerCopilot",()=>this.postMessage({command:"pr.add-reviewer-copilot"})),pe(this,"changeBaseBranch",async()=>{const c=await this.postMessage({command:"pr.change-base-branch"});c!=null&&c.base&&this.updatePR({base:c.base,events:c.events})}),pe(this,"changeProjects",()=>this.postMessage({command:"pr.change-projects"})),pe(this,"removeProject",c=>this.postMessage({command:"pr.remove-project",args:c})),pe(this,"addMilestone",()=>this.postMessage({command:"pr.add-milestone"})),pe(this,"removeMilestone",()=>this.postMessage({command:"pr.remove-milestone"})),pe(this,"addAssignees",()=>this.postMessage({command:"pr.change-assignees"})),pe(this,"addAssigneeYourself",()=>this.postMessage({command:"pr.add-assignee-yourself"})),pe(this,"addAssigneeCopilot",()=>this.postMessage({command:"pr.add-assignee-copilot"})),pe(this,"addLabels",()=>this.postMessage({command:"pr.add-labels"})),pe(this,"create",()=>this.postMessage({command:"pr.open-create"})),pe(this,"deleteComment",async c=>{await this.postMessage({command:"pr.delete-comment",args:c});const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to delete comment");const{id:v,pullRequestReviewId:y}=c;if(!y){this.updatePR({events:p.events.filter(z=>z.id!==v)});return}const w=p.events.findIndex(z=>z.id===y);if(w===-1){console.error("Could not find review:",y);return}const k=p.events[w];if(!k.comments){console.error("No comments to delete for review:",y,k);return}p.events.splice(w,1,{...k,comments:k.comments.filter(z=>z.id!==v)}),this.updatePR(p)}),pe(this,"editComment",c=>this.postMessage({command:"pr.edit-comment",args:c})),pe(this,"generateDescription",()=>this.postMessage({command:"pr.generate-description"})),pe(this,"cancelGenerateDescription",()=>this.postMessage({command:"pr.cancel-generate-description"})),pe(this,"updateDraft",(c,p)=>{const y=Po().pendingCommentDrafts||Object.create(null);p!==y[c]&&(y[c]=p,this.updatePR({pendingCommentDrafts:y}))}),pe(this,"requestChanges",c=>this.submitReviewCommand("pr.request-changes",c)),pe(this,"approve",c=>this.submitReviewCommand("pr.approve",c)),pe(this,"submit",c=>this.submitReviewCommand("pr.submit",c)),pe(this,"deleteReview",async()=>{var c;try{const p=await this.postMessage({command:"pr.delete-review"}),v=this.pr,y=(c=v==null?void 0:v.events.filter(w=>!(w.event===Ue.Reviewed&&w.id===p.deletedReviewId)))!=null?c:[];return v&&y.length<v.events.length&&(v.busy=!1,v.pendingCommentText="",v.pendingCommentDrafts={},v.events=y,this.updatePR(v)),p}catch{return this.updatePR({busy:!1})}}),pe(this,"close",async c=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to close");try{const v=await this.postMessage({command:"pr.close",args:c});let y=[...p.events];v.commentEvent&&y.push(v.commentEvent),v.closeEvent&&y.push(v.closeEvent),this.updatePR({events:y,pendingCommentText:"",state:v.state})}catch{}}),pe(this,"removeLabel",async c=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to remove label");await this.postMessage({command:"pr.remove-label",args:c});const v=p.labels.filter(y=>y.name!==c);this.updatePR({labels:v})}),pe(this,"applyPatch",async c=>{this.postMessage({command:"pr.apply-patch",args:{comment:c}})}),pe(this,"reRequestReview",async c=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to re-request review");const{reviewers:v}=await this.postMessage({command:"pr.re-request-review",args:c});p.reviewers=v,this.updatePR(p)}),pe(this,"updateBranch",async()=>{var c,p;const{pr:v}=this;if(!v)throw new Error("Unexpectedly no pull request when trying to update branch");const y=await this.postMessage({command:"pr.update-branch"});v.events=(c=y.events)!=null?c:v.events,v.mergeable=(p=y.mergeable)!=null?p:v.mergeable,this.updatePR(v)}),pe(this,"dequeue",async()=>{const{pr:c}=this;if(!c)throw new Error("Unexpectedly no pull request when trying to dequeue");await this.postMessage({command:"pr.dequeue"})&&(c.mergeQueueEntry=void 0),this.updatePR(c)}),pe(this,"enqueue",async()=>{const{pr:c}=this;if(!c)throw new Error("Unexpectedly no pull request when trying to enqueue");const p=await this.postMessage({command:"pr.enqueue"});p.mergeQueueEntry&&(c.mergeQueueEntry=p.mergeQueueEntry),this.updatePR(c)}),pe(this,"openDiff",c=>this.postMessage({command:"pr.open-diff",args:{comment:c}})),pe(this,"toggleResolveComment",(c,p,v)=>{this.postMessage({command:"pr.resolve-comment-thread",args:{threadId:c,toResolve:v,thread:p}}).then(y=>{y?this.updatePR({events:y}):this.refresh()})}),pe(this,"openSessionLog",c=>this.postMessage({command:"pr.open-session-log",args:{link:c}})),pe(this,"openCommitChanges",async c=>{this.updatePR({loadingCommit:c});try{const p={commitSha:c};await this.postMessage({command:"pr.openCommitChanges",args:p})}finally{this.updatePR({loadingCommit:void 0})}}),pe(this,"setPR",c=>(this.pr=c,Oo(this.pr),this.onchange&&this.onchange(this.pr),this)),pe(this,"updatePR",c=>(Bi(c),this.pr=this.pr?{...this.pr,...c}:c,this.onchange&&this.onchange(this.pr),this)),pe(this,"handleMessage",c=>{var p;switch(c.command){case"pr.clear":this.setPR(void 0);return;case"pr.initialize":return this.setPR(c.pullrequest);case"update-state":return this.updatePR({state:c.state});case"pr.update-checkout-status":return this.updatePR({isCurrentlyCheckedOut:c.isCurrentlyCheckedOut});case"pr.deleteBranch":const v={};return c.branchTypes&&c.branchTypes.map(w=>{w==="local"?v.isLocalHeadDeleted=!0:(w==="remote"||w==="upstream")&&(v.isRemoteHeadDeleted=!0)}),this.updatePR(v);case"pr.enable-exit":return this.updatePR({isCurrentlyCheckedOut:!0});case"set-scroll":window.scrollTo(c.scrollPosition.x,c.scrollPosition.y);return;case"pr.scrollToPendingReview":const y=(p=document.getElementById("pending-review"))!=null?p:document.getElementById(Nn);y&&(y.scrollIntoView(),y.focus());return;case"pr.submitting-review":return this.updatePR({busy:!0,lastReviewType:c.lastReviewType});case"pr.append-review":return this.appendReview(c);case"pr.readying-for-review":return this.updatePR({busy:!0});case"pr.readied-for-review":return this.readyForReviewComplete(c)}}),d||(this._handler=Ro(this.handleMessage))}async submitReviewCommand(a,u){try{const d=await this.postMessage({command:a,args:u});return this.appendReview(d)}catch{return this.updatePR({busy:!1})}}appendReview(a){const{pr:u}=this;if(!u)throw new Error("Unexpectedly no pull request when trying to append review");const{events:d,reviewers:c,reviewedEvent:p}=a;if(u.busy=!1,!d){this.updatePR(u);return}c&&(u.reviewers=c),u.events=d.length===0?[...u.events,p]:d,p.event===Ue.Reviewed&&(u.currentUserReviewState=p.state),u.pendingCommentText="",u.pendingReviewType=void 0,this.updatePR(u)}readyForReviewComplete(a){const{pr:u}=this;if(!u)throw new Error("Unexpectedly no pull request when trying to ready for review");const{isDraft:d,reviewEvent:c,reviewers:p}=a;if(u.busy=!1,u.isDraft=d,!c){this.updatePR(u);return}p&&(u.reviewers=p),u.events=[...u.events,c],c.event===Ue.Reviewed&&(u.currentUserReviewState=c.state),a.autoMerge!==void 0&&(u.autoMerge=a.autoMerge,u.autoMergeMethod=u.defaultMergeMethod),this.updatePR(u)}async updateAutoMerge({autoMerge:a,autoMergeMethod:u}){const{pr:d}=this;if(!d)throw new Error("Unexpectedly no pull request when trying to update auto merge");const c=await this.postMessage({command:"pr.update-automerge",args:{autoMerge:a,autoMergeMethod:u}});d.autoMerge=c.autoMerge,d.autoMergeMethod=c.autoMergeMethod,this.updatePR(d)}postMessage(a){var u,d;return(d=(u=this._handler)==null?void 0:u.postMessage(a))!=null?d:Promise.resolve(void 0)}},o(Mt,"_PRContext"),Mt);pe(Pn,"instance",new Pn);let Je=Pn;const Fe=(0,l.createContext)(Je.instance);var ls=ee(7007);const er=new ls.EventEmitter;function tr(r){const[a,u]=(0,l.useState)(r);return(0,l.useEffect)(()=>{a!==r&&u(r)},[r]),[a,u]}o(tr,"useStateProp");const nr=o(({authorAssociation:r},a=u=>`(${u.toLowerCase()})`)=>r.toLowerCase()==="user"?a("you"):r&&r!=="NONE"?a(r):null,"association");function zr(r){var a;const{isPRDescription:u,children:d,comment:c,headerInEditMode:p}=r,{bodyHTML:v,body:y}=c,w=(a=c.id)!=null?a:-1,k=!!c.canEdit,z=!!c.canDelete,Z=c.pullRequestReviewId,[te,ie]=tr(y),[q,Ce]=tr(v),{deleteComment:se,editComment:Ee,setDescription:ve,pr:fe}=(0,l.useContext)(Fe),ke=(fe==null?void 0:fe.pendingCommentDrafts)&&fe.pendingCommentDrafts[w],[qe,et]=(0,l.useState)(!!ke),[ut,dt]=(0,l.useState)(!1),Xt=c.htmlUrl||c.url;if(qe)return l.cloneElement(p?l.createElement(jr,{for:c}):l.createElement(l.Fragment,null),{},[l.createElement(ji,{id:w,key:`editComment${w}`,body:ke||te,isPRDescription:u,onCancel:o(()=>{fe!=null&&fe.pendingCommentDrafts&&delete fe.pendingCommentDrafts[w],et(!1)},"onCancel"),onSave:o(async ye=>{try{const Ge=u?await ve(ye):await Ee({comment:c,text:ye});Ce(Ge.bodyHTML),ie(ye)}finally{et(!1)}},"onSave")})]);const ot=c.event===Ue.Commented||c.event===Ue.Reviewed?Vi(c):void 0;return l.createElement(jr,{for:c,onMouseEnter:o(()=>dt(!0),"onMouseEnter"),onMouseLeave:o(()=>dt(!1),"onMouseLeave"),onFocus:o(()=>dt(!0),"onFocus")},ot?l.createElement("div",{role:"alert","aria-label":ot}):null,l.createElement("div",{className:"action-bar comment-actions",style:{display:ut?"flex":"none"}},l.createElement("button",{title:"Quote reply",className:"icon-button",onClick:o(()=>er.emit("quoteReply",te),"onClick")},wt),Xt?l.createElement("button",{title:"Copy Comment Link",className:"icon-button",onClick:o(()=>navigator.clipboard.writeText(Xt),"onClick")},Ve):null,k?l.createElement("button",{title:"Edit comment",className:"icon-button",onClick:o(()=>et(!0),"onClick")},Xe):null,z?l.createElement("button",{title:"Delete comment",className:"icon-button",onClick:o(()=>se({id:w,pullRequestReviewId:Z}),"onClick")},Sr):null),l.createElement(Kt,{comment:c,bodyHTML:q,body:te,canApplyPatch:!!(fe!=null&&fe.isCurrentlyCheckedOut),allowEmpty:!!r.allowEmpty,specialDisplayBodyPostfix:c.specialDisplayBodyPostfix}),d)}o(zr,"CommentView");function rr(r){return r.authorAssociation!==void 0}o(rr,"isReviewEvent");function zi(r){return r&&typeof r=="object"&&typeof r.body=="string"&&typeof r.diffHunk=="string"}o(zi,"isIComment");const ss={REQUESTED:"will review",PENDING:"will review",COMMENTED:"reviewed",CHANGES_REQUESTED:"requested changes",APPROVED:"approved"},Ao=o(r=>ss[r],"reviewDescriptor");function jr({for:r,onFocus:a,onMouseEnter:u,onMouseLeave:d,children:c}){var p,v,y,w,k;const z=r,Z=(p=z.htmlUrl)!=null?p:r.url,te=(y=zi(r)&&r.isDraft)!=null?y:rr(r)&&((v=r.state)==null?void 0:v.toLocaleUpperCase())==="PENDING",ie=(w=z.user)!=null?w:r.author,q=(k=r.createdAt)!=null?k:r.submittedAt;return l.createElement("div",{className:"comment-container comment review-comment",onFocus:a,onMouseEnter:u,onMouseLeave:d},l.createElement("div",{className:"review-comment-container"},l.createElement("h3",{className:`review-comment-header${rr(r)&&r.comments.length>0?"":" no-details"}`},l.createElement(vo,null,l.createElement(bt,{for:ie}),l.createElement(ct,{for:ie}),rr(r)?nr(r):null,q?l.createElement(l.Fragment,null,rr(r)&&r.state?Ao(r.state):"commented",lt,l.createElement(Pt,{href:Z,date:q})):l.createElement("em",null,"pending"),te?l.createElement(l.Fragment,null,l.createElement("span",{className:"pending-label"},"Pending")):null)),c))}o(jr,"CommentBox");function ji({id:r,body:a,isPRDescription:u,onCancel:d,onSave:c}){const{updateDraft:p,pr:v,generateDescription:y,cancelGenerateDescription:w}=(0,l.useContext)(Fe),k=(0,l.useRef)({body:a,dirty:!1}),z=(0,l.useRef)(),[Z,te]=(0,l.useState)(!1);(0,l.useEffect)(()=>{const fe=setInterval(()=>{k.current.dirty&&(p(r,k.current.body),k.current.dirty=!1)},500);return()=>clearInterval(fe)},[k]);const ie=(0,l.useCallback)(async()=>{const{markdown:fe,submitButton:ke}=z.current;ke.disabled=!0;try{await c(fe.value)}finally{ke.disabled=!1}},[z,c]),q=(0,l.useCallback)(fe=>{fe.preventDefault(),ie()},[ie]),Ce=(0,l.useCallback)(fe=>{(fe.metaKey||fe.ctrlKey)&&fe.key==="Enter"&&(fe.preventDefault(),ie())},[ie]),se=(0,l.useCallback)(fe=>{k.current.body=fe.target.value,k.current.dirty=!0},[k]),Ee=(0,l.useCallback)(async()=>{if(y){te(!0);try{const fe=await y();if(fe!=null&&fe.description&&z.current){const ke=z.current.markdown;ke.value=fe.description,k.current.body=fe.description,k.current.dirty=!0}}finally{te(!1)}}},[y]),ve=(0,l.useCallback)(()=>{w&&w(),te(!1)},[w]);return l.createElement("form",{ref:z,onSubmit:q},l.createElement("div",{className:"textarea-wrapper"},l.createElement("textarea",{name:"markdown",defaultValue:a,onKeyDown:Ce,onInput:se,disabled:Z}),u?Z?l.createElement("button",{type:"button",title:"Cancel",className:"title-action icon-button",onClick:ve},go):l.createElement("button",{type:"button",title:(v==null?void 0:v.generateDescriptionTitle)||"Generate description",className:"title-action icon-button",onClick:Ee},Rt):null),l.createElement("div",{className:"form-actions"},l.createElement("button",{className:"secondary",onClick:d},"Cancel"),l.createElement("button",{type:"submit",name:"submitButton"},"Save")))}o(ji,"EditComment");const Kt=o(({comment:r,bodyHTML:a,body:u,canApplyPatch:d,allowEmpty:c,specialDisplayBodyPostfix:p})=>{var v,y;if(!u&&!a)return c?null:l.createElement("div",{className:"comment-body"},l.createElement("em",null,"No description provided."));const{applyPatch:w}=(0,l.useContext)(Fe),k=l.createElement("div",{dangerouslySetInnerHTML:{__html:a!=null?a:""}}),Z=((y=(v=u||a)==null?void 0:v.indexOf("```diff"))!=null?y:-1)>-1&&d&&r?l.createElement("button",{onClick:o(()=>w(r),"onClick")},"Apply Patch"):l.createElement(l.Fragment,null);return l.createElement("div",{className:"comment-body"},k,Z,p?l.createElement("br",null):null,p?l.createElement("em",null,p):null,l.createElement(Ur,{reactions:r==null?void 0:r.reactions}))},"CommentBody"),Ur=o(({reactions:r})=>{if(!Array.isArray(r)||r.length===0)return null;const a=r.filter(u=>u.count>0);return a.length===0?null:l.createElement("div",{className:"comment-reactions",style:{marginTop:6}},a.map((u,d)=>{const p=u.reactors||[],v=p.slice(0,10),y=p.length>10?p.length-10:0;let w="";return v.length>0&&(y>0?w=`${$o(v)} and ${y} more reacted with ${u.label}`:w=`${$o(v)} reacted with ${u.label}`),l.createElement("div",{key:u.label+d,title:w},l.createElement("span",{className:"reaction-label"},u.label),lt,u.count>1?l.createElement("span",{className:"reaction-count"},u.count):null)}))},"CommentReactions");function Io({pendingCommentText:r,isCopilotOnMyBehalf:a,state:u,hasWritePermission:d,isIssue:c,isAuthor:p,continueOnGitHub:v,currentUserReviewState:y,lastReviewType:w,busy:k,hasReviewDraft:z}){const{updatePR:Z,requestChanges:te,approve:ie,close:q,openOnGitHub:Ce,submit:se}=(0,l.useContext)(Fe),[Ee,ve]=(0,l.useState)(!1),fe=(0,l.useRef)(),ke=(0,l.useRef)();er.addListener("quoteReply",Be=>{var Ht,oi;const Cl=Be.replace(/\n/g,`
> `);Z({pendingCommentText:`> ${Cl} 

`}),(Ht=ke.current)==null||Ht.scrollIntoView(),(oi=ke.current)==null||oi.focus()});const qe=o(Be=>{Be.preventDefault();const{value:Ht}=ke.current;q(Ht)},"closeButton");let et=w!=null?w:y==="APPROVED"?$e.Approve:y==="CHANGES_REQUESTED"?$e.RequestChanges:$e.Comment;async function ut(Be){const{value:Ht}=ke.current;if(v&&Be!==$e.Comment){await Ce();return}switch(ve(!0),Be){case $e.RequestChanges:await te(Ht);break;case $e.Approve:await ie(Ht);break;default:await se(Ht)}ve(!1)}o(ut,"submitAction");const dt=(0,l.useCallback)(Be=>{(Be.metaKey||Be.ctrlKey)&&Be.key==="Enter"&&ut(et)},[se]);async function Xt(){await ut(et)}o(Xt,"defaultSubmitAction");const ot=p?{[$e.Comment]:"Comment"}:v?{[$e.Comment]:"Comment",[$e.Approve]:"Approve on github.com",[$e.RequestChanges]:"Request changes on github.com"}:Ho(c),ye=!(r!=null&&r.trim())&&!z,Ge=!1;return l.createElement("form",{id:"comment-form",ref:fe,className:"comment-form main-comment-form"},l.createElement("textarea",{id:Nn,name:"body",ref:ke,onInput:o(({target:Be})=>Z({pendingCommentText:Be.value}),"onInput"),onKeyDown:dt,value:r,placeholder:"Leave a comment",onClick:o(()=>{var Be;!r&&a&&!((Be=ke.current)!=null&&Be.textContent)&&(ke.current.textContent="@copilot ",ke.current.setSelectionRange(9,9))},"onClick")}),l.createElement("div",{className:"form-actions"},d||p?l.createElement("button",{id:"close",className:"secondary",disabled:Ee||u!==mt.Open,onClick:qe,"data-command":"close"},c?"Close Issue":"Close Pull Request"):null,l.createElement(Sn,{optionsContext:o(()=>Vo(ot,r,ye),"optionsContext"),defaultAction:Xt,defaultOptionLabel:o(()=>ot[et],"defaultOptionLabel"),defaultOptionValue:o(()=>et,"defaultOptionValue"),allOptions:o(()=>{const Be=[];return ot.comment&&Be.push({label:ot[$e.Comment],value:$e.Comment,action:o(()=>ut($e.Comment),"action"),optionDisabled:ye}),ot.approve&&Be.push({label:ot[$e.Approve],value:$e.Approve,action:o(()=>ut($e.Approve),"action"),optionDisabled:Ge}),ot.requestChanges&&Be.push({label:ot[$e.RequestChanges],value:$e.RequestChanges,action:o(()=>ut($e.RequestChanges),"action"),optionDisabled:ye}),Be},"allOptions"),optionsTitle:"Submit pull request review",disabled:Ee||k,hasSingleAction:Object.keys(ot).length===1,spreadable:!0,primaryOptionValue:$e.Comment})))}o(Io,"AddComment");function Ho(r){return r?Fo:Zr}o(Ho,"commentMethods");const Fo={comment:"Comment"},Zr={...Fo,approve:"Approve",requestChanges:"Request Changes"},Vo=o((r,a,u)=>{const d={preventDefaultContextMenuItems:!0,"github:reviewCommentMenu":!0};return r.approve&&(r.approve===Zr.approve?d["github:reviewCommentApprove"]=!0:d["github:reviewCommentApproveOnDotCom"]=!0),r.comment&&(d["github:reviewCommentComment"]=!0,u||(d["github:reviewCommentCommentEnabled"]=!0)),r.requestChanges&&(r.requestChanges===Zr.requestChanges?(d["github:reviewCommentRequestChanges"]=!0,u||(d["github:reviewRequestChangesEnabled"]=!0)):d["github:reviewCommentRequestChangesOnDotCom"]=!0),d.body=a!=null?a:"",JSON.stringify(d)},"makeCommentMenuContext"),Ui=o(r=>{var a,u,d;const{updatePR:c,requestChanges:p,approve:v,submit:y,openOnGitHub:w}=useContext(PullRequestContext),[k,z]=useState(!1),Z=useRef();let te=(a=r.lastReviewType)!=null?a:r.currentUserReviewState==="APPROVED"?ReviewType.Approve:r.currentUserReviewState==="CHANGES_REQUESTED"?ReviewType.RequestChanges:ReviewType.Comment;async function ie(ke){const{value:qe}=Z.current;if(r.continueOnGitHub&&ke!==ReviewType.Comment){await w();return}switch(z(!0),ke){case ReviewType.RequestChanges:await p(qe);break;case ReviewType.Approve:await v(qe);break;default:await y(qe)}z(!1)}o(ie,"submitAction");async function q(){await ie(te)}o(q,"defaultSubmitAction");const Ce=o(ke=>{c({pendingCommentText:ke.target.value})},"onChangeTextarea"),se=useCallback(ke=>{(ke.metaKey||ke.ctrlKey)&&ke.key==="Enter"&&(ke.preventDefault(),q())},[ie]),Ee=r.isAuthor?{comment:"Comment"}:r.continueOnGitHub?{comment:"Comment",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:Ho(r.isIssue),ve=!((u=r.pendingCommentText)!=null&&u.trim())&&!r.hasReviewDraft,fe=!1;return React.createElement("span",{className:"comment-form"},React.createElement("textarea",{id:COMMENT_TEXTAREA_ID,name:"body",placeholder:"Leave a comment",ref:Z,value:(d=r.pendingCommentText)!=null?d:"",onChange:Ce,onKeyDown:se,disabled:k||r.busy}),React.createElement("div",{className:"comment-button"},React.createElement(ContextDropdown,{optionsContext:o(()=>Vo(Ee,r.pendingCommentText,ve),"optionsContext"),defaultAction:q,defaultOptionLabel:o(()=>Ee[te],"defaultOptionLabel"),defaultOptionValue:o(()=>te,"defaultOptionValue"),allOptions:o(()=>{const ke=[];return Ee.comment&&ke.push({label:Ee[ReviewType.Comment],value:ReviewType.Comment,action:o(()=>ie(ReviewType.Comment),"action"),optionDisabled:ve}),Ee.approve&&ke.push({label:Ee[ReviewType.Approve],value:ReviewType.Approve,action:o(()=>ie(ReviewType.Approve),"action"),optionDisabled:fe}),Ee.requestChanges&&ke.push({label:Ee[ReviewType.RequestChanges],value:ReviewType.RequestChanges,action:o(()=>ie(ReviewType.RequestChanges),"action"),optionDisabled:ve}),ke},"allOptions"),optionsTitle:"Submit pull request review",disabled:k||r.busy,hasSingleAction:Object.keys(Ee).length===1,spreadable:!0,primaryOptionValue:ReviewType.Comment})))},"AddCommentSimple");function $o(r){return r.length===0?"":r.length===1?r[0]:r.length===2?`${r[0]} and ${r[1]}`:`${r.slice(0,-1).join(", ")} and ${r[r.length-1]}`}o($o,"joinWithAnd");const Zi="copilot-swe-agent",Wi="copilot-cloud-agent",Wr="copilot-pull-request-reviewer",Bo="BOT_kgDOCnlnWA",qr=[Wr,Zi,"Copilot"],as={login:Wr,id:Bo,url:"",avatarUrl:"",name:"Copilot",accountType:Dt.Bot};var wn=(r=>(r[r.None=0]="None",r[r.Started=1]="Started",r[r.Completed=2]="Completed",r[r.Failed=3]="Failed",r))(wn||{});function or(r){if(!r)return 0;switch(r.event){case Ue.CopilotStarted:return 1;case Ue.CopilotFinished:return 2;case Ue.CopilotFinishedError:return 3;default:return 0}}o(or,"copilotEventToStatus");function us(r){for(let a=r.length-1;a>=0;a--)if(or(r[a])!==0)return r[a]}o(us,"mostRecentCopilotEvent");function On({canEdit:r,state:a,head:u,base:d,title:c,titleHTML:p,number:v,url:y,author:w,isCurrentlyCheckedOut:k,isDraft:z,isIssue:Z,doneCheckoutBranch:te,events:ie,owner:q,repo:Ce,busy:se,stateReason:Ee}){const[ve,fe]=tr(c),[ke,qe]=(0,l.useState)(!1),et=us(ie);return l.createElement(l.Fragment,null,l.createElement(qi,{title:ve,titleHTML:p,number:v,url:y,inEditMode:ke,setEditMode:qe,setCurrentTitle:fe,canEdit:r,owner:q,repo:Ce}),l.createElement(Qr,{state:a,stateReason:Ee,head:u,base:d,author:w,isIssue:Z,isDraft:z,codingAgentEvent:et,canEdit:r}),l.createElement("div",{className:"header-actions"},l.createElement(zo,{isCurrentlyCheckedOut:k,isIssue:Z,doneCheckoutBranch:te,owner:q,repo:Ce,number:v,busy:se}),l.createElement(sn,{canEdit:r,codingAgentEvent:et})))}o(On,"Header");function qi({title:r,titleHTML:a,number:u,url:d,inEditMode:c,setEditMode:p,setCurrentTitle:v,canEdit:y,owner:w,repo:k}){const{setTitle:z,copyPrLink:Z}=(0,l.useContext)(Fe),te=l.createElement("form",{className:"editing-form title-editing-form",onSubmit:o(async se=>{se.preventDefault();try{const ve=se.currentTarget.elements[0],fe=ve?ve.value:"";await z(fe),v(fe)}finally{p(!1)}},"onSubmit")},l.createElement("input",{type:"text",style:{width:"100%"},defaultValue:r}),l.createElement("div",{className:"form-actions"},l.createElement("button",{type:"button",className:"secondary",onClick:o(()=>p(!1),"onClick")},"Cancel"),l.createElement("button",{type:"submit"},"Update"))),ie={preventDefaultContextMenuItems:!0,owner:w,repo:k,number:u};ie["github:copyMenu"]=!0;const q=l.createElement("div",{className:"overview-title"},l.createElement("h2",null,l.createElement("span",{dangerouslySetInnerHTML:{__html:a}})," ",l.createElement("a",{href:d,title:d,"data-vscode-context":JSON.stringify(ie)},"#",u)),y?l.createElement("button",{id:$i,title:"Rename",onClick:o(()=>p(!0),"onClick"),className:"icon-button"},Xe):null,l.createElement("button",{title:"Copy Link",onClick:Z,className:"icon-button","aria-label":"Copy Pull Request Link"},Ve));return c?te:q}o(qi,"Title");function zo({isCurrentlyCheckedOut:r,isIssue:a,doneCheckoutBranch:u,owner:d,repo:c,number:p,busy:v}){const{refresh:y}=(0,l.useContext)(Fe);return l.createElement("div",{className:"button-group"},l.createElement(ir,{isCurrentlyCheckedOut:r,isIssue:a,doneCheckoutBranch:u,owner:d,repo:c,number:p}),l.createElement("button",{title:"Refresh with the latest data from GitHub",onClick:y,className:"secondary"},"Refresh"),v?l.createElement("div",{className:"spinner"},P):null)}o(zo,"ButtonGroup");function sn({canEdit:r,codingAgentEvent:a}){const{cancelCodingAgent:u,updatePR:d,openSessionLog:c}=(0,l.useContext)(Fe),[p,v]=(0,l.useState)(!1),y=o(async()=>{if(!a)return;v(!0);const Z=await u(a);Z.events.length>0&&d(Z),v(!1)},"cancel"),w=a==null?void 0:a.sessionLink;if(!a||or(a)!==wn.Started)return null;const k={preventDefaultContextMenuItems:!0,...w};k["github:codingAgentMenu"]=!0;const z=[];return w&&z.push({label:"View Session",value:"",action:o(()=>c(w),"action")}),r&&z.unshift({label:"Cancel Coding Agent",value:"",action:y}),l.createElement(Sn,{optionsContext:o(()=>JSON.stringify(k),"optionsContext"),defaultAction:z[0].action,defaultOptionLabel:o(()=>p?l.createElement(l.Fragment,null,l.createElement("span",{className:"loading-button"},P),z[0].label):z[0].label,"defaultOptionLabel"),defaultOptionValue:o(()=>z[0].value,"defaultOptionValue"),allOptions:o(()=>z,"allOptions"),optionsTitle:z[0].label,disabled:p,hasSingleAction:!1,spreadable:!1,isSecondary:!0})}o(sn,"CancelCodingAgentButton");function Qr({state:r,stateReason:a,isDraft:u,isIssue:d,author:c,base:p,head:v,codingAgentEvent:y,canEdit:w}){const{changeBaseBranch:k}=(0,l.useContext)(Fe),{text:z,color:Z,icon:te}=lr(r,!!u,d,a),ie=or(y);let q;return ie===wn.Started?q=Ci:ie===wn.Completed?q=yi:ie===wn.Failed&&(q=Lr),l.createElement("div",{className:"subtitle"},l.createElement("div",{id:"status",className:`status-badge-${Z}`},l.createElement("span",{className:"icon"},te),l.createElement("span",null,z)),l.createElement("div",{className:"author"},l.createElement(bt,{for:c,substituteIcon:q}),l.createElement("div",{className:"merge-branches"},l.createElement(ct,{for:c})," ",d?null:l.createElement(l.Fragment,null,sr(r)," into"," ",w&&r===mt.Open?l.createElement("button",{title:"Change base branch",onClick:k,className:"secondary change-base","aria-label":"Change base branch"},l.createElement("code",{className:"branch-tag"},p," ",Xe)):l.createElement("code",{className:"branch-tag"},p)," ","from ",l.createElement("code",{className:"branch-tag"},v)))))}o(Qr,"Subtitle");const ir=o(({isCurrentlyCheckedOut:r,isIssue:a,doneCheckoutBranch:u,owner:d,repo:c,number:p})=>{const{exitReviewMode:v,checkout:y,openChanges:w}=(0,l.useContext)(Fe),[k,z]=(0,l.useState)(!1),Z=o(async q=>{try{switch(z(!0),q){case"checkout":await y();break;case"exitReviewMode":await v();break;case"openChanges":await w();break;default:throw new Error(`Can't find action ${q}`)}}finally{z(!1)}},"onClick");if(a)return null;const te={preventDefaultContextMenuItems:!0,owner:d,repo:c,number:p};te["github:checkoutMenu"]=!0;const ie=[];return r?ie.push({label:`Checkout '${u}'`,value:"",action:o(()=>Z("exitReviewMode"),"action")}):ie.push({label:"Checkout",value:"",action:o(()=>Z("checkout"),"action")}),ie.push({label:"Open Changes",value:"",action:o(()=>Z("openChanges"),"action")}),l.createElement(Sn,{optionsContext:o(()=>JSON.stringify(te),"optionsContext"),defaultAction:ie[0].action,defaultOptionLabel:o(()=>ie[0].label,"defaultOptionLabel"),defaultOptionValue:o(()=>ie[0].value,"defaultOptionValue"),allOptions:o(()=>ie,"allOptions"),optionsTitle:ie[0].label,disabled:k,hasSingleAction:!1,spreadable:!1})},"CheckoutButton");function lr(r,a,u,d){const c=u?Te:B,p=u?x:_e;if(r===mt.Merged)return{text:"Merged",color:"merged",icon:je};if(r===mt.Open)return a?{text:"Draft",color:"draft",icon:ne}:{text:"Open",color:"open",icon:p};{let v="closed";return u&&(v=d!=="COMPLETED"?"draft":"merged"),{text:"Closed",color:v,icon:c}}}o(lr,"getStatus");function sr(r){return r===mt.Merged?"merged changes":"wants to merge changes"}o(sr,"getActionText");const xn=o(({busy:r,baseHasMergeQueue:a})=>r?l.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},"Setting..."):l.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},a?"Merge when ready":"Auto-merge"),"AutoMergeLabel"),jo=o(({updateState:r,baseHasMergeQueue:a,allowAutoMerge:u,defaultMergeMethod:d,mergeMethodsAvailability:c,autoMerge:p,isDraft:v})=>{if(!u&&!p||!c||!d)return null;const y=l.useRef(),[w,k]=l.useState(!1),z=o(()=>{var Z,te;return(te=(Z=y.current)==null?void 0:Z.value)!=null?te:"merge"},"selectedMethod");return l.createElement("div",{className:"automerge-section"},l.createElement("div",{className:"automerge-checkbox-wrapper"},l.createElement("input",{id:"automerge-checkbox",type:"checkbox",name:"automerge",checked:p,disabled:!u||v||w,onChange:o(async()=>{k(!0),await r({autoMerge:!p,autoMergeMethod:z()}),k(!1)},"onChange")})),l.createElement(xn,{busy:w,baseHasMergeQueue:a}),a?null:l.createElement("div",{className:"merge-select-container"},l.createElement(In,{ref:y,defaultMergeMethod:d,mergeMethodsAvailability:c,onChange:o(async()=>{k(!0),await r({autoMergeMethod:z()}),k(!1)},"onChange"),disabled:w})))},"AutoMerge"),Yt=o(({mergeQueueEntry:r})=>{const a=l.useContext(Fe);let u,d;switch(r.state){case on.Mergeable:case on.AwaitingChecks:case on.Queued:{d=l.createElement("span",{className:"merge-queue-pending"},"Queued to merge..."),r.position===1?u=l.createElement("span",null,"This pull request is at the head of the ",l.createElement("a",{href:r.url},"merge queue"),"."):u=l.createElement("span",null,"This pull request is in the ",l.createElement("a",{href:r.url},"merge queue"),".");break}case on.Locked:{d=l.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),u=l.createElement("span",null,"The base branch does not allow updates");break}case on.Unmergeable:{d=l.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),u=l.createElement("span",null,"There are conflicts with the base branch.");break}}return l.createElement("div",{className:"merge-queue-container"},l.createElement("div",{className:"merge-queue"},l.createElement("div",{className:"merge-queue-icon"}),l.createElement("div",{className:"merge-queue-title"},d),u),l.createElement("div",{className:"button-container"},l.createElement("button",{onClick:a.dequeue},"Remove from Queue")))},"QueuedToMerge");var ar,Qi=new Uint8Array(16);function cs(){if(!ar&&(ar=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!ar))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ar(Qi)}o(cs,"rng");const Uo=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ds(r){return typeof r=="string"&&Uo.test(r)}o(ds,"validate");const Dn=ds;for(var Ke=[],ur=0;ur<256;++ur)Ke.push((ur+256).toString(16).substr(1));function Kr(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=(Ke[r[a+0]]+Ke[r[a+1]]+Ke[r[a+2]]+Ke[r[a+3]]+"-"+Ke[r[a+4]]+Ke[r[a+5]]+"-"+Ke[r[a+6]]+Ke[r[a+7]]+"-"+Ke[r[a+8]]+Ke[r[a+9]]+"-"+Ke[r[a+10]]+Ke[r[a+11]]+Ke[r[a+12]]+Ke[r[a+13]]+Ke[r[a+14]]+Ke[r[a+15]]).toLowerCase();if(!Dn(u))throw TypeError("Stringified UUID is invalid");return u}o(Kr,"stringify");const Ki=Kr;function Yr(r,a,u){r=r||{};var d=r.random||(r.rng||cs)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,a){u=u||0;for(var c=0;c<16;++c)a[u+c]=d[c];return a}return Ki(d)}o(Yr,"v4");const Gr=Yr;var Ot=(r=>(r[r.esc=27]="esc",r[r.down=40]="down",r[r.up=38]="up",r))(Ot||{});const fs=o(({options:r,defaultOption:a,disabled:u,submitAction:d,changeAction:c})=>{const[p,v]=(0,l.useState)(a),[y,w]=(0,l.useState)(!1),k=Gr(),z=`expandOptions${k}`,Z=o(()=>{w(!y)},"onClick"),te=o(Ce=>{v(Ce.target.value),w(!1);const se=document.getElementById(`confirm-button${k}`);se==null||se.focus(),c&&c(Ce.target.value)},"onMethodChange"),ie=o(Ce=>{if(y){const se=document.activeElement;switch(Ce.keyCode){case 27:w(!1);const Ee=document.getElementById(z);Ee==null||Ee.focus();break;case 40:if(!(se!=null&&se.id)||se.id===z){const ve=document.getElementById(`${k}option0`);ve==null||ve.focus()}else{const ve=new RegExp(`${k}option([0-9])`),fe=se.id.match(ve);if(fe!=null&&fe.length){const ke=parseInt(fe[1]);if(ke<Object.entries(r).length-1){const qe=document.getElementById(`${k}option${ke+1}`);qe==null||qe.focus()}}}break;case 38:if(!(se!=null&&se.id)||se.id===z){const ve=Object.entries(r).length-1,fe=document.getElementById(`${k}option${ve}`);fe==null||fe.focus()}else{const ve=new RegExp(`${k}option([0-9])`),fe=se.id.match(ve);if(fe!=null&&fe.length){const ke=parseInt(fe[1]);if(ke>0){const qe=document.getElementById(`${k}option${ke-1}`);qe==null||qe.focus()}}}break}}},"onKeyDown"),q=Object.entries(r).length===1?"hidden":y?"open":"";return l.createElement("div",{className:"select-container",onKeyDown:ie},l.createElement("div",{className:"select-control"},l.createElement(ms,{dropdownId:k,className:Object.keys(r).length>1?"select-left":"",options:r,selected:p,submitAction:d,disabled:!!u}),l.createElement("div",{className:`split${u?" disabled":""}`},l.createElement("div",{className:`separator${u?" disabled":""}`})),l.createElement("button",{id:z,className:"select-right "+q,"aria-label":"Expand button options",onClick:Z},ce)),l.createElement("div",{className:y?"options-select":"hidden"},Object.entries(r).map(([Ce,se],Ee)=>l.createElement("button",{id:`${k}option${Ee}`,key:Ce,value:Ce,onClick:te},se))))},"Dropdown");function ms({dropdownId:r,className:a,options:u,selected:d,disabled:c,submitAction:p}){const[v,y]=(0,l.useState)(!1),w=o(async k=>{k.preventDefault();try{y(!0),await p(d)}finally{y(!1)}},"onSubmit");return l.createElement("form",{onSubmit:w},l.createElement("input",{disabled:v||c,type:"submit",className:a,id:`confirm-button${r}`,value:u[d]}))}o(ms,"Confirm");function Zo(r){const{reviewer:a,state:u}=r.reviewState,{reRequestReview:d}=(0,l.useContext)(Fe),c=r.event?Vi(r.event):void 0;return l.createElement("div",{className:"section-item reviewer"},l.createElement("div",{className:"avatar-with-author"},l.createElement(bt,{for:a}),l.createElement(ct,{for:a})),l.createElement("div",{className:"reviewer-icons"},u!=="REQUESTED"&&(ln(a)||a.accountType!==Dt.Bot)?l.createElement("button",{className:"icon-button",title:"Re-request review",onClick:o(()=>d(r.reviewState.reviewer.id),"onClick")},It,"\uFE0F"):null,ps[u],c?l.createElement("div",{role:"alert","aria-label":c}):null))}o(Zo,"Reviewer");const ps={REQUESTED:(0,l.cloneElement)(ge,{className:"section-icon requested",title:"Awaiting requested review"}),COMMENTED:(0,l.cloneElement)(xe,{className:"section-icon commented",Root:"div",title:"Left review comments"}),APPROVED:(0,l.cloneElement)(oe,{className:"section-icon approved",title:"Approved these changes"}),CHANGES_REQUESTED:(0,l.cloneElement)(Se,{className:"section-icon changes",title:"Requested changes"})},hs=o(({pr:r,isSimple:a})=>r.state===mt.Merged?l.createElement("div",{className:"branch-status-message"},l.createElement("div",{className:"branch-status-icon"},a?je:null)," ","Pull request successfully merged."):r.state===mt.Closed?l.createElement("div",{className:"branch-status-message"},"This pull request is closed."):null,"PRStatusMessage"),gs=o(({pr:r})=>r.state===mt.Open?null:l.createElement(ws,{...r}),"DeleteOption"),Wo=o(({pr:r})=>{var a;const{state:u,status:d}=r,[c,p]=(0,l.useReducer)(v=>!v,(a=d==null?void 0:d.statuses.some(v=>v.state===Qe.Failure))!=null?a:!1);return(0,l.useEffect)(()=>{var v;(v=d==null?void 0:d.statuses.some(y=>y.state===Qe.Failure))!=null&&v?c||p():c&&p()},d==null?void 0:d.statuses),u===mt.Open&&(d!=null&&d.statuses.length)?l.createElement(l.Fragment,null,l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},l.createElement(Jr,{state:d.state}),l.createElement("p",{className:"status-item-detail-text"},xs(d.statuses)),l.createElement("button",{id:"status-checks-display-button",className:"secondary small-button",onClick:p,"aria-expanded":c},c?"Hide":"Show")),c?l.createElement(Xr,{statuses:d.statuses}):null)):null},"StatusChecks"),cr=o(({pr:r})=>{const{state:a,reviewRequirement:u}=r;return!u||a!==mt.Open?null:l.createElement(l.Fragment,null,l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},l.createElement(il,{state:u.state}),l.createElement("p",{className:"status-item-detail-text"},ll(u)))))},"RequiredReviewers"),vs=o(({pr:r,isSimple:a})=>{if(!a||r.state!==mt.Open||r.reviewers.length===0)return null;const u=[],d=new Set(r.reviewers);let c=r.events.length-1;for(;c>=0&&d.size>0;){const p=r.events[c];if(p.event===Ue.Reviewed){for(const v of d)if(p.user.id===v.reviewer.id){u.push({event:p,reviewState:v}),d.delete(v);break}}c--}return l.createElement("div",{className:"section"}," ",u.map(p=>l.createElement(Zo,{key:Qt(p.reviewState.reviewer),...p})))},"InlineReviewers"),Yi=o(({pr:r,isSimple:a})=>r.isIssue?null:l.createElement("div",{id:"status-checks"},l.createElement(l.Fragment,null,l.createElement(hs,{pr:r,isSimple:a}),l.createElement(cr,{pr:r}),l.createElement(Wo,{pr:r}),l.createElement(vs,{pr:r,isSimple:a}),l.createElement(Gi,{pr:r,isSimple:a}),l.createElement(gs,{pr:r}))),"StatusChecksSection"),Gi=o(({pr:r,isSimple:a})=>{const{create:u,checkMergeability:d}=(0,l.useContext)(Fe);if(a&&r.state!==mt.Open)return l.createElement("div",{className:"branch-status-container"},l.createElement("form",null,l.createElement("button",{type:"submit",onClick:u},"Create New Pull Request...")));if(r.state!==mt.Open)return null;const{mergeable:c}=r,[p,v]=(0,l.useState)(c);return c!==p&&c!==Et.Unknown&&v(c),(0,l.useEffect)(()=>{const y=setInterval(async()=>{if(p===Et.Unknown){const w=await d();v(w)}},3e3);return()=>clearInterval(y)},[p]),l.createElement("div",null,l.createElement(Xi,{mergeable:p,isSimple:a,canUpdateBranch:r.canUpdateBranch}),l.createElement(Ji,{mergeable:p,isSimple:a,isCurrentlyCheckedOut:r.isCurrentlyCheckedOut,canUpdateBranch:r.canUpdateBranch}),l.createElement(Cs,{pr:{...r,mergeable:p},isSimple:a}))},"MergeStatusAndActions"),an=null,Xi=o(({mergeable:r,isSimple:a,canUpdateBranch:u})=>{const{updateBranch:d}=(0,l.useContext)(Fe),[c,p]=(0,l.useState)(!1),v=o(()=>{p(!0),d().finally(()=>p(!1))},"onClick");let y=ge,w="Checking if this branch can be merged...",k=null;return r===Et.Mergeable?(y=oe,w="This branch has no conflicts with the base branch."):r===Et.Conflict?(y=de,w="This branch has conflicts that must be resolved.",k="Resolve conflicts"):r===Et.NotMergeable?(y=de,w="Branch protection policy must be fulfilled before merging."):r===Et.Behind&&(y=de,w="This branch is out-of-date with the base branch.",k="Update with merge commit"),a&&(y=null,r!==Et.Conflict&&(k=null)),l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},y,l.createElement("p",null,w),k&&u?l.createElement("div",{className:"button-container"},l.createElement("button",{className:"secondary",onClick:v,disabled:c},k)):null))},"MergeStatus"),Ji=o(({mergeable:r,isSimple:a,isCurrentlyCheckedOut:u,canUpdateBranch:d})=>{const{updateBranch:c}=(0,l.useContext)(Fe),[p,v]=(0,l.useState)(!1),y=o(()=>{v(!0),c().finally(()=>v(!1))},"update"),w=!u&&r===Et.Conflict;return!d||w||a||r===Et.Behind||r===Et.Conflict||r===Et.Unknown?null:l.createElement("div",{className:"status-item status-section"},vn,l.createElement("p",null,"This branch is out-of-date with the base branch."),l.createElement("button",{className:"secondary",onClick:y,disabled:p},"Update with Merge Commit"))},"OfferToUpdate"),el=o(({isSimple:r,isCopilotOnMyBehalf:a,mergeMethod:u})=>{var d;const{readyForReview:c,readyForReviewAndMerge:p,updatePR:v,pr:y}=(0,l.useContext)(Fe),[w,k]=(0,l.useState)((d=y==null?void 0:y.busy)!=null?d:!1),z=(0,l.useCallback)(async()=>{try{k(!0);const ie=await c();v(ie)}finally{k(!1)}},[c,v]),Z=(0,l.useCallback)(async()=>{try{k(!0);const ie=await p({mergeMethod:u});v(ie)}finally{k(!1)}},[p,v,u]),te=(0,l.useCallback)(()=>{const ie=[{label:"Ready for Review",value:"ready",action:z}];return a&&ie.push({label:"Ready, Approve, and Auto-Merge",value:"readyAndMerge",action:Z}),ie},[a,z,Z]);return l.createElement("div",{className:"ready-for-review-container"},l.createElement("div",{className:"ready-for-review-text-wrapper"},l.createElement("div",{className:"ready-for-review-icon"},r?null:vn),l.createElement("div",null,l.createElement("div",{className:"ready-for-review-heading"},"This pull request is still a work in progress."),l.createElement("div",{className:"ready-for-review-meta"},"Draft pull requests cannot be merged."))),l.createElement("div",{className:"button-container"},l.createElement(Sn,{optionsContext:o(()=>JSON.stringify({preventDefaultContextMenuItems:!0,"github:readyForReviewMenu":!0,"github:readyForReviewMenuWithMerge":a,mergeMethod:u}),"optionsContext"),defaultAction:z,defaultOptionLabel:o(()=>"Ready for Review","defaultOptionLabel"),defaultOptionValue:o(()=>"ready","defaultOptionValue"),allOptions:te,optionsTitle:"Ready for Review",disabled:w||(y==null?void 0:y.busy),hasSingleAction:!a,spreadable:!1})))},"ReadyForReview"),An=o(r=>{const a=(0,l.useContext)(Fe),u=(0,l.useRef)(),[d,c]=(0,l.useState)(null);return r.mergeQueueMethod?l.createElement("div",null,l.createElement("div",{id:"merge-comment-form"},l.createElement("button",{onClick:o(()=>a.enqueue(),"onClick")},"Add to Merge Queue"))):d?l.createElement(tl,{pr:r,method:d,cancel:o(()=>c(null),"cancel")}):l.createElement("div",{className:"automerge-section wrapper"},l.createElement("button",{onClick:o(()=>c(u.current.value),"onClick")},"Merge Pull Request"),lt,"using method",lt,l.createElement(In,{ref:u,...r}))},"Merge"),Cs=o(({pr:r,isSimple:a})=>{var u;const{hasWritePermission:d,canEdit:c,isDraft:p,mergeable:v,isCopilotOnMyBehalf:y,defaultMergeMethod:w}=r;if(p)return c?l.createElement(el,{isSimple:a,isCopilotOnMyBehalf:y,mergeMethod:w}):null;if(v===Et.Mergeable&&d&&!r.mergeQueueEntry)return a?l.createElement(ys,{...r}):l.createElement(An,{...r});if(!a&&d&&!r.mergeQueueEntry){const k=(0,l.useContext)(Fe);return l.createElement(jo,{updateState:o(z=>k.updateAutoMerge(z),"updateState"),...r,baseHasMergeQueue:!!r.mergeQueueMethod,defaultMergeMethod:(u=r.autoMergeMethod)!=null?u:r.defaultMergeMethod})}else if(r.mergeQueueEntry)return l.createElement(Yt,{mergeQueueEntry:r.mergeQueueEntry});return null},"PrActions"),La=o(()=>{const{openOnGitHub:r}=useContext(PullRequestContext);return React.createElement("button",{id:"merge-on-github",type:"submit",onClick:o(()=>r(),"onClick")},"Merge on github.com")},"MergeOnGitHub"),ys=o(r=>{const{merge:a,updatePR:u}=(0,l.useContext)(Fe);async function d(p){const v=await a({title:"",description:"",method:p});u(v)}o(d,"submitAction");const c=Object.keys(un).filter(p=>r.mergeMethodsAvailability[p]).reduce((p,v)=>(p[v]=un[v],p),{});return l.createElement(fs,{options:c,defaultOption:r.defaultMergeMethod,submitAction:d})},"MergeSimple"),ws=o(r=>{const{deleteBranch:a}=(0,l.useContext)(Fe),[u,d]=(0,l.useState)(!1);return r.isRemoteHeadDeleted!==!1&&r.isLocalHeadDeleted!==!1?l.createElement("div",null):l.createElement("div",{className:"branch-status-container"},l.createElement("form",{onSubmit:o(async c=>{c.preventDefault();try{d(!0);const p=await a();p&&p.cancelled&&d(!1)}finally{d(!1)}},"onSubmit")},l.createElement("button",{disabled:u,className:"secondary",type:"submit"},"Delete Branch...")))},"DeleteBranch");function tl({pr:r,method:a,cancel:u}){const{merge:d,updatePR:c,changeEmail:p}=(0,l.useContext)(Fe),[v,y]=(0,l.useState)(!1),w=r.emailForCommit;return l.createElement("div",null,l.createElement("form",{id:"merge-comment-form",onSubmit:o(async k=>{k.preventDefault();try{y(!0);const{title:z,description:Z}=k.target,te=await d({title:z==null?void 0:z.value,description:Z==null?void 0:Z.value,method:a,email:w});c(te)}finally{y(!1)}},"onSubmit")},a==="rebase"?null:l.createElement("input",{type:"text",name:"title",defaultValue:nl(a,r)}),a==="rebase"?null:l.createElement("textarea",{name:"description",defaultValue:rl(a,r)}),a==="rebase"||!w?null:l.createElement("div",{className:"commit-association"},l.createElement("span",null,"Commit will be associated with ",l.createElement("button",{className:"input-box",title:"Change email","aria-label":"Change email",disabled:v,onClick:o(()=>{y(!0),p(w).finally(()=>y(!1))},"onClick")},w))),l.createElement("div",{className:"form-actions",id:a==="rebase"?"rebase-actions":""},l.createElement("button",{className:"secondary",onClick:u},"Cancel"),l.createElement("button",{disabled:v,type:"submit",id:"confirm-merge"},a==="rebase"?"Confirm ":"",un[a]))))}o(tl,"ConfirmMerge");function nl(r,a){var u,d,c,p;switch(r){case"merge":return(d=(u=a.mergeCommitMeta)==null?void 0:u.title)!=null?d:`Merge pull request #${a.number} from ${a.head}`;case"squash":return(p=(c=a.squashCommitMeta)==null?void 0:c.title)!=null?p:`${a.title} (#${a.number})`;default:return""}}o(nl,"getDefaultTitleText");function rl(r,a){var u,d,c,p;switch(r){case"merge":return(d=(u=a.mergeCommitMeta)==null?void 0:u.description)!=null?d:a.title;case"squash":return(p=(c=a.squashCommitMeta)==null?void 0:c.description)!=null?p:"";default:return""}}o(rl,"getDefaultDescriptionText");const un={merge:"Create Merge Commit",squash:"Squash and Merge",rebase:"Rebase and Merge"},In=l.forwardRef(({defaultMergeMethod:r,mergeMethodsAvailability:a,onChange:u,ariaLabel:d,name:c,title:p,disabled:v},y)=>l.createElement("select",{ref:y,defaultValue:r,onChange:u,disabled:v,"aria-label":d!=null?d:"Select merge method",name:c,title:p},Object.entries(un).map(([w,k])=>l.createElement("option",{key:w,value:w,disabled:!a[w]},k,a[w]?null:" (not enabled)")))),ol={[Qe.Failure]:0,[Qe.Pending]:1,[Qe.Unknown]:2,[Qe.Neutral]:3,[Qe.Success]:4},Xr=o(({statuses:r})=>{const a=r.sort((u,d)=>ol[u.state]-ol[d.state]);return l.createElement("div",{className:"status-scroll"},a.map(u=>l.createElement("div",{key:u.id,className:"status-check"},l.createElement("div",{className:"status-check-details"},l.createElement(Jr,{state:u.state}),l.createElement(bt,{for:{avatarUrl:u.avatarUrl,url:u.url}}),l.createElement("span",{className:"status-check-detail-text"},u.workflowName?`${u.workflowName} / `:null,u.context,u.event?` (${u.event})`:null," ",u.description?`\u2014 ${u.description}`:null)),l.createElement("div",null,u.isRequired?l.createElement("span",{className:"label"},"Required"):null,u.targetUrl?l.createElement("a",{href:u.targetUrl,title:u.targetUrl},"Details"):null))))},"StatusCheckDetails");function xs(r){const a=_o(r,d=>{switch(d.state){case Qe.Success:case Qe.Failure:case Qe.Neutral:return d.state;default:return Qe.Pending}}),u=[];for(const d of Object.keys(a)){const c=a[d].length;let p="";switch(d){case Qe.Success:p="successful";break;case Qe.Failure:p="failed";break;case Qe.Neutral:p="skipped";break;default:p="pending"}const v=c>1?`${c} ${p} checks`:`${c} ${p} check`;u.push(v)}return u.join(" and ")}o(xs,"getSummaryLabel");function Jr({state:r}){switch(r){case Qe.Neutral:return vi;case Qe.Success:return oe;case Qe.Failure:return de}return ge}o(Jr,"StateIcon");function il({state:r}){switch(r){case Qe.Pending:return Se;case Qe.Failure:return de}return oe}o(il,"RequiredReviewStateIcon");function ll(r){const a=r.approvals.length,u=r.requestedChanges.length,d=r.count;switch(r.state){case Qe.Failure:return`At least ${d} approving review${d>1?"s":""} is required by reviewers with write access.`;case Qe.Pending:return`${u} review${u>1?"s":""} requesting changes by reviewers with write access.`}return`${a} approving review${a>1?"s":""} by reviewers with write access.`}o(ll,"getRequiredReviewSummary");function Es(r){const{displayName:a,canDelete:u,color:d}=r,c=qt(d,r.isDarkTheme,!1);return l.createElement("div",{className:"section-item label",style:{backgroundColor:c.backgroundColor,color:c.textColor,borderColor:`${c.borderColor}`,paddingRight:u?"2px":"8px"}},a,r.children)}o(Es,"Label");function Na(r){const{displayName:a,color:u}=r,d=gitHubLabelColor(u,r.isDarkTheme,!1);return React.createElement("li",{style:{backgroundColor:d.backgroundColor,color:d.textColor,borderColor:`${d.borderColor}`}},a,r.children)}o(Na,"LabelCreate");function dr({id:r,title:a,hasWritePermission:u,onHeaderClick:d,children:c,iconButtonGroup:p}){return l.createElement("div",{id:r,className:"section"},l.createElement("div",{className:`section-header ${u?"clickable":""}`,onClick:u?d:void 0},l.createElement("div",{className:"section-title"},a),u?p||l.createElement("button",{className:"icon-button",title:`Add ${a}`,onClick:d},Ae):null),c)}o(dr,"Section");function sl({reviewers:r,labels:a,hasWritePermission:u,isIssue:d,projectItems:c,milestone:p,assignees:v,canAssignCopilot:y,canRequestCopilotReview:w}){const{addReviewers:k,addReviewerCopilot:z,addAssignees:Z,addAssigneeYourself:te,addAssigneeCopilot:ie,addLabels:q,removeLabel:Ce,changeProjects:se,addMilestone:Ee,updatePR:ve,pr:fe}=(0,l.useContext)(Fe),[ke,qe]=(0,l.useState)(!1),[et,ut]=(0,l.useState)(!1),dt=y&&v.every(ye=>!qr.includes(ye.login)),Xt=w&&r.every(ye=>!ln(ye.reviewer)&&!qr.includes(ye.reviewer.login)),ot=o(async()=>{const ye=await se();ve({...ye})},"updateProjects");return l.createElement("div",{id:"sidebar"},!d&&l.createElement(dr,{id:"reviewers",title:"Reviewers",hasWritePermission:u,onHeaderClick:o(async ye=>{const Ge=ye==null?void 0:ye.target;if(Ge!=null&&Ge.closest&&Ge.closest("#request-copilot-review-btn"))return;const Be=await k();ve({reviewers:Be.reviewers})},"onHeaderClick"),iconButtonGroup:u&&l.createElement("div",{className:"icon-button-group"},Xt?l.createElement("button",{id:"request-copilot-review-btn",className:"icon-button",title:"Request review from Copilot",disabled:et,onClick:o(async ye=>{ye.stopPropagation(),ut(!0);try{const Ge=await z();ve({reviewers:Ge.reviewers})}finally{ut(!1)}},"onClick")},De):null,l.createElement("button",{className:"icon-button",title:"Add Reviewers"},Ae))},r&&r.length?r.map(ye=>l.createElement(Zo,{key:Qt(ye.reviewer),reviewState:ye})):l.createElement("div",{className:"section-placeholder"},"None yet"),!fe.isDraft&&(u||fe.isAuthor)&&l.createElement(qo,null)),l.createElement(dr,{id:"assignees",title:"Assignees",hasWritePermission:u,onHeaderClick:o(async ye=>{const Ge=ye==null?void 0:ye.target;if(Ge!=null&&Ge.closest&&Ge.closest("#assign-copilot-btn"))return;const Be=await Z();ve({assignees:Be.assignees,events:Be.events})},"onHeaderClick"),iconButtonGroup:u&&l.createElement("div",{className:"icon-button-group"},dt?l.createElement("button",{id:"assign-copilot-btn",className:"icon-button",title:"Assign for Copilot to work on",disabled:ke,onClick:o(async ye=>{ye.stopPropagation(),qe(!0);try{const Ge=await ie();ve({assignees:Ge.assignees,events:Ge.events})}finally{qe(!1)}},"onClick")},De):null,l.createElement("button",{className:"icon-button",title:"Add Assignees"},Ae))},v&&v.length?v.map((ye,Ge)=>l.createElement("div",{key:Ge,className:"section-item reviewer"},l.createElement("div",{className:"avatar-with-author"},l.createElement(bt,{for:ye}),l.createElement(ct,{for:ye})))):l.createElement("div",{className:"section-placeholder"},"None yet",fe.hasWritePermission?l.createElement(l.Fragment,null,"\u2014",l.createElement("a",{className:"assign-yourself",onClick:o(async()=>{const ye=await te();ve({assignees:ye.assignees,events:ye.events})},"onClick")},"assign yourself")):null)),l.createElement(dr,{id:"labels",title:"Labels",hasWritePermission:u,onHeaderClick:o(async()=>{const ye=await q();ve({labels:ye.added})},"onHeaderClick")},a.length?l.createElement("div",{className:"labels-list"},a.map(ye=>l.createElement(Es,{key:ye.name,...ye,canDelete:u,isDarkTheme:fe.isDarkTheme},u?l.createElement("button",{className:"icon-button",onClick:o(()=>Ce(ye.name),"onClick")},de,"\uFE0F"):null))):l.createElement("div",{className:"section-placeholder"},"None yet")),!fe.isEnterprise&&l.createElement(dr,{id:"project",title:"Project",hasWritePermission:u,onHeaderClick:ot},c?c.length>0?c.map(ye=>l.createElement(_s,{key:ye.project.title,...ye,canDelete:u})):l.createElement("div",{className:"section-placeholder"},"None yet"):l.createElement("a",{onClick:ot},"Sign in with more permissions to see projects")),l.createElement(dr,{id:"milestone",title:"Milestone",hasWritePermission:u,onHeaderClick:o(async()=>{const ye=await Ee();ve({milestone:ye.added})},"onHeaderClick")},p?l.createElement(ks,{key:p.title,...p,canDelete:u}):l.createElement("div",{className:"section-placeholder"},"No milestone")))}o(sl,"Sidebar");function bs(r){const[a,u]=(0,l.useState)(!1),d=(0,l.useRef)(null);return l.createElement("div",{className:"collapsible-sidebar"},l.createElement("div",{className:`collapsible-sidebar-header ${a?"expanded":""}`,onClick:o(()=>u(c=>!c),"onClick"),tabIndex:0,role:"button","aria-expanded":a},l.createElement("span",{className:"collapsible-sidebar-title"},a?null:l.createElement(fr,{...r}))),l.createElement("div",{className:"collapsible-sidebar-content",ref:d,style:{display:a?"block":"none"}},l.createElement(sl,{...r})),l.createElement("a",{className:"collapsible-label-see-more",onClick:o(()=>u(c=>!c),"onClick")},a?"See less":"See more"))}o(bs,"CollapsibleSidebar");function fr(r){const{reviewers:a,assignees:u,labels:d,projectItems:c,milestone:p,isIssue:v}=r,[y,w]=(0,l.useState)(!1);(0,l.useEffect)(()=>{const q=o(()=>{w(window.innerWidth<=350)},"checkViewportWidth");return q(),window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]);const k=o(({users:q})=>l.createElement("span",{className:"avatar-stack",style:{width:`${Math.min(q.length,10)*10+10}px`}},q.slice(0,10).map((Ce,se)=>l.createElement("span",{className:"stacked-avatar",style:{left:`${se*10}px`}},l.createElement(bt,{for:Ce})))),"AvatarStack"),z=o(({items:q,getKey:Ce,getColor:se,getText:Ee})=>{const ve=(0,l.useRef)(null),[fe,ke]=(0,l.useState)(q.length);(0,l.useEffect)(()=>{if(!ve.current||q.length===0)return;const ut=new ResizeObserver(()=>{const dt=ve.current;if(!dt)return;const Xt=dt.offsetWidth,ot=60;let ye=q.length,Ge=q.reduce((Be,Ht)=>Be+Ee(Ht).length,0);for(;ye>0&&!(Ge*6+14*ye+(ye<q.length?ot:0)<=Xt);)Ge-=Ee(q[ye-1]).length,ye--;ke(Math.max(1,ye))});return ut.observe(ve.current),()=>ut.disconnect()},[q.length]);const qe=q.slice(0,fe),et=q.length-fe;return l.createElement("span",{className:"pill-container",ref:ve},qe.map(ut=>{const dt=se(ut);return l.createElement("span",{key:Ce(ut),className:"pill-item label",style:{backgroundColor:dt.backgroundColor,color:dt.textColor,borderRadius:"20px"},title:Ee(ut)},Ee(ut))}),et>0&&l.createElement("span",{className:"pill-overflow"},"+",et," more"))},"PillContainer"),Z=[],te=a==null?void 0:a.filter(q=>!!q.reviewer.avatarUrl).map(q=>({avatarUrl:q.reviewer.avatarUrl,name:jt(q.reviewer)}));!v&&te&&te.length&&Z.push({label:"Reviewers",value:l.createElement(k,{users:te}),count:te.length});const ie=u==null?void 0:u.filter(q=>!!q.avatarUrl).map(q=>({avatarUrl:q.avatarUrl,name:jt(q)}));return ie&&ie.length&&Z.push({label:"Assignees",value:l.createElement(k,{users:ie}),count:ie.length}),d&&d.length&&Z.push({label:"Labels",value:l.createElement(z,{items:d,getKey:o(q=>q.name,"getKey"),getColor:o(q=>qt(q.color,r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:o(q=>q.displayName,"getText")}),count:d.length}),c&&c.length&&Z.push({label:"Project",value:l.createElement(z,{items:c,getKey:o(q=>q.project.title,"getKey"),getColor:o(()=>qt("#ededed",r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:o(q=>q.project.title,"getText")}),count:c.length}),p&&Z.push({label:"Milestone",value:l.createElement(z,{items:[p],getKey:o(q=>q.title,"getKey"),getColor:o(()=>qt("#ededed",r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:o(q=>q.title,"getText")}),count:1}),Z.length?l.createElement("span",{className:"collapsed-label"},Z.map(q=>l.createElement("span",{className:"collapsed-section",key:q.label},l.createElement("span",{className:"collapsed-section-label"},q.label),y?l.createElement("span",{className:"collapsed-section-count"},q.count):q.value))):l.createElement("span",{className:"collapsed-label"},v?"Assignees, Labels, Project, and Milestone":"Reviewers, Assignees, Labels, Project, and Milestone")}o(fr,"CollapsedLabel");function ks(r){const{removeMilestone:a,updatePR:u,pr:d}=(0,l.useContext)(Fe),c=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),p=qt(c,d.isDarkTheme,!1),{canDelete:v,title:y}=r;return l.createElement("div",{className:"labels-list"},l.createElement("div",{className:"section-item label",style:{backgroundColor:p.backgroundColor,color:p.textColor,borderColor:`${p.borderColor}`}},y,v?l.createElement("button",{className:"icon-button",onClick:o(async()=>{await a(),u({milestone:void 0})},"onClick")},de,"\uFE0F"):null))}o(ks,"Milestone");function _s(r){const{removeProject:a,updatePR:u,pr:d}=(0,l.useContext)(Fe),c=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),p=qt(c,d.isDarkTheme,!1),{canDelete:v}=r;return l.createElement("div",{className:"labels-list"},l.createElement("div",{className:"section-item label",style:{backgroundColor:p.backgroundColor,color:p.textColor,borderColor:`${p.borderColor}`}},r.project.title,v?l.createElement("button",{className:"icon-button",onClick:o(async()=>{var y;await a(r),u({projectItems:(y=d.projectItems)==null?void 0:y.filter(w=>w.id!==r.id)})},"onClick")},de,"\uFE0F"):null))}o(_s,"Project");function qo(){const{convertToDraft:r,updatePR:a,pr:u}=(0,l.useContext)(Fe),[d,c]=(0,l.useState)(!1),p=o(async()=>{try{c(!0);const v=await r();a({isDraft:v.isDraft})}finally{c(!1)}},"handleConvertToDraft");return l.createElement("div",{className:"section-placeholder",style:{marginTop:"8px"}},"Still in progress?"," ",l.createElement("a",{onClick:p,style:{pointerEvents:d||u!=null&&u.busy?"none":"auto",opacity:d||u!=null&&u.busy?.5:1,cursor:"pointer"}},"Convert to draft"))}o(qo,"ConvertToDraft");var al=(r=>(r[r.ADD=0]="ADD",r[r.COPY=1]="COPY",r[r.DELETE=2]="DELETE",r[r.MODIFY=3]="MODIFY",r[r.RENAME=4]="RENAME",r[r.TYPE=5]="TYPE",r[r.UNKNOWN=6]="UNKNOWN",r[r.UNMERGED=7]="UNMERGED",r))(al||{});const Bn=class Bn{constructor(a,u,d,c,p,v,y){this.baseCommit=a,this.status=u,this.fileName=d,this.previousFileName=c,this.patch=p,this.diffHunks=v,this.blobUrl=y}};o(Bn,"file_InMemFileChange");let Qo=Bn;const gr=class gr{constructor(a,u,d,c,p){this.baseCommit=a,this.blobUrl=u,this.status=d,this.fileName=c,this.previousFileName=p}};o(gr,"file_SlimFileChange");let Ko=gr;var ul=Object.defineProperty,mr=o((r,a,u)=>a in r?ul(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"diffHunk_defNormalProp"),cl=o((r,a,u)=>mr(r,typeof a!="symbol"?a+"":a,u),"diffHunk_publicField"),Hn=(r=>(r[r.Context=0]="Context",r[r.Add=1]="Add",r[r.Delete=2]="Delete",r[r.Control=3]="Control",r))(Hn||{});const uo=class uo{constructor(a,u,d,c,p,v=!0){this.type=a,this.oldLineNumber=u,this.newLineNumber=d,this.positionInHunk=c,this.raw=p,this.endwithLineBreak=v}get text(){return this.raw.substr(1)}};o(uo,"DiffLine");let eo=uo;function Ms(r){switch(r[0]){case" ":return 0;case"+":return 1;case"-":return 2;default:return 3}}o(Ms,"getDiffChangeType");const Tt=class Tt{constructor(a,u,d,c,p){this.oldLineNumber=a,this.oldLength=u,this.newLineNumber=d,this.newLength=c,this.positionInHunk=p,cl(this,"diffLines",[])}};o(Tt,"DiffHunk");let Gt=Tt;const dl=/^@@ \-(\d+)(,(\d+))?( \+(\d+)(,(\d+)?)?)? @@/;function pr(r){let a=0,u=0;for(;(u=r.indexOf("\r",u))!==-1;)u++,a++;return a}o(pr,"countCarriageReturns");function*Ts(r){let a=0;for(;a!==-1&&a<r.length;){const u=a;a=r.indexOf(`
`,a);let c=(a!==-1?a:r.length)-u;a!==-1&&(a>0&&r[a-1]==="\r"&&c--,a++),yield r.substr(u,c)}}o(Ts,"LineReader");function*Yo(r){const a=Ts(r);let u=a.next(),d,c=-1,p=-1,v=-1;for(;!u.done;){const y=u.value;if(dl.test(y)){d&&(yield d,d=void 0),c===-1&&(c=0);const w=dl.exec(y),k=p=Number(w[1]),z=Number(w[3])||1,Z=v=Number(w[5]),te=Number(w[7])||1;d=new Gt(k,z,Z,te,c),d.diffLines.push(new eo(3,-1,-1,c,y))}else if(d){const w=Ms(y);if(w===3)d.diffLines&&d.diffLines.length&&(d.diffLines[d.diffLines.length-1].endwithLineBreak=!1);else{d.diffLines.push(new eo(w,w!==1?p:-1,w!==2?v:-1,c,y));const k=1+pr(y);switch(w){case 0:p+=k,v+=k;break;case 2:p+=k;break;case 1:v+=k;break}}}c!==-1&&++c,u=a.next()}d&&(yield d)}o(Yo,"parseDiffHunk");function Fn(r){const a=Yo(r);let u=a.next();const d=[];for(;!u.done;){const c=u.value;d.push(c),u=a.next()}return d}o(Fn,"parsePatch");function fl(r){const a=[],u=o(w=>({diffLines:[],newLength:0,oldLength:0,oldLineNumber:w.oldLineNumber,newLineNumber:w.newLineNumber,positionInHunk:0}),"newHunk");let d,c;const p=o((w,k)=>{w.diffLines.push(k),k.type===2?w.oldLength++:k.type===1?w.newLength++:k.type===0&&(w.oldLength++,w.newLength++)},"addLineToHunk"),v=o(w=>w.diffLines.some(k=>k.type!==0),"hunkHasChanges"),y=o(w=>v(w)&&w.diffLines[w.diffLines.length-1].type===0,"hunkHasSandwichedChanges");for(const w of r.diffLines)w.type===0?(d||(d=u(w)),p(d,w),y(d)&&(c||(c=u(w)),p(c,w))):(d||r.oldLineNumber===1&&(w.type===2||w.type===1))&&(d||(d=u(w)),y(d)&&(a.push(d),d=c,c=void 0),(w.type===2||w.type===1)&&p(d,w));return d&&a.push(d),a}o(fl,"splitIntoSmallerHunks");function to(r,a){const u=r.split(/\r?\n/),d=Yo(a);let c=d.next();const p=[],v=[];let y=0,w=!0;for(;!c.done;){const k=c.value;p.push(k);const z=k.oldLineNumber;for(let Z=y+1;Z<z;Z++)v.push(u[Z-1]);y=z+k.oldLength-1;for(let Z=0;Z<k.diffLines.length;Z++){const te=k.diffLines[Z];if(!(te.type===2||te.type===3))if(te.type===1)v.push(te.text);else{const ie=te.text;v.push(ie)}}if(c=d.next(),c.done){for(let Z=k.diffLines.length-1;Z>=0;Z--)if(k.diffLines[Z].type!==2){w=k.diffLines[Z].endwithLineBreak;break}}}if(w)if(y<u.length)for(let k=y+1;k<=u.length;k++)v.push(u[k-1]);else v.push("");return v.join(`
`)}o(to,"getModifiedContentFromDiffHunk");function Go(r){switch(r){case"removed":return GitChangeType.DELETE;case"added":return GitChangeType.ADD;case"renamed":return GitChangeType.RENAME;case"modified":return GitChangeType.MODIFY;default:return GitChangeType.UNKNOWN}}o(Go,"getGitChangeType");async function Ss(r,a){var u;const d=[];for(let c=0;c<r.length;c++){const p=r[c],v=Go(p.status);if(!p.patch&&v!==GitChangeType.RENAME&&v!==GitChangeType.MODIFY&&!(v===GitChangeType.ADD&&p.additions===0)){d.push(new SlimFileChange(a,p.blob_url,v,p.filename,p.previous_filename));continue}const y=p.patch?Fn(p.patch):void 0;d.push(new InMemFileChange(a,v,p.filename,p.previous_filename,(u=p.patch)!=null?u:"",y,p.blob_url))}return d}o(Ss,"parseDiff");function Ls({hunks:r}){return l.createElement("div",{className:"diff"},r.map((a,u)=>l.createElement(Rs,{key:u,hunk:a})))}o(Ls,"Diff");const Ns=Ls,Rs=o(({hunk:r,maxLines:a=8})=>l.createElement(l.Fragment,null,r.diffLines.slice(-a).map(u=>l.createElement("div",{key:Ps(u),className:`diffLine ${Os(u.type)}`},l.createElement(hr,{num:u.oldLineNumber}),l.createElement(hr,{num:u.newLineNumber}),l.createElement("div",{className:"diffTypeSign"},u.raw.substr(0,1)),l.createElement("div",{className:"lineContent"},u.raw.substr(1))))),"Hunk"),Ps=o(r=>`${r.oldLineNumber}->${r.newLineNumber}`,"keyForDiffLine"),hr=o(({num:r})=>l.createElement("div",{className:"lineNumber"},r>0?r:" "),"LineNumber"),Os=o(r=>Hn[r].toLowerCase(),"getDiffChangeClass");function ml(r){return r.event===Ue.Assigned||r.event===Ue.Unassigned}o(ml,"isAssignUnassignEvent");const Ds=o(({events:r,isIssue:a})=>{var u,d,c,p;const v=[];for(let y=0;y<r.length;y++)if(y>0&&ml(r[y])&&ml(v[v.length-1])){const w=v[v.length-1],k=r[y];if(w.actor.login===k.actor.login&&new Date(w.createdAt).getTime()+1e3*60*10>new Date(k.createdAt).getTime()){const z=w.assignees||[],Z=w.unassignees||[],te=(d=(u=k.assignees)==null?void 0:u.filter(q=>!z.some(Ce=>Ce.id===q.id)))!=null?d:[],ie=(p=(c=k.unassignees)==null?void 0:c.filter(q=>!Z.some(Ce=>Ce.id===q.id)))!=null?p:[];w.assignees=[...z,...te],w.unassignees=[...Z,...ie]}else v.push(k)}else v.push(r[y]);return l.createElement(l.Fragment,null,v.map(y=>{switch(y.event){case Ue.Committed:return l.createElement(Is,{key:`commit${y.id}`,...y});case Ue.Reviewed:return l.createElement(Xo,{key:`review${y.id}`,...y});case Ue.Commented:return l.createElement(rt,{key:`comment${y.id}`,...y});case Ue.Merged:return l.createElement(cn,{key:`merged${y.id}`,...y});case Ue.Assigned:return l.createElement(En,{key:`assign${y.id}`,event:y});case Ue.Unassigned:return l.createElement(En,{key:`unassign${y.id}`,event:y});case Ue.HeadRefDeleted:return l.createElement(pt,{key:`head${y.id}`,...y});case Ue.CrossReferenced:return l.createElement(kt,{key:`cross${y.id}`,...y});case Ue.Closed:return l.createElement(_t,{key:`closed${y.id}`,event:y,isIssue:a});case Ue.Reopened:return l.createElement(no,{key:`reopened${y.id}`,event:y,isIssue:a});case Ue.BaseRefChanged:return l.createElement(pl,{key:`baseref${y.id}`,event:y});case Ue.NewCommitsSinceReview:return l.createElement(Hs,{key:`newCommits${y.id}`});case Ue.CopilotStarted:return l.createElement(hl,{key:`copilotStarted${y.id}`,...y});case Ue.CopilotFinished:return l.createElement(ro,{key:`copilotFinished${y.id}`,...y});case Ue.CopilotFinishedError:return l.createElement(gl,{key:`copilotFinishedError${y.id}`,...y});default:throw new Nr(y)}}))},"Timeline"),Ra=null;function As({status:r}){switch(r){case"PENDING":return ge;case"SUCCESS":return oe;case"FAILURE":case"ERROR":return de}return null}o(As,"CommitStateIcon");const Is=o(r=>{var a;const u=(0,l.useContext)(Fe),[d,c]=(0,l.useState)(void 0),p=o((y,w)=>{y.preventDefault(),c(w),u.openCommitChanges(r.sha).finally(()=>{c(void 0)})},"handleCommitClick"),v=((a=u.pr)==null?void 0:a.loadingCommit)===r.sha;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},Ct,lt,l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:r.author})),l.createElement("div",{className:"message-container"},l.createElement("a",{className:"message",onClick:o(y=>p(y,"title"),"onClick"),title:r.htmlUrl},r.message.substr(0,r.message.indexOf(`
`)>-1?r.message.indexOf(`
`):r.message.length)),v&&d==="title"&&l.createElement("span",{className:"commit-spinner-inline"},P))),l.createElement("div",{className:"timeline-detail"},l.createElement("div",{className:"status-section"},l.createElement(As,{status:r.status})),l.createElement("a",{className:"sha",onClick:o(y=>p(y,"sha"),"onClick"),title:r.htmlUrl},v&&d==="sha"&&l.createElement("span",{className:"commit-spinner-before"},P),r.sha.slice(0,7)),l.createElement(Pt,{date:r.committedDate})))},"CommitEventView"),Hs=o(()=>{const{gotoChangesSinceReview:r,pr:a}=(0,l.useContext)(Fe);if(!a.isCurrentlyCheckedOut)return null;const[u,d]=(0,l.useState)(!1),c=o(async()=>{d(!0),await r(),d(!1)},"viewChanges");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},F,lt,l.createElement("span",{style:{fontWeight:"bold"}},"New changes since your last Review")),l.createElement("button",{"aria-live":"polite",title:"View the changes since your last review",onClick:c,disabled:u},"View Changes"))},"NewCommitsSinceReviewEventView"),Fs=o(r=>r.position!==null?`pos:${r.position}`:`ori:${r.originalPosition}`,"positionKey"),Vs=o(r=>_o(r,a=>a.path+":"+Fs(a)),"groupCommentsByPath"),Xo=o(r=>{const a=Vs(r.comments),u=r.state==="PENDING";return l.createElement(zr,{comment:r,allowEmpty:!0},r.comments.length?l.createElement("div",{className:"comment-body review-comment-body"},Object.entries(a).map(([d,c])=>l.createElement(Vn,{key:d,thread:c,event:r}))):null,u?l.createElement(Ye,null):null)},"ReviewEventView");function Vn({thread:r,event:a}){var u;const d=r[0],[c,p]=(0,l.useState)(!d.isResolved),[v,y]=(0,l.useState)(!!d.isResolved),{openDiff:w,toggleResolveComment:k}=(0,l.useContext)(Fe),z=a.reviewThread&&(a.reviewThread.canResolve&&!a.reviewThread.isResolved||a.reviewThread.canUnresolve&&a.reviewThread.isResolved),Z=o(()=>{if(a.reviewThread){const te=!v;p(!te),y(te),k(a.reviewThread.threadId,r,te)}},"toggleResolve");return l.createElement("div",{key:a.id,className:"diff-container"},l.createElement("div",{className:"resolved-container"},l.createElement("div",null,d.position===null?l.createElement("span",null,l.createElement("span",null,d.path),l.createElement("span",{className:"outdatedLabel"},"Outdated")):l.createElement("a",{className:"diffPath",onClick:o(()=>w(d),"onClick")},d.path),!v&&!c?l.createElement("span",{className:"unresolvedLabel"},"Unresolved"):null),l.createElement("button",{className:"secondary",onClick:o(()=>p(!c),"onClick")},c?"Hide":"Show")),c?l.createElement("div",null,l.createElement(Ns,{hunks:(u=d.diffHunks)!=null?u:[]}),r.map(te=>l.createElement(zr,{key:te.id,comment:te})),z?l.createElement("div",{className:"resolve-comment-row"},l.createElement("button",{className:"secondary comment-resolve",onClick:o(()=>Z(),"onClick")},v?"Unresolve Conversation":"Resolve Conversation")):null):null)}o(Vn,"CommentThread");function Ye(){const{requestChanges:r,approve:a,submit:u,deleteReview:d,pr:c}=(0,l.useContext)(Fe),p=c==null?void 0:c.isAuthor,v=(0,l.useRef)(),[y,w]=(0,l.useState)(!1),[k,z]=(0,l.useState)("");async function Z(se,Ee){se.preventDefault();const ve=k;switch(w(!0),Ee){case $e.RequestChanges:await r(ve);break;case $e.Approve:await a(ve);break;default:await u(ve)}w(!1)}o(Z,"submitAction");async function te(se){se.preventDefault(),w(!0),await d(),w(!1)}o(te,"cancelReview");const ie=o(se=>{(se.ctrlKey||se.metaKey)&&se.key==="Enter"&&Z(se,$e.Comment)},"onKeyDown"),q=o(se=>{z(se.target.value)},"onTextareaChange"),Ce=!k.trim()&&!c.hasReviewDraft;return l.createElement("form",null,l.createElement("textarea",{id:"pending-review",ref:v,placeholder:"Leave a review summary comment",onKeyDown:ie,onChange:q,value:k}),l.createElement("div",{className:"form-actions"},l.createElement("button",{id:"cancel-review",className:"secondary",disabled:y||(c==null?void 0:c.busy),onClick:te},"Cancel Review"),p?null:l.createElement("button",{id:"request-changes",className:"secondary",disabled:y||c.busy||Ce,onClick:o(se=>Z(se,$e.RequestChanges),"onClick")},"Request Changes"),p?null:l.createElement("button",{id:"approve",className:"secondary",disabled:y||c.busy,onClick:o(se=>Z(se,$e.Approve),"onClick")},"Approve"),l.createElement("button",{disabled:y||c.busy||Ce,onClick:o(se=>Z(se,$e.Comment),"onClick")},"Submit Review")))}o(Ye,"AddReviewSummaryComment");const rt=o(r=>l.createElement(zr,{headerInEditMode:!0,comment:r}),"CommentEventView"),cn=o(r=>{const{revert:a,pr:u}=(0,l.useContext)(Fe);return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},je,lt,l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:r.user})),l.createElement(ct,{for:r.user}),l.createElement("div",{className:"message"},"merged commit",lt,l.createElement("a",{className:"sha",href:r.commitUrl,title:r.commitUrl},r.sha.substr(0,7)),lt,"into ",r.mergeRef,lt)),u.revertable?l.createElement("div",{className:"timeline-detail"},l.createElement("button",{className:"secondary",disabled:u.busy,onClick:a},"Revert")):null,l.createElement(Pt,{href:r.url,date:r.createdAt}))},"MergedEventView"),pt=o(r=>l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:r.actor})),l.createElement(ct,{for:r.actor}),l.createElement("div",{className:"message"},"deleted the ",r.headRef," branch",lt)),l.createElement(Pt,{date:r.createdAt})),"HeadDeleteEventView"),kt=o(r=>{const{source:a}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:r.actor})),l.createElement(ct,{for:r.actor}),l.createElement("div",{className:"message"},"linked ",l.createElement("a",{href:a.extensionUrl},"#",a.number)," ",a.title,lt,r.willCloseTarget?"which will close this issue":"")),l.createElement(Pt,{date:r.createdAt}))},"CrossReferencedEventView");function dn(r){return r.length===0?l.createElement(l.Fragment,null):r.length===1?r[0]:r.length===2?l.createElement(l.Fragment,null,r[0]," and ",r[1]):l.createElement(l.Fragment,null,r.slice(0,-1).map(a=>l.createElement(l.Fragment,null,a,", "))," and ",r[r.length-1])}o(dn,"timeline_joinWithAnd");const En=o(({event:r})=>{const{actor:a}=r,u=r.assignees||[],d=r.unassignees||[],c=dn(u.map(k=>l.createElement(ct,{key:`${k.id}a`,for:k}))),p=dn(d.map(k=>l.createElement(ct,{key:`${k.id}u`,for:k}))),v=u.length===1&&u[0].login===a.login,y=d.length===1&&d[0].login===a.login;let w;if(u.length>0&&d.length>0){const k=v?l.createElement(l.Fragment,null,"self-assigned this"):l.createElement(l.Fragment,null,"assigned ",c),z=y?l.createElement(l.Fragment,null,"removed their assignment"):l.createElement(l.Fragment,null,"unassigned ",p);w=l.createElement(l.Fragment,null,k," and ",z)}else u.length>0?w=v?l.createElement(l.Fragment,null,"self-assigned this"):l.createElement(l.Fragment,null,"assigned ",c):w=y?l.createElement(l.Fragment,null,"removed their assignment"):l.createElement(l.Fragment,null,"unassigned ",p);return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:a})),l.createElement(ct,{for:a}),l.createElement("div",{className:"message"},w)),l.createElement(Pt,{date:r.createdAt}))},"AssignUnassignEventView"),_t=o(({event:r,isIssue:a})=>{const{actor:u,createdAt:d}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:u})),l.createElement(ct,{for:u}),l.createElement("div",{className:"message"},a?"closed this issue":"closed this pull request")),l.createElement(Pt,{date:d}))},"ClosedEventView"),no=o(({event:r,isIssue:a})=>{const{actor:u,createdAt:d}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:u})),l.createElement(ct,{for:u}),l.createElement("div",{className:"message"},a?"reopened this issue":"reopened this pull request")),l.createElement(Pt,{date:d}))},"ReopenedEventView"),pl=o(({event:r})=>{const{actor:a,createdAt:u,currentRefName:d,previousRefName:c}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(bt,{for:a})),l.createElement(ct,{for:a}),l.createElement("div",{className:"message"},"changed the base branch from ",l.createElement("code",{className:"branch-tag"},c)," to ",l.createElement("code",{className:"branch-tag"},d))),l.createElement(Pt,{date:u}))},"BaseRefChangedEventView"),hl=o(r=>{const{createdAt:a,onBehalfOf:u,sessionLink:d}=r,{openSessionLog:c}=(0,l.useContext)(Fe),p=o(v=>{d&&(d.openToTheSide=v.ctrlKey||v.metaKey,c(d))},"handleSessionLogClick");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},xt,lt,l.createElement("div",{className:"message"},"Copilot started work on behalf of ",l.createElement(ct,{for:u}))),d?l.createElement("div",{className:"timeline-detail"},l.createElement("a",{onClick:p},l.createElement("button",{className:"secondary",title:"View session log (Ctrl/Cmd+Click to open in second editor group)"},"View session"))):null,l.createElement(Pt,{date:a}))},"CopilotStartedEventView"),ro=o(r=>{const{createdAt:a,onBehalfOf:u}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},Ql,lt,l.createElement("div",{className:"message"},"Copilot finished work on behalf of ",l.createElement(ct,{for:u}))),l.createElement(Pt,{date:a}))},"CopilotFinishedEventView"),gl=o(r=>{const{createdAt:a,onBehalfOf:u}=r,{openSessionLog:d}=(0,l.useContext)(Fe),c=o(p=>{r.sessionLink.openToTheSide=p.ctrlKey||p.metaKey,d(r.sessionLink)},"handleSessionLogClick");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"timeline-with-detail"},l.createElement("div",{className:"commit-message"},tt,lt,l.createElement("div",{className:"message"},"Copilot stopped work on behalf of ",l.createElement(ct,{for:u})," due to an error")),l.createElement("div",{className:"commit-message-detail"},l.createElement("a",{onClick:c,title:"View session log (Ctrl/Cmd+Click to open in second editor group)"},"Copilot has encountered an error. See logs for additional details."))),l.createElement(Pt,{date:a}))},"CopilotFinishedErrorEventView"),$s=o(r=>{const[a,u]=l.useState(window.matchMedia(r).matches);return l.useEffect(()=>{const d=window.matchMedia(r),c=o(()=>u(d.matches),"documentChangeHandler");return d.addEventListener("change",c),()=>{d.removeEventListener("change",c)}},[r]),a},"useMediaQuery"),Jo=o(r=>{const a=$s("(max-width: 768px)");return l.createElement(l.Fragment,null,l.createElement("div",{id:"title",className:"title"},l.createElement("div",{className:"details"},l.createElement(On,{...r}))),a?l.createElement(l.Fragment,null,l.createElement(bs,{...r}),l.createElement(ei,{...r})):l.createElement(l.Fragment,null,l.createElement(ei,{...r}),l.createElement(sl,{...r})))},"Overview"),ei=o(r=>l.createElement("div",{id:"main"},l.createElement("div",{id:"description"},l.createElement(zr,{isPRDescription:!0,comment:r})),l.createElement(Ds,{events:r.events,isIssue:r.isIssue}),l.createElement(Yi,{pr:r,isSimple:!1}),l.createElement(Io,{...r})),"Main");function vl(){(0,le.render)(l.createElement(ti,null,r=>l.createElement(Jo,{...r})),document.getElementById("app"))}o(vl,"main");function ti({children:r}){const a=(0,l.useContext)(Fe),[u,d]=(0,l.useState)(a.pr);return(0,l.useEffect)(()=>{a.onchange=d,d(a.pr)},[]),(0,l.useEffect)(()=>{const c=o(()=>{setTimeout(()=>{const v=document.getElementById(Nn);v&&v.value&&document.activeElement===document.body&&v.focus()},100)},"handleWindowFocus");return window.addEventListener("focus",c),()=>window.removeEventListener("focus",c)},[]),window.onscroll=R(()=>{a.postMessage({command:"scroll",args:{scrollPosition:{x:window.scrollX,y:window.scrollY}}})},200),a.postMessage({command:"ready"}),a.postMessage({command:"pr.debug",args:"initialized "+(u?"with PR":"without PR")}),u?r(u):l.createElement("div",{className:"loading-indicator"},"Loading...")}o(ti,"Root"),addEventListener("load",vl)})()})();
