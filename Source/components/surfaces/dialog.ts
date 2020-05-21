// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement } from 'aurelia-framework';

import { Dialog, IDialogProps } from 'office-ui-fabric-react';

import { ContentComponent } from '../../index';

@autoinject
@customElement('dialog')
export class AuDialog extends ContentComponent<React.FunctionComponent<IDialogProps>, IDialogProps> {
    constructor(element: Element) {
        super(element, Dialog.prototype);
    }
}

AuDialog.properties<IDialogProps>({
    className: {} as any,
    dialogContentProps: {} as any,
    styles: {} as any,
    theme: {} as any,
    hidden: {} as any,
    isOpen: {} as any,
    modalProps: {} as any,
    isDarkOverlay: {} as any,
    isBlocking: {} as any,
    containerClassName: {} as any,
    type: {} as any,
    title: {} as any,
    subText: {} as any,
    contentClassName: {} as any,
    topButtonsProps: {} as any,
    ariaLabelledById: {} as any,
    ariaDescribedById: {} as any,
    minWidth: {} as any,
    maxWidth: {} as any,

    onDismiss: () => { },
    onDismissed: () => { },
    onLayerDidMount: () => { },
    onLayerMounted: {} as any
});