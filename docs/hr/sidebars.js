/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  useCasesSidebar: [{ type: 'autogenerated', dirName: 'use_cases' }],

  tutorialSidebar: [
    // FAQ
    {
      type: 'doc',
      label: 'Welcome',
      id: 'docs/intro',
    },
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      collapsible: false,
      items: [{ type: 'autogenerated', dirName: 'docs/get_started' }],
      link: {
        type: 'generated-index',
        description: 'Get started with SuperDuperDB',
      },
    },
    {
      type: 'doc',
      label: 'FAQ',
      id: 'docs/faq',
    },
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/setup',
        },
      ],
      link: {
        type: 'generated-index',
        description: 'Detailed setup',
      },
    },
    {
      type: 'category',
      label: 'Data integrations',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/data_integrations',
        },
      ],
    },
    {
      type: 'category',
      label: 'AI integrations',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/ai_integrations',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/fundamentals',
        },
      ],
    },
    {
      type: 'category',
      label: 'Walk through',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/walkthrough',
        },
      ],
    },
    {
      type: 'category',
      label: 'Production features',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/production',
        },
      ],
    },
    {
      type: 'category',
      label: 'Use cases',
      collapsed: true,
      collapsible: true,
      items: [{ type: 'autogenerated', dirName: 'use_cases' }],
      link: {
        type: 'generated-index',
        description:
          'Common and useful use-cases implemented in SuperDuperDB with a walkthrough',
        // slug: 'use-cases',
      },
    },

    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'link',
          label: 'API Reference', // The link label
          href: 'https://docs.superduperdb.com/apidocs/source/superduperdb.html', // The external URL
        },
        {
          type: 'link',
          label: 'Change log', // The link label
          href: 'https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/CHANGELOG.md', // The external URL
        },
        {
          type: 'link',
          label: 'Home', // The link label
          href: '/', // The internal path
        },
      ],
    },
  ],
};

module.exports = sidebars;
