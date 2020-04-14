// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { ICardSectionProps, CardSection } from '@uifabric/react-cards';

import { autoinject, customElement } from 'aurelia-framework';

import { ContentComponent } from '../../index';

@autoinject
@customElement('card-section')
export class AuCardSection extends ContentComponent<React.FunctionComponent<ICardSectionProps>, ICardSectionProps> {
    constructor(element: Element) {
        super(element, CardSection.prototype);
    }
}

AuCardSection.properties<ICardSectionProps>({
    fill: {} as any
});
