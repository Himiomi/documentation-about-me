import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    head:<>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="description" content="Nextra: the next docs builder" />
        <meta property="og:title" content="Nextra: the next docs builder" />
    </>,
    logo: <span>Florian morin</span>,
    project: {
    link: 'https://github.com/Hikachhu/documentation-about-me',
    },
    docsRepositoryBase: 'https://github.com/Hikachhu/documentation-about-me',
    footer: {
    text: 'Page de présentation de Florian morin ;)',
    }
}

export default config
